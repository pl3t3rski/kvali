/** Settings of the map view. Colours are read from the design tokens, never written here. */
import type { BBox } from '../data/types';
import type { SleepingType } from '../schema/values';

/** The design tokens the map draws with, read from the page so the map follows the theme. */
export interface MapColours {
  paper: string;
  paperDeep: string;
  ink: string;
  inkQuiet: string;
  pen: string;
  butter: string;
  dusk: string;
  moss: string;
  larch: string;
  glacier: string;
}

export function readColours(): MapColours {
  const style = getComputedStyle(document.documentElement);
  const token = (name: string) => style.getPropertyValue(name).trim();
  return {
    paper: token('--paper'),
    paperDeep: token('--paper-deep'),
    ink: token('--ink'),
    inkQuiet: token('--ink-quiet'),
    pen: token('--pen'),
    butter: token('--butter'),
    dusk: token('--dusk'),
    moss: token('--moss'),
    larch: token('--larch'),
    glacier: token('--glacier'),
  };
}

/**
 * Route colour by where you sleep, as the design system sets it: larch for huts, dusk for
 * guesthouses, moss for camping. The design names no colour for mixed sleeping; it gets the
 * plain pen colour, and a trek whose sleeping is not known yet gets the quiet ink, faded.
 * Colour is never the only signal: the list and the card say the same in words.
 */
export function sleepingColours(c: MapColours): Record<SleepingType | 'unknown', string> {
  return { huts: c.larch, guesthouses: c.dusk, camping: c.moss, mixed: c.ink, unknown: c.inkQuiet };
}

/**
 * The quiet ink of an unknown trek is close to dusk, so an unknown trek is also drawn faded.
 * Only drafts can be unknown: a published trek always says where you sleep.
 */
export const UNKNOWN_OPACITY = 0.45;

/** OpenFreeMap's plain style. Its colours are replaced with the design tokens once it has loaded. */
export const BASE_STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';

/** AWS Terrain Tiles: the contour lines are drawn from these. */
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
