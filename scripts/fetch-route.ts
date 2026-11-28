/**
 * OSM relation (or GPX file) → data/treks/<id>/route.geojson
 *
 *   npm run fetch:route                 fetch routes that are missing or whose source changed
 *   npm run fetch:route -- <id> ...     only these treks
 *   npm run fetch:route -- --force      fetch again even if route.geojson exists
 */
import { writeFileSync } from 'node:fs';
import { readAllTrekFolders, readRoute, type TrekFolder } from '../src/data/treks';
import type { LonLat, RouteFeature, RouteProperties } from '../src/data/types';
import { distanceM, geometryOf, lineLengthM, roundLine } from '../src/lib/geo';
import { parseGpx } from './lib/gpx';
import { fetchRetry } from './lib/http';
import { collectMainWays, fetchRelation, toCoordinates } from './lib/osm';
import { error, finish, info, parseArgs, warn } from './lib/report';
import { orientLines, pathBetween, stitchWays } from './lib/stitch';

/** Gaps longer than this are reported for review. */
const GAP_WARNING_M = 200;

async function fromOsm(relationIds: number | number[]): Promise<{ lines: LonLat[][]; meta: Partial<RouteProperties> }> {
  const ids = Array.isArray(relationIds) ? relationIds : [relationIds];
  // Several stage relations are walked one after the other and joined like one route.
  const nodes = new Map<number, LonLat>();
  const ways: number[][] = [];
  const dropped: Record<string, number> = {};
  const seen = new Set<string>();
  const later = new Set<string>();
  let relations = 0;
  for (const id of ids) {
    const data = await fetchRelation(id);
    const main = collectMainWays(id, data);
    if (main.ways.length === 0) throw new Error(`Relation ${id} has no main-route ways`);
    for (const [nodeId, point] of data.nodes) nodes.set(nodeId, point);
    // Two relations may share a stretch. A way that an earlier relation already gave is not added again.
    const fresh = main.ways.filter((way) => !seen.has(way.join(',')));
    for (const way of main.ways) later.add(way.join(','));
    for (const key of later) seen.add(key);
    later.clear();
    ways.push(...fresh);
    relations += main.relations;
    for (const [role, count] of Object.entries(main.dropped)) dropped[role] = (dropped[role] ?? 0) + count;
  }
  const all = { nodes, ways: new Map<number, number[]>(), relations: new Map() };
  const lines = stitchWays(ways).map((line) => toCoordinates(line, all));
  return {
    lines,
    meta: {
      source: 'osm',
      osm_relation_id: relationIds,
      relations,
      ways: ways.length,
      ...(Object.keys(dropped).length > 0 ? { dropped } : {}),
    },
  };
}

async function fromGpx(url: string): Promise<{ lines: LonLat[][]; meta: Partial<RouteProperties> }> {
  const response = await fetchRetry(url);
  return { lines: parseGpx(await response.text()), meta: { source: 'gpx', gpx_source: url } };
}

function sourceChanged(folder: TrekFolder): boolean {
  const existing = readRoute(folder);
  if (!existing) return true;
  const { route } = folder.trek!;
  if (route.osm_relation_id !== undefined) {
    return (
      existing.properties.source !== 'osm' ||
      JSON.stringify(existing.properties.osm_relation_id) !== JSON.stringify(route.osm_relation_id) ||
      JSON.stringify(existing.properties.osm_section) !== JSON.stringify(route.osm_section)
    );
  }
  return existing.properties.source !== 'gpx' || existing.properties.gpx_source !== route.gpx_source;
}

async function fetchRoute(folder: TrekFolder): Promise<void> {
  const { route } = folder.trek!;
  const fetched =
    route.osm_relation_id !== undefined ? await fromOsm(route.osm_relation_id) : await fromGpx(route.gpx_source!);

  let { lines, gaps } = orientLines(fetched.lines.map((line) => roundLine(line, 6)));
  if (route.osm_section && route.osm_relation_id !== undefined) {
    // [latitude, longitude] in trek.yaml; [longitude, latitude] in the geometry.
    const stops = [route.osm_section.from, ...(route.osm_section.via ?? []), route.osm_section.to].map(([lat, lon]) => [lon, lat] as LonLat);
    const walked: LonLat[][] = [];
    for (let i = 1; i < stops.length; i++) {
      const leg = pathBetween(lines, stops[i - 1], stops[i]);
      if (leg.length === 0) throw new Error('Two places of route.osm_section are not connected by the mapped ways');
      // A leg carries on where the one before it stopped, so the two join into one line.
      const previous = walked[walked.length - 1];
      const [head, ...rest] = leg;
      if (previous && previous[previous.length - 1][0] === head[0][0] && previous[previous.length - 1][1] === head[0][1]) {
        previous.push(...head.slice(1));
      } else {
        walked.push(head);
      }
      walked.push(...rest);
    }
    // The walk already runs from the first place to the second; only the gaps are measured.
    lines = walked;
    gaps = walked.slice(1).map((line, index) => {
      const from = walked[index][walked[index].length - 1];
      return { from, to: line[0], length_m: Math.round(distanceM(from, line[0])) };
    });
    fetched.meta.osm_section = route.osm_section;
  }
  if (lines.length === 0) throw new Error('No usable line in the route source');

  const feature: RouteFeature = {
    type: 'Feature',
    properties: {
      id: folder.id,
      ...fetched.meta,
      fetched: new Date().toISOString().slice(0, 10),
      gaps,
    } as RouteProperties,
    geometry: geometryOf(lines),
  };
  writeFileSync(folder.routePath, `${JSON.stringify(feature)}\n`);

  const km = lines.reduce((sum, line) => sum + lineLengthM(line), 0) / 1000;
  info(`  ${km.toFixed(1)} km in ${lines.length} line(s), from ${fetched.meta.ways ?? 'a GPX file with'} way(s)`);
  for (const [role, count] of Object.entries(fetched.meta.dropped ?? {})) {
    info(`  left out ${count} member(s) with role "${role}"`);
  }
  for (const gap of gaps.filter((gap) => gap.length_m > GAP_WARNING_M)) {
    warn(
      folder.routePath,
      `Gap of ${gap.length_m} m between ${gap.from[1]},${gap.from[0]} and ${gap.to[1]},${gap.to[0]} (lat,lon)`,
    );
  }
}

const { ids, flags } = parseArgs();
for (const folder of readAllTrekFolders(ids)) {
  if (!folder.trek) {
    warn(folder.yamlPath, 'Skipped: trek.yaml does not pass validation');
    continue;
  }
  const { route } = folder.trek;
  if (route.osm_relation_id === undefined && route.gpx_source === undefined) {
    info(`${folder.id}: no route source yet`);
    continue;
  }
  if (!flags.has('force') && !sourceChanged(folder)) continue;
  info(`${folder.id}: fetching route`);
  try {
    await fetchRoute(folder);
  } catch (cause) {
    // A draft may still be waiting for a usable route source; a published trek may not.
    const report = folder.trek.status === 'published' ? error : warn;
    report(folder.yamlPath, `Could not fetch the route: ${(cause as Error).message}`);
  }
}
finish('fetch-route');
