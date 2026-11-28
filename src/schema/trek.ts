/**
 * The schema for `data/treks/<id>/trek.yaml`.
 *
 * This one file is the single source of truth for the data model. It is used by
 * the Astro content collection (so `astro build` fails on bad data), by
 * `scripts/validate.ts` and by every pipeline script.
 *
 * Two layers:
 *   1. Shape. Field names, types, allowed values and URLs. Always enforced, drafts included.
 *   2. Publishing rules (`publishBlockers`). Everything a trek needs before it may go on
 *      the site. Enforced as errors on a published trek and listed as "blocks publishing"
 *      on a draft, so research output with gaps can be imported and reviewed.
 *
 * Checks that need the generated files (route.geojson, stats.json, photos.json) live in
 * `scripts/lib/rules.ts`.
 */
import { z } from 'astro/zod';
import { isAllowedLicense } from '../lib/license';
import { photoSource } from '../lib/photo-source';
import { BOOKING_AHEAD, PERMITS, ROUTE_TYPES, SLEEPING_TYPES, STATUSES, WAYMARKED, countryName } from './values';

export * from './values';

/** Inclusion rule 1: at least 3 days of walking. */
export const MIN_DAYS = 3;
/** A published trek needs at least this many photos and trip reports. */
export const MIN_PHOTOS = 2;
export const MIN_TRIP_REPORTS = 2;
/** Longest one-liner that fits a card. */
export const ONE_LINER_MAX = 140;

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

const relationId = z.number().int().positive();
const latLon = z.tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)]);

const tripReport = z.strictObject({
  url: httpUrl,
  title: text,
  year_hiked: z.number().int().min(1950).max(new Date().getFullYear()).optional(),
  summary: text,
});

const photo = z.strictObject({
  file_url: httpUrl.refine((url) => photoSource(url) !== undefined, {
    error: 'Must be a Wikimedia Commons file page or an Unsplash photo page',
  }),
  author: text,
  license: text,
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
  one_liner: text,

  route: z.strictObject({
    type: z.enum(ROUTE_TYPES).optional(),
    start: text,
    end: text.optional(),
    /** One relation, or several stage relations in walking order when no single relation covers the trek. */
    osm_relation_id: z.union([relationId, z.array(relationId).min(1)]).optional(),
    /**
     * Where the trek starts and ends on the mapped ways, each as [latitude, longitude]. The
     * route line is then the shortest walk between the two along the ways of the relation
     * or relations. Use it when the relation is a longer trail, when several relations
     * overlap, or to set the direction the trek is walked. `via` lists places the walk must
     * pass on the way, for a trek that takes a longer variant or goes out to a hut and back.
     */
    osm_section: z.strictObject({ from: latLon, to: latLon, via: z.array(latLon).optional() }).optional(),
    /** A GPX file to use when OpenStreetMap has no relation. A web page that only links to one does not work. */
    gpx_source: httpUrl.optional(),
    /** Licence of the GPX file and the credit it asks for. Needed when `gpx_source` is the geometry source. */
    gpx_license: text.optional(),
  }),

  distance_km: z.number().positive().optional(),
  total_ascent_m: z.number().nonnegative().optional(),

  typical_days: z.strictObject({ min: z.number().int().positive(), max: z.number().int().positive() }).optional(),

  when: z.strictObject({ best_months: z.array(month).optional(), open_season: text.optional() }).optional(),

  sleeping: z
    .strictObject({ type: z.enum(SLEEPING_TYPES).optional(), booking_ahead: z.enum(BOOKING_AHEAD).optional(), notes: text.optional() })
    .optional(),

  difficulty: z.strictObject({ level: z.number().int().min(1).max(4).optional(), reason: text.optional() }).optional(),

  logistics: z
    .strictObject({
      getting_to_start: text.optional(),
      leaving_from_end: text.optional(),
      nearest_airports: z.array(text).optional(),
    })
    .optional(),

  flags: z
    .strictObject({
      permit: z.enum(PERMITS).optional(),
      permit_notes: text.optional(),
      waymarked: waymarked.optional(),
      water_scarce: z.boolean().optional(),
      exposed_or_via_ferrata: z.boolean().optional(),
    })
    .optional(),

  links: z.strictObject({ official_site: httpUrl.optional() }).optional(),

  establishment_signals: z.array(text).default([]),
  trip_reports: z.array(tripReport).default([]),
  photos: z.array(photo).default([]),
  sources: z.record(z.string(), z.union([httpUrl, z.array(httpUrl).min(1)])).default({}),
  conflicts: z.array(z.union([text, z.record(z.string(), z.unknown())])).optional(),
  last_verified: isoDate,
});

