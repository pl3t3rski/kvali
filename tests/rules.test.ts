import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { stringify } from 'yaml';
import { routeHash } from '../scripts/lib/hash';
import { checkGeneratedFiles, isStale, monthsBefore } from '../scripts/lib/rules';
import { readTrekFolder } from '../src/data/treks';
import type { RouteFeature, TrekStats } from '../src/data/types';
import { validTrek } from './fixtures';

const root = mkdtempSync(join(tmpdir(), 'kvali-test-'));
afterAll(() => rmSync(root, { recursive: true, force: true }));

const route: RouteFeature = {
  type: 'Feature',
  properties: { id: 'sample-trail', source: 'osm', osm_relation_id: 123, fetched: '2026-11-01', gaps: [] },
  geometry: { type: 'LineString', coordinates: [[14, 46], [14, 46.5]] },
};
const stats = (overrides: Partial<TrekStats> = {}): TrekStats => ({
  distance_km: 98,
  ascent_m: 5200,
  descent_m: 5200,
  lowest_m: 500,
  highest_m: 2000,
  bbox: [14, 46, 14, 46.5],
  midpoint: [14, 46.25],
  route_hash: routeHash(route),
  ...overrides,
});

let counter = 0;
/** Write a trek folder to a temp directory and load it. */
function folder(trek: Record<string, any>, files: { route?: RouteFeature; stats?: TrekStats } = {}) {
  const dir = join(root, String(counter++), trek.id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'trek.yaml'), stringify(trek));
  if (files.route) writeFileSync(join(dir, 'route.geojson'), JSON.stringify(files.route));
  if (files.stats) writeFileSync(join(dir, 'stats.json'), JSON.stringify(files.stats));
  return readTrekFolder(dir, trek.id);
}

const draft = () => ({ ...validTrek(), status: 'draft', photos: [] });

describe('loading a trek folder', () => {
  it('loads a valid trek', () => {
    const loaded = folder(validTrek());
    expect(loaded.issues).toEqual([]);
    expect(loaded.trek?.name).toBe('Sample Trail');
  });

  it('reports an id that differs from the folder name', () => {
    const dir = join(root, 'mismatch', 'other-name');
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'trek.yaml'), stringify(validTrek()));
    expect(readTrekFolder(dir, 'other-name').issues[0].message).toContain('must equal the folder name');
  });

  it('reports a missing or broken trek.yaml', () => {
    const dir = join(root, 'broken', 'broken');
    mkdirSync(dir, { recursive: true });
    expect(readTrekFolder(dir, 'broken').issues[0].message).toContain('missing');
    writeFileSync(join(dir, 'trek.yaml'), 'id: [unclosed');
    expect(readTrekFolder(dir, 'broken').issues[0].message).toContain('not valid YAML');
  });
});

describe('checks on generated files', () => {
  const today = '2026-11-27';

  it('passes a draft with a route and matching stats', () => {
    expect(checkGeneratedFiles(folder(draft(), { route, stats: stats() }), today)).toEqual({ errors: [], warnings: [] });
  });

  it('only warns about missing files on a draft, but fails a published trek', () => {
    expect(checkGeneratedFiles(folder(draft()), today).errors).toEqual([]);
    expect(checkGeneratedFiles(folder(draft()), today).warnings.join()).toContain('route.geojson is missing');
    const published = checkGeneratedFiles(folder(validTrek()), today);
    expect(published.errors.join()).toContain('route.geojson is missing');
    expect(published.errors.join()).toContain('photos.json is missing');
  });

  it('fails when stats.json was computed from an older route', () => {
    const findings = checkGeneratedFiles(folder(draft(), { route, stats: stats({ route_hash: 'old' }) }), today);
    expect(findings.errors.join()).toContain('older than route.geojson');
  });

  it('warns when computed and researched values are more than 20% apart', () => {
    const findings = checkGeneratedFiles(folder(draft(), { route, stats: stats({ distance_km: 60, ascent_m: 6100 }) }), today);
    expect(findings.warnings).toHaveLength(2);
    expect(findings.warnings[0]).toContain('60 km but research says 100 km');
  });

  it('warns about a long gap in the route', () => {
    const gappy: RouteFeature = {
      ...route,
      properties: { ...route.properties, gaps: [{ from: [14, 46], to: [14, 46.01], length_m: 1112 }, { from: [14, 46], to: [14, 46], length_m: 40 }] },
    };
    const findings = checkGeneratedFiles(folder(draft(), { route: gappy, stats: stats({ route_hash: routeHash(gappy) }) }), today);
    expect(findings.warnings).toHaveLength(1);
    expect(findings.warnings[0]).toContain('gap of 1112 m');
  });

  it('warns, without failing, when a trek was last verified over 24 months ago', () => {
    const old = { ...draft(), last_verified: '2024-11-01' };
    const findings = checkGeneratedFiles(folder(old, { route, stats: stats() }), today);
    expect(findings.errors).toEqual([]);
    expect(findings.warnings.join()).toContain('more than 24 months ago');
  });

  it('works out what counts as stale', () => {
    expect(monthsBefore('2026-11-27', 24)).toBe('2024-11-27');
    expect(isStale('2024-11-26', '2026-11-27')).toBe(true);
    expect(isStale('2024-11-27', '2026-11-27')).toBe(false);
  });
});
