/**
 * Joins the ways of a route into as few continuous lines as possible.
 *
 * A way is a list of OSM node ids. Two ways join when they share an end node.
 */
import { distanceM } from '../../src/lib/geo';
import type { LonLat, RouteGap } from '../../src/data/types';

const first = <T>(list: T[]) => list[0];
const last = <T>(list: T[]) => list[list.length - 1];

/**
 * Pass 1: walk the ways in route order and chain each one to the line so far.
 * Pass 2: join leftover lines that share an end node, for routes whose ways are out of order.
 */
export function stitchWays(ways: number[][]): number[][] {
  const lines: number[][] = [];
  let current: number[] | undefined;
  let currentIsSingleWay = false;

  for (const way of ways) {
    if (way.length < 2) continue;
    if (!current) {
      current = [...way];
      currentIsSingleWay = true;
      continue;
    }
    const tail = last(current);
    if (first(way) === tail) {
      current.push(...way.slice(1));
    } else if (last(way) === tail) {
      current.push(...[...way].reverse().slice(1));
    } else if (currentIsSingleWay && first(way) === first(current)) {
      // The first way of a line was stored the wrong way round.
      current.reverse();
      current.push(...way.slice(1));
    } else if (currentIsSingleWay && last(way) === first(current)) {
      current.reverse();
      current.push(...[...way].reverse().slice(1));
    } else {
      lines.push(current);
      current = [...way];
      currentIsSingleWay = true;
      continue;
    }
    currentIsSingleWay = false;
  }
  if (current) lines.push(current);

  let merged = true;
  while (merged) {
    merged = false;
    search: for (let i = 0; i < lines.length; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        const a = lines[i];
        const b = lines[j];
        // A closed line (a loop) has nothing left to join.
        if (first(a) === last(a) || first(b) === last(b)) continue;
        let joined: number[] | undefined;
        if (last(a) === first(b)) joined = [...a, ...b.slice(1)];
        else if (last(a) === last(b)) joined = [...a, ...[...b].reverse().slice(1)];
        else if (first(a) === last(b)) joined = [...b, ...a.slice(1)];
        else if (first(a) === first(b)) joined = [...[...b].reverse(), ...a.slice(1)];
        if (joined) {
          lines[i] = joined;
          lines.splice(j, 1);
          merged = true;
          break search;
        }
      }
    }
  }
  return lines;
}

/**
 * Put the lines in walking order and measure the breaks between them.
 *
 * The chain starts with the first line and grows at whichever end has the
 * nearest unused line, so pieces that are stored out of order still end up
 * next to their neighbours. The result keeps the direction of the source.
 */
export function orientLines(lines: LonLat[][]): { lines: LonLat[][]; gaps: RouteGap[] } {
  const pieces = lines.filter((line) => line.length >= 2).map((line, index) => ({ line: [...line], index }));
  if (pieces.length === 0) return { lines: [], gaps: [] };

  const chain = [pieces[0]];
  const unused = pieces.slice(1);
  while (unused.length > 0) {
    const head = first(chain[0].line);
    const tail = last(last(chain).line);
    let best = { distance: Infinity, at: 0, append: true, reverse: false };
    unused.forEach((piece, at) => {
      const options = [
        { distance: distanceM(tail, first(piece.line)), append: true, reverse: false },
        { distance: distanceM(tail, last(piece.line)), append: true, reverse: true },
        { distance: distanceM(head, last(piece.line)), append: false, reverse: false },
        { distance: distanceM(head, first(piece.line)), append: false, reverse: true },
      ];
      for (const option of options) if (option.distance < best.distance) best = { ...option, at };
    });
    const [piece] = unused.splice(best.at, 1);
    if (best.reverse) piece.line.reverse();
    if (best.append) chain.push(piece);
    else chain.unshift(piece);
  }

  // Growing at the head can leave the chain running against the source order; turn it back.
  let forward = 0;
  for (let i = 1; i < chain.length; i++) forward += chain[i].index > chain[i - 1].index ? 1 : -1;
  if (forward < 0) {
    chain.reverse();
    for (const piece of chain) piece.line.reverse();
  }

  const ordered = chain.map((piece) => piece.line);
  const gaps: RouteGap[] = [];
  for (let i = 1; i < ordered.length; i++) {
    const from = last(ordered[i - 1]);
    const to = first(ordered[i]);
    gaps.push({ from, to, length_m: Math.round(distanceM(from, to)) });
  }
  return { lines: ordered, gaps };
}

/**
 * Keep only the part of a route between two places. The lines must already be in walking
 * order. Each place is matched to the nearest point of the route; what lies between stays.
 */
export function cutSection(lines: LonLat[][], from: LonLat, to: LonLat): LonLat[][] {
  const nearest = (place: LonLat) => {
    let best = { line: 0, point: 0, distance: Infinity };
    lines.forEach((line, lineIndex) => {
      line.forEach((point, pointIndex) => {
        const distance = distanceM(place, point);
        if (distance < best.distance) best = { line: lineIndex, point: pointIndex, distance };
      });
    });
    return best;
  };
  let a = nearest(from);
  let b = nearest(to);
  const reversed = a.line > b.line || (a.line === b.line && a.point > b.point);
  if (reversed) [a, b] = [b, a];
  const section = lines
    .map((line, index) => {
      if (index < a.line || index > b.line) return [];
      const start = index === a.line ? a.point : 0;
      const end = index === b.line ? b.point : line.length - 1;
      return line.slice(start, end + 1);
    })
    .filter((line) => line.length >= 2);
  // Keep the direction asked for: from the first place to the second.
  return reversed ? section.reverse().map((line) => [...line].reverse()) : section;
}