type TrekShape = z.infer<typeof trekObject>;

export interface Blocker {
  /** Where in the file, e.g. "typical_days.min". */
  path: string;
  message: string;
}

/** Everything that stops a trek from being published. An empty list means it may go on the site. */
export function publishBlockers(trek: TrekShape): Blocker[] {
  const blockers: Blocker[] = [];
  const block = (path: string, message: string) => blockers.push({ path, message });
  const missing = (path: string) => block(path, 'Missing: every published trek needs this');

  if (trek.one_liner.length > ONE_LINER_MAX) {
    block('one_liner', `Longer than ${ONE_LINER_MAX} characters (${trek.one_liner.length})`);
  }

  if (!trek.route.type) missing('route.type');
  if (!trek.route.end) missing('route.end');
  if (trek.route.osm_relation_id === undefined && trek.route.gpx_source === undefined) {
    block('route', 'No geometry: give either route.osm_relation_id or route.gpx_source');
  }
  if (trek.route.osm_relation_id === undefined && trek.route.gpx_source && !trek.route.gpx_license) {
    block('route.gpx_license', 'A GPX route needs route.gpx_license: the licence that allows reuse and the credit it asks for');
  }

  if (!trek.typical_days) {
    missing('typical_days');
  } else {
    if (trek.typical_days.min < MIN_DAYS) {
      block('typical_days.min', `A trek needs at least ${MIN_DAYS} days of walking (inclusion rule 1)`);
    }
    if (trek.typical_days.max < trek.typical_days.min) block('typical_days.max', 'max must not be smaller than min');
  }

  if (!trek.when?.best_months?.length) missing('when.best_months');
  if (!trek.sleeping?.type) missing('sleeping.type');
  if (trek.difficulty?.level === undefined) missing('difficulty.level');
  if (!trek.difficulty?.reason) missing('difficulty.reason');
  if (!trek.flags?.permit) missing('flags.permit');
  if (!trek.flags?.waymarked) missing('flags.waymarked');
  if (trek.flags?.water_scarce === undefined) missing('flags.water_scarce');
  if (trek.flags?.exposed_or_via_ferrata === undefined) missing('flags.exposed_or_via_ferrata');

  const sourceKeys = Object.keys(trek.sources);
  const filled: Record<(typeof RISKY_FIELDS)[number], boolean> = {
    'when.best_months': Boolean(trek.when?.best_months?.length),
    sleeping: Boolean(trek.sleeping?.type),
    'flags.permit': Boolean(trek.flags?.permit),
    logistics: Boolean(
      trek.logistics?.getting_to_start || trek.logistics?.leaving_from_end || trek.logistics?.nearest_airports?.length,
    ),
  };
  for (const field of RISKY_FIELDS) {
    if (filled[field] && !sourceKeys.some((key) => sourceCovers(key, field))) {
      block('sources', `"${field}" is filled in but has no entry in sources`);
    }
  }

  trek.photos.forEach((item, index) => {
    if (!isAllowedLicense(item.license)) {
      block(`photos.${index}.license`, `Licence "${item.license}" is not allowed (CC0, CC BY, CC BY-SA, public domain, Unsplash)`);
    }
  });
  if (trek.photos.length < MIN_PHOTOS) block('photos', `Needs at least ${MIN_PHOTOS} photos (found ${trek.photos.length})`);
  if (trek.trip_reports.length < MIN_TRIP_REPORTS) {
    block('trip_reports', `Needs at least ${MIN_TRIP_REPORTS} trip reports (found ${trek.trip_reports.length})`);
  }
  if (trek.conflicts && trek.conflicts.length > 0) {
    block('conflicts', `Has ${trek.conflicts.length} open conflict(s); resolve them and empty the list`);
  }
  return blockers;
}

export const trekSchema = trekObject.superRefine((trek, ctx) => {
  if (trek.status !== 'published') return;
  for (const blocker of publishBlockers(trek)) {
    ctx.addIssue({ code: 'custom', path: blocker.path.split('.'), message: blocker.message });
  }
});

export type Trek = z.infer<typeof trekSchema>;
