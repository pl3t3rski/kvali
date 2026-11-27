/** Plain geometry helpers on [longitude, latitude] pairs. No dependencies; safe in the browser. */
import type { LineString, MultiLineString } from 'geojson';
import type { BBox, LonLat } from '../data/types';

const EARTH_RADIUS_M = 6371008.8;
const toRad = (degrees: number) => (degrees * Math.PI) / 180;

/** Great-circle distance in metres. */
export function distanceM(a: LonLat, b: LonLat): number {
  const dLat = toRad(b[1] - a[1]);
  const dLon = toRad(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a[1])) * Math.cos(toRad(b[1])) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_M * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function lineLengthM(line: LonLat[]): number {
  let total = 0;
  for (let i = 1; i < line.length; i++) total += distanceM(line[i - 1], line[i]);
  return total;
}

/** The lines of a LineString or MultiLineString. */
export function linesOf(geometry: LineString | MultiLineString): LonLat[][] {
  const lines = geometry.type === 'LineString' ? [geometry.coordinates] : geometry.coordinates;
  return lines.map((line) => line.map(([lon, lat]) => [lon, lat] as LonLat));
}

/** A LineString for one line, a MultiLineString for several. */
export function geometryOf(lines: LonLat[][]): LineString | MultiLineString {
  return lines.length === 1
    ? { type: 'LineString', coordinates: lines[0] }
    : { type: 'MultiLineString', coordinates: lines };
}

const lerp = (a: LonLat, b: LonLat, t: number): LonLat => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

/**
 * Points every `stepM` metres along a line, always including the first and last point.
 */
export function resample(line: LonLat[], stepM: number): LonLat[] {
  if (line.length === 0) return [];
  const points: LonLat[] = [line[0]];
  let untilNext = stepM;
  for (let i = 1; i < line.length; i++) {
    const from = line[i - 1];
    const to = line[i];
    const segment = distanceM(from, to);
    let walked = 0;
    while (segment - walked >= untilNext) {
      walked += untilNext;
      points.push(lerp(from, to, walked / segment));
      untilNext = stepM;
    }
    untilNext -= segment - walked;
  }
  const last = line[line.length - 1];
  const previous = points[points.length - 1];
  if (line.length > 1 && (previous[0] !== last[0] || previous[1] !== last[1])) points.push(last);
  return points;
}

/** The point at `fraction` (0–1) of the total length of the lines, walked in order. */
export function pointAtFraction(lines: LonLat[][], fraction: number): LonLat {
  const total = lines.reduce((sum, line) => sum + lineLengthM(line), 0);
  let remaining = total * Math.min(1, Math.max(0, fraction));
  for (const line of lines) {
    for (let i = 1; i < line.length; i++) {
      const segment = distanceM(line[i - 1], line[i]);
      if (remaining <= segment) return segment === 0 ? line[i] : lerp(line[i - 1], line[i], remaining / segment);
      remaining -= segment;
    }
  }
  const lastLine = lines[lines.length - 1];
  return lastLine[lastLine.length - 1];
}

export function bboxOf(lines: LonLat[][]): BBox {
  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;
  for (const line of lines) {
    for (const [lon, lat] of line) {
      if (lon < west) west = lon;
      if (lon > east) east = lon;
      if (lat < south) south = lat;
      if (lat > north) north = lat;
    }
  }
  return [west, south, east, north];
}

/** True if two boxes overlap or touch. */
export function bboxIntersects(a: BBox, b: BBox): boolean {
  return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
}

/** Round every coordinate to `decimals` places and drop points that become duplicates. */
export function roundLine(line: LonLat[], decimals: number): LonLat[] {
  const factor = 10 ** decimals;
  const rounded: LonLat[] = [];
  for (const [lon, lat] of line) {
    const point: LonLat = [Math.round(lon * factor) / factor, Math.round(lat * factor) / factor];
    const previous = rounded[rounded.length - 1];
    if (!previous || previous[0] !== point[0] || previous[1] !== point[1]) rounded.push(point);
  }
  return rounded;
}
