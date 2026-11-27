/** Ordering of treks in a list. */

/**
 * How well established a trek is, as a number: more signals rank higher.
 * The spec only says treks are "sorted by establishment signals"; counting them
 * is the simplest reading. Change this one function to weight signals differently.
 */
export function establishmentScore(signals: string[]): number {
  return signals.length;
}

/** Best established first; ties in alphabetical order. */
export function byEstablishment<T extends { establishment: number; name: string }>(a: T, b: T): number {
  return b.establishment - a.establishment || a.name.localeCompare(b.name);
}
