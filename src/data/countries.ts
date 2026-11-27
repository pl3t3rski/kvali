/** Reads country folders from disk. Node only: used by the scripts and by Astro at build time. */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { countrySchema, type Country } from '../schema/country';
import type { PhotoMeta } from './types';

export interface CountryFolder {
  /** Lower-case country code; the folder name and the page address. */
  slug: string;
  yamlPath: string;
  photosPath: string;
  country: Country;
}

export function countriesDir(): string {
  return resolve(join(process.cwd(), 'data', 'countries'));
}

/** Every country folder. A broken country.yaml stops the build, since a page depends on it. */
export function readCountryFolders(): CountryFolder[] {
  const root = countriesDir();
  if (!existsSync(root)) return [];
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(root, entry.name, 'country.yaml')))
    .map((entry) => {
      const yamlPath = join(root, entry.name, 'country.yaml');
      const country = countrySchema.parse(parseYaml(readFileSync(yamlPath, 'utf8')));
      if (country.code.toLowerCase() !== entry.name) throw new Error(`${yamlPath}: code ${country.code} must match the folder name`);
      return { slug: entry.name, yamlPath, photosPath: join(root, entry.name, 'photos.json'), country };
    });
}

export function readCountryPhotos(folder: CountryFolder): PhotoMeta[] {
  return existsSync(folder.photosPath) ? (JSON.parse(readFileSync(folder.photosPath, 'utf8')) as PhotoMeta[]) : [];
}
