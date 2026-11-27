# Multi-day treks in Georgia (country, GE): research report

Last verified: 2026-11-27. "Georgia" is read as the country (ISO GE), not the US state.

## How to read this

- 12 treks pass all three rules. They are ranked by how many of the five establishment signals apply. Ties are broken by how much trip-report and media coverage turned up.
- Fields with no reliable source are `null`. Where sources disagree, both values are in `conflicts`.
- OSM relation IDs were looked up via the Waymarked Trails API and are real relation IDs. Route lengths from OSM are given in the notes only to help you check them.
- Photos come from Wikimedia Commons only. Author and licence come from the Commons file page text. Commons blocked direct page fetches, so the text was read through search-indexed copies of those pages.
- Difficulty uses your 1–4 scale and is my rating based on the sourced facts in `reason`. It is not the source's own rating.

## Ranking

| # | Trek | Signals (of 5) | Signals that apply |
|---|------|----------------|--------------------|
| 1 | Mestia – Ushguli | 5 | official status (TCT stage), waymarked, trail authority, guidebook, trip reports |
| 2 | Transcaucasian Trail – Upper Svaneti | 4 | official status, waymarked (mostly), trail authority, trip reports |
| 3 | Black Rock Lake Trail (Lagodekhi) | 4 | official status (protected-area trail), waymarked, trail authority, trip reports |
| 4 | Nikoloz Romanov's Trail (Borjomi-Kharagauli NP #1) | 4 | official status, waymarked, trail authority, travel articles |
| 5 | St. Andrew Trail (Borjomi-Kharagauli NP #2) | 4 | official status, waymarked, trail authority, travel articles |
| 6 | Omalo – Shatili via Atsunta Pass | 3 | official status (Tusheti PA trail), trail authority, trip reports — waymarking not confirmed |
| 7 | Shepherds' Trail (Borjomi-Kharagauli NP #9) | 3 | official status, waymarked, trail authority |
| 8 | Transcaucasian Trail – Imereti to Racha | 2 | official status, trail authority (unmarked) |
| 9 | Transcaucasian Trail – Samtskhe-Javakheti | 2 (+partial waymarking) | official status, trail authority, partly blazed |
| 10 | Tobavarchkhili Lakes trek | 2 | tourism-board route page, regularly covered |
| 11 | Zeskho – Ghebi (Svaneti to Racha) | 2 | tourism-board / local action group route pages, regularly covered |
| 12 | Lentekhi – Matskhvarishi | 0 | none (one magazine article and a name-check on georgia.travel) |

---

## 1. Included treks (ranked)

### 1. Mestia – Ushguli

```yaml
id: mestia-ushguli
name: Mestia – Ushguli
countries: [GE]
region: Upper Svaneti, Greater Caucasus
one_liner: "Georgia's classic village-to-village trek under the glaciers of Tetnuldi and Shkhara, guesthouses every night, busiest in July–August."
route:
  type: point-to-point
  start: Mestia
  end: Ushguli
  osm_relation_id: null   # no single relation; covered by TCT stage relations 13703284 (Mestia–Adishi) + 13703285 (Adishi–Ushguli)
  gpx_source: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
distance_km: 56.9
total_ascent_m: 3106
typical_days: { min: 3, max: 4 }
when:
  best_months: [June, July, August, September, October]
  open_season: "Early June to late October; July–August busiest, mid-September recommended"
sleeping:
  type: guesthouses
  booking_ahead: recommended
  notes: "Guesthouses in every overnight village; most do dinner, breakfast and packed lunch. Book for July–August."
difficulty:
  level: 2
  reason: "First and last days easy; two middle days with big climbs (max 2,737 m); a river crossing; no technical sections"
logistics:
  getting_to_start: "Marshrutka from Zugdidi (≈4 h) or a direct minibus from Kutaisi; day train Tbilisi–Zugdidi; small flights to Mestia."
  leaving_from_end: "Shared taxi from Ushguli back to Mestia (≈40 GEL pp) or catch a day-trip minivan; private car to Lentekhi."
  nearest_airports: [Mestia (Queen Tamar), Kutaisi, Tbilisi]
flags:
  permit: none
  permit_notes: "No permit. Note: foreign visitors to Georgia need medical insurance from 1 Jan 2026 (per caucasus-trekking)."
  waymarked: yes
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia
establishment_signals: [official_status, waymarked, official_site, guidebook, trip_reports]
trip_reports:
  - url: https://wander-lush.org/mestia-ushguli-trek-tips/
    title: "An Honest Guide to the Mestia-Ushguli Trek: Everything I Learned Hiking in Svaneti"
    year_hiked: null
    summary: "Four days, guesthouses; candid about the road-walking sections and the river crossing."
  - url: https://monkeystale.ca/2025/10/24/mestia-to-ushguli-trekking-guide/
    title: "Mestia to Ushguli Trekking Guide"
    year_hiked: null
    summary: "Planned three days and stretched it to four to linger in the villages."
  - url: https://imperfectidealist.com/mestia-to-ushguli-trek/
    title: "Mestia to Ushguli 4-Day Hike: Route, Homestays, Packing List"
    year_hiked: null
    summary: "Four days via the Tsvirmi variant (68 km, 3,540 m gain), homestays, no special gear needed."
  - url: https://travelfeed.com/@geekontheroad/mestia-to-ushguli-hike
    title: "Mestia to Ushguli hike"
    year_hiked: null
    summary: "Four days, 57 km, day-by-day account from Zhabeshi onwards."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Adishi_Glacier.jpg
    author: Martin Lopatka
    license: CC BY-SA 2.0
    shows: "Adishi Glacier, seen on the Adishi – Iprali stage"
  - file_url: https://commons.wikimedia.org/wiki/File:Shkhara.jpg
    author: Paweł Pieńkowski
    license: CC BY-SA 3.0
    shows: "South face of Shkhara (5,193 m) from the Georgian side, above Ushguli"
  - file_url: https://commons.wikimedia.org/wiki/File:Tamara%27s_tower,_Ushguli.jpg
    author: I kynitsky
    license: CC BY-SA 4.0
    shows: "Tamar's tower (Lenkveri), Ushguli"
  - file_url: https://commons.wikimedia.org/wiki/File:Ushguli,_Svaneti.jpg
    author: Paata Vardanashvili
    license: CC BY 2.0
    shows: "Svan defensive towers in Ushguli, the trek's end"
sources:
  distance_km: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  total_ascent_m: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  typical_days: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  best_months: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  open_season: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  sleeping: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  difficulty: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  logistics: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  permit: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  waymarked: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli
  official_status: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia
  guidebook: https://www.lehmanns.ch/media/683729/1   # German walking guide TOC: Mestia–Zabeshi, Zabeshi–Adishi, Adishi–Iprari, Iprari–Ushguli stages; also DuMont Georgien: https://www.onleihe.de/static/content/978/361/603/296/2/65c24249673f3d10bd6298ae/v9783616032962.pdf
conflicts:
  - field: distance_km
    values:
      - { value: 56.9, source: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli }
      - { value: 58, source: https://georgia.travel/trekking-in-georgia }
      - { value: 55, source: https://muchbetteradventures.com/magazine/hiking-georgia-5-best-treks-caucasus-mountains }
  - field: typical_days
    values:
      - { value: "3-4", source: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli }
      - { value: "4-5", source: https://georgia.travel/trekking-in-georgia }
  - field: best_months
    values:
      - { value: "early June – late October", source: https://www.caucasus-trekking.com/treks/trek-mestia-to-ushguli }
      - { value: "July – September (sometimes mid-October)", source: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia/practical-information }
last_verified: 2026-11-27
```

### 2. Transcaucasian Trail – Upper Svaneti

```yaml
id: tct-upper-svaneti
name: Transcaucasian Trail – Upper Svaneti
countries: [GE]
region: Upper Svaneti, Greater Caucasus
one_liner: "Five passes from the quiet Nenskra valley to Ushguli: empty first half, then the busy Mestia–Ushguli finale."
route:
  type: point-to-point
  start: Chuberi (Kvemo Marghi)
  end: Ushguli
  osm_relation_id: 16118590   # "Transcaucasian Trail Upper Svaneti"; stage relations 13703281–13703285
  gpx_source: https://caltopo.com/m/27711
distance_km: 140
total_ascent_m: 8917
typical_days: { min: 7, max: 9 }
when:
  best_months: [July, August, September]
  open_season: "July to September, sometimes mid-October; mid-June possible but snow likely on higher passes"
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Guesthouses frequent, especially Mestia–Ushguli; plenty of wild camping on the quieter western half. Booking advice applies to the Mestia–Ushguli part in July–August."
difficulty:
  level: 3
  reason: "Five major passes (Guli Pass 2,974 m); stage 1 alone gains 2,296 m; washed-out bridges and high-water fords possible"
logistics:
  getting_to_start: "Marshrutka from Zugdidi towards Mestia; get off at the nearest point to the trailhead and walk a few km from the main road."
  leaving_from_end: "Shared taxi from Ushguli to Mestia, then marshrutka or flight onward."
  nearest_airports: [Mestia (Queen Tamar), Kutaisi, Tbilisi]
flags:
  permit: none
  permit_notes: "No permit mentioned by the trail association."
  waymarked: yes
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia
establishment_signals: [official_status, waymarked, official_site, trip_reports]
trip_reports:
  - url: https://littleadventurertravels.com/destinations/europe/hiking-georgias-transcaucasian-trail-chuberi-to-mestia/
    title: "Hiking Georgia's Transcaucasian Trail: Chuberi to Mestia"
    year_hiked: null
    summary: "Western half only (83 km, 3–4 days), Chuberi/Nakra to Mestia, following red-white and yellow-white blazes."
  - url: https://www.thenationalnews.com/lifestyle/travel/hiking-georgia-s-transcaucasian-trail-1.712852
    title: "Hiking Georgia's Transcaucasian Trail"
    year_hiked: null
    summary: "Guided 10-day TCT supporters' trek through Svaneti with village homestays (Nakra valley)."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Mt_Ushba,_Georgia.jpg
    author: Paata Vardanashvili
    license: CC BY 2.0
    shows: "Mt Ushba, which dominates the Becho valley stages"
  - file_url: https://commons.wikimedia.org/wiki/File:Mestia_with_Svan_towers.jpg
    author: Jelger Groeneveld
    license: CC BY 2.0
    shows: "Mestia with Svan towers, the trail's halfway town"
  - file_url: https://commons.wikimedia.org/wiki/File:Ushguli_Svaneti_Georgia.JPG
    author: Florian Pinel
    license: CC BY-SA 3.0
    shows: "Ushguli community, the eastern end of the section"
sources:
  distance_km: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia
  total_ascent_m: https://fastestknowntime.com/route/transcaucasian-trail-upper-svaneti
  typical_days: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia
  best_months: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia/practical-information
  open_season: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia/practical-information
  sleeping: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia/practical-information
  difficulty: https://transcaucasiantrail.org/wp-content/uploads/2024/02/Chuberi-Village-Kvemo-Marghi-to-Nakra.pdf
  logistics: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia/practical-information
  permit: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia/practical-information
  waymarked: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia
conflicts:
  - field: typical_days
    values:
      - { value: "7-9", source: https://transcaucasiantrail.org/en/hike/upper-svaneti-georgia }
      - { value: "7-10", source: https://www.islands.com/1808314/underrated-country-georgia-eastern-europe-introducing-world-longest-continuous-transcaucasian-trail }
last_verified: 2026-11-27
```

### 3. Black Rock Lake Trail (Lagodekhi)

```yaml
id: black-rock-lake-lagodekhi
name: Black Rock Lake Trail (Lagodekhi Protected Areas)
countries: [GE]
region: Lagodekhi, Kakheti (Greater Caucasus)
one_liner: "Brutal 1,500 m first-day climb through beech forest to alpine huts and a border lake shared with Dagestan."
route:
  type: loop
  start: Lagodekhi Protected Areas visitor centre
  end: Lagodekhi Protected Areas visitor centre
  osm_relation_id: 10543211
  gpx_source: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
distance_km: 38.2
total_ascent_m: 2888
typical_days: { min: 2, max: 3 }
when:
  best_months: null
  open_season: "Late spring to early autumn (georgia.travel)"
sleeping:
  type: huts
  booking_ahead: not-needed
  notes: "Meteo shelter (16 places) and Demidov hut: bunks and mattresses, no blankets or meals; 30 GEL hut / 5 GEL camping, paid when you register. Camping at the lake itself is not allowed."
difficulty:
  level: 3
  reason: "Day 1 climbs ~1,500 m, day 3 descends ~2,100 m; slippery when wet; not technical"
logistics:
  getting_to_start: "Marshrutka roughly hourly from Tbilisi (Isani) to Lagodekhi, ~2.5 h; walk or taxi up to the visitor centre."
  leaving_from_end: "Marshrutkas from Lagodekhi back to Tbilisi about every 45 min."
  nearest_airports: [Tbilisi]
flags:
  permit: free-registration
  permit_notes: "Register at the Lagodekhi visitor centre before starting (hut/camping fees paid there). Show passport/ID at the border-guard post near the lake."
  waymarked: yes
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://apa.gov.ge/en/eco-tourism/Trails/lagodexis-daculi-teritoriebis-turistuli-bilikebi/4-shvi-kldeebis-tba
establishment_signals: [official_status, waymarked, official_site, trip_reports]
trip_reports:
  - url: https://everywherewego.net/?p=1558
    title: "Georgia: 3-day hike to Black Rock Lake"
    year_hiked: null
    summary: "Anticlockwise in 3 days, 43 km and 2,100 m up and down, carrying all food; calls it way outside their comfort zone."
  - url: https://www.redfedoradiary.com/?p=133
    title: "Hiking the Black Rock Lake in Lagodekhi, Georgia"
    year_hiked: null
    summary: "Done in three days; recommends four or five for a more relaxed pace."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Lake_Grdzeli,_Lagodekhi_Protected_Area,_Georgia.jpg
    author: Giorgi Balakhadze
    license: CC BY-SA 4.0
    shows: "Lake Grdzeli (Khala-Khel), the destination of the Black Rock Lake Trail"
sources:
  distance_km: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  total_ascent_m: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  typical_days: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  best_months: null
  open_season: https://georgia.travel/trekking-in-georgia
  sleeping: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  difficulty: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  logistics: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  permit: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  waymarked: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake
  camping_rule: https://georgiantravelguide.com/en/black-rock-lake-round-trip
conflicts:
  - field: distance_km
    values:
      - { value: 38.2, source: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake }
      - { value: 48, source: https://apa.gov.ge/en/eco-tourism/Trails/lagodexis-daculi-teritoriebis-turistuli-bilikebi/4-shvi-kldeebis-tba }
      - { value: 43, source: "https://everywherewego.net/?p=1558" }
  - field: typical_days
    values:
      - { value: "3 (2 possible for fit hikers)", source: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake }
      - { value: "2-3", source: https://georgia.travel/trekking-in-georgia }
      - { value: "3", source: https://apa.gov.ge/en/eco-tourism/Trails/lagodexis-daculi-teritoriebis-turistuli-bilikebi/4-shvi-kldeebis-tba }
  - field: route.type
    values:
      - { value: "loop (Meteo shelter up, Demidov hut down)", source: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake }
      - { value: "out-and-back to the lake from the shelter", source: https://apa.gov.ge/en/eco-tourism/Trails/lagodexis-daculi-teritoriebis-turistuli-bilikebi/4-shvi-kldeebis-tba }
  - field: difficulty
    values:
      - { value: "Hard", source: https://www.caucasus-trekking.com/treks/trek-to-the-black-rock-lake }
      - { value: "Average", source: https://apa.gov.ge/en/eco-tourism/Trails/lagodexis-daculi-teritoriebis-turistuli-bilikebi/4-shvi-kldeebis-tba }
last_verified: 2026-11-27
```

### 4. Nikoloz Romanov's Trail (Borjomi-Kharagauli NP, trail #1)

```yaml
id: nikoloz-romanov-trail
name: Nikoloz Romanov's Trail (Borjomi-Kharagauli National Park, trail 1)
countries: [GE]
region: Borjomi-Kharagauli National Park, Lesser Caucasus
one_liner: "Shelter-to-shelter crossing of a big forested national park via Lomismta, with Caucasus views on clear days."
route:
  type: point-to-point
  start: Likani guard station (near Borjomi)
  end: Marelisi guard station (near Kharagauli)
  osm_relation_id: 3740297   # "Nikoloz Romanoff Trail" – tags/length not checked
  gpx_source: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/nikoloz-romanovis-biliki
distance_km: 43
total_ascent_m: null
typical_days: { min: 3, max: 3 }
when:
  best_months: null
  open_season: "Park lists the trail for all seasons (winter, spring, summer, autumn); rhododendrons bloom May–June"
sleeping:
  type: huts
  booking_ahead: recommended
  notes: "Lomismta and Sakhvlari tourist shelters, or tents. Shelters are booked through the park visitor centre."
difficulty:
  level: 2
  reason: "Forest climb from 930 m to Lomismta (2,198 m); ~15–18 km days; park rates it average"
logistics:
  getting_to_start: "Likani guard station is 5 km from the park visitor centre in Borjomi (Borjomi has trains and marshrutkas from Tbilisi)."
  leaving_from_end: "Marelisi is hard to leave by marshrutka; the train may be an option."
  nearest_airports: [Tbilisi, Kutaisi]
flags:
  permit: free-registration
  permit_notes: "Mandatory registration at the Borjomi or Kharagauli visitor centre before starting. One guide site says the park visit is not free; the fee structure was not verified. Wild camping outside designated sites is not allowed in Borjomi NP."
  waymarked: yes
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/nikoloz-romanovis-biliki
establishment_signals: [official_status, waymarked, official_site, trip_reports]
trip_reports: []   # no first-hand trip report found; covered in travel articles (Much Better Adventures, georgia.travel)
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:LOMISMTA_MOUNTAIN_GEORGIA.jpg
    author: GagaMumladze2020
    license: CC BY-SA 4.0
    shows: "Lomismta in Borjomi-Kharagauli NP (first overnight of the trail)"
sources:
  distance_km: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/nikoloz-romanovis-biliki
  total_ascent_m: null
  typical_days: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/nikoloz-romanovis-biliki
  best_months: null
  open_season: https://nationalparks.ge/en/site/borjomi-kharagaulinp/tripsInner/3
  sleeping: https://georgiantravelguide.com/en/nikoloz-romanovi-trail
  difficulty: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/nikoloz-romanovis-biliki
  logistics: https://caucasus-trekking.com/treks/crossing-of-meskheti-range
  permit: https://apa.gov.ge/en/eco-tourism/servisebi-da-tarifebi/borjom-xaragaulis-daculi-teritoriebi
  waymarked: https://nationalparks.ge/en/site/borjomi-kharagaulinp/adventuresInner/9
  camping_rule: https://transcaucasiantrail.org/en/thru-hike-the-tct
  travel_articles: https://muchbetteradventures.com/magazine/hiking-georgia-5-best-treks-caucasus-mountains
conflicts:
  - field: difficulty
    values:
      - { value: "Average / Medium", source: https://nationalparks.ge/en/site/borjomi-kharagaulinp/tripsInner/3 }
      - { value: "Easy", source: https://georgiantravelguide.com/en/nikoloz-romanovi-trail }
      - { value: "Moderate", source: https://muchbetteradventures.com/magazine/hiking-georgia-5-best-treks-caucasus-mountains }
last_verified: 2026-11-27
```

### 5. St. Andrew Trail (Borjomi-Kharagauli NP, trail #2)

```yaml
id: st-andrew-trail-borjomi
name: St. Andrew Trail (Borjomi-Kharagauli National Park, trail 2)
countries: [GE]
region: Borjomi-Kharagauli National Park, Lesser Caucasus
one_liner: "The park's longest and hardest marked route, over Sametskhvario (2,642 m) from pine forest to Colchic rainforest."
route:
  type: point-to-point
  start: Atskuri guard station
  end: Marelisi guard station
  osm_relation_id: 3740333   # ref 2, complete=yes, ~58 km in OSM
  gpx_source: https://no.wikiloc.com/hiking-trails/st-andrew-trail-atskuri-marelisi-12593459
distance_km: 54
total_ascent_m: null
typical_days: { min: 4, max: 5 }
when:
  best_months: [May, June, July, August, September, October]
  open_season: "Summer and autumn (park)"
sleeping:
  type: huts
  booking_ahead: recommended
  notes: "Amarati and Sakhvlari tourist shelters, Sametskhvario guard shelter (two beds), optional Kvazvinevi ranger shelter; tents allowed at these sites. Book shelters through the visitor centre."
difficulty:
  level: 3
  reason: "Park rates it hard; long forest climbs to 2,642 m Sametskhvario; days up to 19 km"
logistics:
  getting_to_start: "Atskuri guard station is 27 km from the Borjomi visitor centre; register in Borjomi first."
  leaving_from_end: "Marelisi is hard to leave by marshrutka; the train may be an option."
  nearest_airports: [Tbilisi, Kutaisi]
flags:
  permit: free-registration
  permit_notes: "Mandatory registration at the visitor centre before starting; fee structure not verified."
  waymarked: yes
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki
establishment_signals: [official_status, waymarked, official_site, trip_reports]
trip_reports:
  - url: https://www.georgianholidays.com/blog/hike-st-andrews-trail-georgia/
    title: "Hiking the Hidden Gem: St. Andrew's Trail Adventure in Borjomi-Kharagauli"
    year_hiked: null
    summary: "First-hand account of the ~55 km route, highlight a night at Sametskhvario shelter (~2,500 m). Written by a tour company."
  - url: https://teletype.in/@dvality/standrew
    title: "Тропа святого Андрея (St. Andrew's Trail)"
    year_hiked: null
    summary: "Russian-language account of four days on the trail in autumn (posted November 2022)."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Borjomi_Kharaguli_National_Park_-_Georgia_(5).jpg
    author: Tiniko Dzadzamia
    license: CC BY-SA 2.0
    shows: "Borjomi-Kharagauli National Park landscape (exact spot not stated on Commons)"
sources:
  distance_km: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki
  total_ascent_m: null
  typical_days: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki
  best_months: https://georgiantravelguide.com/en/routes/st-andrew-trail
  open_season: https://nationalparks.ge/en/site/borjomi-kharagaulinp/tripsInner/25
  sleeping: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki
  difficulty: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki
  logistics: https://caucasus-trekking.com/treks/crossing-of-meskheti-range
  permit: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki
  waymarked: https://nationalparks.ge/en/site/borjomi-kharagaulinp/adventuresInner/9
  travel_articles: https://georgia.travel/trekking-in-georgia
conflicts:
  - field: distance_km
    values:
      - { value: 54, source: https://apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/2-wminda-andria-pirvelwodebulis-biliki }
      - { value: 51.2, source: https://alltrails.com/parks/georgia/samtskhe-javakheti/borjomi-kharagauli-national-park }   # 31.8 mi
last_verified: 2026-11-27
```

### 6. Omalo – Shatili via Atsunta Pass

```yaml
id: omalo-shatili-atsunta
name: Omalo – Shatili via Atsunta Pass (Tusheti PA trail "Daquekhi")
countries: [GE]
region: Tusheti and Khevsureti, Greater Caucasus
one_liner: "Tower villages of Tusheti, three wild days over the 3,431 m Atsunta Pass, and a finish at Shatili's stone fortress."
route:
  type: point-to-point
  start: Omalo
  end: Shatili
  osm_relation_id: 12211099   # second, separate relation also exists: 21145876 (both ~50 km, likely incomplete)
  gpx_source: https://www.caucasus-trekking.com/treks/omaloshatili
distance_km: 75.13
total_ascent_m: 2948
typical_days: { min: 4, max: 5 }
when:
  best_months: [July, August]
  open_season: "Atsunta Pass usually passable from about late June; shepherds leave in the first half of October; in 2026 the pass was not expected open before 10 July. Border guards can turn hikers back."
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Guesthouses in Omalo, Dartlo, Chesho, Parsma, Girevi, Shatili; shelters at Kvakhidi and Khidotani (built 2024, sometimes locked); a paid campsite near Khidotani border post. Bring a tent."
difficulty:
  level: 3
  reason: "3,431 m pass, river fords and snowfields early season; 2–3 days with no villages"
logistics:
  getting_to_start: "Marshrutka Tbilisi (Ortachala) – Kvemo Alvani, then shared 4WD jeep over the Abano Pass road to Omalo (4+ h). No public transport into Tusheti."
  leaving_from_end: "Marshrutka Shatili – Tbilisi only Thursdays and Sundays at 12:00 (buy the day before); taxi otherwise."
  nearest_airports: [Tbilisi]
flags:
  permit: free-registration
  permit_notes: "Border-zone registration: fill in forms at the border-guard post in Girevi (~15–20 min); further checkpoints en route. No cost mentioned in sources."
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://dmo.ge/en/region/National-Reserve-Of-Tusheti
establishment_signals: [official_status, official_site, trip_reports]
trip_reports:
  - url: https://www.travelblog.org/Asia/Georgia/Eastern-Georgia/Tusheti/blog-1063236.html
    title: "TravelBlog entry, Tusheti (published 2 Feb 2022)"
    year_hiked: null
    summary: "Hiked in reverse (Shatili to Omalo), camped at the foot of Atsunta Pass; ranks it among their top three treks."
  - url: https://indiahikes.com/blog/managing-trek-europe-atsunta-pass-georgia
    title: "How We Managed Our First European Trek In Georgia"
    year_hiked: null
    summary: "Organiser's account of running a group camping trek over Atsunta Pass; detail on gear and food weight limits."
  - url: https://no.wikiloc.com/hiking-trails/omalo-shatili-14189229
    title: "Omalo - Shatili"
    year_hiked: 2016
    summary: "GPS log started 13 July 2016 from Upper Omalo; warns to refill water at the last source after the pass on day 4."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Acunta,_03,_sestup,_20240707_144044.jpg
    author: Draceane
    license: CC BY-SA 4.0
    shows: "Descending from Atsunta Pass (July 2024)"
  - file_url: https://commons.wikimedia.org/wiki/File:Dartlo_(2).jpg
    author: Lidia Ilona
    license: CC BY 2.0
    shows: "Dartlo, Tusheti, on day 1–2"
  - file_url: https://commons.wikimedia.org/wiki/File:Georgia,_Summer_2009_-_Shatili_11-07-2097.JPG
    author: Davide Cassenti
    license: CC BY-SA 3.0
    shows: "Mutso village, passed on the last day"
  - file_url: https://commons.wikimedia.org/wiki/File:Shatili_medieval_houses,_Georgia.jpg
    author: Vyacheslav Argenberg
    license: CC BY 4.0
    shows: "Shatili's medieval houses, the trek's end"
sources:
  distance_km: https://www.caucasus-trekking.com/treks/omaloshatili
  total_ascent_m: https://www.caucasus-trekking.com/treks/omaloshatili
  typical_days: https://www.caucasus-trekking.com/treks/omaloshatili
  best_months: https://www.caucasus-trekking.com/treks/omaloshatili
  open_season: https://www.caucasus-trekking.com/treks/omaloshatili
  sleeping: https://www.caucasus-trekking.com/treks/omaloshatili
  difficulty: https://www.caucasus-trekking.com/treks/omaloshatili
  logistics: https://www.caucasus-trekking.com/treks/omaloshatili
  permit: https://www.caucasus-trekking.com/treks/omaloshatili
  official_status: https://dmo.ge/en/region/National-Reserve-Of-Tusheti
conflicts:
  - field: distance_km
    values:
      - { value: 75.13, source: https://www.caucasus-trekking.com/treks/omaloshatili }
      - { value: 73, source: https://dmo.ge/en/region/National-Reserve-Of-Tusheti }
      - { value: 70, source: https://georgia.travel/trekking-in-georgia }
  - field: typical_days
    values:
      - { value: "4-5", source: https://www.caucasus-trekking.com/treks/omaloshatili }
      - { value: "6", source: https://dmo.ge/en/region/National-Reserve-Of-Tusheti }
      - { value: "4-6", source: https://georgia.travel/trekking-in-georgia }
  - field: difficulty
    values:
      - { value: "Moderate", source: https://www.caucasus-trekking.com/treks/omaloshatili }
      - { value: "Difficult", source: https://dmo.ge/en/region/National-Reserve-Of-Tusheti }
  - field: guide
    values:
      - { value: "done independently; tent recommended", source: https://www.caucasus-trekking.com/treks/omaloshatili }
      - { value: "'should never be attempted without an experienced guide' (advice, not a rule)", source: https://georgia.travel/trekking-in-georgia }
last_verified: 2026-11-27
```

### 7. Shepherds' Trail (Borjomi-Kharagauli NP, trail #9)

```yaml
id: shepherds-trail-borjomi
name: Shepherds' Trail (Borjomi-Kharagauli National Park, trail 9)
countries: [GE]
region: Borjomi-Kharagauli National Park, Lesser Caucasus
one_liner: "Links the Romanov and St. Andrew trails over Lomismta and the Amarati ridge, past summer shepherd cabins."
route:
  type: point-to-point
  start: Likani guard station
  end: Atskuri guard station
  osm_relation_id: null
  gpx_source: null
distance_km: 54
total_ascent_m: null
typical_days: { min: 3, max: 3 }
when:
  best_months: null
  open_season: "Listed as all-season by a regional guide site"
sleeping:
  type: huts
  booking_ahead: recommended
  notes: "Two required overnights: Lomismta shelter (1,800 m, campsite too) and Amarati shelter. Book through the visitor centre."
difficulty:
  level: 3
  reason: "Park rates it hard; day 2 is 20 km with climbs at both ends"
logistics:
  getting_to_start: "Likani guard station is 5 km from the Borjomi visitor centre."
  leaving_from_end: "From Atskuri, catch a ride or a local marshrutka to Borjomi."
  nearest_airports: [Tbilisi, Kutaisi]
flags:
  permit: free-registration
  permit_notes: "Mandatory registration at the visitor centre before starting; fee structure not verified."
  waymarked: yes
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []   # none found; one reader comment on georgiantravelguide.com notes the GPX between Lomismta and Amarati is wrong – follow the yellow then red marks
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:LOMISMTA_MOUNTAIN_GEORGIA.jpg
    author: GagaMumladze2020
    license: CC BY-SA 4.0
    shows: "Lomismta, first overnight (same photo as the Romanov's Trail entry)"
sources:
  distance_km: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki
  total_ascent_m: null
  typical_days: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki
  best_months: null
  open_season: https://georgiantravelguide.com/en/shepherds-trail
  sleeping: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki
  difficulty: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki
  logistics: https://caucasus-trekking.com/treks/crossing-of-meskheti-range
  permit: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki
  waymarked: https://georgiantravelguide.com/en/shepherds-trail
conflicts:
  - field: distance_km
    values:
      - { value: 54, source: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki }
      - { value: "51 (sum of the same page's daily stages 15+20+16)", source: https://www.apa.gov.ge/en/eco-tourism/Trails/bordjom-xaragaulis-turistuli-bilikebi-satesto/9-mwyemsebis-biliki }
last_verified: 2026-11-27
```

### 8. Transcaucasian Trail – Imereti to Racha

```yaml
id: tct-imereti-racha
name: Transcaucasian Trail – Imereti to Racha
countries: [GE]
region: Imereti and Racha
one_liner: "Unmarked, unpeopled climb from Imereti's farm valleys onto the King Tamar cliffs above Oni. Full wild camping."
route:
  type: point-to-point
  start: Tbilisi–Sachkhere road near Sachkhere (via Drbo)
  end: Oni
  osm_relation_id: 14995924   # "TCT Imereti to Racha", ~69 km in OSM
  gpx_source: https://caltopo.com/m/1A5CC
distance_km: 74
total_ascent_m: null
typical_days: { min: 3, max: 5 }
when:
  best_months: [May, June, July, August, September, October]
  open_season: "May–October; higher parts usually snow-covered November–April. Springs most reliable May–July, many dry by late July."
sleeping:
  type: camping
  booking_ahead: not-needed
  notes: "No indoor accommodation on the trail; wild camping tolerated. Guesthouses in Sachkhere and Oni."
difficulty:
  level: 3
  reason: "~2,000 m climb onto the Imereti–Racha ridge; unmarked, overgrown in places; long exposed ridge traverse"
logistics:
  getting_to_start: "Marshrutka from Tbilisi Didube towards Chiatura/Sachkhere/Oni (12–15 GEL); ask to stop at the trailhead. Drbo is ~20 min from Sachkhere."
  leaving_from_end: "1–2 daily vans Oni – Tbilisi (Didube), ~30 GEL, mornings ~8:30 and afternoons 2–3 pm."
  nearest_airports: [Kutaisi, Tbilisi]
flags:
  permit: none
  permit_notes: "No permit mentioned by the trail association."
  waymarked: no
  water_scarce: true
  exposed_or_via_ferrata: true
links:
  official_site: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia
establishment_signals: [official_status, official_site]
trip_reports:
  - url: https://no.wikiloc.com/hiking-trails/southbound-transcaucasian-trail-imereti-racha-138418580
    title: "Southbound Transcaucasian Trail: Imereti-Racha"
    year_hiked: null
    summary: "Southbound GPS log with waypoints for camp spots, seasonal springs and overgrown stretches."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Shkmeri_Village_and_Mount_Potskhrevi.jpg
    author: Yasuhiro Kojima
    license: CC BY-SA 4.0
    shows: "Shkmeri village and Mt Potskhrevi (2,402 m), Oni Municipality, in the cliff area the route crosses (exact trail position not confirmed)"
  - file_url: https://commons.wikimedia.org/wiki/File:2025-06-20_View_of_Oni_2.jpg
    author: Alexey Komarov
    license: CC BY 4.0
    shows: "View of Oni, the northern endpoint"
sources:
  distance_km: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia
  total_ascent_m: null
  typical_days: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia
  best_months: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia/practical-information
  open_season: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia/practical-information
  sleeping: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia/practical-information
  difficulty: https://transcaucasiantrail.org/?p=7158
  logistics: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia/practical-information
  permit: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia/practical-information
  waymarked: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia
  water_scarce: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia/practical-information
  exposed: https://transcaucasiantrail.org/?p=7158
conflicts:
  - field: distance_km
    values:
      - { value: 74, source: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia }
      - { value: "50 (Drbo–Oni stand-alone version)", source: https://www.caucasus-trekking.com/treks/trek-from-imereti-to-racha }
  - field: typical_days
    values:
      - { value: "3-5", source: https://transcaucasiantrail.org/en/hike/imereti-to-racha-georgia }
      - { value: "2-3 (Drbo–Oni)", source: https://www.caucasus-trekking.com/treks/trek-from-imereti-to-racha }
last_verified: 2026-11-27
```

### 9. Transcaucasian Trail – Samtskhe-Javakheti (Gandzani – Borjomi)

```yaml
id: tct-samtskhe-javakheti
name: Transcaucasian Trail – Samtskhe-Javakheti (Gandzani – Borjomi)
countries: [GE]
region: Javakheti plateau and Abul-Samsari range, Lesser Caucasus
one_liner: "Volcanic plateau, crater lakes and shepherd camps on the TCT's newest Georgian stage, then down through forest to Borjomi."
route:
  type: point-to-point
  start: Gandzani
  end: Borjomi (or Zanavi)
  osm_relation_id: null   # candidate: TCT relation 19410123 (~143 km, Akhaltsikhe–Ninotsminda–Samsari), not the same extent
  gpx_source: https://caltopo.com/m/FEK39NC
distance_km: 102
total_ascent_m: 3563   # northbound; southbound +4,827 m
typical_days: { min: 4, max: 6 }
when:
  best_months: [July, August, September]
  open_season: "Main route over Samsari Pass typically July–September (snow can linger into July); lowland alternate via Lake Paravani roughly June–October; northern forest section May–November"
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Wild camping required from Gandzani to Lake Tabatskuri (about half the route). Guesthouses in Gandzani, Tabatskuri and Borjomi."
difficulty:
  level: 3
  reason: "Steep scree at 3,091 m Samsari Pass, boulder fields, open-terrain navigation; guardian dogs are the main hazard"
logistics:
  getting_to_start: "Daily marshrutka Tbilisi (Samgori) – Ninotsminda run by Family Corner Guesthouse in Gandzani, ~20 GEL, ~2.5 h; call ahead."
  leaving_from_end: "Borjomi – Tbilisi marshrutkas roughly hourly (15 GEL, ~2.5 h) or early train; vans to Kutaisi."
  nearest_airports: [Tbilisi, Kutaisi]
flags:
  permit: none
  permit_notes: "No permit mentioned for this stage. If you finish via Zanavi into Borjomi-Kharagauli NP (trail #4), park registration rules apply and wild camping is forbidden in the park."
  waymarked: partial
  water_scarce: true
  exposed_or_via_ferrata: false
links:
  official_site: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/
establishment_signals: [official_status, official_site]   # waymarking partial (Gandzani–Samsari Pass)
trip_reports: []   # none found; stage guide published recently
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Tabatskuri_Lake.jpg
    author: Yasuhiro Kojima
    license: CC BY-SA 4.0
    shows: "Lake Tabatskuri, the halfway point and first guesthouse"
  - file_url: https://commons.wikimedia.org/wiki/File:Tabatskuri_Lake_and_Abuli-Samsari_Range.jpg
    author: Sandroshanidze
    license: CC BY-SA 4.0
    shows: "Abul-Samsari range seen from Lake Tabatskuri"
  - file_url: https://commons.wikimedia.org/wiki/File:Abuli_Fortress_3.jpg
    author: Kojima Yasuhiro
    license: CC BY 4.0
    shows: "Abuli Fortress on Mt Patara Abuli; stage 1's jeep track heads towards it"
sources:
  distance_km: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/
  total_ascent_m: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/
  typical_days: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/
  best_months: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/practical-information/
  open_season: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/practical-information/
  sleeping: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/practical-information/
  difficulty: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/
  logistics: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/practical-information/
  permit: https://transcaucasiantrail.org/en/thru-hike-the-tct
  waymarked: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/
  water_scarce: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/practical-information/
conflicts:
  - field: total_ascent_m
    values:
      - { value: "3563 (northbound)", source: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/ }
      - { value: "4827 (southbound)", source: https://transcaucasiantrail.org/en/hike/samtskhe-javakheti-georgia/ }
last_verified: 2026-11-27
```

### 10. Tobavarchkhili Lakes trek

```yaml
id: tobavarchkhili-lakes
name: Tobavarchkhili Lakes trek (Silver Lakes, Egrisi range)
countries: [GE]
region: Egrisi range, Samegrelo / Svaneti border
one_liner: "Remote tent trek to a cluster of high glacial lakes; no villages, shepherd huts only, short snow-free window."
route:
  type: point-to-point
  start: Mukhuri
  end: Skuri (classic) – currently use Okare Pass variant to Skuri, or continue to Khaishi
  osm_relation_id: 15354522   # "Mukhuri - Tobavarchkhili Lakes - Skuri", ~70 km in OSM
  gpx_source: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
distance_km: 77.7
total_ascent_m: 5306
typical_days: { min: 3, max: 5 }
when:
  best_months: [July, August, September]
  open_season: "Lakes reachable late June to late September; best from second half of July to mid-September (snow on passes outside that)"
sleeping:
  type: camping
  booking_ahead: not-needed
  notes: "No villages or guesthouses; full camping kit. Kirnakhona shelter exists but is old and in poor condition."
difficulty:
  level: 3
  reason: "Big cumulative ascent (5,300 m), passes ~2,900 m, little marking, fully self-supported"
logistics:
  getting_to_start: "9:00 marshrutka from Zugdidi local bus station to Mukhuri (2+ h); jeeps can shorten the approach to Natipuru."
  leaving_from_end: "From Skuri, ride with mineral-water collectors or walk ~2 km to the main road and hitch to Tsalenjikha/Zugdidi."
  nearest_airports: [Kutaisi, Tbilisi]
flags:
  permit: none
  permit_notes: "No permit mentioned."
  waymarked: partial
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://georgia.travel/mukhuri-tobavarchkhili-lakes-khaishi
establishment_signals: [official_site, trip_reports]   # tourism-board route page; covered by Lonely Planet, Walkopedia, caucasus-trekking
trip_reports:
  - url: https://caucasus-trekking.com/blog/tobavarchkhili-trek-report
    title: "Our trek to Tobavarchkhili lake"
    year_hiked: 2019
    summary: "Four Belgian friends, 5 days from Mukhuri by the classic trail; cab to Natipuru hut, camped at Okhoje lake."
photos: []   # no correctly-located Commons photo found via search (results were for Lake Toba, Indonesia)
sources:
  distance_km: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  total_ascent_m: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  typical_days: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  best_months: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  open_season: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  sleeping: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  difficulty: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  logistics: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  permit: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes
  route_status: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes   # Magana valley trail collapsed ~2025, not rebuilt by July 2026
  coverage: https://www.lonelyplanet.com/points-of-interest/lake-toba-varchkhili/1524201
conflicts:
  - field: distance_km
    values:
      - { value: 77.7, source: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes }
      - { value: "75 (Mukhuri – Khaishi)", source: https://georgia.travel/mukhuri-tobavarchkhili-lakes-khaishi }
  - field: typical_days
    values:
      - { value: "3-5", source: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes }
      - { value: "5-6 (Mukhuri – Khaishi)", source: https://georgia.travel/mukhuri-tobavarchkhili-lakes-khaishi }
  - field: route.end
    values:
      - { value: "Skuri (classic; Magana section impassable as of 2026, Okare Pass variant recommended)", source: https://www.caucasus-trekking.com/treks/trek-to-tobavarchkhili-lakes }
      - { value: "Khaishi", source: https://georgia.travel/mukhuri-tobavarchkhili-lakes-khaishi }
last_verified: 2026-11-27
```

### 11. Zeskho – Ghebi (Svaneti to Racha)

```yaml
id: zeskho-ghebi
name: Zeskho – Ghebi (Svaneti to Racha)
countries: [GE]
region: Lower Svaneti and Upper Racha, Greater Caucasus
one_liner: "Two high passes and the Sasvano lakes on an old, half-vanished route between Lower Svaneti and Racha. Tent and navigation essential."
route:
  type: point-to-point
  start: Zeskho (alpine camp)
  end: Ghebi
  osm_relation_id: null
  gpx_source: https://www.caucasus-trekking.com/treks/svanetiracha
distance_km: 43.2
total_ascent_m: 2062
typical_days: { min: 3, max: 4 }
when:
  best_months: [July, August]
  open_season: "Late June to early September; best July to early September once snow clears Lapuri Pass"
sleeping:
  type: camping
  booking_ahead: not-needed
  notes: "Camping at Lapuri camp and Sasvano lakes; family hotel in Ghebi at the end."
difficulty:
  level: 4
  reason: "Lapuri (~2,526 m) and Vatsistsveri (~2,900 m) passes; overgrown, trail-less valley sections; very remote"
logistics:
  getting_to_start: "Zeskho is 62 km by road from Lentekhi; hire a car from Mestia/Ushguli or Lentekhi."
  leaving_from_end: "Ghebi – Oni bus only on Thursdays (~9:00); otherwise taxi (~60–70 GEL) or hitchhike."
  nearest_airports: [Kutaisi, Tbilisi]
flags:
  permit: free-registration
  permit_notes: "Border-zone permit needed between Zeskho and Ghebi (from the border-guard station in Oni; passports checked at the Zeskho checkpoint). Cost not stated in sources."
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://georgia.travel/zeskho-ghebi
establishment_signals: [official_site, trip_reports]   # tourism-board + Lentekhi LAG pages; covered by caucasus-trekking, Walkopedia, Horizon Guides
trip_reports: []   # no first-hand report URL confirmed
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Rioni_river_gorge_in_Upper_Racha.jpg
    author: Jelger Groeneveld
    license: CC BY 2.0
    shows: "Rioni gorge between Utsera and Chiora/Ghebi, the approach to the trek's end"
sources:
  distance_km: https://www.caucasus-trekking.com/treks/svanetiracha
  total_ascent_m: https://www.caucasus-trekking.com/treks/svanetiracha
  typical_days: https://www.caucasus-trekking.com/treks/svanetiracha
  best_months: https://lentekhi.odoo.com/zeskho-ghebi
  open_season: https://lentekhi.odoo.com/zeskho-ghebi
  sleeping: https://georgia.travel/zeskho-ghebi
  difficulty: https://www.caucasus-trekking.com/treks/svanetiracha
  logistics: https://www.caucasus-trekking.com/treks/svanetiracha
  permit: https://transcaucasiantrail.org/en/thru-hike-the-tct
  permit_detail: https://transcaucasiantrail.org/en/2024/08/24/day-12-oni-to-tsana
conflicts:
  - field: distance_km
    values:
      - { value: 43.2, source: https://www.caucasus-trekking.com/treks/svanetiracha }
      - { value: 43, source: https://lentekhi.odoo.com/zeskho-ghebi }
      - { value: 39, source: https://www.walkopedia.net/best-world-walks/Georgia/Svaneti-Region }
      - { value: 37, source: https://www.caucasus-trekking.com/best-treks }
  - field: typical_days
    values:
      - { value: "3-4", source: https://www.caucasus-trekking.com/treks/svanetiracha }
      - { value: "3", source: https://georgia.travel/zeskho-ghebi }
  - field: freshness
    values:
      - { value: "caucasus-trekking trek page last updated Feb 2019; TCT has been rebuilding parts of this corridor since", source: https://transcaucasiantrail.org/en/2024/08/24/day-12-oni-to-tsana }
last_verified: 2026-11-27
```

### 12. Lentekhi – Matskhvarishi

```yaml
id: lentekhi-matskhvarishi
name: Lentekhi – Matskhvarishi
countries: [GE]
region: Lower and Upper Svaneti, Svaneti range
one_liner: "Little-documented crossing of the Svaneti range over snow and ice near Mt Chkeeru, between Lower and Upper Svaneti."
route:
  type: point-to-point
  start: Matskhvarishi
  end: Lentekhi
  osm_relation_id: 15351593   # "Lentekhi - Matskhvarishi", network rwn
  gpx_source: https://www.loc.wiki/hiking-trails/matskhvarishi-lentekhi-macxvarishi-lentexi-24628422
distance_km: 44
total_ascent_m: null
typical_days: { min: 3, max: 3 }
when:
  best_months: null
  open_season: null
sleeping:
  type: camping
  booking_ahead: not-needed
  notes: "Two camps, each with a shepherd hut."
difficulty:
  level: 4
  reason: "Snow and ice section near Mt Chkeeru (highest point ~3,587 m per GPS track); track author advises ropes, crampons and poles"
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: [Mestia (Queen Tamar), Kutaisi]
flags:
  permit: none
  permit_notes: "No permit mentioned in sources found."
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: false   # not established; glacier/snow terrain rather than exposure – see open questions
links:
  official_site: null
establishment_signals: []   # only one magazine article (Much Better Adventures) and a name-check on the georgia.travel Lentekhi page
trip_reports: []
photos: []
sources:
  distance_km: https://www.loc.wiki/hiking-trails/matskhvarishi-lentekhi-macxvarishi-lentexi-24628422
  total_ascent_m: null
  typical_days: https://muchbetteradventures.com/magazine/hiking-georgia-5-best-treks-caucasus-mountains
  best_months: null
  open_season: null
  sleeping: https://www.loc.wiki/hiking-trails/matskhvarishi-lentekhi-macxvarishi-lentexi-24628422
  difficulty: https://www.loc.wiki/hiking-trails/matskhvarishi-lentekhi-macxvarishi-lentexi-24628422
  logistics: null
  permit: null
  listing: https://georgia.travel/cities-towns/lentekhi
conflicts:
  - field: total_ascent_m
    values:
      - { value: "4672 (app listing, low-confidence)", source: https://www.iso-maps.com/en/randonnee/georgie/racha-lechkhumi-da-qvemo-svaneti/lentekhi-matskhvarishi-159940 }
      - { value: null, source: https://www.loc.wiki/hiking-trails/matskhvarishi-lentekhi-macxvarishi-lentexi-24628422 }
last_verified: 2026-11-27
```

---

## 2. Excluded candidates

| Candidate | Rule failed | Note |
|-----------|-------------|------|
| Chaukhi Pass (Juta – Roshka) | Rule 1: 1–2 days one-way | 2–4 days only as a return loop (caucasus-trekking best list) |
| Udziro Lake (Shovi – Glola) | Rule 1: 2 days | |
| Dartlo – Kvavlo (Tusheti PA trail) | Rule 1: 2 days | |
| Lake Oreti (Tusheti) | Rule 1: 2 days | |
| Panorama Trail (Borjomi-Kharagauli NP) | Rule 1: 2 days | |
| Zekari Overpass Trail (Borjomi-Kharagauli NP) | Rule 1: 2 days | |
| Chuberi – Nakra | Rule 1: 2 days | Already part of TCT Upper Svaneti |
| Iprari – Chvelpi via Latpari Pass | Rule 1: day hike | |
| Okrokana – Zakagori (Truso valley) | Rule 1: day hike | |
| Mount Kazbek ascent | Out of scope (not one of the 3 rules) | Glaciated mountaineering climb; guide recommended. It's a summit climb, not a trek |
| Tusheti – Khevsureti via Borbalo Pass | Rule 2 (borderline) | Route described by a single author; no official or tourism-board listing found |
| Keli plateau / Kelitsadi | Rule 2 (borderline) | Single-source route |
| Lentekhi – Khaishi over the Uskuri range | Rule 2 | Exploratory single-source route |
| Shatili – Juta (Khevsureti – Kazbegi) | Rule 2 | No single defined route; several variants |
| Tusheti – Kazbegi traverse | Rule 2 | Tour-operator itinerary |
| Transcaucasian Trail, full Georgia thru-hike | Rule 2 | Thru-hike route is shared only with registered forum members and is still being developed. Its open sections are listed separately above |

## 3. Open questions for a human check

1. **Omalo – Shatili waymarking.** I found no source on waymarking. The two OSM relations carry osmc symbols (red-white-red and yellow-white-yellow), which suggests marks exist. If it's confirmed, the trek moves up to 4 signals.
2. **Omalo – Shatili OSM:** there are two relations (12211099, 21145876). Both are about 50 km against roughly 75 km in the sources, so both look incomplete. One should be picked or merged.
3. **Mestia – Ushguli OSM:** there's no single relation. Either compute it from TCT stage relations 13703284 + 13703285, or create a dedicated one.
4. **TCT Samtskhe-Javakheti OSM:** relation 19410123 is a TCT relation in the area, but it covers a different and longer extent (~143 km, Akhaltsikhe–Ninotsminda). Needs checking.
5. **Permit costs.** Sources describe the border-zone registrations (Omalo – Shatili, Zeskho – Ghebi) as forms filled in at border posts but never state a price. They're recorded as `free-registration` and should be confirmed. For Borjomi-Kharagauli NP, one site says the visit "is not free". The APA services-and-fees page should confirm whether there's an entry fee or only shelter and camping fees.
6. **Guidebook signal.** It's confirmed only for Mestia – Ushguli (stage-by-stage coverage in a German walking guide and DuMont). The Bradt *Georgia* (7th ed., 2024) blurb mentions the Transcaucasian Trail "and other treks", but which treks are described wasn't checked. Rother's *Georgien* covers only 2-day Borjomi routes.
7. **Black Rock Lake.** Distance ranges from 38 to 48 km depending on source, and sources disagree on whether it's a loop or out-and-back. `best_months` is empty because no source gives months. Only one correctly-located Commons photo was found.
8. **Tobavarchkhili.** The classic Skuri exit through the Magana valley collapsed around 2025 and was still impassable in July 2026. Decide whether the site's canonical route should be Mukhuri – Okare Pass – Skuri or the tourism board's Mukhuri – Khaishi. The ascent figure may belong to a different variant. No Commons photo was found.
9. **Zeskho – Ghebi.** The detailed caucasus-trekking page dates from 2019. The TCT has been clearing parts of this corridor since then, so conditions and waymarking may have changed. No OSM relation was found.
10. **Lentekhi – Matskhvarishi.** It barely passes Rule 2 (tourism-board mention plus an OSM relation). It has no trip reports, photos, season or transport data, and the source says ropes and crampons are needed. Consider whether it belongs on a hiking site at all.
11. **Trip-report gaps.** Fewer than 3 first-hand reports were found for TCT Upper Svaneti, Black Rock Lake, St. Andrew, Imereti – Racha and Tobavarchkhili. None were found for Romanov's Trail, the Shepherds' Trail, TCT Samtskhe-Javakheti, Zeskho – Ghebi and Lentekhi – Matskhvarishi. `year_hiked` is mostly `null` because posts rarely state it.
12. **Not exhaustively checked:** the remaining protected-area trail lists (Tusheti has 10 official trails but only 4 are described in English; Kintrishi, Mtirala, Machakhela, Javakheti NP, Racha NP, Pshav-Khevsureti NP), and Lentekhi-area trails listed by georgia.travel (Mananuri – Tviberi, Khacheshi – Doberazeni, etc.). Some of these may have 3-day routes.
13. **Generic photos.** The St. Andrew photo is a Borjomi-Kharagauli NP landscape with no location given on Commons. The Imereti – Racha "Shkmeri" photo is near the route, but its exact position on the trail isn't confirmed.
