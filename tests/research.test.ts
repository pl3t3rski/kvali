import { describe, expect, it } from 'vitest';
import { cardFlags, seasonLabel, trekFlags } from '../src/lib/flags';
import { matchesFilters, NO_FILTERS } from '../src/lib/filters';
import { statsLine } from '../src/lib/format';
import { isAllowedLicense } from '../src/lib/license';
import { photoSource, unsplashId } from '../src/lib/photo-source';
import { publishBlockers, trekSchema } from '../src/schema/trek';
import { indexEntry, validTrek } from './fixtures';

/** A draft as research delivers it when it found little: the bare identity of a trek. */
function thinDraft(): Record<string, any> {
  return {
    id: 'thin-trail',
    status: 'draft',
    name: 'Thin Trail',
    countries: ['GE'],
    region: 'Svaneti',
    one_liner: 'A little-documented crossing.',
    route: { start: 'A' },
    last_verified: '2026-11-27',
  };
}

describe('drafts from research', () => {
  it('accepts a draft with most facts missing', () => {
    const result = trekSchema.safeParse(thinDraft());
    expect(result.success).toBe(true);
    expect(result.data?.photos).toEqual([]);
    expect(result.data?.sources).toEqual({});
  });

  it('lists everything that keeps such a draft from being published', () => {
    const paths = publishBlockers(trekSchema.parse(thinDraft())).map((blocker) => blocker.path);
    expect(paths).toEqual(
      expect.arrayContaining(['route.type', 'route.end', 'route', 'typical_days', 'when.best_months', 'sleeping.type', 'difficulty.level', 'flags.permit', 'flags.waymarked', 'photos', 'trip_reports']),
    );
  });

  it('refuses to publish the same trek', () => {
    expect(trekSchema.safeParse({ ...thinDraft(), status: 'published' }).success).toBe(false);
  });

  it('still rejects a wrong value or an unknown field on a draft', () => {
    expect(trekSchema.safeParse({ ...thinDraft(), sleeping: { type: 'hotels' } }).success).toBe(false);
    expect(trekSchema.safeParse({ ...thinDraft(), dificulty: {} }).success).toBe(false);
  });

  it('has nothing to settle on a complete trek', () => {
    expect(publishBlockers(trekSchema.parse(validTrek()))).toEqual([]);
  });

  it('holds a trek of fewer than 3 days back as a draft instead of failing the build', () => {
    const trek = { ...validTrek(), status: 'draft', typical_days: { min: 2, max: 3 } };
    const parsed = trekSchema.parse(trek);
    expect(publishBlockers(parsed).map((blocker) => blocker.path)).toContain('typical_days.min');
  });

  it('accepts several stage relations as the route, but not an empty list', () => {
    const trek = validTrek();
    trek.route.osm_relation_id = [13703284, 13703285];
    expect(trekSchema.safeParse(trek).success).toBe(true);
    trek.route.osm_relation_id = [];
    expect(trekSchema.safeParse(trek).success).toBe(false);
  });

  it('flags a one-liner that is too long for a card', () => {
    const trek = { ...validTrek(), status: 'draft', one_liner: 'x'.repeat(141) };
    expect(publishBlockers(trekSchema.parse(trek)).map((blocker) => blocker.path)).toContain('one_liner');
  });
});

