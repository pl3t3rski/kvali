/**
 * Wikimedia Commons photos → data/treks/<id>/photos.json + public/photos/<id>/*.webp
 *
 * For every photo in trek.yaml this asks Commons for the author and licence,
 * refuses licences Kvali may not use, and saves resized WebP files.
 *
 *   npm run fetch:photos               fetch photos that are missing
 *   npm run fetch:photos -- <id> ...   only these treks
 *   npm run fetch:photos -- --force    fetch every photo again
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import sharp from 'sharp';
import { readAllTrekFolders, readPhotos, type TrekFolder } from '../src/data/treks';
import type { PhotoMeta } from '../src/data/types';
import { commonsFileTitle, commonsPageUrl } from '../src/lib/commons';
import { isAllowedLicense } from '../src/lib/license';
import { fetchJson, fetchRetry } from './lib/http';
import { error, finish, info, parseArgs, warn } from './lib/report';

/** Widths of the generated files. A photo narrower than a width is not enlarged to it. */
export const PHOTO_WIDTHS = [480, 960, 1600];
/** Commons serves thumbnails in fixed steps; 1920 is the first step above our largest width. */
const DOWNLOAD_WIDTH = 1920;
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const PUBLIC_DIR = join(process.cwd(), 'public');

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

const comparable = (license: string) => license.toLowerCase().replace(/[-_\s]+/g, ' ').trim();

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

async function fetchPhoto(
  folder: TrekFolder,
  photo: { file_url: string; author: string; license: string; shows: string },
): Promise<PhotoMeta> {
  const title = commonsFileTitle(photo.file_url)!;
  const page = await commonsInfo(title);
  const image = page.imageinfo![0];
  const meta = image.extmetadata ?? {};

  const license = plainText(meta.LicenseShortName?.value ?? '');
  if (!license) throw new Error('Commons reports no licence for this file');
  if (!isAllowedLicense(license)) throw new Error(`Licence "${license}" is not allowed (CC0, CC BY, CC BY-SA, public domain)`);
  if (comparable(license) !== comparable(photo.license)) {
    warn(folder.yamlPath, `${page.title}: trek.yaml says "${photo.license}" but Commons says "${license}"; using Commons`);
  }

  const response = await fetchRetry(image.thumburl ?? image.url);
  const source = sharp(Buffer.from(await response.arrayBuffer())).rotate();
  const { width: sourceWidth = 0 } = await source.metadata();

  const hash = createHash('sha1').update(page.title).digest('hex').slice(0, 10);
  const outDir = join(PUBLIC_DIR, 'photos', folder.id);
  mkdirSync(outDir, { recursive: true });

  const widths = PHOTO_WIDTHS.filter((width) => width <= sourceWidth);
  if (widths.length === 0) widths.push(sourceWidth);
  const sizes: Record<string, string> = {};
  let largest = { width: 0, height: 0 };
  for (const width of widths) {
    const file = `${hash}-${width}.webp`;
    const output = await source.clone().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(outDir, file));
    sizes[String(width)] = `/photos/${folder.id}/${file}`;
    if (output.width > largest.width) largest = { width: output.width, height: output.height };
  }

  return {
    title: page.title,
    page_url: image.descriptionurl ?? commonsPageUrl(page.title),
    author: plainText(meta.Artist?.value ?? '') || photo.author,
    license,
    ...(meta.LicenseUrl?.value ? { license_url: meta.LicenseUrl.value } : {}),
    shows: photo.shows,
    ...largest,
    sizes,
  };
}

const filesExist = (meta: PhotoMeta) => Object.values(meta.sizes).every((path) => existsSync(join(PUBLIC_DIR, path)));

async function fetchPhotos(folder: TrekFolder, force: boolean): Promise<void> {
  const trek = folder.trek!;
  const existing = readPhotos(folder) ?? [];
  if (trek.photos.length === 0 && existing.length === 0) return;

  const result: PhotoMeta[] = [];
  for (const photo of trek.photos) {
    const title = commonsFileTitle(photo.file_url)!;
    const known = existing.find((meta) => meta.title === title);
    if (known && !force && filesExist(known)) {
      result.push({ ...known, shows: photo.shows });
      continue;
    }
    info(`${folder.id}: fetching ${title}`);
    try {
      result.push(await fetchPhoto(folder, photo));
    } catch (cause) {
      error(folder.yamlPath, `${title}: ${(cause as Error).message}`);
    }
  }

  // Remove files of photos that are no longer listed.
  const outDir = join(PUBLIC_DIR, 'photos', folder.id);
  const keep = new Set(result.flatMap((meta) => Object.values(meta.sizes).map((path) => basename(path))));
  if (existsSync(outDir)) {
    for (const file of readdirSync(outDir)) {
      if (!keep.has(file)) rmSync(join(outDir, file));
    }
  }

  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (json !== `${JSON.stringify(existing, null, 2)}\n` || !existsSync(folder.photosPath)) {
    writeFileSync(folder.photosPath, json);
  }
}

const { ids, flags } = parseArgs();
for (const folder of readAllTrekFolders(ids)) {
  if (!folder.trek) {
    warn(folder.yamlPath, 'Skipped: trek.yaml does not pass validation');
    continue;
  }
  await fetchPhotos(folder, flags.has('force'));
}
finish('fetch-photos');
