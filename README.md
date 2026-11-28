# Kvali

A static, map-first website for finding multi-day treks in Europe and the Caucasus.
The full plan is in [Kvali — Technical Specification v1.md](<Kvali — Technical Specification v1.md>).
The look comes from the Kvali design system (a Claude Design System artifact); its values are
copied into `src/styles/kvali.css` and its pen drawing into `src/design/`.

## What is built so far

| Part | State |
| --- | --- |
| Trek schema and publishing rules | Done (`src/schema/trek.ts`, `scripts/lib/rules.ts`) |
| Research import, route, stats and photo scripts | Done (`scripts/`) |
| Index build, link check, monthly re-verification | Done (`scripts/`) |
| Main view: map, synced list, five filters, trek card, shareable URL, keyboard use | Done, in the Kvali design (`src/components/`) |
| Trek pages, country page, About page | Done, in the Kvali design (`src/pages/`) |
| Georgia | Done for now: 9 of 12 treks published, all 12 with a route line. Three stay drafts because no two first-hand trip reports exist for them (Shepherds' Trail, Imereti to Racha, Lentekhi to Matskhvarishi) |
| CI workflows | Running on GitHub. A push to `main` tests, validates and deploys the preview site to GitHub Pages (`.github/workflows/`) |
| Night theme | Done: follows the device on a first visit, and the header has a switch |
| Phone layout | Done: the list is a sheet under the map with three heights. No swipe gesture; a button moves it |
| Route on trek pages | Done: a height profile and a real map of the line (`src/design/Profile.astro`, `src/components/RouteMap.svelte`) |
| The other nine countries | Imported as drafts with routes, stats and photos. Not reviewed yet; none published |

## Setup

Needs Node 22.23 or newer (see `.nvmrc`).

```bash
npm install
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run import:research -- <file.yaml>` | Turns a research file into draft trek folders |
| `npm run enrich` | Fetches routes, computes stats and fetches photos for treks that lack them |
| `npm run validate` | Checks every trek, and lists what still blocks each draft from publishing |
| `npm run check:links` | Checks that source, trip-report and official links still answer |
| `npm test` | Runs the unit tests |
| `npm run typecheck` | Type-checks the scripts and the Svelte components |
| `npm run dev` | Local site, drafts included |
| `npm run build` | Builds the site into `dist/`, published treks only |
| `npm run build:drafts` | Same, drafts included |

`fetch:route`, `compute:stats` and `fetch:photos` also run one at a time. Each takes trek ids to
limit the run and `--force` to redo work that is already done:

```bash
npm run fetch:route -- mestia-ushguli --force
```

## From research to a published trek

1. **Import.** `npm run import:research -- <file.yaml>` writes one `data/treks/<id>/trek.yaml` per trek,
   with `status: draft`, and copies the research file to `research/raw/`. Empty values are dropped.
   A `trek.yaml` that already exists is kept unless you add `--overwrite`.
2. **Enrich.** `npm run enrich` writes `route.geojson`, `stats.json` and `photos.json` next to each
   `trek.yaml`, and the resized photos into `public/photos/<id>/`. These generated files are committed.
3. **Review.** `npm run validate` lists what blocks each draft. Check the risky facts against their
   sources, settle the entries under `conflicts` and empty that list.
4. **Publish.** Set `status: published`. From then on every rule below is an error that fails the build.

Only published treks reach the site. `npm run dev` shows drafts too, marked as drafts.

## What a published trek needs

- every field of the data model, and a one-liner of 140 characters or fewer
- at least 3 days of walking (`typical_days.min`)
- a source for best months, sleeping, permit and logistics
- no open `conflicts`, at least 2 photos and at least 2 trip reports
- photo licences that are CC0, CC BY, CC BY-SA, public domain or the Unsplash licence
- a route: an OpenStreetMap relation, several stage relations, or a GPX file with `route.gpx_license`
- its generated files, with `stats.json` matching `route.geojson`

These only warn: a route gap over 200 m, computed distance or ascent more than 20% away from the
researched value, and `last_verified` older than 24 months.

A draft may lack any of these. It still has to use the right field names and allowed values.

## Photos

A photo is a Wikimedia Commons file page or an Unsplash photo page, listed in `trek.yaml` or in
`data/countries/<code>/country.yaml`.

- **Commons:** author and licence are read from Commons when the photo is fetched.
- **Unsplash:** put the downloaded original into `photo-originals/` (not committed). It is matched
  by the photo id in the file name. Author comes from the YAML file.

Every photo is shown with what it shows and who took it. A country photo says where it was taken
and must not suggest a trek it does not show.

## Design

- `src/styles/kvali.css`: the design tokens and component styles. Nothing uses a CSS border, radius
  or shadow on content.
- `src/design/pen.ts`: the hand-drawn geometry, ported from the design system's React bundle.
- `src/design/sketch.ts`: draws a frame, highlight or underline behind an element. In Svelte use the
  `pen` action; in an Astro page add `data-pen="frame"` (or `card`, `button`, `chip`, `mark`).
- `src/components/map-config.ts` and `trek-map.ts`: the map reads its colours from the tokens.

## Choices made where the specification or the design was open

- **Drafts may have gaps.** The specification fails the build on any rule. Real research has
  unknown facts, so rules are errors only on a published trek.
- **Sort order.** Treks sort by the number of `establishment_signals`, as the research ranks them.
- **Several route ids.** `route.osm_relation_id` may be a list of stage relations, joined in order.
- **Part of a relation.** `route.osm_section` gives where the trek starts and ends on the mapped ways,
  as `[latitude, longitude]`, with optional `via` points. The route line is then the shortest walk
  between them. It sets the direction of the height profile, cuts a trek out of a longer trail and
  drops stray pieces and variants.
- **Two distances.** The page shows the distance measured on the route line. When the sources'
  figure in `distance_km` is more than 10% away, the page says so under the map.
- **Added fields.** `route.gpx_license`, `sleeping.notes`, `flags.permit_notes`; added generated file `photos.json`.
- **Side routes.** Besides `alternative`, `excursion` and `approach`, members with the role
  `connection` are left out of the route line.
- **Filters.** Trip length is three chips, not a slider, because the design system draws filters as
  chips. "No permit" matches only `permit: none`; "Waymarked" matches only `waymarked: yes`. A fact
  that is not known never matches a filter that asks for it.
- **Mixed sleeping.** The design names colours for huts, guesthouses and camping. Mixed is drawn in
  the plain pen colour.
- **Contour lines instead of hillshade,** as the design system asks, from the `maplibre-contour`
  library pinned to 0.1.1.
- **Map position in the URL** (`map=zoom/lat/lon`) once the map has been moved.
- **Country pages** (`/countries/<code>/`) are an addition: a home for photos of a country.
- **Route trace instead of a static map image.** The specification asks for a pre-rendered map image
  on each trek page. The page shows the route as a dotted trace, north up, with no base map, and
  links to the live map. The ends are not named, because the line's direction in OpenStreetMap
  need not match the direction the trek is walked.
- **Phone sheet.** An opened trek takes the full sheet, as the specification says; a button brings the map back.

## Deployment

The workflows expect these in the GitHub repository settings:

- Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
- Variable `SITE_URL` (for example `https://kvali.eu`), used for canonical URLs and the sitemap
- Variable `CLOUDFLARE_PROJECT` if the Pages project is not named `kvali`

`validate` commits the generated files back to the branch. GitHub does not start a new workflow
run for a commit made by a workflow, so `deploy` runs the validation again before it builds.
