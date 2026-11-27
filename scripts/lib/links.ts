/** Checking that the URLs a trek cites still answer. */
import type { TrekFolder } from '../../src/data/treks';
import { mapLimit, USER_AGENT } from './http';

export type LinkState = 'ok' | 'dead' | 'unknown';

export interface LinkResult {
  url: string;
  /** Where the URL is used, e.g. "sources.sleeping" or "trip_reports[0]". */
  usedIn: string[];
  state: LinkState;
  /** HTTP status or the network error. */
  detail: string;
}

/** Every URL a trek cites, with the fields that use it. */
export function trekLinks(folder: TrekFolder): Map<string, string[]> {
  const links = new Map<string, string[]>();
  const add = (url: string | undefined, usedIn: string) => {
    if (url) links.set(url, [...(links.get(url) ?? []), usedIn]);
  };
  const trek = folder.trek;
  if (!trek) return links;
  for (const [field, value] of Object.entries(trek.sources)) {
    for (const url of Array.isArray(value) ? value : [value]) add(url, `sources.${field}`);
  }
  trek.trip_reports.forEach((report, index) => add(report.url, `trip_reports[${index}]`));
  add(trek.links?.official_site, 'links.official_site');
  add(trek.route.gpx_source, 'route.gpx_source');
  return links;
}

/**
 * "dead" means the page is gone for certain: 404, 410, or the domain no longer exists.
 * Anything else that is not a success (a block on scripts, a timeout, a server error)
 * is "unknown": worth a look by hand, but not proof that the link is dead.
 */
export async function checkUrl(url: string): Promise<{ state: LinkState; detail: string }> {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,*/*' },
      signal: AbortSignal.timeout(25_000),
    });
    await response.body?.cancel();
    if (response.ok) return { state: 'ok', detail: String(response.status) };
    const gone = response.status === 404 || response.status === 410;
    return { state: gone ? 'dead' : 'unknown', detail: `HTTP ${response.status}` };
  } catch (cause) {
    const error = cause as Error & { cause?: { code?: string } };
    const code = error.cause?.code;
    if (code === 'ENOTFOUND') return { state: 'dead', detail: 'domain not found' };
    return { state: 'unknown', detail: code ?? error.name ?? 'request failed' };
  }
}

export async function checkTrekLinks(folder: TrekFolder): Promise<LinkResult[]> {
  const links = [...trekLinks(folder)];
  return mapLimit(links, 6, async ([url, usedIn]) => ({ url, usedIn, ...(await checkUrl(url)) }));
}
