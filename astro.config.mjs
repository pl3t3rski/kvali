import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set SITE_URL to the real domain at deploy time; canonical URLs and the sitemap use it.
  site: process.env.SITE_URL || 'https://kvali.example',
  // Set SITE_BASE when the site is served from a sub-address, such as /kvali on GitHub Pages.
  base: process.env.SITE_BASE || '/',
  output: 'static',
  integrations: [svelte(), sitemap()],
});
