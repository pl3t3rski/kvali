/**
 * Astro content collection for the treks. Astro checks every trek.yaml against
 * the schema when the site is built, so `astro build` fails on bad data.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { trekSchema } from './schema/trek';

const treks = defineCollection({
  loader: glob({
    base: process.env.KVALI_DATA_DIR ?? './data/treks',
    pattern: '*/trek.yaml',
    // The folder name is the id.
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: trekSchema,
});

export const collections = { treks };
