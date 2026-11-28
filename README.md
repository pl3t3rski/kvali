# Kvali

A static, map-first website for finding multi-day treks in Europe and the Caucasus: a place to go
while you dream about where to walk next.

**Live:** [pl3t3rski.github.io/kvali](https://pl3t3rski.github.io/kvali/), with only reviewed,
published treks on it.

The full plan is in [Kvali — Technical Specification v1.md](<Kvali — Technical Specification v1.md>).
The look comes from the Kvali design system (a Claude Design System artifact); its values are
copied into `src/styles/kvali.css` and its pen drawing into `src/design/`.

## Where it stands

**26 treks published**, from Georgia, Slovenia and Austria. The target for v1 is 40 treks in 8 countries.
The research for ten countries is imported: 146 treks in all, the rest of them drafts.

| Country | State |
| --- | --- |
| Georgia | Reviewed. 9 of 12 published. Shepherds' Trail, Imereti to Racha and Lentekhi to Matskhvarishi stay drafts: nobody has written two first-hand trip reports of them |
| Slovenia | Reviewed. 5 of 15 published: Slovenian Mountain Trail, Koroška and Zasavje mountain trails, the Camino from Obrežje to Trieste, Via Dinarica Slovenia. The rest stay drafts: no source names their best months (Loka, E6, E7), OpenStreetMap has no complete line and there is no GPX we may reuse (Juliana, Via Dinarica White Trail, Karavanke, Pohorje–Kozjak, Carsus, Walk of Peace), or too few trip reports (Trdina) |
| Austria | Reviewed. 12 of 24 published: Stubaier, Berliner, Karnischer and Schladminger Tauern Höhenweg, Lechweg, Salzburger Almenweg, Welterbesteig Wachau, the national trails 01, 02 and 03, the Alpe-Adria-Trail and the Sultans Trail (Vienna to Istanbul). The rest stay drafts: OpenStreetMap has no route for them, or only part of one, and the official GPX files give no licence to reuse them (Glocknerrunde, Venediger, Karwendel and Tiroler Höhenweg, Hohe Tauern Panorama Trail, KAT Walk Alpin, Koasa Trail, Karawanken-Karavanke Trail, Arnoweg; the Adlerweg lacks two stages and the Lechtaler Höhenweg is mapped on its old line), or nobody has written a first-hand report (Julius Kugy Alpine Trail) |
| Italy, Switzerland, Croatia, Poland, Serbia, Albania, Bosnia and Herzegovina | Imported as drafts with routes, stats and photos where they exist. Not reviewed yet |
| Armenia | A research report only; no trek data to import yet |

| Part | State |
| --- | --- |
| Trek schema and publishing rules | Done (`src/schema/trek.ts`, `scripts/lib/rules.ts`) |
| Research import, route, stats and photo scripts | Done (`scripts/`) |
| Index build, link check, monthly re-verification | Done (`scripts/`) |
| Main view: map with a colour key, synced list, five filters, trek card, shareable URL, keyboard use | Done (`src/components/`) |
| Trek pages: number tiles, badges, month strip, height profile, live route map, trip reports, sources | Done (`src/pages/treks/[id].astro`) |
| Country pages, About page | Done (`src/pages/`) |
| Night theme | Done: follows the device on a first visit, and the header has a switch |
| Phone layout | Done: the list is a sheet under the map with three heights. No swipe gesture yet; a button moves it |
| Hosting | GitHub Pages, deployed on every push to `main`. No kvali domain yet |
| Not started | Photos traced in butter (needs drawing by hand), swipe on the phone sheet, load-speed measurement, the kvali domain |

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
| `npm run dev` | Local site, drafts included and marked as drafts |
| `npm run build` | Builds the site into `dist/`, published treks only. This is what goes live |
| `npm run build:drafts` | Same, drafts included |

`fetch:route`, `compute:stats` and `fetch:photos` also run one at a time. Each takes trek ids to
limit the run and `--force` to redo work that is already done:

```bash
npm run fetch:route -- mestia-ushguli --force
```

The data scripts identify themselves to OpenStreetMap and Wikimedia as `trek-site-data-script/0.1`.
Set `KVALI_USER_AGENT` to add a contact address.

## From research to a published trek

1. **Import.** `npm run import:research -- <file.yaml>` writes one `data/treks/<id>/trek.yaml` per trek,
   with `status: draft`, and copies the research file to `research/raw/`. Empty values are dropped.
   A `trek.yaml` that already exists is kept unless you add `--overwrite`.
2. **Enrich.** `npm run enrich` writes `route.geojson`, `stats.json` and `photos.json` next to each
   `trek.yaml`, and the resized photos into `public/photos/<id>/`. These generated files are committed.
3. **Review.** `npm run validate` lists what blocks each draft. Check the risky facts against their
   sources, settle the entries under `conflicts` and empty that list.
4. **Publish.** Set `status: published`. From then on every rule below is an error that fails the build.

Only published treks reach the live site. A draft's page does not exist there.

### How a country is reviewed

Georgia and Slovenia were reviewed this way; the next country follows the same steps.

- **Route line.** Cut to the walk itself with `route.osm_section`: start, end and `via` points, so
  the line runs from start to end without summit spurs or variants and the height profile reads in
  the walking direction. Several stage relations are joined when no single one covers the trek.
- **Sources.** Every link is checked; dead ones are replaced with the current official page.
- **Facts.** Best months, sleeping, permit, waymarking, water and exposure each come from a source
  the trek file names. Months are never guessed: a trek without a source for them stays a draft.
- **Trip reports.** Two first-person accounts by people who walked the trek or a multi-day part of
  it. Tour itineraries, guide pages and GPS logs without a story do not count.
- **Photos.** Two or more from Wikimedia Commons, taken on the route, with an open licence.
- **Disagreements.** Where sources disagree, the trail operator's figure is used and the conflict
  is closed.

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
  by the photo id in the file name. Author comes from the YAML file. Unsplash photos are used for
  Georgia only, for now.

Every photo is shown with what it shows and who took it. A country photo says where it was taken
and must not suggest a trek it does not show.

## Design

- `src/styles/kvali.css`: the design tokens and component styles. Nothing uses a CSS border, radius
  or shadow on content.
- `src/design/pen.ts`: the hand-drawn geometry, ported from the design system's React bundle.
- `src/design/sketch.ts`: draws a frame, highlight or underline behind an element. In Svelte use the
  `pen` action; in an Astro page add `data-pen="frame"` (or `card`, `button`, `chip`, `mark`).
- `src/components/map-config.ts`, `base-map.ts` and `trek-map.ts`: the map reads its colours from
  the tokens, so it follows the night theme. `MapLegend.svelte` is the key to those colours.

## Choices made where the specification or the design was open

- **Drafts may have gaps.** The specification fails the build on any rule. Real research has
  unknown facts, so rules are errors only on a published trek.
- **Sort order.** Treks sort by the number of `establishment_signals`, as the research ranks them.
- **Several route ids.** `route.osm_relation_id` may be a list of stage relations, joined in order.
- **Part of a relation.** `route.osm_section` gives where the trek starts and ends on the mapped ways,
  as `[latitude, longitude]`, with optional `via` points. The route line is then the shortest walk
  between them. It sets the direction of the height profile, cuts a trek out of a longer trail and
  drops stray pieces and variants. A loop uses `via` points to go round.
- **Two distances.** The page shows the distance measured on the route line ("around the loop" for a
  loop). When the sources' figure in `distance_km` is more than 10% away, the page says so under the map.
- **Added fields.** `route.gpx_license`, `sleeping.notes`, `flags.permit_notes`; added generated file `photos.json`.
- **Side routes.** Besides `alternative`, `excursion` and `approach`, members with the role
  `connection` are left out of the route line.
- **Filters.** Trip length is three chips, not a slider, because the design system draws filters as
  chips. "No permit" matches only `permit: none`; "Waymarked" matches only `waymarked: yes`. A fact
  that is not known never matches a filter that asks for it.
- **Route colours.** The design names colours for huts (larch), guesthouses (dusk) and camping
  (moss). Mixed sleeping is drawn in the plain pen colour. A draft whose sleeping is not known yet
  is drawn faded in the quiet ink. The map has a key; on a phone it starts folded.
- **Contour lines instead of hillshade,** as the design system asks, from the `maplibre-contour`
  library pinned to 0.1.1.
- **Map position in the URL** (`map=zoom/lat/lon`) once the map has been moved.
- **Country pages** (`/countries/<code>/`) are an addition: a home for photos of a country.
- **A live map on each trek page** instead of the pre-rendered image the specification asks for.
  It loads once you scroll to it, and on a phone moves with two fingers so the page still scrolls.
- **Phone sheet.** An opened trek takes the full sheet, as the specification says; a button brings the map back.

## Deployment

**Now: GitHub Pages.** `.github/workflows/pages.yml` runs on every push to `main`: tests,
validation, `npm run build` (published treks only), deploy. The site is served at
`https://pl3t3rski.github.io/kvali/`; the workflow sets `SITE_URL` and `SITE_BASE` for that address.
Search engines may index it, and it has a sitemap.

**Later: Cloudflare Pages on a kvali domain.** `.github/workflows/deploy.yml` is ready and skips
itself until these are set in the repository settings:

- Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
- Variable `SITE_URL` (for example `https://kvali.eu`), used for canonical URLs and the sitemap
- Variable `CLOUDFLARE_PROJECT` if the Pages project is not named `kvali`

On other branches, `validate.yml` fetches routes, stats and photos, commits them back to the branch
and validates. GitHub does not start a new run for a commit made by a workflow, so the deploy
workflows validate again before they build. `reverify.yml` checks links on the first of every month
and opens an issue with what it finds.

## Credits

Routes © OpenStreetMap contributors (ODbL). Base map © OpenFreeMap and OpenMapTiles. Terrain from
Tilezen / AWS Terrain Tiles. Photos from Wikimedia Commons and Unsplash, each credited on the page
where it appears.
