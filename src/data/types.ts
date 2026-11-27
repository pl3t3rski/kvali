/** Shapes of the generated files and of the built site data. */
import type { Feature, LineString, MultiLineString } from 'geojson';
import type { PhotoSource } from '../lib/photo-source';
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
  /** One relation, or the stage relations the line was joined from. */
  osm_relation_id?: number | number[];
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
  source: PhotoSource;
  /** Commons file title ("File:Name.jpg") or "Unsplash <id>". Identifies the photo. */
  title: string;
  /** The photo's own page, linked under the photo. */
  page_url: string;
  /** Author and licence: as reported by Commons, or as written in trek.yaml for Unsplash. */
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

/** The photo on a list card, with what is needed to credit it. */
export interface CardPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  author: string;
  source: PhotoSource;
  page_url: string;
}

/**
 * One trek in `public/index.json`: everything the list card and the filters need.
 * Facts the research did not find are left out; only a draft can lack them.
 */
export interface TrekIndexEntry {
  id: string;
  name: string;
  countries: string[];
  region: string;
  one_liner: string;
  route_type?: RouteType;
  start: string;
  end?: string;
  distance_km: number;
  ascent_m: number;
  days?: [number, number];
  /** Empty when not known. */
  best_months: number[];
  sleeping?: SleepingType;
  difficulty?: number;
  permit?: Permit;
  waymarked?: Waymarked;
  water_scarce?: boolean;
  exposed_or_via_ferrata?: boolean;
  /** Sort key within a list: higher is better established. */
  establishment: number;
  bbox: BBox;
  midpoint: LonLat;
  photo?: CardPhoto;
  last_verified: string;
  status: 'draft' | 'published';
}

export interface TrekIndex {
  treks: TrekIndexEntry[];
}

/** Properties of each feature in `public/routes-lite.geojson`. */
export interface RouteLiteProperties {
  id: string;
  /** "unknown" when the research did not find where you sleep. */
  sleeping: SleepingType | 'unknown';
}
