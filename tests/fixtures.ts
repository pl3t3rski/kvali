import type { TrekIndexEntry } from '../src/data/types';

/** A trek.yaml, as parsed YAML, that passes every rule for a published trek. */
export function validTrek(): Record<string, any> {
  return {
    id: 'sample-trail',
    status: 'published',
    name: 'Sample Trail',
    countries: ['SI'],
    region: 'Julian Alps',
    one_liner: 'A sample trek for the tests.',
    route: { type: 'loop', start: 'A', end: 'A', osm_relation_id: 123 },
    distance_km: 100,
    total_ascent_m: 5000,
    typical_days: { min: 5, max: 7 },
    when: { best_months: [6, 7, 8, 9] },
    sleeping: { type: 'huts', booking_ahead: 'recommended' },
    difficulty: { level: 2, reason: 'Good paths.' },
    logistics: { getting_to_start: 'Bus from the capital.' },
    flags: { permit: 'none', waymarked: 'yes', water_scarce: false, exposed_or_via_ferrata: false },
    links: { official_site: 'https://example.org/trail' },
    establishment_signals: ['Official website', 'Printed guidebook'],
    trip_reports: [
      { url: 'https://example.org/report-1', title: 'Report one', year_hiked: 2023, summary: 'Went well.' },
      { url: 'https://example.org/report-2', title: 'Report two', year_hiked: 2024, summary: 'Rained a lot.' },
    ],
    photos: [
      { file_url: 'https://commons.wikimedia.org/wiki/File:One.jpg', author: 'A', license: 'CC BY-SA 4.0', shows: 'A lake' },
      { file_url: 'https://commons.wikimedia.org/wiki/File:Two.jpg', author: 'B', license: 'CC0', shows: 'A hut' },
    ],
    sources: {
      'when.best_months': 'https://example.org/season',
      sleeping: 'https://example.org/huts',
      'flags.permit': 'https://example.org/permits',
      logistics: ['https://example.org/bus', 'https://example.org/train'],
    },
    conflicts: [],
    last_verified: '2026-10-01',
  };
}

export function indexEntry(overrides: Partial<TrekIndexEntry> = {}): TrekIndexEntry {
  return {
    id: 'sample-trail',
    name: 'Sample Trail',
    countries: ['SI'],
    region: 'Julian Alps',
    one_liner: 'A sample trek.',
    route_type: 'loop',
    start: 'A',
    end: 'A',
    distance_km: 100,
    ascent_m: 5000,
    days: [5, 7],
    best_months: [6, 7, 8, 9],
    sleeping: 'huts',
    difficulty: 2,
    permit: 'none',
    waymarked: 'yes',
    water_scarce: false,
    exposed_or_via_ferrata: false,
    establishment: 2,
    bbox: [13, 46, 14, 46.5],
    midpoint: [13.5, 46.25],
    last_verified: '2026-10-01',
    status: 'published',
    ...overrides,
  };
}
