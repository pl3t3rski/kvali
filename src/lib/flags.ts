/**
 * The facts of a trek as flags: an icon and a word, as the design system shows them.
 * The first flag says where you sleep. A warning is something to plan around.
 */
import type { IconName } from '../design/icon-names';
import type { Permit, SleepingType, Waymarked } from '../schema/values';
import { MONTHS, SLEEPING_LABELS } from './format';

export interface TrekFlag {
  icon?: IconName;
  label: string;
  tone?: 'warning';
}

export interface FlagFacts {
  sleeping?: SleepingType;
  best_months: number[];
  permit?: Permit;
  waymarked?: Waymarked;
  water_scarce?: boolean;
  exposed_or_via_ferrata?: boolean;
}

const SLEEPING_ICONS: Partial<Record<SleepingType, IconName>> = { huts: 'hut', guesthouses: 'guesthouse', camping: 'camping' };

/** "Jun to Sep", or "Jul" for one month. Only for an unbroken run of months. */
export function seasonLabel(months: number[]): string | undefined {
  const sorted = [...new Set(months)].sort((a, b) => a - b);
  if (sorted.length === 0) return undefined;
  const unbroken = sorted.every((month, index) => index === 0 || month === sorted[index - 1] + 1);
  if (!unbroken) return undefined;
  const short = (month: number) => MONTHS[month - 1].slice(0, 3);
  return sorted.length === 1 ? short(sorted[0]) : `${short(sorted[0])} to ${short(sorted[sorted.length - 1])}`;
}

/** Every flag a trek has, the plain ones first and the warnings last. */
export function trekFlags(facts: FlagFacts): TrekFlag[] {
  const flags: TrekFlag[] = [];
  if (facts.sleeping) flags.push({ icon: SLEEPING_ICONS[facts.sleeping], label: facts.sleeping === 'mixed' ? 'Mixed sleeping' : SLEEPING_LABELS[facts.sleeping] });
  const season = seasonLabel(facts.best_months);
  if (season) flags.push({ icon: 'season', label: season });
  if (facts.waymarked === 'yes') flags.push({ icon: 'waymarked', label: 'Waymarked' });
  if (facts.waymarked === 'partial') flags.push({ icon: 'waymarked', label: 'Partly waymarked' });
  if (facts.permit === 'none') flags.push({ label: 'No permit' });

  if (facts.waymarked === 'no') flags.push({ icon: 'trace', label: 'Not waymarked', tone: 'warning' });
  if (facts.permit === 'free-registration') flags.push({ label: 'Free registration', tone: 'warning' });
  if (facts.permit === 'paid-permit') flags.push({ label: 'Paid permit', tone: 'warning' });
  if (facts.water_scarce) flags.push({ icon: 'water', label: 'Water is scarce', tone: 'warning' });
  if (facts.exposed_or_via_ferrata) flags.push({ icon: 'summit', label: 'Exposed ground', tone: 'warning' });
  return flags;
}

/**
 * The flags for a list card: where you sleep and the season, then up to two warnings.
 * The design system allows two to four flags on a card and no more than two warnings.
 */
export function cardFlags(facts: FlagFacts): TrekFlag[] {
  const all = trekFlags(facts);
  const plain = all.filter((flag) => !flag.tone);
  const warnings = all.filter((flag) => flag.tone === 'warning').slice(0, 2);
  return [...plain.slice(0, 4 - warnings.length), ...warnings];
}
