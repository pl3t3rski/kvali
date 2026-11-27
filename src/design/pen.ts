/**
 * The pen: seeded, hand-drawn geometry.
 *
 * Ported from the Kvali design system (components/bundle.js, `Kvali.pen`). Every drawn
 * line on the site comes from these functions, so frames, underlines and rings all look
 * made by the same hand. A seed makes a drawing repeatable; a new seed redraws it.
 */

export type Point = [number, number];
export type Rng = () => number;

/** Line widths of the one pen, in px. Same as the pen tokens. */
export const PEN = { fine: 2.2, regular: 3.2, bold: 4.6 } as const;
export type PenWeight = keyof typeof PEN;

export function rngFrom(seed: string | number): Rng {
  let s = 0;
  const text = String(seed);
  for (let i = 0; i < text.length; i++) s = (Math.imul(s, 31) + text.charCodeAt(i)) | 0;
  s = (s ^ 0x9e3779b9) >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const between = (r: Rng, a: number, b: number) => a + (b - a) * r();
const round = (value: number) => Math.round(value * 10) / 10;
const dist = (a: Point, b: Point) => Math.hypot(b[0] - a[0], b[1] - a[1]);

function noise(r: Rng, lo: number, hi: number): (s: number) => number {
  const waves: [number, number, number][] = [];
  let total = 0;
  for (let i = 0; i < 3; i++) {
    const amp = between(r, 0.5, 1);
    waves.push([between(r, lo, hi), between(r, 0, 6.283), amp]);
    total += amp;
  }
  return (s) => waves.reduce((sum, wave) => sum + wave[2] * Math.sin(s / wave[0] + wave[1]), 0) / total;
}

/** A smooth curve through the points, as a list of close-set points. */
export function catPts(pts: Point[], step = 3, closed = false): Point[] {
  const P = closed ? [pts[pts.length - 1], ...pts, pts[0], pts[1]] : [pts[0], ...pts, pts[pts.length - 1]];
  const out: Point[] = [];
  for (let i = 1; i < P.length - 2; i++) {
    const p0 = P[i - 1];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[i + 2];
    const n = Math.max(2, Math.floor(dist(p1, p2) / step));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      const t2 = t * t;
      const t3 = t2 * t;
      const q: Point = [0, 0];
      for (let j = 0; j < 2; j++) {
        q[j] = 0.5 * (2 * p1[j] + (-p0[j] + p2[j]) * t + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t2 + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t3);
      }
      out.push(q);
    }
  }
  out.push(P[P.length - 2]);
  return out;
}

const toPath = (points: Point[]) => `M${points.map((p) => `${round(p[0])} ${round(p[1])}`).join('L')}Z`;

/** A pen stroke as a filled outline: the width breathes, the line wanders, the ends thin out. */
export function brush(pts: Point[], w: number, r: Rng, options: { wob?: number; taper?: number; vary?: number } = {}): string {
  const n = pts.length;
  const S = [0];
  for (let i = 1; i < n; i++) S.push(S[i - 1] + dist(pts[i - 1], pts[i]));
  const L = S[n - 1] || 1;
  const wob = options.wob ?? Math.min(1.7, 0.3 + L * 0.006);
  const taper = options.taper ?? 0.5;
  const vary = options.vary ?? 0.17;
  const wander = noise(r, 14, 55);
  const breathe = noise(r, 25, 90);
  const tangent = (Q: Point[], i: number): Point => {
    const a = Q[Math.max(0, i - 1)];
    const b = Q[Math.min(n - 1, i + 1)];
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const d = Math.hypot(dx, dy) || 1;
    return [dx / d, dy / d];
  };
  const C: Point[] = [];
  for (let i = 0; i < n; i++) {
    const t = tangent(pts, i);
    const d = wob * wander(S[i]);
    C.push([pts[i][0] - t[1] * d, pts[i][1] + t[0] * d]);
  }
  const left: Point[] = [];
  const right: Point[] = [];
  for (let i = 0; i < n; i++) {
    const t = tangent(C, i);
    const fromEnd = Math.min(S[i], L - S[i]);
    const thin = taper + (1 - taper) * Math.min(1, fromEnd / (1.3 * w));
    const half = (w / 2) * thin * (1 + vary * breathe(S[i]));
    left.push([C[i][0] - t[1] * half, C[i][1] + t[0] * half]);
    right.push([C[i][0] + t[1] * half, C[i][1] - t[0] * half]);
  }
  const t0 = tangent(C, 0);
  const t1 = tangent(C, n - 1);
  const h0 = (w / 2) * taper;
  return toPath([
    ...left,
    [C[n - 1][0] + t1[0] * h0, C[n - 1][1] + t1[1] * h0],
    ...right.reverse(),
    [C[0][0] - t0[0] * h0, C[0][1] - t0[1] * h0],
  ]);
}

