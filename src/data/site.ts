/** The treks to build pages for, read through the Astro content collection. */
import { getCollection } from 'astro:content';
import { join } from 'node:path';
import { includeDrafts, readPhotos, readStats, readTrekFolder, treksDir, type SiteTrek } from './treks';

export async function getSiteTreks(): Promise<SiteTrek[]> {
  const drafts = includeDrafts();
  const result: SiteTrek[] = [];
  for (const entry of await getCollection('treks')) {
    const trek = entry.data;
    if (trek.id !== entry.id) throw new Error(`${entry.id}: id "${trek.id}" must equal the folder name`);
    if (trek.status !== 'published' && !drafts) continue;
    const folder = readTrekFolder(join(treksDir(), entry.id), entry.id);
    const stats = readStats(folder);
    if (!stats) {
      if (trek.status === 'published') throw new Error(`${entry.id}: stats.json is missing; run \`npm run enrich\``);
      continue;
    }
    result.push({ trek, stats, photos: readPhotos(folder) ?? [], folder });
  }
  return result.sort((a, b) => a.trek.name.localeCompare(b.trek.name));
}
