/** Fetching a hiking route relation from OpenStreetMap and picking out its main-route ways. */
import type { LonLat } from '../../src/data/types';
import { fetchJson, fetchRetry } from './http';

interface OsmMember {
  type: 'node' | 'way' | 'relation';
  ref: number;
  role: string;
}

interface OsmElement {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lon?: number;
  nodes?: number[];
  members?: OsmMember[];
  tags?: Record<string, string>;
}

export interface OsmData {
  nodes: Map<number, LonLat>;
  ways: Map<number, number[]>;
  relations: Map<number, OsmMember[]>;
}

/**
 * Member roles that are not part of the main route. The spec names alternative,
 * excursion and approach; "connection" (a link to another route) and two common
 * misspellings of "alternative" are side routes too.
 */
export const SIDE_ROLES = new Set(['alternative', 'alternate', 'variant', 'excursion', 'approach', 'connection']);

const OSM_API = process.env.OSM_API_URL ?? 'https://api.openstreetmap.org/api/0.6';
const OVERPASS_API = process.env.OVERPASS_URL ?? 'https://overpass-api.de/api/interpreter';

/** Above this many relations, the route is fetched from Overpass in one request instead. */
const MAX_API_RELATIONS = 90;

function emptyData(): OsmData {
  return { nodes: new Map(), ways: new Map(), relations: new Map() };
}

function addElements(data: OsmData, elements: OsmElement[]): void {
  for (const element of elements) {
    if (element.type === 'node' && element.lat !== undefined && element.lon !== undefined) {
      data.nodes.set(element.id, [element.lon, element.lat]);
    } else if (element.type === 'way' && element.nodes) {
      data.ways.set(element.id, element.nodes);
    } else if (element.type === 'relation' && element.members) {
      data.relations.set(element.id, element.members);
    }
  }
}

const isSide = (member: OsmMember) => SIDE_ROLES.has(member.role.trim().toLowerCase());

/**
 * The OSM API returns one relation with its ways and nodes per call, so a
 * superroute (a relation of stage relations) takes one call per stage.
 */
async function fetchFromOsmApi(relationId: number): Promise<OsmData> {
  const data = emptyData();
  const fetched = new Set<number>();
  const queue = [relationId];
  while (queue.length > 0) {
    const id = queue.shift()!;
    if (fetched.has(id)) continue;
    fetched.add(id);
    const body = await fetchJson<{ elements: OsmElement[] }>(`${OSM_API}/relation/${id}/full.json`);
    addElements(data, body.elements);
    const stages = (data.relations.get(id) ?? []).filter((member) => member.type === 'relation' && !isSide(member));
    // The longest trails have hundreds of stage relations. That is too many calls to make of
    // the OSM API, so such a route is handed to Overpass, which answers in one request.
    if (fetched.size + queue.length + stages.length > MAX_API_RELATIONS) {
      throw new Error(`more than ${MAX_API_RELATIONS} stage relations`);
    }
    // A short pause between calls, to go easy on the API.
    await new Promise((done) => setTimeout(done, 250));
    for (const member of stages) {
      if (!fetched.has(member.ref)) queue.push(member.ref);
    }
  }
  return data;
}

/** Overpass returns the relation with everything below it in one call. */
async function fetchFromOverpass(relationId: number): Promise<OsmData> {
  const query = `[out:json][timeout:120][maxsize:1073741824];relation(${relationId});(._;>>;);out body;`;
  const response = await fetchRetry(OVERPASS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: `data=${encodeURIComponent(query)}`,
    timeoutMs: 140_000,
    // Overpass is asked once: a long trail that it cannot answer stays without a route for now.
    retries: 0,
  });
  const body = (await response.json()) as { elements: OsmElement[] };
  const data = emptyData();
  addElements(data, body.elements);
  if (!data.relations.has(relationId)) throw new Error(`Overpass returned no relation ${relationId}`);
  return data;
}

/** Fetch a relation and everything below it: the OSM API first, Overpass if that fails. */
export async function fetchRelation(relationId: number): Promise<OsmData> {
  try {
    return await fetchFromOsmApi(relationId);
  } catch (error) {
    console.warn(`  OSM API failed (${(error as Error).message}); trying Overpass`);
    return fetchFromOverpass(relationId);
  }
}

export interface MainWays {
  /** Each main-route way as a list of node ids, in route order. */
  ways: number[][];
  /** Number of relations walked: the route itself plus its stages. */
  relations: number;
  /** Members left out, counted per role. */
  dropped: Record<string, number>;
}

/** Walk the relation tree in member order and collect the ways of the main route. */
export function collectMainWays(relationId: number, data: OsmData): MainWays {
  const result: MainWays = { ways: [], relations: 0, dropped: {} };
  const seen = new Set<number>();

  const walk = (id: number) => {
    if (seen.has(id)) return;
    seen.add(id);
    const members = data.relations.get(id);
    if (!members) return;
    result.relations++;
    for (const member of members) {
      if (member.type === 'node') continue;
      if (isSide(member)) {
        const role = member.role.trim().toLowerCase();
        result.dropped[role] = (result.dropped[role] ?? 0) + 1;
        continue;
      }
      if (member.type === 'relation') {
        walk(member.ref);
      } else {
        const nodes = data.ways.get(member.ref);
        if (nodes) result.ways.push(nodes);
      }
    }
  };
  walk(relationId);
  return result;
}

/** Replace node ids by coordinates. Nodes that are missing from the data are skipped. */
export function toCoordinates(line: number[], data: OsmData): LonLat[] {
  const coordinates: LonLat[] = [];
  for (const nodeId of line) {
    const point = data.nodes.get(nodeId);
    if (point) coordinates.push(point);
  }
  return coordinates;
}
