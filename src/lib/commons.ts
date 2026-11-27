/**
 * Wikimedia Commons URL helpers.
 *
 * A photo in trek.yaml points at a Commons file, either as the file page
 * (https://commons.wikimedia.org/wiki/File:Name.jpg) or as the direct upload URL
 * (https://upload.wikimedia.org/wikipedia/commons/a/ab/Name.jpg).
 */

/** The Commons file title ("File:Name.jpg") for a Commons URL, or undefined if it is not one. */
export function commonsFileTitle(url: string): string | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }

  let name: string | undefined;
  if (parsed.hostname === 'commons.wikimedia.org') {
    const fromPath = parsed.pathname.match(/^\/wiki\/(?:File|Image):(.+)$/i)?.[1];
    const fromQuery = parsed.searchParams.get('title')?.match(/^(?:File|Image):(.+)$/i)?.[1];
    name = fromPath ?? fromQuery;
  } else if (parsed.hostname === 'upload.wikimedia.org') {
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts[0] !== 'wikipedia' || parts[1] !== 'commons') return undefined;
    // Thumbnails look like /wikipedia/commons/thumb/a/ab/Name.jpg/960px-Name.jpg
    name = parts[2] === 'thumb' ? parts[5] : parts[4];
  }
  if (!name) return undefined;

  try {
    name = decodeURIComponent(name);
  } catch {
    return undefined;
  }
  name = name.replace(/_/g, ' ').trim();
  return name ? `File:${name}` : undefined;
}

/** The Commons file page for a file title. */
export function commonsPageUrl(title: string): string {
  return `https://commons.wikimedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_')).replace(/%3A/g, ':')}`;
}
