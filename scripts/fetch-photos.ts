/**
 * Photos → data/treks/<id>/photos.json + public/photos/<id>/*.webp
 *          data/countries/<code>/photos.json + public/photos/countries/<code>/*.webp
 *
 * Wikimedia Commons: asks Commons for the author and licence, refuses licences Kvali
 * may not use, and downloads the picture.
 * Unsplash: takes the original from the folder of downloaded originals (photo-originals/,
 * or KVALI_PHOTO_DIR), matched by the photo id in the file name; if it is not there,
 * downloads it from Unsplash. Author and licence come from trek.yaml.
 *
 *   npm run fetch:photos               fetch photos that are missing
 *   npm run fetch:photos -- <id> ...   only these treks
 *   npm run fetch:photos -- --force    fetch every photo again
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { readCountryFolders, readCountryPhotos } from '../src/data/countries';
import { readAllTrekFolders, readPhotos, type TrekFolder } from '../src/data/treks';
import type { PhotoMeta } from '../src/data/types';
import { finish, info, parseArgs, warn, error } from './lib/report';
import { fetchPhoto, photoKey, pruneFiles, writeIfChanged, PUBLIC_DIR } from './lib/photos';

const filesExist = (meta: PhotoMeta) => Object.values(meta.sizes).every((path) => existsSync(join(PUBLIC_DIR, path)));

async function fetchPhotos(folder: TrekFolder, force: boolean): Promise<void> {
  const trek = folder.trek!;
  const existing = readPhotos(folder) ?? [];
  if (trek.photos.length === 0 && existing.length === 0) return;
  // A draft may list a photo that turns out to be unusable; a published trek may not.
  const report = trek.status === 'published' ? error : warn;

  const result: PhotoMeta[] = [];
  for (const photo of trek.photos) {
    const key = photoKey(photo.file_url);
    const known = existing.find((meta) => meta.title === key);
    if (known && !force && filesExist(known)) {
      result.push({ ...known, shows: photo.shows });
      continue;
    }
    info(`${folder.id}: fetching ${key}`);
    // Commons limits how fast a script may ask; a short pause keeps it from refusing.
    await new Promise((done) => setTimeout(done, 1200));
    try {
      result.push(await fetchPhoto(photo, `photos/${folder.id}`, (message) => warn(folder.yamlPath, message)));
    } catch (cause) {
      report(folder.yamlPath, `${key}: ${(cause as Error).message}`);
    }
  }

  pruneFiles(`photos/${folder.id}`, result);
  writeIfChanged(folder.photosPath, result, existing);
}

/** The photos of the country pages, kept in public/photos/countries/<code>/. */
async function fetchCountryPhotos(force: boolean): Promise<void> {
  for (const folder of readCountryFolders()) {
    const existing = readCountryPhotos(folder);
    const siteDir = `photos/countries/${folder.slug}`;
    const result: PhotoMeta[] = [];
    for (const photo of folder.country.photos) {
      const key = photoKey(photo.file_url);
      const known = existing.find((meta) => meta.title === key);
      if (known && !force && filesExist(known)) {
        result.push({ ...known, shows: photo.shows });
        continue;
      }
      info(`${folder.country.code}: fetching ${key}`);
      await new Promise((done) => setTimeout(done, 1200));
      try {
        result.push(await fetchPhoto(photo, siteDir, (message) => warn(folder.yamlPath, message)));
      } catch (cause) {
        error(folder.yamlPath, `${key}: ${(cause as Error).message}`);
      }
    }
    pruneFiles(siteDir, result);
    writeIfChanged(folder.photosPath, result, existing);
  }
}

const { ids, flags } = parseArgs();
if (ids.length === 0) await fetchCountryPhotos(flags.has('force'));
for (const folder of readAllTrekFolders(ids)) {
  if (!folder.trek) {
    warn(folder.yamlPath, 'Skipped: trek.yaml does not pass validation');
    continue;
  }
  await fetchPhotos(folder, flags.has('force'));
}
finish('fetch-photos');