describe('photo sources', () => {
  it('reads the Unsplash id from a photo page and from a downloaded file name', () => {
    expect(unsplashId('https://unsplash.com/photos/DOhXyRS3_n0')).toBe('DOhXyRS3_n0');
    expect(unsplashId('https://unsplash.com/photos/a-village-in-the-mountains-DOhXyRS3_n0')).toBe('DOhXyRS3_n0');
    expect(unsplashId('Ushguli, Georgia tomas-malik-DOhXyRS3_n0-unsplash (1).jpg')).toBe('DOhXyRS3_n0');
    expect(unsplashId('https://example.org/photos/DOhXyRS3_n0')).toBeUndefined();
    expect(unsplashId('holiday.jpg')).toBeUndefined();
  });

  it('tells Commons from Unsplash and refuses anything else', () => {
    expect(photoSource('https://commons.wikimedia.org/wiki/File:Shkhara.jpg')).toBe('commons');
    expect(photoSource('https://unsplash.com/photos/Vy0KuvkCR0s')).toBe('unsplash');
    expect(photoSource('https://example.org/photo.jpg')).toBeUndefined();
  });

  it('accepts an Unsplash photo with the Unsplash licence', () => {
    const trek = validTrek();
    trek.photos[0] = { file_url: 'https://unsplash.com/photos/DOhXyRS3_n0', author: 'Tomas Malik', license: 'Unsplash License', shows: 'Ushguli' };
    expect(trekSchema.safeParse(trek).success).toBe(true);
  });

  it('reads licences as research writes them', () => {
    expect(isAllowedLicense('Unsplash License')).toBe(true);
    expect(isAllowedLicense('CC BY-SA 3.0 (also GFDL)')).toBe(true);
    expect(isAllowedLicense('CC BY-SA 3.0 DE')).toBe(true);
    expect(isAllowedLicense('Copyrighted free use')).toBe(false);
  });
});

describe('flags', () => {
  const facts = { sleeping: 'guesthouses' as const, best_months: [6, 7, 8, 9], permit: 'free-registration' as const, waymarked: 'yes' as const, water_scarce: true, exposed_or_via_ferrata: true };

  it('puts where you sleep first and the warnings last', () => {
    const flags = trekFlags(facts);
    expect(flags[0]).toEqual({ icon: 'guesthouse', label: 'Guesthouses' });
    expect(flags.map((flag) => flag.label)).toEqual(['Guesthouses', 'Jun to Sep', 'Waymarked', 'Free registration', 'Water is scarce', 'Exposed ground']);
    expect(flags.filter((flag) => flag.tone === 'warning')).toHaveLength(3);
  });

  it('keeps a card to four flags with at most two warnings', () => {
    const flags = cardFlags(facts);
    expect(flags).toHaveLength(4);
    expect(flags.filter((flag) => flag.tone === 'warning')).toHaveLength(2);
    expect(flags[0].label).toBe('Guesthouses');
  });

  it('says nothing about facts that are not known', () => {
    expect(trekFlags({ best_months: [] })).toEqual([]);
  });

  it('names a season only for an unbroken run of months', () => {
    expect(seasonLabel([7, 8])).toBe('Jul to Aug');
    expect(seasonLabel([9])).toBe('Sep');
    expect(seasonLabel([5, 6, 9])).toBeUndefined();
    expect(seasonLabel([])).toBeUndefined();
  });
});

describe('treks with facts missing', () => {
  const unknown = indexEntry({ days: undefined, sleeping: undefined, difficulty: undefined, permit: undefined, waymarked: undefined, best_months: [] });

  it('shows them when no filter is on', () => {
    expect(matchesFilters(unknown, NO_FILTERS)).toBe(true);
  });

  it('hides them from a filter that asks for the missing fact', () => {
    expect(matchesFilters(unknown, { ...NO_FILTERS, month: 7 })).toBe(false);
    expect(matchesFilters(unknown, { ...NO_FILTERS, days: [3, 5] })).toBe(false);
    expect(matchesFilters(unknown, { ...NO_FILTERS, sleeping: ['huts'] })).toBe(false);
    expect(matchesFilters(unknown, { ...NO_FILTERS, difficulty: [2] })).toBe(false);
    expect(matchesFilters(unknown, { ...NO_FILTERS, noPermit: true })).toBe(false);
    expect(matchesFilters(unknown, { ...NO_FILTERS, waymarked: true })).toBe(false);
  });

  it('writes the stats line without the days', () => {
    expect(statsLine(unknown)).toBe('100 km');
    expect(statsLine(indexEntry())).toBe('5–7 days · 100 km');
  });
});
