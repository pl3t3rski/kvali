/** Reading the track lines out of a GPX file. */
import { XMLParser } from 'fast-xml-parser';
import type { LonLat } from '../../src/data/types';

interface GpxPoint {
  '@_lat': string;
  '@_lon': string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  isArray: (name) => ['trk', 'trkseg', 'trkpt', 'rte', 'rtept'].includes(name),
});

const toLine = (points: GpxPoint[] = []): LonLat[] =>
  points
    .map((point) => [Number(point['@_lon']), Number(point['@_lat'])] as LonLat)
    .filter(([lon, lat]) => Number.isFinite(lon) && Number.isFinite(lat));

/** One line per track segment; if the file has no tracks, one line per route. */
export function parseGpx(xml: string): LonLat[][] {
  const gpx = parser.parse(xml)?.gpx;
  if (!gpx) throw new Error('Not a GPX file');
  const lines: LonLat[][] = [];
  for (const track of gpx.trk ?? []) {
    for (const segment of track.trkseg ?? []) lines.push(toLine(segment.trkpt));
  }
  if (lines.length === 0) {
    for (const route of gpx.rte ?? []) lines.push(toLine(route.rtept));
  }
  const usable = lines.filter((line) => line.length >= 2);
  if (usable.length === 0) throw new Error('The GPX file has no track or route points');
  return usable;
}
