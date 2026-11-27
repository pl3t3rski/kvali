/**
 * Reads trek folders from disk. Node only: used by the scripts and by Astro at build time.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { trekSchema, type Trek } from '../schema/trek';
import type { PhotoMeta, RouteFeature, TrekStats } from './types';

export interface Issue {
  /** Where in the file, e.g. "typical_days.min". */
  path: string;
  message: string;
}

export interface TrekFolder {
  /** Folder name; must equal the trek id. */
  id: string;
  dir: string;
  yamlPath: string;
  routePath: string;
  statsPath: string;
  photosPath: string;
  /** The parsed trek, or undefined if trek.yaml is missing or invalid. */
  trek?: Trek;
  /** Why the trek could not be loaded. Empty when `trek` is set. */
  issues: Issue[];
}

/** Folder that holds one sub-folder per trek. Override with KVALI_DATA_DIR. */
export function treksDir(): string {
  return resolve(process.env.KVALI_DATA_DIR ?? join(process.cwd(), 'data', 'treks'));
}

/** True when draft treks should be built too (local preview only). */
export function includeDrafts(): boolean {
  return process.env.KVALI_INCLUDE_DRAFTS === '1';
}

export function readTrekFolder(dir: string, id: string): TrekFolder {
  const folder: TrekFolder = {
    id,
    dir,
    yamlPath: join(dir, 'trek.yaml'),
    routePath: join(dir, 'route.geojson'),
    statsPath: join(dir, 'stats.json'),
    photosPath: join(dir, 'photos.json'),
    issues: [],
  };

  if (!existsSync(folder.yamlPath)) {
    folder.issues.push({ path: '', message: 'trek.yaml is missing' });
    return folder;
  }

  let raw: unknown;
  try {
    raw = parseYaml(readFileSync(folder.yamlPath, 'utf8'));
  } catch (error) {
    folder.issues.push({ path: '', message: `trek.yaml is not valid YAML: ${(error as Error).message}` });
    return folder;
  }

  const result = trekSchema.safeParse(raw);
  if (!result.success) {
    for (const issue of result.error.issues) {
      folder.issues.push({ path: issue.path.join('.'), message: issue.message });
    }
    return folder;
  }
  if (result.data.id !== id) {
    folder.issues.push({ path: 'id', message: `id "${result.data.id}" must equal the folder name "${id}"` });
    return folder;
  }

  folder.trek = result.data;
  return folder;
}

/** Every trek folder, sorted by id. Pass ids to load only those. */
export function readAllTrekFolders(onlyIds: string[] = []): TrekFolder[] {
  const root = treksDir();
  if (!existsSync(root)) return [];
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
    .filter((entry) => onlyIds.length === 0 || onlyIds.includes(entry.name))
    .map((entry) => readTrekFolder(join(root, entry.name), entry.name))
    .sort((a, b) => a.id.localeCompare(b.id));
}

function readJson<T>(path: string): T | undefined {
  if (!existsSync(path)) return undefined;
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

export const readRoute = (folder: TrekFolder) => readJson<RouteFeature>(folder.routePath);
export const readStats = (folder: TrekFolder) => readJson<TrekStats>(folder.statsPath);
export const readPhotos = (folder: TrekFolder) => readJson<PhotoMeta[]>(folder.photosPath);

/** A trek together with its generated files, ready for the site. */
export interface SiteTrek {
  trek: Trek;
  stats: TrekStats;
  photos: PhotoMeta[];
  folder: TrekFolder;
}

/**
 * The treks that go on the site: published ones (plus drafts in local preview)
 * that have a route and stats. Sorted by id.
 */
export function readSiteTreks(): SiteTrek[] {
  const drafts = includeDrafts();
  const result: SiteTrek[] = [];
  for (const folder of readAllTrekFolders()) {
    const { trek } = folder;
    if (!trek) continue;
    if (trek.status !== 'published' && !drafts) continue;
    const stats = readStats(folder);
    if (!stats || !existsSync(folder.routePath)) continue;
    result.push({ trek, stats, photos: readPhotos(folder) ?? [], folder });
  }
  return result;
}
