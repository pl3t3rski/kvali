# Kvali — Technical Specification v1

Nov 27, 2026 · @Dominik Uršič

## Overview

Kvali is a static, map-first website for discovering multi-day treks in Europe and the Caucasus. It is a personal side project: it needs no backend, costs close to nothing to run, and new treks are added by merging one file per trek into a git repo.

**v1 scope**

- Full-screen world map with every trek drawn as its real route line
- List panel synced to the map viewport, with filters
- One page per trek with its own URL: card fields, photos, linked trip reports, sources
- English only
- 40+ treks across 8+ countries, at least one in the Caucasus

**Inclusion rules** (hard, checked at research and at build)

1. At least 3 days of walking
2. A named, defined route
3. Doable independently: no mandatory guide, no permit lottery (free registrations allowed, flagged)

**Non-goals for v1**

- User accounts, logins, own trip-report submissions
- On-trail navigation, offline maps, GPS tracking
- Side-by-side trek comparison
- Languages other than English
- Any server-side code or database

## Architecture

Kvali has no server: all data work happens in CI before deploy, and the visitor's browser loads static files plus free map tiles.

&#91;embedded content: Kvali architecture · sources, repo and CI, build, visitor\]

Research drafts arrive as a pull request; CI fetches routes and photos, validates, and commits the results. A merge to `main` builds the static site, and the browser draws the map from the built files and the tile services.

## Tech stack

Everything is free or free-tier, with no API keys required for the map at v1 traffic.

| Layer | Choice | Why |
| --- | --- | --- |
| Site framework | Astro, static output | Content collections with schema validation, fast static pages, interactive parts only where needed |
| Interactive UI | Svelte island (map + list + filters) | Small bundle; one component tree owns map and list state |
| Map library | MapLibre GL JS | Open source, vector tiles, GeoJSON layers, hillshade |
| Base map tiles | OpenFreeMap | Free OSM vector tiles, no key, no usage limits for a small site |
| Terrain | AWS Terrain Tiles (terrarium DEM) as a hillshade layer | Free elevation tiles; mountains read at a glance |
| Styling | Tailwind CSS | Quick, consistent UI without a design system |
| Data files | YAML per trek + GeoJSON per route | Human-readable, diff-friendly, AI research outputs it directly |
| Validation | Zod schemas (Astro content collections) | Build fails if a trek file breaks the schema or the rules |
| Geometry scripts | Node + Overpass API, osmtogeojson, Turf.js | Fetch OSM route relations, merge, simplify, compute stats |
| Photos | Wikimedia Commons API, images resized to WebP at build | Licence metadata via API; no hotlinking dependency |
| Hosting | Cloudflare Pages | Free, global CDN, preview deploy per branch |
| CI | GitHub Actions | Validate, fetch geometry, build, deploy |
| Analytics | Cloudflare Web Analytics | Cookieless, so no cookie banner needed |

## Repository structure

One repo holds the data, the scripts and the site. A trek is one folder named by its `id`; the folder is the unit of review in a pull request.

```
kvali/
├── data/
│   └── treks/
│       └── juliana-trail/
│           ├── trek.yaml          # all card fields, sources, reports, photo refs
│           ├── route.geojson      # full-detail line, generated from OSM
│           └── stats.json         # computed distance, ascent, bbox, midpoint
├── research/
│   ├── prompt.md                  # the country research prompt
│   └── raw/                       # raw research output per country, kept for audit
├── scripts/
│   ├── fetch-route.ts             # OSM relation → route.geojson
│   ├── compute-stats.ts           # distance, ascent, bbox, midpoint
│   ├── fetch-photos.ts            # Commons metadata + resized WebP
│   ├── build-index.ts             # all treks → public/index.json + routes-lite.geojson
│   └── check-links.ts             # dead-link check for sources and reports
├── src/
│   ├── content/config.ts          # Zod schema for trek.yaml
│   ├── components/                # Map, TrekList, Filters, TrekCard (Svelte)
│   ├── layouts/
│   └── pages/
│       ├── index.astro            # main map view
│       ├── treks/[id].astro       # one page per trek
│       └── about.astro            # method, rules, credits
├── public/
│   └── photos/                    # generated WebP files
└── .github/workflows/             # validate.yml, deploy.yml
```

