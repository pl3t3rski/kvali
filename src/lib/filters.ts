/**
 * Filter logic for the map and the list. No dependencies; runs in the browser.
 * Map and list both call `visibleTreks`, which is what keeps them in sync.
 */
import type { BBox, TrekIndexEntry } from '../data/types';
import type { SleepingType } from '../schema/values';
import { bboxIntersects } from './geo';
import { byEstablishment } from './sort';

/** Ends of the days slider. The top end means "20 or more". */
export const DAYS_MIN = 3;
export const DAYS_MAX = 20;

export interface Filters {
  /** 1–12; undefined means any month. */
  month?: number;
  /** [from, to] days, inclusive; undefined means any length. */
  days?: [number, number];
  /** Selected sleeping types; empty means any. */
  sleeping: SleepingType[];
  /** Selected difficulty levels 1–4; empty means any. */
  difficulty: number[];
  /** Only treks that need no permit and no registration. */
  noPermit: boolean;
  /** Only treks that are waymarked all the way. */
  waymarked: boolean;
}

export const NO_FILTERS: Filters = { sleeping: [], difficulty: [], noPermit: false, waymarked: false };

export function isFiltering(filters: Filters): boolean {
  return (
    filters.month !== undefined ||
    filters.days !== undefined ||
    filters.sleeping.length > 0 ||
    filters.difficulty.length > 0 ||
    filters.noPermit ||
    filters.waymarked
  );
}

export function matchesFilters(trek: TrekIndexEntry, filters: Filters): boolean {
  if (filters.month !== undefined && !trek.best_months.includes(filters.month)) return false;

  if (filters.days) {
    const [from, to] = filters.days;
    const upper = to >= DAYS_MAX ? Infinity : to;
    if (trek.days[0] > upper || trek.days[1] < from) return false;
  }

  // A trek with mixed sleeping matches every sleeping choice.
  if (filters.sleeping.length > 0 && trek.sleeping !== 'mixed' && !filters.sleeping.includes(trek.sleeping)) {
    return false;
  }

  if (filters.difficulty.length > 0 && !filters.difficulty.includes(trek.difficulty)) return false;
  if (filters.noPermit && trek.permit !== 'none') return false;
  if (filters.waymarked && trek.waymarked !== 'yes') return false;
  return true;
}

/**
 * The treks to show: those that pass the filters and, if a viewport is given,
 * whose bounding box touches it. Best established first.
 */
export function visibleTreks(treks: TrekIndexEntry[], filters: Filters, viewport?: BBox): TrekIndexEntry[] {
  return treks
    .filter((trek) => matchesFilters(trek, filters))
    .filter((trek) => !viewport || bboxIntersects(trek.bbox, viewport))
    .sort(byEstablishment);
}
