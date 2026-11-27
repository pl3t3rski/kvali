/** Fetching one photo, checking its licence and writing the resized WebP files. */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import sharp from 'sharp';
import type { PhotoMeta } from '../../src/data/types';
import { commonsFileTitle, commonsPageUrl } from '../../src/lib/commons';
import { isAllowedLicense } from '../../src/lib/license';
import { photoSource, unsplashId, unsplashPageUrl } from '../../src/lib/photo-source';
import { fetchJson, fetchRetry } from './http';

/** Widths of the generated files. A photo narrower than a width is not enlarged to it. */
export const PHOTO_WIDTHS = [480, 960, 1600];
/** Commons serves thumbnails in fixed steps; 1920 is the first step above our largest width. */
const DOWNLOAD_WIDTH = 1920;
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
export const PUBLIC_DIR = join(process.cwd(), 'public');
/** Folder of downloaded Unsplash originals. Not committed: the resized files are. */
export const ORIGINALS_DIR = resolve(process.env.KVALI_PHOTO_DIR ?? join(process.cwd(), 'photo-originals'));

export interface PhotoEntry {
  file_url: string;
  author: string;
  license: string;
  shows: string;
}

/** The name a photo is known by in photos.json: its Commons title, or "Unsplash <id>". */
export function photoKey(fileUrl: string): string {
  return commonsFileTitle(fileUrl) ?? `Unsplash ${unsplashId(fileUrl)}`;
}

interface CommonsPage {
  title: string;
  missing?: boolean;
  imageinfo?: {
    url: string;
    thumburl?: string;
    descriptionurl?: string;
    extmetadata?: Record<string, { value: string } | undefined>;
  }[];
}

/** Commons gives the author as HTML; keep the text only. */
function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

const comparable = (license: string) => license.replace(/\([^)]*\)/g, ' ').toLowerCase().replace(/[-_\s]+/g, ' ').trim();

async function commonsInfo(title: string): Promise<CommonsPage> {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    formatversion: '2',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: String(DOWNLOAD_WIDTH),
    titles: title,
  });
  const body = await fetchJson<{ query?: { pages?: CommonsPage[] } }>(`${COMMONS_API}?${params}`);
  const page = body.query?.pages?.[0];
  if (!page || page.missing || !page.imageinfo?.[0]) throw new Error('File not found on Wikimedia Commons');
  return page;
}

/** Write the resized WebP files for one picture and return their paths and the largest size. */
async function writeSizes(image: Buffer, key: string, siteDir: string) {
  const source = sharp(image).rotate();
  const { width: sourceWidth = 0 } = await sharp(await source.clone().toBuffer()).metadata();
  const hash = createHash('sha1').update(key).digest('hex').slice(0, 10);
  const outDir = join(PUBLIC_DIR, siteDir);
  mkdirSync(outDir, { recursive: true });

  const widths = PHOTO_WIDTHS.filter((width) => width <= sourceWidth);
  if (widths.length === 0) widths.push(sourceWidth);
  const sizes: Record<string, string> = {};
  let largest = { width: 0, height: 0 };
  for (const width of widths) {
    const file = `${hash}-${width}.webp`;
    const output = await source.clone().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(outDir, file));
    sizes[String(width)] = `/${siteDir}/${file}`;
    if (output.width > largest.width) largest = { width: output.width, height: output.height };
  }
  return { sizes, ...largest };
}

async function fetchCommons(photo: PhotoEntry, siteDir: string, note: (message: string) => void): Promise<PhotoMeta> {
  const page = await commonsInfo(commonsFileTitle(photo.file_url)!);
  const image = page.imageinfo![0];
  const meta = image.extmetadata ?? {};

  const license = plainText(meta.LicenseShortName?.value ?? '');
  if (!license) throw new Error('Commons reports no licence for this file');
  if (!isAllowedLicense(license)) throw new Error(`Licence "${license}" is not allowed (CC0, CC BY, CC BY-SA, public domain)`);
  if (comparable(license) !== comparable(photo.license)) {
    note(`${page.title}: trek.yaml says "${photo.license}" but Commons says "${license}"; using Commons`);
  }

  const response = await fetchRetry(image.thumburl ?? image.url);
  const files = await writeSizes(Buffer.from(await response.arrayBuffer()), page.title, siteDir);
  return {
    source: 'commons',
    title: page.title,
    page_url: image.descriptionurl ?? commonsPageUrl(page.title),
    author: plainText(meta.Artist?.value ?? '') || photo.author,
    license,
    ...(meta.LicenseUrl?.value ? { license_url: meta.LicenseUrl.value } : {}),
    shows: photo.shows,
    width: files.width,
    height: files.height,
    sizes: files.sizes,
  };
}

async function fetchUnsplash(photo: PhotoEntry, siteDir: string): Promise<PhotoMeta> {
  const id = unsplashId(photo.file_url)!;
  if (!isAllowedLicense(photo.license)) throw new Error(`Licence "${photo.license}" is not allowed for an Unsplash photo`);

  const local = existsSync(ORIGINALS_DIR) ? readdirSync(ORIGINALS_DIR).find((file) => unsplashId(file) === id) : undefined;
  let image: Buffer;
  if (local) {
    image = readFileSync(join(ORIGINALS_DIR, local));
  } else {
    const response = await fetchRetry(`https://unsplash.com/photos/${id}/download?force=true`);
    if (!response.headers.get('content-type')?.startsWith('image/')) {
      throw new Error(`No original in ${ORIGINALS_DIR} and Unsplash did not return a picture`);
    }
    image = Buffer.from(await response.arrayBuffer());
  }

  const key = photoKey(photo.file_url);
  const files = await writeSizes(image, key, siteDir);
  return {
    source: 'unsplash',
    title: key,
    page_url: unsplashPageUrl(id),
    author: photo.author,
    license: 'Unsplash License',
    license_url: 'https://unsplash.com/license',
    shows: photo.shows,
    width: files.width,
    height: files.height,
    sizes: files.sizes,
  };
}

/** Fetch one photo into public/<siteDir>/. `note` receives remarks that are not failures. */
export function fetchPhoto(photo: PhotoEntry, siteDir: string, note: (message: string) => void): Promise<PhotoMeta> {
  return photoSource(photo.file_url) === 'unsplash' ? fetchUnsplash(photo, siteDir) : fetchCommons(photo, siteDir, note);
}

/** Remove generated files of photos that are no longer listed. */
export function pruneFiles(siteDir: string, keep: PhotoMeta[]): void {
  const outDir = join(PUBLIC_DIR, siteDir);
  if (!existsSync(outDir)) return;
  const wanted = new Set(keep.flatMap((meta) => Object.values(meta.sizes).map((path) => basename(path))));
  for (const file of readdirSync(outDir)) {
    if (!wanted.has(file)) rmSync(join(outDir, file));
  }
}

export function writeIfChanged(path: string, result: PhotoMeta[], existing: PhotoMeta[]): void {
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (json !== `${JSON.stringify(existing, null, 2)}\n` || !existsSync(path)) writeFileSync(path, json);
}
