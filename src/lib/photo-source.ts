/** Where a photo in trek.yaml comes from: a Wikimedia Commons file or an Unsplash photo. */
import { commonsFileTitle } from './commons';

export type PhotoSource = 'commons' | 'unsplash';

export const PHOTO_SOURCE_NAMES: Record<PhotoSource, string> = {
  commons: 'Wikimedia Commons',
  unsplash: 'Unsplash',
};

/**
 * The id of an Unsplash photo, from its page URL or from a downloaded file's name.
 * Both end in the 11-character id: `unsplash.com/photos/some-words-DOhXyRS3_n0`,
 * `tomas-malik-DOhXyRS3_n0-unsplash.jpg`.
 */
export function unsplashId(urlOrFileName: string): string | undefined {
  let slug: string | undefined;
  try {
    const url = new URL(urlOrFileName);
    if (url.hostname !== 'unsplash.com' && url.hostname !== 'www.unsplash.com') return undefined;
    slug = url.pathname.match(/^\/photos\/([^/]+)\/?$/)?.[1];
  } catch {
    slug = urlOrFileName.match(/([A-Za-z0-9_-]{11})-unsplash\b/)?.[1];
  }
  return slug?.match(/[A-Za-z0-9_-]{11}$/)?.[0];
}

export const unsplashPageUrl = (id: string) => `https://unsplash.com/photos/${id}`;

export function photoSource(url: string): PhotoSource | undefined {
  if (commonsFileTitle(url) !== undefined) return 'commons';
  if (unsplashId(url) !== undefined) return 'unsplash';
  return undefined;
}
