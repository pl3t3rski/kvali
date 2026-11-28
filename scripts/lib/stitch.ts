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

/** A gap up to this long may be stepped over when walking from one place to another. */
export const BRIDGE_MAX_M = 3000;
/** Stepping over a gap counts as this many times its length, so mapped ways are preferred. */
const BRIDGE_COST = 4;

/**
 * The way from one place to another along the mapped lines, by the shortest walk.
 *
 * Each place is matched to the nearest point of the lines. Lines connect where they share
 * a point. A gap between two line ends may be stepped over if it is short; the result is
 * then several lines, with the gap left open. Side pieces and second variants that are
 * not on the shortest walk fall away, and the result runs from the first place to the second.
 *
 * Returns no lines when the two places are not connected.
 */
export function pathBetween(lines: LonLat[][], from: LonLat, to: LonLat): LonLat[][] {
  const key = (point: LonLat) => `${point[0]},${point[1]}`;
  const points = new Map<string, LonLat>();
  const edges = new Map<string, { to: string; cost: number; bridge: boolean }[]>();
  const link = (a: LonLat, b: LonLat, cost: number, bridge: boolean) => {
    const ka = key(a);
    const kb = key(b);
    if (ka === kb) return;
    points.set(ka, a);
    points.set(kb, b);
    (edges.get(ka) ?? edges.set(ka, []).get(ka)!).push({ to: kb, cost, bridge });
    (edges.get(kb) ?? edges.set(kb, []).get(kb)!).push({ to: ka, cost, bridge });
  };

  const usable = lines.filter((line) => line.length >= 2);
  for (const line of usable) {
    for (let i = 1; i < line.length; i++) link(line[i - 1], line[i], distanceM(line[i - 1], line[i]), false);
  }
  const ends = usable.flatMap((line, index) => [
    { point: first(line), line: index },
    { point: last(line), line: index },
  ]);
  for (let i = 0; i < ends.length; i++) {
    for (let j = i + 1; j < ends.length; j++) {
      if (ends[i].line === ends[j].line) continue;
      const gap = distanceM(ends[i].point, ends[j].point);
      if (gap > 0 && gap <= BRIDGE_MAX_M) link(ends[i].point, ends[j].point, gap * BRIDGE_COST, true);
    }
  }

  const nearest = (place: LonLat) => {
    let best: string | undefined;
    let bestDistance = Infinity;
    for (const [k, point] of points) {
      const distance = distanceM(place, point);
      if (distance < bestDistance) [best, bestDistance] = [k, distance];
    }
    return best;
  };
  const start = nearest(from);
  const goal = nearest(to);
  if (!start || !goal) return [];

  // Dijkstra with a binary heap.
  const cost = new Map<string, number>([[start, 0]]);
  const previous = new Map<string, { from: string; bridge: boolean }>();
  const heap: [number, string][] = [[0, start]];
  const pop = () => {
    const top = heap[0];
    const tail = heap.pop()!;
    if (heap.length > 0) {
      heap[0] = tail;
      let i = 0;
      for (;;) {
        const left = 2 * i + 1;
        const right = left + 1;
        let smallest = i;
        if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
        if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return top;
  };
  const push = (item: [number, string]) => {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (heap[parent][0] <= heap[i][0]) break;
      [heap[i], heap[parent]] = [heap[parent], heap[i]];
      i = parent;
    }
  };
  while (heap.length > 0) {
    const [walked, at] = pop();
    if (at === goal) break;
    if (walked > (cost.get(at) ?? Infinity)) continue;
    for (const edge of edges.get(at) ?? []) {
      const next = walked + edge.cost;
      if (next < (cost.get(edge.to) ?? Infinity)) {
        cost.set(edge.to, next);
        previous.set(edge.to, { from: at, bridge: edge.bridge });
        push([next, edge.to]);
      }
    }
  }
  if (start !== goal && !previous.has(goal)) return [];

  // Walk back from the goal, starting a new line wherever a gap was stepped over.
  const result: LonLat[][] = [[points.get(goal)!]];
  for (let at = goal; at !== start; ) {
    const step = previous.get(at)!;
    if (step.bridge) result.unshift([]);
    result[0].unshift(points.get(step.from)!);
    at = step.from;
  }
  return result.filter((line) => line.length >= 2);
}
