/**
 * Addresses inside the site. The site may be served from the root of a domain or from a
 * sub-address (GitHub Pages serves a project at /<repository>/), so every internal link and
 * every file the page loads goes through `url()`.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** The address of a site path: `url('/treks/x/')` → `/treks/x/` or `/kvali/treks/x/`. */
export function url(path: string): string {
  return `${BASE}${path}`;
}

/**
 * The address of a generated data file, with the data's fingerprint, so a browser fetches the
 * new file after every deploy instead of a cached old one: `dataUrl('/index.json')` →
 * `/kvali/index.json?v=3f2a9c01be`.
 */
export function dataUrl(path: string): string {
  const version = import.meta.env.KVALI_DATA_VERSION;
  return version ? `${url(path)}?v=${version}` : url(path);
}

/** A page path without the sub-address, for comparing with site paths. */
export function sitePath(pathname: string): string {
  return BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
}
