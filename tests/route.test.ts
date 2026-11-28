import { describe, expect, it } from 'vitest';
import { parseGpx } from '../scripts/lib/gpx';
import { collectMainWays, toCoordinates, type OsmData } from '../scripts/lib/osm';
import { orientLines, pathBetween, stitchWays } from '../scripts/lib/stitch';
import type { LonLat } from '../src/data/types';

describe('stitching ways into lines', () => {
  it('chains ways that are in order', () => {
    expect(stitchWays([[1, 2, 3], [3, 4], [4, 5, 6]])).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it('turns ways that are stored backwards', () => {
    expect(stitchWays([[3, 2, 1], [3, 4], [6, 5, 4]])).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it('joins ways that are out of order', () => {
    expect(stitchWays([[1, 2], [5, 6], [2, 3, 4, 5]])).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it('keeps separate lines when there is a gap', () => {
    expect(stitchWays([[1, 2], [2, 3], [7, 8], [8, 9]])).toEqual([
      [1, 2, 3],
      [7, 8, 9],
    ]);
  });

  it('closes a loop', () => {
    expect(stitchWays([[1, 2], [2, 3], [3, 1]])).toEqual([[1, 2, 3, 1]]);
  });

  it('skips ways with fewer than two nodes', () => {
    expect(stitchWays([[1], [1, 2]])).toEqual([[1, 2]]);
  });
});

describe('ordering lines and measuring gaps', () => {
  const a: LonLat[] = [[14, 46], [14, 46.01]];
  const b: LonLat[] = [[14, 46.011], [14, 46.02]];
  const c: LonLat[] = [[14, 46.03], [14, 46.021]]; // stored backwards

  it('puts lines in walking order and reports the gaps between them', () => {
    const { lines, gaps } = orientLines([a, c, b]);
    expect(lines).toEqual([a, b, [...c].reverse()]);
    expect(gaps.map((gap) => gap.length_m)).toEqual([111, 111]);
  });

  it('keeps the direction of the source when the first piece is in the middle', () => {
    const { lines } = orientLines([b, a, c]);
    expect(lines[0][0]).toEqual([14, 46]);
    expect(lines.at(-1)!.at(-1)).toEqual([14, 46.03]);
  });

  it('reports no gaps for a single line', () => {
    expect(orientLines([a])).toEqual({ lines: [a], gaps: [] });
  });
});

describe('picking main-route ways from OSM', () => {
  const data: OsmData = {
    nodes: new Map<number, LonLat>([[1, [14, 46]], [2, [14.1, 46]], [3, [14.2, 46]]]),
    ways: new Map([[10, [1, 2]], [11, [2, 3]], [12, [3, 1]], [13, [1, 3]]]),
    relations: new Map([
      [
        100,
        [
          { type: 'relation', ref: 101, role: '' },
          { type: 'relation', ref: 102, role: '' },
          { type: 'relation', ref: 103, role: 'alternative' },
          { type: 'node', ref: 1, role: 'guidepost' },
        ],
      ],
      [101, [{ type: 'way', ref: 10, role: '' }, { type: 'way', ref: 13, role: 'excursion' }]],
      [102, [{ type: 'way', ref: 11, role: 'main' }, { type: 'way', ref: 12, role: 'Approach' }]],
      [103, [{ type: 'way', ref: 12, role: '' }]],
    ]),
  };

  it('follows stage relations and leaves out side routes', () => {
    const main = collectMainWays(100, data);
    expect(main.ways).toEqual([[1, 2], [2, 3]]);
    expect(main.relations).toBe(3);
    expect(main.dropped).toEqual({ alternative: 1, excursion: 1, approach: 1 });
  });

  it('does not loop forever when relations refer to each other', () => {
    const cyclic: OsmData = { ...data, relations: new Map([[1, [{ type: 'relation', ref: 1, role: '' }]]]) };
    expect(collectMainWays(1, cyclic).ways).toEqual([]);
  });

  it('turns node ids into coordinates', () => {
    expect(toCoordinates([1, 2, 99], data)).toEqual([[14, 46], [14.1, 46]]);
  });
});

describe('GPX', () => {
  it('reads one line per track segment', () => {
    const gpx = `<?xml version="1.0"?><gpx><trk>
      <trkseg><trkpt lat="46.0" lon="14.0"/><trkpt lat="46.1" lon="14.1"><ele>500</ele></trkpt></trkseg>
      <trkseg><trkpt lat="46.2" lon="14.2"/><trkpt lat="46.3" lon="14.3"/></trkseg>
    </trk></gpx>`;
    expect(parseGpx(gpx)).toEqual([
      [[14, 46], [14.1, 46.1]],
      [[14.2, 46.2], [14.3, 46.3]],
    ]);
  });

  it('falls back to route points', () => {
    const gpx = '<gpx><rte><rtept lat="46" lon="14"/><rtept lat="46.1" lon="14.1"/></rte></gpx>';
    expect(parseGpx(gpx)).toEqual([[[14, 46], [14.1, 46.1]]]);
  });

  it('refuses a file without a track', () => {
    expect(() => parseGpx('<gpx><wpt lat="46" lon="14"/></gpx>')).toThrow();
    expect(() => parseGpx('<html></html>')).toThrow();
  });
});

describe('walking from one place to another along mapped lines', () => {
  const main: LonLat[] = [[14, 46], [14, 46.01], [14, 46.02], [14, 46.03]];
  const spur: LonLat[] = [[14, 46.01], [14.02, 46.01]];

  it('keeps the part between the two places and drops a side piece', () => {
    expect(pathBetween([main, spur], [14, 46.0001], [14, 46.0299])).toEqual([main]);
    expect(pathBetween([main, spur], [14, 46.011], [14, 46.02])).toEqual([[[14, 46.01], [14, 46.02]]]);
  });

  it('runs from the first place to the second, whichever way the lines are stored', () => {
    const walked = pathBetween([main], [14, 46.03], [14, 46]);
    expect(walked).toEqual([[...main].reverse()]);
  });

  it('takes the shorter of two variants', () => {
    const detour: LonLat[] = [[14, 46.01], [14.05, 46.015], [14, 46.02]];
    expect(pathBetween([main, detour], [14, 46], [14, 46.03])).toEqual([main]);
  });

  it('steps over a short gap and leaves it open', () => {
    const before: LonLat[] = [[14, 46], [14, 46.01]];
    const after: LonLat[] = [[14, 46.015], [14, 46.03]];
    expect(pathBetween([before, after], [14, 46], [14, 46.03])).toEqual([before, after]);
  });

  it('finds no way across a gap that is too long', () => {
    const far: LonLat[] = [[14, 46.2], [14, 46.3]];
    expect(pathBetween([[[14, 46], [14, 46.01]], far], [14, 46], [14, 46.3])).toEqual([]);
  });

  it('joins overlapping routes into one walk', () => {
    const first: LonLat[] = [[14, 46], [14, 46.01], [14.02, 46.01]];
    const second: LonLat[] = [[14, 46.01], [14, 46.02]];
    expect(pathBetween([first, second], [14, 46], [14, 46.02])).toEqual([[[14, 46], [14, 46.01], [14, 46.02]]]);
  });
});
