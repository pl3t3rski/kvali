/** Turning a noisy elevation profile into ascent and descent totals. */

/** Centred moving average over `window` samples (an odd number). */
export function smooth(values: number[], window: number): number[] {
  const half = Math.floor(window / 2);
  return values.map((_, index) => {
    const from = Math.max(0, index - half);
    const to = Math.min(values.length - 1, index + half);
    let sum = 0;
    for (let i = from; i <= to; i++) sum += values[i];
    return sum / (to - from + 1);
  });
}

/**
 * Total climb and drop along a profile. A change only counts once it passes
 * `thresholdM` from the last counted point, so small wiggles in the elevation
 * data do not inflate the totals.
 */
export function gainLoss(elevations: number[], thresholdM: number): { ascent: number; descent: number } {
  let ascent = 0;
  let descent = 0;
  if (elevations.length === 0) return { ascent, descent };
  let reference = elevations[0];
  for (const elevation of elevations) {
    const change = elevation - reference;
    if (change >= thresholdM) {
      ascent += change;
      reference = elevation;
    } else if (change <= -thresholdM) {
      descent -= change;
      reference = elevation;
    }
  }
  return { ascent, descent };
}
