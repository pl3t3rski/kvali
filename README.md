# Kvali

A static, map-first website for finding multi-day treks in Europe and the Caucasus.
The full plan is in [Kvali — Technical Specification v1.md](<Kvali — Technical Specification v1.md>).

## What is built so far

The data side is complete; the visual side is not started.

| Part | State |
| --- | --- |
| Trek schema and validation rules | Done (`src/schema/trek.ts`, `scripts/lib/rules.ts`) |
| Route, stats and photo scripts | Done (`scripts/`) |
| Index build, link check, monthly re-verification | Done (`scripts/`) |
| Filter, sorting and URL-state logic for the map view | Done, not yet wired to any UI (`src/lib/`) |
| Trek pages, list page, About page | Plain unstyled HTML with all content and SEO tags (`src/pages/`) |
| CI workflows | Written, not yet run on GitHub (`.github/workflows/`) |
| Map, synced list, filters UI, mobile sheet, all styling | Not started; waits for the design |
| Static map image on trek pages | Not started |
| Research prompt | Not in the repo yet (`research/README.md`) |

## Setup

Needs Node 22.23 or newer (see `.nvmrc`).

```bash
npm install
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run enrich` | Fetches routes, computes stats and fetches photos for treks that lack them |
| `npm run validate` | Checks every trek against the schema and the rules. Makes no network requests |
| `npm run check:links` | Checks that source, trip-report and official links still answer |
| `npm test` | Runs the unit tests |
| `npm run dev` | Local site, drafts included |
| `npm run build` | Builds the site into `dist/`, published treks only |
| `npm run build:drafts` | Same, drafts included |

`fetch:route`, `compute:stats` and `fetch:photos` also run one at a time. Each takes trek ids to
limit the run and `--force` to redo work that is already done:

```bash
npm run fetch:route -- tour-du-mont-blanc --force
```

## Adding a trek

1. Create `data/treks/<id>/trek.yaml` with `status: draft`. The folder name is the id and becomes the URL.
2. Run `npm run enrich`. This writes `route.geojson`, `stats.json` and `photos.json` next to it, and the
   resized photos into `public/photos/<id>/`. These generated files are committed.
3. Run `npm run validate` and fix what it reports.
4. Check the risky fields against their sources, clear `conflicts`, then set `status: published`.

Only published treks reach the site. The two treks in `data/treks/` now are sample drafts written
to test the pipeline; their facts are not verified.

## How a trek is checked

`trek.yaml` must match the schema in `src/schema/trek.ts`. On top of that, the build fails when:

- `typical_days.min` is below 3
- best months, sleeping, permit or logistics is filled in with no entry in `sources`
- a published trek has open `conflicts`, fewer than 2 photos or fewer than 2 trip reports
- a photo licence is not CC0, CC BY, CC BY-SA or public domain
- there is no route source, or a GPX route has no `route.gpx_license`
- a published trek lacks its generated files, or `stats.json` is older than `route.geojson`

These only warn: a route gap over 200 m, computed distance or ascent more than 20% away from the
researched value, and `last_verified` older than 24 months.

## Choices the specification left open

- **Sort order.** Treks sort by the number of `establishment_signals` (`src/lib/sort.ts`).
- **`route.gpx_license`.** An added field. A GPX route needs it, so the licence check is on record.
- **`photos.json`.** An added generated file with the author and licence as Commons reports them.
- **Side routes.** Besides `alternative`, `excursion` and `approach`, members with the role
  `connection` are left out of the route line too.
- **Route joining.** Done by `scripts/lib/stitch.ts` instead of the osmtogeojson library, because it
  has to keep route order, drop side routes and report gaps.
- **Filters.** "No permit" matches only `permit: none`; "Waymarked" matches only `waymarked: yes`.

## Deployment

The workflows expect these in the GitHub repository settings:

- Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
- Variable `SITE_URL` (for example `https://kvali.eu`), used for canonical URLs and the sitemap
- Variable `CLOUDFLARE_PROJECT` if the Pages project is not named `kvali`

`validate` commits the generated files back to the branch. GitHub does not start a new workflow
run for a commit made by a workflow, so `deploy` runs the validation again before it builds.
