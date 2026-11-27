import { describe, expect, it } from 'vitest';
import { sourceCovers, trekSchema } from '../src/schema/trek';
import { validTrek } from './fixtures';

/** Messages of every issue for a trek, prefixed by the field path. */
function issues(trek: Record<string, any>): string[] {
  const result = trekSchema.safeParse(trek);
  return result.success ? [] : result.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
}

describe('trek schema', () => {
  it('accepts a complete published trek', () => {
    expect(issues(validTrek())).toEqual([]);
  });

  it('rejects a field it does not know, so typos are caught', () => {
    expect(issues({ ...validTrek(), dificulty: { level: 2 } })).toHaveLength(1);
  });

  it('rejects an unknown enum value', () => {
    const trek = validTrek();
    trek.sleeping.type = 'hotels';
    expect(issues(trek).join()).toContain('sleeping.type');
  });

  it('rejects a permit lottery, which breaks inclusion rule 3', () => {
    const trek = validTrek();
    trek.flags.permit = 'lottery';
    expect(issues(trek).join()).toContain('flags.permit');
  });

  it('rejects a bad URL and a non-http URL', () => {
    const trek = validTrek();
    trek.links.official_site = 'not a url';
    trek.trip_reports[0].url = 'ftp://example.org/report';
    expect(issues(trek)).toHaveLength(2);
  });

  it('rejects an unknown country code', () => {
    expect(issues({ ...validTrek(), countries: ['XX'] }).join()).toContain('countries');
    expect(issues({ ...validTrek(), countries: ['si'] }).join()).toContain('countries');
  });

  it('rejects a one-liner over 140 characters', () => {
    expect(issues({ ...validTrek(), one_liner: 'x'.repeat(141) }).join()).toContain('one_liner');
  });

  it('accepts month names and stores them as numbers', () => {
    const trek = validTrek();
    trek.when.best_months = ['June', 'jul', 8];
    expect(trekSchema.parse(trek).when.best_months).toEqual([6, 7, 8]);
  });

  it('accepts yes / no for waymarked when YAML turned them into booleans', () => {
    const trek = validTrek();
    trek.flags.waymarked = true;
    expect(trekSchema.parse(trek).flags.waymarked).toBe('yes');
  });

  it('accepts a date object for last_verified and stores a YYYY-MM-DD string', () => {
    const trek = { ...validTrek(), last_verified: new Date('2026-10-01T00:00:00Z') };
    expect(trekSchema.parse(trek).last_verified).toBe('2026-10-01');
    expect(issues({ ...validTrek(), last_verified: 'October 2026' }).join()).toContain('last_verified');
  });
});

describe('inclusion and geometry rules', () => {
  it('rejects a trek of fewer than 3 days', () => {
    const trek = validTrek();
    trek.typical_days = { min: 2, max: 4 };
    expect(issues(trek).join()).toContain('at least 3 days');
  });

  it('rejects max days below min days', () => {
    const trek = validTrek();
    trek.typical_days = { min: 6, max: 4 };
    expect(issues(trek).join()).toContain('typical_days.max');
  });

  it('rejects a trek with no geometry source', () => {
    const trek = validTrek();
    delete trek.route.osm_relation_id;
    expect(issues(trek).join()).toContain('No geometry');
  });

  it('needs a licence note for a GPX route', () => {
    const trek = validTrek();
    delete trek.route.osm_relation_id;
    trek.route.gpx_source = 'https://example.org/track.gpx';
    expect(issues(trek).join()).toContain('gpx_license');
    trek.route.gpx_license = 'CC BY 4.0, credit Example Hiking Club';
    expect(issues(trek)).toEqual([]);
  });
});

describe('sources for risky fields', () => {
  it.each(['when.best_months', 'sleeping', 'flags.permit', 'logistics'])('needs a source for %s', (field) => {
    const trek = validTrek();
    delete trek.sources[field];
    expect(issues(trek).join()).toContain(`"${field}" is filled in but has no entry in sources`);
  });

  it('does not need a logistics source when logistics is empty', () => {
    const trek = validTrek();
    delete trek.logistics;
    delete trek.sources.logistics;
    expect(issues(trek)).toEqual([]);
  });

  it('matches source keys written in a few reasonable ways', () => {
    expect(sourceCovers('when.best_months', 'when.best_months')).toBe(true);
    expect(sourceCovers('best_months', 'when.best_months')).toBe(true);
    expect(sourceCovers('when', 'when.best_months')).toBe(true);
    expect(sourceCovers('sleeping.booking_ahead', 'sleeping')).toBe(true);
    expect(sourceCovers('permit', 'flags.permit')).toBe(true);
    expect(sourceCovers('difficulty', 'sleeping')).toBe(false);
    expect(sourceCovers('', 'sleeping')).toBe(false);
  });
});

describe('publishing rules', () => {
  it('blocks publishing with an open conflict, but allows it on a draft', () => {
    const trek = { ...validTrek(), conflicts: ['Two sources disagree on the season'] };
    expect(issues(trek).join()).toContain('no open conflicts');
    expect(issues({ ...trek, status: 'draft' })).toEqual([]);
  });

  it('blocks publishing with fewer than 2 photos or 2 trip reports', () => {
    const trek = validTrek();
    trek.photos.pop();
    trek.trip_reports = [];
    const found = issues(trek).join();
    expect(found).toContain('at least 2 photos');
    expect(found).toContain('at least 2 trip reports');
    expect(issues({ ...trek, status: 'draft' })).toEqual([]);
  });

  it('rejects a photo licence that is not allowed, even on a draft', () => {
    const trek: Record<string, any> = { ...validTrek(), status: 'draft' };
    trek.photos[0].license = 'CC BY-NC 4.0';
    expect(issues(trek).join()).toContain('Licence must be');
  });

  it('rejects a photo that is not on Wikimedia Commons', () => {
    const trek = validTrek();
    trek.photos[0].file_url = 'https://example.org/photo.jpg';
    expect(issues(trek).join()).toContain('Wikimedia Commons');
  });
});