## Data model

`trek.yaml` matches the research prompt's output, plus one field added at review: `status`. Only treks with `status: published` reach the site.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| id | slug | yes | Equals folder name; never changes once published (it is the URL) |
| status | draft \| published | yes | Set to published only after review |
| name | string | yes | Local name in brackets if different |
| countries | ISO 3166-1 alpha-2 list | yes | Cross-border treks list all |
| region | string | yes | Used in list cards and filters |
| one\_liner | string, max 140 chars | yes | Shown on the card |
| route.type | point-to-point \| loop \| linear-return | yes |  |
| route.start / end | string | yes |  |
| route.osm\_relation\_id | integer | one of | Preferred geometry source |
| route.gpx\_source | URL | one of | Fallback when no OSM relation exists |
| distance\_km, total\_ascent\_m | number | no | Researched values; site shows computed values from stats.json |
| typical\_days | {min, max} integers | yes | min ≥ 3 (rule 1) |
| when.best\_months | month list | yes | Drives the month filter |
| when.open\_season | string | no |  |
| sleeping.type | huts \| guesthouses \| camping \| mixed | yes | Drives route colour and filter |
| sleeping.booking\_ahead | required \| recommended \| not-needed | no |  |
| difficulty.level | 1–4 | yes | Scale defined in the research prompt |
| difficulty.reason | string | yes | One line |
| logistics | getting\_to\_start, leaving\_from\_end, nearest\_airports | no |  |
| flags.permit | none \| free-registration \| paid-permit | yes | Lottery or mandatory guide = excluded (rule 3) |
| flags.waymarked | yes \| partial \| no | yes |  |
| flags.water\_scarce, exposed\_or\_via\_ferrata | boolean | yes |  |
| links.official\_site | URL | no |  |
| establishment\_signals | list | yes | Sorts treks within a country |
| trip\_reports | list of {url, title, year\_hiked, summary} | yes, ≥ 2 | v1 card requirement |
| photos | list of {file\_url, author, license, shows} | yes, ≥ 2 | Wikimedia Commons only |
| sources | map of field → URL | yes |  |
| conflicts | list | no | Must be empty to publish |
| last\_verified | date | yes | Shown on the card |

**Validation rules (build fails on any of these)**

- Schema mismatch, unknown enum value, or bad URL
- `typical_days.min` below 3
- A filled risky field (best\_months, sleeping, permit, logistics) with no entry in `sources`
- `status: published` with open `conflicts`, fewer than 2 photos, or fewer than 2 trip reports
- A photo licence not in the allowed list (CC0, CC BY, CC BY-SA, public domain)
- No geometry: neither an OSM relation nor a GPX source
- `last_verified` older than 24 months raises a warning, not a failure

## Data pipeline

A trek moves from research to the live site in six steps; only step 3 needs a human.

1. **Research.** Run the research prompt for one country in a deep-research tool. Save the full output to `research/raw/<country>-<date>.md`.
2. **Split into drafts.** Each YAML block becomes `data/treks/<id>/trek.yaml` with `status: draft`, on a branch named `research/<country>`.
3. **Review.** Open a pull request per country. Check the risky fields against their sources, resolve `conflicts`, delete treks that fail a rule, then set `status: published`.
4. **Enrich (CI, on every push).** `fetch-route` pulls OSM geometry, `compute-stats` writes `stats.json`, `fetch-photos` pulls Commons metadata and resized images.
5. **Validate (CI).** Zod schema plus the validation rules above; `check-links` reports dead source and report URLs. A failure blocks the merge.
6. **Build and deploy.** Merge to `main` triggers `build-index`, the Astro build and the Cloudflare Pages deploy. Each pull request also gets a preview URL, so you can see the new treks on the map before merging.

