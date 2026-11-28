import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';

/**
 * A fingerprint of the map data, added to its addresses (`index.json?v=…`). It changes when the
 * data does, so a browser never reuses an old copy after a deploy. `npm run build:index` writes
 * the files before Astro starts, so this reads the new ones.
 */
function dataVersion() {
  const hash = createHash('sha1');
  for (const file of ['public/index.json', 'public/routes-lite.geojson']) {
    if (existsSync(file)) hash.update(readFileSync(file));
  }
  return hash.digest('hex').slice(0, 10);
}

export default defineConfig({
  // Set SITE_URL to the real domain at deploy time; canonical URLs and the sitemap use it.
  site: process.env.SITE_URL || 'https://kvali.example',
  // Set SITE_BASE when the site is served from a sub-address, such as /kvali on GitHub Pages.
  base: process.env.SITE_BASE || '/',
  output: 'static',
  integrations: [svelte(), sitemap()],
  vite: { define: { 'import.meta.env.KVALI_DATA_VERSION': JSON.stringify(dataVersion()) } },
});
