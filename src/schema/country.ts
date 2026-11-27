/** The schema for `data/countries/<code>/country.yaml`: the photos of a country page. */
import { z } from 'astro/zod';
import { isAllowedLicense } from '../lib/license';
import { photoSource } from '../lib/photo-source';
import { countryName } from './values';

const text = z.string().trim().min(1);

export const countrySchema = z.strictObject({
  code: z.string().refine((code) => countryName(code) !== undefined, { error: 'Must be an ISO 3166-1 alpha-2 country code in capitals' }),
  photos: z
    .array(
      z.strictObject({
        file_url: z.url().refine((url) => photoSource(url) !== undefined, { error: 'Must be a Wikimedia Commons file page or an Unsplash photo page' }),
        author: text,
        license: text.refine(isAllowedLicense, { error: 'Licence is not allowed' }),
        /** Where the photo was taken. It must not suggest a trek the photo does not show. */
        shows: text,
      }),
    )
    .default([]),
});

export type Country = z.infer<typeof countrySchema>;
