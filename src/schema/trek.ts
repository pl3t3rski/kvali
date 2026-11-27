/**
 * The schema for `data/treks/<id>/trek.yaml`.
 *
 * This one file is the single source of truth for the data model. It is used by
 * the Astro content collection (so `astro build` fails on bad data), by
 * `scripts/validate.ts` and by every pipeline script.
 *
 * Rules that only need trek.yaml live here. Rules that need the generated files
 * (route.geojson, stats.json, photos.json) live in `scripts/lib/rules.ts`.
 */
import { z } from 'astro/zod';
import { commonsFileTitle } from '../lib/commons';
import { isAllowedLicense } from '../lib/license';
import { BOOKING_AHEAD, PERMITS, ROUTE_TYPES, SLEEPING_TYPES, STATUSES, WAYMARKED, countryName } from './values';

export * from './values';

/** Inclusion rule 1: at least 3 days of walking. */
export const MIN_DAYS = 3;
/** A published trek needs at least this many photos and trip reports. */
export const MIN_PHOTOS = 2;
export const MIN_TRIP_REPORTS = 2;

const text = z.string().trim().min(1);
const httpUrl = z.url({ protocol: /^https?$/, error: 'Must be an http(s) URL' });

const countryCode = z
  .string()
  .refine((code) => countryName(code) !== undefined, {
    error: 'Must be an ISO 3166-1 alpha-2 country code in capitals, e.g. SI',
  });

const MONTH_NAMES = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** Months are stored as numbers 1–12. Names ("September", "sep") are accepted and converted. */
const month = z.preprocess((value) => {
  if (typeof value !== 'string') return value;
  const index = MONTH_NAMES.indexOf(value.trim().slice(0, 3).toLowerCase());
  if (index >= 0) return index + 1;
  return /^\d+$/.test(value.trim()) ? Number(value) : value;
}, z.number().int().min(1).max(12));

/** YAML parsers disagree on whether a bare `yes` / `no` is a string or a boolean. Accept both. */
const waymarked = z.preprocess((value) => {
  if (value === true) return 'yes';
  if (value === false) return 'no';
  return value;
}, z.enum(WAYMARKED));

/** Dates are stored as `YYYY-MM-DD` strings. Some YAML parsers hand over a Date object instead. */
const isoDate = z.preprocess(
  (value) => (value instanceof Date && !Number.isNaN(value.getTime()) ? value.toISOString().slice(0, 10) : value),
  z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Must be a date written as YYYY-MM-DD')
    .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)), { error: 'Not a real date' }),
);

const tripReport = z.strictObject({
  url: httpUrl,
  title: text,
  year_hiked: z.number().int().min(1950).max(new Date().getFullYear()),
  summary: text,
});

const photo = z.strictObject({
  file_url: httpUrl.refine((url) => commonsFileTitle(url) !== undefined, {
    error: 'Must be a Wikimedia Commons file, e.g. https://commons.wikimedia.org/wiki/File:Name.jpg',
  }),
  author: text,
  license: text.refine(isAllowedLicense, {
    error: 'Licence must be CC0, CC BY, CC BY-SA or public domain',
  }),
  shows: text,
});

/**
 * Fields that are easy to get wrong and risky for a walker if they are.
 * Each one that is filled in needs an entry in `sources`.
 */
export const RISKY_FIELDS = ['when.best_months', 'sleeping', 'flags.permit', 'logistics'] as const;

/**
 * True if a key of the `sources` map covers a risky field.
 * `when.best_months` is covered by the keys `when.best_months`, `when` or `best_months`;
 * `sleeping` is covered by `sleeping` or any `sleeping.*` key.
 */
export function sourceCovers(sourceKey: string, field: string): boolean {
  const key = sourceKey.trim().toLowerCase();
  const leaf = field.split('.').at(-1);
  return key === field || key === leaf || key.startsWith(`${field}.`) || field.startsWith(`${key}.`);
}

