/**
 * All site treks → the files the map view loads:
 *
 *   public/index.json            card and filter data for every trek
 *   public/routes-lite.geojson   every route, simplified to about 200 m
 *   public/routes/<id>.geojson   one route, simplified to about 10 m
 *
 *   npm run build:index              published treks only
 *   npm run build:index -- --drafts  drafts too, for local preview
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
import simplify from '@turf/simplify';
import type { Feature, FeatureCollection, LineString, MultiLineString } from 'geojson';
import { readRoute, readSiteTreks } from '../src/data/treks';
import type { RouteLiteProperties, TrekIndex, TrekIndexEntry } from '../src/data/types';
import { geometryOf, linesOf, roundLine } from '../src/lib/geo';
import { establishmentScore } from '../src/lib/sort';
import { finish, info, parseArgs, warn } from './lib/report';

/** Simplification tolerances in degrees: about 200 m and about 10 m. */
const LITE_TOLERANCE = 0.002;
const DETAIL_TOLERANCE = 0.0001;
/** Size budgets from the spec, in gzipped bytes. */
const INDEX_BUDGET = 150_000;
const ROUTES_LITE_BUDGET = 1_000_000;
const BUDGET_TREKS = 150;

const PUBLIC_DIR = join(process.cwd(), 'public');

function simplified(geometry: LineString | MultiLineString, tolerance: number, decimals: number) {
  const result = simplify(geometry, { tolerance, highQuality: false, mutate: false });
  const lines = linesOf(result)
    .map((line) => roundLine(line, decimals))
    .filter((line) => line.length >= 2);
  return geometryOf(lines);
}

function write(file: string, data: unknown): number {
  const json = JSON.stringify(data);
  writeFileSync(join(PUBLIC_DIR, file), json);
  return gzipSync(json).length;
}

const { flags } = parseArgs();
if (flags.has('drafts')) process.env.KVALI_INCLUDE_DRAFTS = '1';

const index: TrekIndex = { treks: [] };
const lite: FeatureCollection<LineString | MultiLineString, RouteLiteProperties> = {
  type: 'FeatureCollection',
  features: [],
};

rmSync(join(PUBLIC_DIR, 'routes'), { recursive: true, force: true });
mkdirSync(join(PUBLIC_DIR, 'routes'), { recursive: true });

for (const { trek, stats, photos, folder } of readSiteTreks()) {
  const route = readRoute(folder)!;

  const entry: TrekIndexEntry = {
    id: trek.id,
    name: trek.name,
    countries: trek.countries,
    region: trek.region,
    one_liner: trek.one_liner,
    route_type: trek.route.type,
    start: trek.route.start,
    end: trek.route.end,
    distance_km: stats.distance_km,
    ascent_m: stats.ascent_m,
    days: [trek.typical_days.min, trek.typical_days.max],
    best_months: [...trek.when.best_months].sort((a, b) => a - b),
    sleeping: trek.sleeping.type,
    difficulty: trek.difficulty.level,
    permit: trek.flags.permit,
    waymarked: trek.flags.waymarked,
    water_scarce: trek.flags.water_scarce,
    exposed_or_via_ferrata: trek.flags.exposed_or_via_ferrata,
    establishment: establishmentScore(trek.establishment_signals),
    bbox: stats.bbox,
    midpoint: stats.midpoint,
    ...(photos[0] ? { thumb: Object.values(photos[0].sizes)[0] } : {}),
    last_verified: trek.last_verified,
    status: trek.status,
  };
  index.treks.push(entry);

  const properties: RouteLiteProperties = { id: trek.id, sleeping: trek.sleeping.type };
  lite.features.push({ type: 'Feature', properties, geometry: simplified(route.geometry, LITE_TOLERANCE, 4) });

  const detail: Feature<LineString | MultiLineString, RouteLiteProperties> = {
    type: 'Feature',
    properties,
    geometry: simplified(route.geometry, DETAIL_TOLERANCE, 5),
  };
  write(`routes/${trek.id}.geojson`, detail);
}

const count = index.treks.length;
const indexSize = write('index.json', index);
const liteSize = write('routes-lite.geojson', lite);
const kb = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB gzipped`;
info(`${count} trek(s): index.json ${kb(indexSize)}, routes-lite.geojson ${kb(liteSize)}`);

// The budgets are set for 150 treks, so compare the size this would reach at that count.
if (count > 0) {
  const scale = Math.max(1, BUDGET_TREKS / count);
  if (indexSize * scale > INDEX_BUDGET) {
    warn('public/index.json', `On track for ${kb(indexSize * scale)} at ${BUDGET_TREKS} treks; the budget is ${kb(INDEX_BUDGET)}`);
  }
  if (liteSize * scale > ROUTES_LITE_BUDGET) {
    warn('public/routes-lite.geojson', `On track for ${kb(liteSize * scale)} at ${BUDGET_TREKS} treks; the budget is ${kb(ROUTES_LITE_BUDGET)}`);
  }
}
finish('build-index');
