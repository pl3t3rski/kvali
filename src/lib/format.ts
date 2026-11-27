/** Wording for values shown on cards and trek pages. One place to change the labels. */
import { countryName, type Permit, type RouteType, type SleepingType, type Waymarked } from '../schema/trek';

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const SLEEPING_LABELS: Record<SleepingType, string> = {
  huts: 'Huts',
  guesthouses: 'Guesthouses',
  camping: 'Camping',
  mixed: 'Mixed',
};

export const ROUTE_TYPE_LABELS: Record<RouteType, string> = {
  'point-to-point': 'Point to point',
  loop: 'Loop',
  'linear-return': 'Out and back',
};

export const PERMIT_LABELS: Record<Permit, string> = {
  none: 'No permit needed',
  'free-registration': 'Free registration needed',
  'paid-permit': 'Paid permit needed',
};

export const WAYMARKED_LABELS: Record<Waymarked, string> = {
  yes: 'Waymarked',
  partial: 'Partly waymarked',
  no: 'Not waymarked',
};

export const BOOKING_LABELS = {
  required: 'Book ahead',
  recommended: 'Booking ahead recommended',
  'not-needed': 'No need to book ahead',
} as const;

export const monthName = (month: number) => MONTHS[month - 1];

/** "7–11 days", or "8 days" when min and max are equal. */
export function formatDays(min: number, max: number): string {
  return min === max ? `${min} days` : `${min}–${max} days`;
}

/**
 * Months as ranges: [6, 7, 8, 9] → "June–September"; [5, 6, 9] → "May–June, September".
 */
export function formatMonths(months: number[]): string {
  const sorted = [...new Set(months)].sort((a, b) => a - b);
  const ranges: string[] = [];
  let start = sorted[0];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] === sorted[i] + 1) continue;
    ranges.push(start === sorted[i] ? monthName(start) : `${monthName(start)}–${monthName(sorted[i])}`);
    start = sorted[i + 1];
  }
  return ranges.join(', ');
}

export const formatCountries = (codes: string[]) => codes.map((code) => countryName(code) ?? code).join(', ');

export const formatKm = (km: number) => `${Math.round(km)} km`;
export const formatMetres = (metres: number) => `${metres.toLocaleString('en-GB')} m`;
