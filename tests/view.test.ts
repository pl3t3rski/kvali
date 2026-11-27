import { describe, expect, it } from 'vitest';
import { matchesFilters, NO_FILTERS, visibleTreks, type Filters } from '../src/lib/filters';
import { parseState, serializeState } from '../src/lib/url-state';
import { indexEntry } from './fixtures';

const filters = (overrides: Partial<Filters>): Filters => ({ ...NO_FILTERS, ...overrides });

describe('filters', () => {
  const trek = indexEntry(); // 5–7 days, June–September, huts, level 2, no permit, waymarked

  it('shows everything when nothing is selected', () => {
    expect(matchesFilters(trek, NO_FILTERS)).toBe(true);
  });

  it('filters by month', () => {
    expect(matchesFilters(trek, filters({ month: 9 }))).toBe(true);
    expect(matchesFilters(trek, filters({ month: 10 }))).toBe(false);
  });

  it('filters by days when the ranges overlap', () => {
    expect(matchesFilters(trek, filters({ days: [3, 5] }))).toBe(true);
    expect(matchesFilters(trek, filters({ days: [7, 10] }))).toBe(true);
    expect(matchesFilters(trek, filters({ days: [3, 4] }))).toBe(false);
    expect(matchesFilters(trek, filters({ days: [8, 12] }))).toBe(false);
  });

  it('treats the top of the days slider as "20 or more"', () => {
    const long = indexEntry({ days: [25, 30] });
    expect(matchesFilters(long, filters({ days: [10, 20] }))).toBe(true);
    expect(matchesFilters(long, filters({ days: [10, 19] }))).toBe(false);
  });

  it('filters by sleeping type, and mixed matches every choice', () => {
    expect(matchesFilters(trek, filters({ sleeping: ['huts', 'camping'] }))).toBe(true);
    expect(matchesFilters(trek, filters({ sleeping: ['camping'] }))).toBe(false);
    expect(matchesFilters(indexEntry({ sleeping: 'mixed' }), filters({ sleeping: ['camping'] }))).toBe(true);
  });

  it('filters by difficulty', () => {
    expect(matchesFilters(trek, filters({ difficulty: [1, 2] }))).toBe(true);
    expect(matchesFilters(trek, filters({ difficulty: [3, 4] }))).toBe(false);
  });

  it('filters by the permit and waymarked toggles', () => {
    expect(matchesFilters(trek, filters({ noPermit: true, waymarked: true }))).toBe(true);
    expect(matchesFilters(indexEntry({ permit: 'free-registration' }), filters({ noPermit: true }))).toBe(false);
    expect(matchesFilters(indexEntry({ waymarked: 'partial' }), filters({ waymarked: true }))).toBe(false);
  });

  it('lists only treks in the viewport, best established first', () => {
    const treks = [
      indexEntry({ id: 'a', name: 'Alpha', establishment: 1 }),
      indexEntry({ id: 'b', name: 'Beta', establishment: 3 }),
      indexEntry({ id: 'c', name: 'Caucasus', establishment: 5, bbox: [42, 42, 43, 43] }),
      indexEntry({ id: 'd', name: 'Delta', establishment: 3, best_months: [1] }),
    ];
    expect(visibleTreks(treks, NO_FILTERS, [12, 45, 15, 47]).map((item) => item.id)).toEqual(['b', 'd', 'a']);
    expect(visibleTreks(treks, filters({ month: 7 })).map((item) => item.id)).toEqual(['c', 'b', 'a']);
  });
});

describe('URL state', () => {
  it('reads the example from the spec', () => {
    expect(parseState('?month=9&days=5-8&sleep=huts&trek=juliana-trail')).toEqual({
      filters: { ...NO_FILTERS, month: 9, days: [5, 8], sleeping: ['huts'] },
      trek: 'juliana-trail',
    });
  });

  it('survives a round trip', () => {
    const state = {
      filters: { month: 7, days: [5, 20] as [number, number], sleeping: ['huts', 'camping'] as const, difficulty: [2, 3], noPermit: true, waymarked: true },
      trek: 'tour-du-mont-blanc',
      map: { zoom: 7.5, lat: 46.3, lon: 13.8 },
    };
    const query = serializeState({ ...state, filters: { ...state.filters, sleeping: [...state.filters.sleeping] } });
    expect(query).toBe('month=7&days=5-20&sleep=huts,camping&level=2,3&nopermit=1&waymarked=1&trek=tour-du-mont-blanc&map=7.50/46.3000/13.8000');
    expect(parseState(query)).toEqual({ ...state, filters: { ...state.filters, sleeping: ['huts', 'camping'] } });
  });

  it('gives an empty query for the default view', () => {
    expect(serializeState({ filters: NO_FILTERS })).toBe('');
    expect(serializeState({ filters: { ...NO_FILTERS, days: [3, 20] } })).toBe('');
  });

  it('ignores values it does not understand', () => {
    const state = parseState('month=13&days=8-5&sleep=hotels,huts&level=0,2,9&trek=../etc&map=abc&nopermit=yes');
    expect(state).toEqual({ filters: { ...NO_FILTERS, sleeping: ['huts'], difficulty: [2] } });
  });

  it('writes the same URL for the same selection in any order', () => {
    const a = serializeState({ filters: { ...NO_FILTERS, sleeping: ['camping', 'huts'], difficulty: [3, 1] } });
    const b = serializeState({ filters: { ...NO_FILTERS, sleeping: ['huts', 'camping'], difficulty: [1, 3] } });
    expect(a).toBe(b);
  });
});