**Re-verification:** a monthly scheduled CI job lists treks with `last_verified` older than 24 months and any dead links, and opens one issue with that list.

## Route geometry

Distance and ascent shown on the site are computed from the route line, not taken from research; researched values only serve as a cross-check.

**Fetching (`fetch-route`)**

- Pull the relation with the OSM API (`/api/0.6/relation/<id>/full`), falling back to Overpass.
- Superroutes (a relation of relations, common for long trails split into stages) are followed recursively.
- Keep only main-route members. Members with roles `alternative`, `excursion` or `approach` are dropped in v1.
- Merge the ways into ordered lines. If gaps remain, store a MultiLineString and log every gap longer than 200 m in the pull request.
- No OSM relation: convert the GPX from `route.gpx_source` instead, after checking that its licence allows reuse.

**Computing (`compute-stats`)**

- Distance: length of the merged main line.
- Ascent: sample the terrain DEM every 30 m along the line, smooth it, and count only climbs above a 5 m threshold, so DEM noise does not inflate the total.
- Cross-check: if computed and researched values differ by more than 20%, the build posts a warning in the pull request.
- Also stored: bounding box (for zoom-to-trek) and the point at 50% of the length (for the low-zoom dot).

**Two output sizes**

| File | Simplification | Loaded |
| --- | --- | --- |
| `routes-lite.geojson` (all treks, one file) | about 200 m tolerance | On page load, for the world and country views |
| `route.geojson` (per trek) | about 10 m tolerance | When a trek is selected or its page opens |

## Frontend

The main view is one Svelte island that owns a single state: the active filters, the map viewport and the selected trek. Map and list both read from it, which is what keeps them in sync.

**Map layers (bottom to top)**

1. OpenFreeMap base style, muted, with hillshade from the terrain DEM
2. Trek midpoint dots, shown below zoom 6
3. Trek route lines from `routes-lite.geojson`, shown from zoom 6, coloured by `sleeping.type`
4. Highlight layer: the hovered or selected trek, thicker and on top, swapped to full detail when selected

**Interactions**

- Pan or zoom: the list shows only treks whose bounding box intersects the viewport, sorted by establishment signals.
- Hover a list card: its route is highlighted. Hover a route: its card is highlighted and scrolled into view.
- Click a route or card: the panel shows the full card and the map fits the trek's bounding box.
- Filters hide non-matching treks on the map and in the list at the same time.
- All state lives in the URL query (e.g. `?month=9&days=5-8&sleep=huts&trek=juliana-trail`), so any filtered view can be shared.

**Filters**

| Filter | Control | Matches when |
| --- | --- | --- |
| Month | Month picker | Month is in `when.best_months` |
| Days | Range slider, 3 to 20+ | Range overlaps `typical_days` |
| Sleeping | Multi-select chips | `sleeping.type` is selected (mixed matches all) |
| Difficulty | 1–4 chips | `difficulty.level` is selected |
| Flags | Toggles: no permit, waymarked | Flag value matches |

**Trek page (`/treks/<id>`)**

Statically generated per trek: photo header with credits, one-liner, key stats, best months, sleeping, difficulty, logistics, flags, a static map of the route, linked trip reports, official link, a Sources list and the last-verified date.

**Mobile (under 768 px)**

Full-screen map with a bottom sheet in three heights: peek (count + filters button), half (list) and full (trek card). Filters open as a full-screen sheet.

## Performance, SEO and accessibility

The targets are set so the map feels instant on a mid-range phone, and every trek page can be found by search engines.

