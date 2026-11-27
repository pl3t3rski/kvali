/**
 * Puts a hand-drawn layer behind an element: its frame, highlight or underline.
 *
 * The drawing is an SVG laid over the element's box and redrawn when the box changes
 * size. One mechanism serves the whole site:
 *   - in Svelte, the `pen` action: `<button use:pen={{ kind: 'chip', selected }}>`
 *   - in static pages, a `data-pen` attribute, picked up by `enhance()`:
 *     `<div data-pen="frame" data-pen-fill="butter">`
 *
 * Replaces CSS borders, underlines and backgrounds, as the design system asks.
 */
import { PEN, frameD, loopD, patchD, rngFrom, underlineD, type PenWeight, type Rng } from './pen';

export type PenKind = 'frame' | 'chip' | 'button' | 'card' | 'mark';

export interface PenOptions {
  kind: PenKind;
  /** frame: line weight. Default regular. */
  weight?: PenWeight;
  /** frame: a butter fill for the one thing on a screen that must be seen. */
  fill?: 'butter';
  /** chip, card: the selected state. */
  selected?: boolean;
  /** button: primary is a painted patch, secondary a frame, quiet an underline. */
  variant?: 'primary' | 'secondary' | 'quiet';
  /** mark: how the words are emphasised. */
  mark?: 'highlight' | 'underline' | 'circle';
  /** Fix the drawing, for example in a screenshot test. Otherwise every element gets its own. */
  seed?: string;
}

interface Stroke {
  d: string;
  cls: string;
}

function strokes(o: PenOptions, W: number, H: number, r: Rng): Stroke[] {
  switch (o.kind) {
    case 'frame': {
      const pen = PEN[o.weight ?? 'regular'];
      return o.fill === 'butter'
        ? [
            { d: patchD(0, 0, W, H, r, 3), cls: 'kv-fill-butter' },
            { d: frameD(8, 8, W - 16, H - 16, pen, r, 2), cls: 'kv-ink-on' },
          ]
        : [{ d: frameD(4, 4, W - 8, H - 8, pen, r, 4), cls: 'kv-ink' }];
    }
    case 'chip':
      return o.selected
        ? [
            { d: patchD(0, 3, W, H - 6, r, 2), cls: 'kv-fill-butter' },
            { d: frameD(5, 8, W - 10, H - 16, PEN.regular, r, 1), cls: 'kv-ink-on' },
          ]
        : [{ d: frameD(3, 6, W - 6, H - 12, PEN.fine, r, 2), cls: 'kv-ink' }];
    case 'button':
      if (o.variant === 'primary') return [{ d: patchD(1, 2, W - 2, H - 4, r, 2.4), cls: 'kv-fill-action' }];
      if (o.variant === 'quiet') return [{ d: underlineD(6, H - 9, W - 12, PEN.regular, r), cls: 'kv-ink' }];
      return [
        { d: patchD(0, 1, W, H - 2, r, 2), cls: 'kv-fill-butter kv-hover' },
        { d: frameD(4, 4, W - 8, H - 8, PEN.regular, r, 3), cls: 'kv-ink' },
      ];
    case 'card':
      return [{ d: frameD(4, 4, W - 8, H - 8, o.selected ? PEN.bold : PEN.fine, r, 4), cls: 'kv-ink' }];
    case 'mark':
      if (o.mark === 'underline') return [{ d: underlineD(-2, H - 1, W + 4, PEN.regular, r), cls: 'kv-ink' }];
      if (o.mark === 'circle') return [{ d: loopD(W / 2, H / 2, W / 2 + 12, H / 2 + 6, PEN.regular, r), cls: 'kv-ink' }];
      return [{ d: patchD(-5, H * 0.12, W + 10, H * 0.8, r, 2), cls: 'kv-fill-butter' }];
  }
}

const SVG = 'http://www.w3.org/2000/svg';
let counter = 0;

export interface Sketch {
  update(options: PenOptions): void;
  destroy(): void;
}

export function attach(node: HTMLElement, initial: PenOptions): Sketch {
  let options = initial;
  // No two lines on a screen should match: each element draws from its own seed.
  const own = `kv${counter++}`;
  let stroke = 0;

  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('class', 'kv-sketch');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  node.classList.add('kv-pen');
  node.prepend(svg);

  const draw = () => {
    const W = node.offsetWidth;
    const H = node.offsetHeight;
    if (!W || !H) return;
    svg.setAttribute('width', String(W));
    svg.setAttribute('height', String(H));
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const state = `${options.selected ? 'on' : 'off'}:${stroke}`;
    const r = rngFrom(`${options.seed ?? own}:${state}`);
    svg.replaceChildren(
      ...strokes(options, W, H, r).map((item) => {
        const path = document.createElementNS(SVG, 'path');
        path.setAttribute('d', item.d);
        path.setAttribute('class', item.cls);
        return path;
      }),
    );
  };

  const observer = new ResizeObserver(draw);
  observer.observe(node);
  // A button or a card redraws its outline on hover. That is its hover state.
  const redraw = () => {
    stroke++;
    draw();
  };
  const hovers = options.kind === 'button' || options.kind === 'card';
  if (hovers) node.addEventListener('pointerenter', redraw);

  return {
    update(next) {
      options = next;
      draw();
    },
    destroy() {
      observer.disconnect();
      if (hovers) node.removeEventListener('pointerenter', redraw);
      svg.remove();
    },
  };
}

/** Svelte action. */
export function pen(node: HTMLElement, options: PenOptions) {
  const sketch = attach(node, options);
  return { update: (next: PenOptions) => sketch.update(next), destroy: () => sketch.destroy() };
}

/** Draw every element in the page that asks for it with a `data-pen` attribute. For static pages. */
export function enhance(root: ParentNode = document): void {
  for (const node of root.querySelectorAll<HTMLElement>('[data-pen]:not(.kv-pen)')) {
    const data = node.dataset;
    attach(node, {
      kind: data.pen as PenKind,
      weight: data.penWeight as PenWeight | undefined,
      fill: data.penFill === 'butter' ? 'butter' : undefined,
      variant: data.penVariant as PenOptions['variant'],
      mark: data.penMark as PenOptions['mark'],
      selected: data.penSelected === 'true',
      seed: data.penSeed,
    });
  }
}
