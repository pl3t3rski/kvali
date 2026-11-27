/** Settings of the map view. Everything visual here is a placeholder until the design arrives. */
import type { BBox } from '../data/types';
import type { SleepingType } from '../schema/values';

/**
 * PLACEHOLDER COLOURS. Route colour by where you sleep; replace with the design's palette.
 * Colour is never the only signal: the list, the card and the filter show the label next to it.
 */
export const PLACEHOLDER_SLEEPING_COLOURS: Record<SleepingType, string> = {
  huts: '#d95f02',
  guesthouses: '#1b9e77',
  camping: '#7570b3',
  mixed: '#555555',
};

/** PLACEHOLDER: colour of the hovered or selected route. */
export const PLACEHOLDER_HIGHLIGHT_COLOUR = '#111111';

/** Muted OpenFreeMap base style. */
export const BASE_STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';

/** AWS Terrain Tiles, used for the hillshade. */
export const DEM_TILES_URL = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';
export const DEM_ATTRIBUTION =
  '<a href="https://github.com/tilezen/joerd/blob/master/docs/attribution.md" target="_blank" rel="noopener">Terrain: Tilezen / AWS</a>';
export const ROUTES_ATTRIBUTION =
  'Routes © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>';

/** Below this zoom a trek is a dot at its midpoint; from it on, its route line. */
export const LINE_MIN_ZOOM = 6;

/** First view when the URL has none: Europe and the Caucasus. */
export const DEFAULT_BOUNDS: BBox = [-11, 35, 50, 71];

/** Space kept around a trek when the map zooms to it, in pixels. */
export const FIT_PADDING = 48;
/** Closest zoom when the map zooms to a trek, so a very short route does not fill the screen with one valley. */
export const FIT_MAX_ZOOM = 12;