const trekObject = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Must be a lower-case slug, e.g. juliana-trail'),
  status: z.enum(STATUSES),
  name: text,
  countries: z.array(countryCode).min(1),
  region: text,
  one_liner: text.max(140),

  route: z.strictObject({
    type: z.enum(ROUTE_TYPES),
    start: text,
    end: text,
    osm_relation_id: z.number().int().positive().optional(),
    gpx_source: httpUrl.optional(),
    /** Licence of the GPX file and the credit it asks for. Needed when `gpx_source` is the geometry source. */
    gpx_license: text.optional(),
  }),

  distance_km: z.number().positive().optional(),
  total_ascent_m: z.number().nonnegative().optional(),

  typical_days: z.strictObject({
    min: z.number().int().positive(),
    max: z.number().int().positive(),
  }),

  when: z.strictObject({
    best_months: z.array(month).min(1),
    open_season: text.optional(),
  }),

  sleeping: z.strictObject({
    type: z.enum(SLEEPING_TYPES),
    booking_ahead: z.enum(BOOKING_AHEAD).optional(),
  }),

  difficulty: z.strictObject({
    level: z.number().int().min(1).max(4),
    reason: text,
  }),

  logistics: z
    .strictObject({
      getting_to_start: text.optional(),
      leaving_from_end: text.optional(),
      nearest_airports: z.array(text).optional(),
    })
    .optional(),

  flags: z.strictObject({
    permit: z.enum(PERMITS),
    waymarked,
    water_scarce: z.boolean(),
    exposed_or_via_ferrata: z.boolean(),
  }),

  links: z.strictObject({ official_site: httpUrl.optional() }).optional(),

  establishment_signals: z.array(text),
  trip_reports: z.array(tripReport),
  photos: z.array(photo),
  sources: z.record(z.string(), z.union([httpUrl, z.array(httpUrl).min(1)])),
  conflicts: z.array(z.union([text, z.record(z.string(), z.unknown())])).optional(),
  last_verified: isoDate,
});

export const trekSchema = trekObject.superRefine((trek, ctx) => {
  const fail = (path: (string | number)[], message: string) =>
    ctx.addIssue({ code: 'custom', path, message });

  if (trek.typical_days.min < MIN_DAYS) {
    fail(['typical_days', 'min'], `A trek needs at least ${MIN_DAYS} days of walking (inclusion rule 1)`);
  }
  if (trek.typical_days.max < trek.typical_days.min) {
    fail(['typical_days', 'max'], 'max must not be smaller than min');
  }

  if (trek.route.osm_relation_id === undefined && trek.route.gpx_source === undefined) {
    fail(['route'], 'No geometry: give either route.osm_relation_id or route.gpx_source');
  }
  if (trek.route.osm_relation_id === undefined && trek.route.gpx_source && !trek.route.gpx_license) {
    fail(
      ['route', 'gpx_license'],
      'A GPX route needs route.gpx_license: the licence that allows reuse and the credit it asks for',
    );
  }

  const sourceKeys = Object.keys(trek.sources);
  const logisticsFilled =
    trek.logistics !== undefined &&
    Boolean(
      trek.logistics.getting_to_start ||
        trek.logistics.leaving_from_end ||
        trek.logistics.nearest_airports?.length,
    );
  for (const field of RISKY_FIELDS) {
    if (field === 'logistics' && !logisticsFilled) continue;
    if (!sourceKeys.some((key) => sourceCovers(key, field))) {
      fail(['sources'], `"${field}" is filled in but has no entry in sources`);
    }
  }

  if (trek.status === 'published') {
    if (trek.conflicts && trek.conflicts.length > 0) {
      fail(['conflicts'], `A published trek must have no open conflicts (found ${trek.conflicts.length})`);
    }
    if (trek.photos.length < MIN_PHOTOS) {
      fail(['photos'], `A published trek needs at least ${MIN_PHOTOS} photos (found ${trek.photos.length})`);
    }
    if (trek.trip_reports.length < MIN_TRIP_REPORTS) {
      fail(
        ['trip_reports'],
        `A published trek needs at least ${MIN_TRIP_REPORTS} trip reports (found ${trek.trip_reports.length})`,
      );
    }
  }
});

export type Trek = z.infer<typeof trekSchema>;
