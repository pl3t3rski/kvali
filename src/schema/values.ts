/**
 * The fixed value lists of the data model, and the country names.
 *
 * Kept apart from the schema so that browser code can use them without pulling
 * in the validation library. `trek.ts` re-exports everything here.
 */

export const STATUSES = ['draft', 'published'] as const;
export const ROUTE_TYPES = ['point-to-point', 'loop', 'linear-return'] as const;
export const SLEEPING_TYPES = ['huts', 'guesthouses', 'camping', 'mixed'] as const;
export const BOOKING_AHEAD = ['required', 'recommended', 'not-needed'] as const;
export const PERMITS = ['none', 'free-registration', 'paid-permit'] as const;
export const WAYMARKED = ['yes', 'partial', 'no'] as const;

export type Status = (typeof STATUSES)[number];
export type RouteType = (typeof ROUTE_TYPES)[number];
export type SleepingType = (typeof SLEEPING_TYPES)[number];
export type Permit = (typeof PERMITS)[number];
export type Waymarked = (typeof WAYMARKED)[number];

const regionNames = new Intl.DisplayNames(['en'], { type: 'region', fallback: 'none' });

/** English country name for an ISO 3166-1 alpha-2 code, or undefined if the code is unknown. */
export function countryName(code: string): string | undefined {
  if (!/^[A-Z]{2}$/.test(code)) return undefined;
  try {
    return regionNames.of(code);
  } catch {
    return undefined;
  }
}
