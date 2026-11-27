/** Shapes of the generated files and of the built site data. */
import type { Feature, LineString, MultiLineString } from 'geojson';
import type { Permit, RouteType, SleepingType, Waymarked } from '../schema/values';

/** [west, south, east, north] in degrees. */
export type BBox = [number, number, number, number];
/** [longitude, latitude] in degrees. */
export type LonLat = [number, number];

export interface RouteGap {
  /** End of the line before the gap. */
  from: LonLat;
  /** Start of the line after the gap. */
  to: LonLat;
  length_m: number;
}

export interface RouteProperties {
  id: string;
  source: 'osm' | 'gpx';
  osm_relation_id?: number;
  gpx_source?: string;
  /** Date the geometry was fetched, YYYY-MM-DD. */
  fetched: string;
  /** How many relations (the route and its stages) and ways the line was built from. */
  relations?: number;
  ways?: number;
  /** Members left out because of their role, counted per role. */
  dropped?: Record<string, number>;
  /** Breaks between consecutive lines of the route. */
  gaps: RouteGap[];
}

/** `data/treks/<id>/route.geojson` */
export type RouteFeature = Feature<LineString | MultiLineString, RouteProperties>;

/** `data/treks/<id>/stats.json` */
export interface TrekStats {
  distance_km: number;
  ascent_m: number;
  descent_m: number;
  lowest_m: number;
  highest_m: number;
  bbox: BBox;
  /** The point at 50% of the route length. */
  midpoint: LonLat;
  /** Hash of the route geometry the stats were computed from. */
  route_hash: string;
}

/** One entry of `data/treks/<id>/photos.json` */
export interface PhotoMeta {
  /** Commons file title, e.g. "File:Name.jpg". */
  title: string;
  /** Commons file page, linked under the photo. */
  page_url: string;
  /** Author and licence as reported by Commons. */
  author: string;
  license: string;
  license_url?: string;
  /** What the photo shows, from trek.yaml. */
  shows: string;
  /** Pixel size of the largest generated file. */
  width: number;
  height: number;
  /** Generated files by width, as site paths: { "480": "/photos/<id>/<hash>-480.webp", ... } */
  sizes: Record<string, string>;
}

/** One trek in `public/index.json`: everything the list card and the filters need. */
export interface TrekIndexEntry {
  id: string;
  name: string;
  countries: string[];
  region: string;
  one_liner: string;
  route_type: RouteType;
  start: string;
  end: string;
  distance_km: number;
  ascent_m: number;
  days: [number, number];
  best_months: number[];
  sleeping: SleepingType;
  difficulty: number;
  permit: Permit;
  waymarked: Waymarked;
  water_scarce: boolean;
  exposed_or_via_ferrata: boolean;
  /** Sort key within a list: higher is better established. */
  establishment: number;
  bbox: BBox;
  midpoint: LonLat;
  /** Smallest size of the first photo, for the card. */
  thumb?: string;
  last_verified: string;
  status: 'draft' | 'published';
}

export interface TrekIndex {
  treks: TrekIndexEntry[];
}

/** Properties of each feature in `public/routes-lite.geojson`. */
export interface RouteLiteProperties {
  id: string;
  sleeping: SleepingType;
}