| Area | Target |
| --- | --- |
| `routes-lite.geojson` | Under 1 MB gzipped at 150 treks |
| `index.json` (card data for all treks) | Under 150 KB gzipped |
| Main view, first paint | Under 2 s on a mid-range phone over 4G |
| Trek page | Lighthouse Performance and SEO 90+ |
| Photos | WebP, 3 sizes (480, 960, 1600 px wide), lazy-loaded below the fold |
| Map library | Loaded only on the main view; trek pages use a pre-rendered static map image |

**SEO**

- Trek pages are plain static HTML with title, description, Open Graph image (first photo) and canonical URL.
- `sitemap.xml` generated at build.
- Schema.org `TouristTrip` markup per trek, with name, description and itinerary start and end.

**Accessibility**

- The list is the accessible way through the data: every trek on the map is also a focusable list item.
- Route colours are always paired with an icon or label, never colour alone.
- Keyboard: Tab moves through filters and list; Enter opens a trek; Escape closes it.

## Hosting, deployment and CI

The only running cost is the domain; hosting, CI and analytics stay on free tiers at v1 traffic.

- **Repo:** GitHub, private until launch.
- **Hosting:** Cloudflare Pages, connected to the repo. `main` deploys to production; every pull request gets a preview URL.
- **Domain:** a kvali domain (.com, .eu or .app, whichever is free), registered through Cloudflare so DNS and hosting sit in one place.
- **Photos:** stored in the repo under `public/photos/` while the total stays under about 500 MB; move to Cloudflare R2 if it grows past that.

**CI workflows (GitHub Actions)**

| Workflow | Runs on | Does |
| --- | --- | --- |
| validate | every push and pull request | fetch-route, compute-stats, fetch-photos, schema and rule checks, link check |
| deploy | merge to `main` | build-index, Astro build, deploy to Cloudflare Pages |
| reverify | monthly schedule | lists stale treks and dead links in one GitHub issue |

Generated files (`route.geojson`, `stats.json`, photos) are committed by the validate workflow, so the build never depends on OSM or Commons being reachable.

## Attribution and legal

Every third-party source is credited where it is shown, and the About page repeats all credits in one place.

| Source | Licence | What Kvali must do |
| --- | --- | --- |
| OpenStreetMap (route lines) | ODbL | "© OpenStreetMap contributors" on the map. The published route files are a derived database, so they are offered under ODbL too. |
| OpenFreeMap (base map) | OpenMapTiles + OSM | Keep the attribution control MapLibre shows by default |
| AWS Terrain Tiles (hillshade) | Mixed open DEM sources | Credit the DEM sources on the About page |
| Wikimedia Commons (photos) | CC0, CC BY, CC BY-SA, public domain | Show author, licence and a link to the Commons file under each photo |
| Trip reports | Their authors' copyright | Link only, with your own one-line summary; never copy their text or photos |
| GPX files (fallback routes) | Varies | Use only when the licence allows reuse; credit as the licence asks |

**Privacy:** v1 collects no personal data and sets no cookies (Cloudflare Web Analytics is cookieless), so no cookie banner is needed. Revisit this when the trip-report form is added.

This is a practical checklist, not legal advice.

## v1 milestones and acceptance criteria

v1 is done when you use Kvali to pick your own 2027 trek; the five phases below lead there, and none starts before the previous gate is passed.

&#91;embedded content: v1 roadmap · 5 phases, 5 gates\]

Phases 3 and 4 can overlap once the pipeline gate is passed: research for the next country runs while the UI is being built.

**Acceptance checklist**

- [ ] 40+ published treks across 8+ countries, at least 1 in the Caucasus
- [ ] Every published trek has a route line, all required fields, 2+ photos and 2+ trip reports
- [ ] Every risky field has a source; no open conflicts
- [ ] Main view: synced list, all five filters, shareable URL state, works on desktop and mobile
- [ ] Every trek has its own page with credits and a Sources list
- [ ] Live on a kvali domain with OSM, map tile, DEM and photo credits
- [ ] Performance targets met on a mid-range phone
- [ ] You pick your 2027 trek with it and send it to 3 friends
