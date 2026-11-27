/**
 * Checks that need the generated files next to trek.yaml.
 * The checks on trek.yaml itself are in src/schema/trek.ts.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { readPhotos, readRoute, readStats, type TrekFolder } from '../../src/data/treks';
import { isAllowedLicense } from '../../src/lib/license';
import { MIN_PHOTOS } from '../../src/schema/trek';
import { routeHash } from './hash';

/** Gaps in the route longer than this are flagged. */
export const GAP_WARNING_M = 200;
/** Computed and researched distance or ascent may differ by this much before a warning. */
export const CROSS_CHECK_TOLERANCE = 0.2;
/** A trek not verified for this long is flagged for re-checking. */
export const STALE_AFTER_MONTHS = 24;

export interface Findings {
  errors: string[];
  warnings: string[];
}

/** YYYY-MM-DD of the day `months` before `today`. */
export function monthsBefore(today: string, months: number): string {
  const date = new Date(`${today}T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() - months);
  return date.toISOString().slice(0, 10);
}

export function isStale(lastVerified: string, today: string): boolean {
  return lastVerified < monthsBefore(today, STALE_AFTER_MONTHS);
}

function differs(computed: number, researched: number): boolean {
  return Math.abs(computed - researched) / researched > CROSS_CHECK_TOLERANCE;
}

export function checkGeneratedFiles(folder: TrekFolder, today: string): Findings {
  const findings: Findings = { errors: [], warnings: [] };
  const trek = folder.trek;
  if (!trek) return findings;
  const published = trek.status === 'published';
  // A draft may still be waiting for its generated files; a published trek may not.
  const missing = (message: string) => (published ? findings.errors : findings.warnings).push(message);

  const route = readRoute(folder);
  const stats = readStats(folder);
  if (!route) {
    missing('route.geojson is missing; run `npm run fetch:route`');
  } else {
    for (const gap of route.properties.gaps.filter((gap) => gap.length_m > GAP_WARNING_M)) {
      findings.warnings.push(`The route has a gap of ${gap.length_m} m near ${gap.from[1]},${gap.from[0]} (lat,lon)`);
    }
    if (!stats) {
      missing('stats.json is missing; run `npm run compute:stats`');
    } else if (stats.route_hash !== routeHash(route)) {
      findings.errors.push('stats.json is older than route.geojson; run `npm run compute:stats`');
    }
  }

  if (stats) {
    if (trek.distance_km !== undefined && differs(stats.distance_km, trek.distance_km)) {
      findings.warnings.push(
        `Computed distance is ${stats.distance_km} km but research says ${trek.distance_km} km (more than 20% apart)`,
      );
    }
    if (trek.total_ascent_m !== undefined && trek.total_ascent_m > 0 && differs(stats.ascent_m, trek.total_ascent_m)) {
      findings.warnings.push(
        `Computed ascent is ${stats.ascent_m} m but research says ${trek.total_ascent_m} m (more than 20% apart)`,
      );
    }
  }

  const photos = readPhotos(folder);
  if (!photos) {
    if (trek.photos.length > 0) missing('photos.json is missing; run `npm run fetch:photos`');
  } else {
    for (const photo of photos) {
      if (!isAllowedLicense(photo.license)) {
        findings.errors.push(`${photo.title}: Commons licence "${photo.license}" is not allowed`);
      }
      for (const path of Object.values(photo.sizes)) {
        if (!existsSync(join(process.cwd(), 'public', path))) {
          findings.errors.push(`${photo.title}: file public${path} is missing; run \`npm run fetch:photos\``);
        }
      }
    }
    if (photos.length < trek.photos.length) {
      missing(`Only ${photos.length} of ${trek.photos.length} photos were fetched; run \`npm run fetch:photos\``);
    }
    if (published && photos.length < MIN_PHOTOS) {
      findings.errors.push(`A published trek needs at least ${MIN_PHOTOS} fetched photos (found ${photos.length})`);
    }
  }

  if (isStale(trek.last_verified, today)) {
    findings.warnings.push(`Last verified on ${trek.last_verified}, more than ${STALE_AFTER_MONTHS} months ago`);
  }
  return findings;
}
