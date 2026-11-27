import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set SITE_URL to the real domain at deploy time; canonical URLs and the sitemap use it.
  site: process.env.SITE_URL || 'https://kvali.example',
  output: 'static',
  integrations: [sitemap()],
});
