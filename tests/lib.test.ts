import { describe, expect, it } from 'vitest';
import { gainLoss, smooth } from '../src/lib/ascent';
import { commonsFileTitle, commonsPageUrl } from '../src/lib/commons';
import { formatDays, formatMonths } from '../src/lib/format';
import { bboxIntersects, bboxOf, distanceM, lineLengthM, pointAtFraction, resample, roundLine } from '../src/lib/geo';
import { isAllowedLicense } from '../src/lib/license';
import type { LonLat } from '../src/data/types';

describe('licences', () => {
  it.each(['CC0', 'CC0 1.0', 'CC BY 2.0', 'CC BY-SA 4.0', 'cc-by-sa-3.0', 'CC BY-SA 3.0 at', 'Public domain', 'PD-old'])(
    'allows %s',
    (license) => expect(isAllowedLicense(license)).toBe(true),
  );
  it.each(['CC BY-NC 4.0', 'CC BY-ND 2.0', 'CC BY-NC-SA 3.0', 'GFDL', 'All rights reserved', 'Copyrighted free use', ''])(
    'refuses %s',
    (license) => expect(isAllowedLicense(license)).toBe(false),
  );
});

describe('Commons URLs', () => {
  it('reads the file title from a file page', () => {
    expect(commonsFileTitle('https://commons.wikimedia.org/wiki/File:Lake_Jasna_(Kranjska_Gora).jpg')).toBe(
      'File:Lake Jasna (Kranjska Gora).jpg',
    );
    expect(commonsFileTitle('https://commons.wikimedia.org/wiki/File:So%C4%8Da_River.jpg')).toBe('File:Soča River.jpg');
  });

  it('reads the file title from an upload URL and from a thumbnail URL', () => {
    expect(commonsFileTitle('https://upload.wikimedia.org/wikipedia/commons/a/ab/Bohinj_lake_01.jpg')).toBe('File:Bohinj lake 01.jpg');
    expect(
      commonsFileTitle('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bohinj_lake_01.jpg/960px-Bohinj_lake_01.jpg'),
    ).toBe('File:Bohinj lake 01.jpg');
  });

  it('refuses other sites and Wikipedia-only uploads', () => {
    expect(commonsFileTitle('https://example.org/wiki/File:One.jpg')).toBeUndefined();
    expect(commonsFileTitle('https://upload.wikimedia.org/wikipedia/en/a/ab/Logo.png')).toBeUndefined();
    expect(commonsFileTitle('https://commons.wikimedia.org/wiki/Category:Lakes')).toBeUndefined();
  });

  it('builds the file page URL', () => {
    expect(commonsPageUrl('File:Bohinj lake 01.jpg')).toBe('https://commons.wikimedia.org/wiki/File:Bohinj_lake_01.jpg');
  });
});

describe('geometry', () => {
  // One degree of latitude is about 111.2 km.
  const line: LonLat[] = [
    [14, 46],
    [14, 46.01],
    [14, 46.02],
  ];

  it('measures distance', () => {
    expect(distanceM([14, 46], [14, 47])).toBeCloseTo(111_195, -2);
    expect(lineLengthM(line)).toBeCloseTo(2224, -1);
  });

  it('resamples at a fixed step and keeps both ends', () => {
    const points = resample(line, 500);
    expect(points[0]).toEqual(line[0]);
    expect(points.at(-1)).toEqual(line[2]);
    expect(points).toHaveLength(6); // 0, 500, 1000, 1500, 2000 m and the end
    expect(distanceM(points[0], points[1])).toBeCloseTo(500, 0);
    expect(distanceM(points[3], points[4])).toBeCloseTo(500, 0);
  });

  it('finds the midpoint across several lines', () => {
    const second: LonLat[] = [
      [15, 46.02],
      [15, 46.04],
    ];
    // 2.2 km + 2.2 km: the halfway point is the end of the first line.
    const [lon, lat] = pointAtFraction([line, second], 0.5);
    expect(lon).toBeCloseTo(14, 5);
    expect(lat).toBeCloseTo(46.02, 4);
    expect(pointAtFraction([line], 1)).toEqual(line[2]);
  });

  it('computes and compares bounding boxes', () => {
    expect(bboxOf([line])).toEqual([14, 46, 14, 46.02]);
    expect(bboxIntersects([13, 45, 15, 47], [14, 46, 14, 46.02])).toBe(true);
    expect(bboxIntersects([10, 45, 13, 47], [14, 46, 14, 46.02])).toBe(false);
  });

  it('rounds coordinates and drops the duplicates that creates', () => {
    expect(
      roundLine(
        [
          [14.000001, 46.000001],
          [14.000002, 46.000002],
          [14.1, 46.1],
        ],
        4,
      ),
    ).toEqual([
      [14, 46],
      [14.1, 46.1],
    ]);
  });
});

describe('ascent', () => {
  it('smooths with a centred moving average', () => {
    expect(smooth([0, 3, 0, 3, 0], 3)).toEqual([1.5, 1, 2, 1, 1.5]);
  });

  it('counts climbs and drops', () => {
    expect(gainLoss([100, 150, 200, 150, 300], 5)).toEqual({ ascent: 250, descent: 50 });
  });

  it('ignores wiggles below the threshold', () => {
    const noisy = [100, 103, 99, 102, 98, 101, 100];
    expect(gainLoss(noisy, 5)).toEqual({ ascent: 0, descent: 0 });
    expect(gainLoss(noisy, 1).ascent).toBeGreaterThan(0);
  });

  it('handles an empty profile', () => {
    expect(gainLoss([], 5)).toEqual({ ascent: 0, descent: 0 });
  });
});

describe('formatting', () => {
  it('writes days', () => {
    expect(formatDays(7, 11)).toBe('7–11 days');
    expect(formatDays(8, 8)).toBe('8 days');
  });

  it('writes months as ranges', () => {
    expect(formatMonths([6, 7, 8, 9])).toBe('June–September');
    expect(formatMonths([9, 5, 6])).toBe('May–June, September');
    expect(formatMonths([7])).toBe('July');
  });
});