/** A straight line drawn by hand: it bows a little and may overshoot its ends. */
export function line(a: Point, b: Point, w: number, r: Rng, over = 0): string {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const d = Math.hypot(dx, dy) || 1;
  const ux = dx / d;
  const uy = dy / d;
  const o1 = over * between(r, 0.4, 1.2);
  const o2 = over * between(r, 0.4, 1.2);
  const a2: Point = [a[0] - ux * o1, a[1] - uy * o1];
  const b2: Point = [b[0] + ux * o2, b[1] + uy * o2];
  const bow = between(r, -1, 1) * Math.min(d * 0.014, 3);
  return brush(catPts([a2, [(a2[0] + b2[0]) / 2 - uy * bow, (a2[1] + b2[1]) / 2 + ux * bow], b2]), w, r);
}

/** Four separate strokes that cross a little at the corners. */
export function frameD(x: number, y: number, W: number, H: number, pen: number, r: Rng, over = 3): string {
  const j = () => between(r, -1.4, 1.4);
  const a: Point = [x + j(), y + j()];
  const b: Point = [x + W + j(), y + j()];
  const c: Point = [x + W + j(), y + H + j()];
  const d: Point = [x + j(), y + H + j()];
  return [line(a, b, pen, r, over), line(b, c, pen, r, over), line(c, d, pen, r, over), line(d, a, pen, r, over)].join(' ');
}

/** A painted patch: the highlighter stroke, and the fill of a primary button. */
export function patchD(x: number, y: number, W: number, H: number, r: Rng, j = 2.2): string {
  const q = () => between(r, -j, j);
  const pts: Point[] = [
    [x + q(), y + H * 0.12],
    [x + q(), y + H * 0.88],
    [x + W * 0.22, y + H + q()],
    [x + W * 0.55, y + H + q()],
    [x + W * 0.86, y + H + q()],
    [x + W + between(r, 0, j * 2), y + H * 0.72],
    [x + W + q(), y + H * 0.16],
    [x + W * 0.82, y + q()],
    [x + W * 0.5, y + q()],
    [x + W * 0.16, y + q()],
  ];
  return toPath(catPts(pts, 2, true));
}

export function underlineD(x: number, y: number, W: number, pen: number, r: Rng): string {
  return brush(
    catPts([
      [x, y + between(r, -1, 1)],
      [x + W * 0.3, y - 1.5 + between(r, -1, 1)],
      [x + W * 0.64, y + 2 + between(r, -1, 1)],
      [x + W, y - 0.5 + between(r, -1, 1)],
    ]),
    pen,
    r,
  );
}

/** A hand-drawn ring: it does not quite close and overlaps where it started. */
export function loopD(cx: number, cy: number, rx: number, ry: number, pen: number, r: Rng): string {
  const n = 26;
  const m = Math.round(n * 1.1);
  const a0 = between(r, 0, 6.283);
  const phase = between(r, 0, 6.283);
  const spiral = (r() < 0.5 ? -1 : 1) * 0.07;
  const pts: Point[] = [];
  for (let i = 0; i <= m; i++) {
    const a = a0 - (i * 2 * Math.PI) / n;
    const k = 1 + 0.042 * Math.sin(i * 0.8 + phase) + spiral * (i / m - 0.5);
    pts.push([cx + rx * k * Math.cos(a), cy + ry * k * Math.sin(a)]);
  }
  return brush(catPts(pts), pen, r);
}
