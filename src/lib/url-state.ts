/**
 * The whole view state lives in the URL query, so any filtered view can be shared:
 *
 *   ?month=9&days=5-8&sleep=huts,camping&level=2,3&nopermit=1&waymarked=1&trek=juliana-trail&map=7.5/46.3/13.8
 *
 * Unknown or malformed values are ignored rather than treated as errors.
 */
import { SLEEPING_TYPES, type SleepingType } from '../schema/values';
import { DAYS_MAX, DAYS_MIN, NO_FILTERS, type Filters } from './filters';

export interface MapView {
  zoom: number;
  lat: number;
  lon: number;
}

export interface ViewState {
  filters: Filters;
  /** Id of the selected trek. */
  trek?: string;
  map?: MapView;
}

const unique = <T>(values: T[]) => [...new Set(values)];

function parseDays(value: string | null): [number, number] | undefined {
  const match = value?.match(/^(\d+)-(\d+)$/);
  if (!match) return undefined;
  const from = Math.max(DAYS_MIN, Math.min(DAYS_MAX, Number(match[1])));
  const to = Math.max(DAYS_MIN, Math.min(DAYS_MAX, Number(match[2])));
  if (from > to) return undefined;
  // The full range is the same as no filter.
  return from === DAYS_MIN && to === DAYS_MAX ? undefined : [from, to];
}

function parseMap(value: string | null): MapView | undefined {
  const parts = value?.split('/').map(Number);
  if (!parts || parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return undefined;
  const [zoom, lat, lon] = parts;
  if (zoom < 0 || zoom > 22 || Math.abs(lat) > 90 || Math.abs(lon) > 180) return undefined;
  return { zoom, lat, lon };
}

export function parseState(query: string | URLSearchParams): ViewState {
  const params = typeof query === 'string' ? new URLSearchParams(query) : query;
  const list = (name: string) => (params.get(name) ?? '').split(',').filter(Boolean);

  const month = Number(params.get('month'));
  const trek = params.get('trek') ?? '';

  const filters: Filters = {
    ...NO_FILTERS,
    sleeping: unique(list('sleep').filter((value): value is SleepingType => SLEEPING_TYPES.includes(value as SleepingType))),
    difficulty: unique(list('level').map(Number).filter((level) => Number.isInteger(level) && level >= 1 && level <= 4)).sort(),
    noPermit: params.get('nopermit') === '1',
    waymarked: params.get('waymarked') === '1',
  };
  if (Number.isInteger(month) && month >= 1 && month <= 12) filters.month = month;
  const days = parseDays(params.get('days'));
  if (days) filters.days = days;

  const state: ViewState = { filters };
  if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(trek)) state.trek = trek;
  const map = parseMap(params.get('map'));
  if (map) state.map = map;
  return state;
}

/** The query string for a state, without the leading "?". Defaults are left out. */
export function serializeState(state: ViewState): string {
  const { filters } = state;
  const parts: string[] = [];
  if (filters.month !== undefined) parts.push(`month=${filters.month}`);
  if (filters.days && !(filters.days[0] === DAYS_MIN && filters.days[1] === DAYS_MAX)) {
    parts.push(`days=${filters.days[0]}-${filters.days[1]}`);
  }
  if (filters.sleeping.length > 0) {
    // Keep the order of SLEEPING_TYPES so the same selection always gives the same URL.
    parts.push(`sleep=${SLEEPING_TYPES.filter((type) => filters.sleeping.includes(type)).join(',')}`);
  }
  if (filters.difficulty.length > 0) parts.push(`level=${[...filters.difficulty].sort().join(',')}`);
  if (filters.noPermit) parts.push('nopermit=1');
  if (filters.waymarked) parts.push('waymarked=1');
  if (state.trek) parts.push(`trek=${state.trek}`);
  if (state.map) {
    const { zoom, lat, lon } = state.map;
    parts.push(`map=${zoom.toFixed(2)}/${lat.toFixed(4)}/${lon.toFixed(4)}`);
  }
  return parts.join('&');
}
