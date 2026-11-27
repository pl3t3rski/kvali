/**
 * route.geojson → data/treks/<id>/stats.json (distance, ascent, bounding box, midpoint)
 *
 *   npm run compute:stats               compute stats that are missing or out of date
 *   npm run compute:stats -- <id> ...   only these treks
 *   npm run compute:stats -- --force    compute again even if stats.json is up to date
 */
import { writeFileSync } from 'node:fs';
import length from '@turf/length';
import { readAllTrekFolders, readRoute, readStats } from '../src/data/treks';
import type { BBox, LonLat, RouteFeature, TrekStats } from '../src/data/types';
import { gainLoss, smooth } from '../src/lib/ascent';
import { bboxOf, linesOf, pointAtFraction, resample } from '../src/lib/geo';
import { Dem } from './lib/dem';
import { routeHash } from './lib/hash';
import { error, finish, info, parseArgs } from './lib/report';

/** Elevation is read every 30 m along the line. */
const SAMPLE_STEP_M = 30;
/** Moving average over 5 samples (about 150 m) before counting climbs. */
const SMOOTH_WINDOW = 5;
/** Climbs and drops smaller than 5 m are treated as noise. */
const CLIMB_THRESHOLD_M = 5;

const round = (value: number, decimals: number) => Math.round(value * 10 ** decimals) / 10 ** decimals;

async function computeStats(route: RouteFeature, dem: Dem): Promise<TrekStats> {
  const lines = linesOf(route.geometry);
  const sampled = lines.map((line) => resample(line, SAMPLE_STEP_M));
  await dem.load(sampled.flat());

  let ascent = 0;
  let descent = 0;
  let lowest = Infinity;
  let highest = -Infinity;
  // Each line is measured on its own, so the height difference across a gap is not counted.
  for (const points of sampled) {
    const profile = smooth(points.map((point) => dem.elevation(point)), SMOOTH_WINDOW);
    const totals = gainLoss(profile, CLIMB_THRESHOLD_M);
    ascent += totals.ascent;
    descent += totals.descent;
    for (const elevation of profile) {
      if (elevation < lowest) lowest = elevation;
      if (elevation > highest) highest = elevation;
    }
  }

  return {
    distance_km: round(length(route, { units: 'kilometers' }), 1),
    ascent_m: Math.round(ascent),
    descent_m: Math.round(descent),
    lowest_m: Math.round(lowest),
    highest_m: Math.round(highest),
    bbox: bboxOf(lines).map((value) => round(value, 5)) as BBox,
    midpoint: pointAtFraction(lines, 0.5).map((value) => round(value, 5)) as LonLat,
    route_hash: routeHash(route),
  };
}

const { ids, flags } = parseArgs();
for (const folder of readAllTrekFolders(ids)) {
  const route = readRoute(folder);
  if (!route) continue;
  if (!flags.has('force') && readStats(folder)?.route_hash === routeHash(route)) continue;
  info(`${folder.id}: computing stats`);
  try {
    // A fresh Dem per trek keeps memory flat; tiles are still shared through the disk cache.
    const stats = await computeStats(route, new Dem());
    writeFileSync(folder.statsPath, `${JSON.stringify(stats, null, 2)}\n`);
    info(`  ${stats.distance_km} km, +${stats.ascent_m} m / -${stats.descent_m} m, ${stats.lowest_m}–${stats.highest_m} m`);
  } catch (cause) {
    error(folder.routePath, `Could not compute stats: ${(cause as Error).message}`);
  }
}
finish('compute-stats');
