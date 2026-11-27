# Multi-day treks in Switzerland (CH): research report

Last verified: 2026-11-27. Covers treks in Switzerland and cross-border treks that pass through it.

## How to read this

- **Scope.** Switzerland has 7 national and 58 regional signed multi-day routes (SwitzerlandMobility), plus hut-to-hut tours that are not on that list. This pass fully researched **22 treks**: all 7 national routes, the 8 best-known hut tours and cross-border treks, and 7 well-known regional routes. The other regional routes and some hut tours were checked against the rules from official data only. They are listed in section 3 ("Screened, not yet fully researched") so a second pass can pick them up. None of them is in the ranking yet.
- **Ranking.** Treks are ranked by how many of the five establishment signals apply. Ties are broken by how many first-hand trip reports and articles turned up. The ranking is mechanical: the Walker's Haute Route ranks 7th only because it has no official trail authority.
- **"Official status"** means a SwitzerlandMobility national or regional route number, or an official cross-border tour (TMB, TMR). **"Trip reports"** is only counted when at least two independent first-hand accounts were found.
- **Empty fields.** Fields with no reliable source are `null` or `[]`. Where sources disagree, the values are in `conflicts`.
- **OSM relation IDs** were looked up with the Waymarked Trails API, and the whole-route relation was checked where there was a choice. Where the official length and the OSM mapped length differ a lot, both are noted.
- **Photos** are from Wikimedia Commons only. Commons could not be opened directly from this session, so author and licence come from search-indexed copies of the file pages. A photo was kept only when **both** author and licence were visible. That is why many treks have few or no photos (see open questions).
- **Difficulty** uses your 1–4 scale. It is my rating, based on the sourced facts in `reason`, not the source's own grade.
- **Logistics** lines are kept short and only say what the cited page supports (start/end town, rail or bus where stated).
- In the `.yaml` file, `waymarked` values are quoted (`"yes"`) so YAML 1.1 parsers do not turn them into booleans.

## Ranking

| # | Trek | Signals (of 5) | Signals that apply | Difficulty | Days |
|---|------|----------------|--------------------|-----------|------|
| 1 | TMB – Tour du Mont Blanc | 5 | official status, waymarked, official site, guidebook, trip reports | 3 | 7–12 |
| 2 | Via Alpina (national route 1 / Alpine Pass Route) | 5 | official status, waymarked, official site, guidebook, trip reports | 3 | 19–20 |
| 3 | Tour Monte Rosa | 5 | official status, waymarked, official site, guidebook, trip reports | 4 | 9–11 |
| 4 | Tour des Combins | 4 | official site, waymarked, guidebook, trip reports | 3 | 6–7 |
| 5 | Alpine Passes Trail (national route 6) | 4 | official status, waymarked, official site, trip reports | 4 | 39–43 |
| 6 | ViaJacobi (national route 4) | 4 | official status, waymarked, official site, trip reports | 1 | 20–24 |
| 7 | Walker's Haute Route | 3 | waymarked, guidebook, trip reports | 4 | 10–14 |
| 8 | Tour of the Matterhorn | 3 | official site, guidebook, trip reports | 4 | 8–10 |
| 9 | Tour des Muverans | 3 | official site, waymarked, trip reports | 3 | 4–5 |
| 10 | Tour des Dents du Midi | 3 | official site, waymarked, trip reports | 3 | 2–4 |
| 11 | Via Alta della Verzasca | 3 | official site, waymarked, trip reports | 4 | 4–5 |
| 12 | Trans Swiss Trail (national route 2) | 3 | official status, waymarked, official site | 2 | 32–32 |
| 13 | Jura Crest Trail (national route 5) | 3 | official status, waymarked, official site | 2 | 16–18 |
| 14 | ViaGottardo (national route 7) | 3 | official status, waymarked, official site | 2 | 20–20 |
| 15 | Alpine Panorama Trail (national route 3) | 3 | official status, waymarked, official site | 2 | 29–30 |
| 16 | Walserweg Graubünden (regional 35) | 3 | official status, waymarked, official site | 3 | 19–23 |
| 17 | Via Albula/Bernina (regional 33) | 3 | official status, waymarked, official site | 2 | 7–10 |
| 18 | ViaSpluga (regional 50) | 3 | official status, waymarked, official site | 2 | 4–4 |
| 19 | Swiss Tour Monte Rosa (regional 27) | 3 | official status, waymarked, official site | 3 | 3–3 |
| 20 | Vier-Quellen-Weg (regional 49) | 3 | official status, waymarked, official site | 3 | 5–5 |
| 21 | Senda Sursilvana (regional 85) | 3 | official status, waymarked, official site | 2 | 5–5 |
| 22 | Via Francigena – Swiss section (regional 70) | 3 | official status, waymarked, official site | 2 | 10–12 |

---

## 1. Included treks (ranked)

### 1. TMB – Tour du Mont Blanc

```yaml
id: tour-du-mont-blanc
name: Tour du Mont Blanc (TMB)
countries: [FR, IT, CH]
region: Mont Blanc massif – Haute-Savoie, Aosta Valley, Valais (Val Ferret / Champex / Trient)
one_liner: "The Alps' most famous loop: three countries, ten-plus passes and constant Mont Blanc views, refuges every night but booked out months ahead for July–August."
route:
  type: loop
  start: Les Houches (Chamonix valley)
  end: Les Houches
  osm_relation_id: 124456
  gpx_source: null
distance_km: 170
total_ascent_m: 10000
typical_days: { min: 7, max: 12 }
when:
  best_months: [June, July, August, September]
  open_season: "Mid-June to mid-September, set by snow on the high passes and refuge opening dates."
sleeping:
  type: mixed
  booking_ahead: required
  notes: "Refuges, gîtes d'étape, hotels and campsites. Refuge booking for the following summer opens in mid-October on the official site; popular refuges fill very early."
difficulty:
  level: 3
  reason: "Most days climb 800–1,200 m+ over a high pass; rough ground and ladders on some variants (e.g. Fenêtre d'Arpette, Lac Blanc); no technical climbing on the main route."
logistics:
  getting_to_start: "Les Houches is in the Chamonix valley, reached by train or bus from Chamonix; shuttle buses link Geneva airport and Chamonix."
  leaving_from_end: "Loop – back to Les Houches/Chamonix."
  nearest_airports: [Geneva]
flags:
  permit: none
  permit_notes: "No permit; camping/bivouac rules differ by country and commune."
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://montourdumontblanc.com/en/
establishment_signals: [official_status, waymarked, official_site, guidebook, trip_reports]
trip_reports:
  - url: https://patricklam.ca/post/20250824-tmb
    title: "Trip report: Tour du Mont Blanc, July 21 to August 1, 2025"
    year_hiked: 2025
    summary: "12 days in late July 2025, staying in refuges rather than camping."
  - url: https://www.mountaineers.org/activities/trip-reports/global-adventures-trek-hut-to-hut-on-the-tour-du-mont-blanc
    title: "Global Adventures – Trek Hut to Hut on the Tour du Mont Blanc"
    year_hiked: null
    summary: "Club group of 8 hut-to-hut over 12 days; very rugged trail, a boulder field east of Fenêtre d'Arpette and nearly a dozen ladders."
  - url: https://tmbtent.com/tour-du-mont-blanc-trip-report/
    title: "Tour du Mont Blanc – Our Trip Report"
    year_hiked: 2017
    summary: "11 days in July 2017 including a rest day, camping most nights with a few refuge and hotel stays."
  - url: https://www.fieldmag.com/articles/tour-du-mont-blanc-complete-hikers-guide
    title: "Tour du Mont Blanc: A First Hand Guide to Europe's Most Iconic Hut Hike"
    year_hiked: 2025
    summary: "First-hand guide written after hiking the full loop in 2025, with packing and lodging advice."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Passerelle_Tour_du_Mont-Blanc_@_Col_des_Montets.jpg
    author: Rémih
    license: CC BY-SA 4.0
    shows: TMB footbridge on the climb to Col des Montets from Trélechamp
  - file_url: https://commons.wikimedia.org/wiki/File:Mont_Blanc_100_0068.JPG
    author: Daniel*D
    license: CC BY-SA 3.0
    shows: Mont Blanc seen from the path between Col de Balme and Refuge Albert Ier
sources:
  distance_km: https://montourdumontblanc.com/en/
  total_ascent_m: https://www.cicerone.co.uk/the-tour-du-mont-blanc-tmb-everything-you-need-to-know
  typical_days: https://montourdumontblanc.com/en/
  best_months: https://www.ultimatefrance.com/hiking/french-alps/tour-du-mont-blanc
  open_season: https://www.ultimatefrance.com/hiking/french-alps/tour-du-mont-blanc
  sleeping: https://montourdumontblanc.com/uk/il4-tmb_p40-bookings-opening-for-summer-2026.aspx
  difficulty: https://www.mountaineers.org/activities/trip-reports/global-adventures-trek-hut-to-hut-on-the-tour-du-mont-blanc
  logistics: https://www.ultimatefrance.com/hiking/french-alps/tour-du-mont-blanc
  permit: https://montourdumontblanc.com/en/
conflicts:
  - field: distance_km
    values:
      - { value: 170, source: "https://montourdumontblanc.com/en/" }
      - { value: 165, source: "https://en.wikipedia.org/wiki/Tour_du_Mont_Blanc" }
  - field: typical_days
    values:
      - { value: "7–12", source: "https://montourdumontblanc.com/en/" }
      - { value: "7–11", source: "https://www.cicerone.co.uk/the-tour-du-mont-blanc-tmb-everything-you-need-to-know" }
last_verified: 2026-11-27
```

### 2. Via Alpina (national route 1 / Alpine Pass Route)

```yaml
id: via-alpina-1
name: Via Alpina – Swiss national route 1 (Alpine Pass Route)
countries: [LI, CH]
region: Northern Swiss Alps – St. Gallen, Glarus, Central Switzerland, Bernese Oberland, Vaud Alps
one_liner: "Switzerland's flagship east–west traverse over 14 Alpine passes from Liechtenstein to Lake Geneva, sleeping in villages, inns and huts; Bernese Oberland stages are the busiest."
route:
  type: point-to-point
  start: Vaduz (Gaflei), Liechtenstein
  end: Montreux
  osm_relation_id: 12359033
  gpx_source: null
distance_km: 390
total_ascent_m: 23500
typical_days: { min: 19, max: 20 }
when:
  best_months: [July, August, September]
  open_season: "Official route season May–October; Cicerone advises early July to mid-September, when the highest passes are snow-free and mountain accommodation is open."
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Mountain huts, village inns and farm accommodation (Cicerone). Every stage ends in or near a village; luggage-transfer packages exist."
difficulty:
  level: 3
  reason: "Long days with up to ~1,600 m of ascent and high passes up to 2,778 m (Hohtürli); officially rated technically medium, physically difficult."
logistics:
  getting_to_start: "Stage 1 starts at Gaflei above Vaduz (Liechtenstein); Vaduz is on the SBB timetable (bus). Traditional Alpine Pass Route start is Sargans (rail)."
  leaving_from_end: "Montreux is on the main Lake Geneva rail line."
  nearest_airports: [Zurich, Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-1
establishment_signals: [official_status, waymarked, official_site, guidebook, trip_reports]
trip_reports:
  - url: https://stephaniewang.page/MyViaAlpinaGreenExperience/
    title: "My Via Alpina Green Experience"
    year_hiked: null
    summary: "Through-hike of all 20 sections Vaduz–Montreux, staying in village lodgings along the way."
  - url: https://hikebiketravel.com/via-alpina-in-switzerland
    title: "Via Alpina in Switzerland"
    year_hiked: null
    summary: "Six self-guided stages Meiringen–Lenk with luggage transfer, hotel every night."
  - url: https://www.afar.com/magazine/hike-hut-to-hut-in-the-alps-in-switzerland
    title: "This 240-Mile Trek in the Swiss Alps Is All About Mountain Huts and Cheese Shops in the Clouds"
    year_hiked: null
    summary: "Magazine first-person account of a hut-to-hut section of Via Alpina 1; long days, steep passes."
  - url: https://www.fastestknowntime.com/fkt/liz-derstine-alpina-switzerland-2023-07-01
    title: "Swiss Via Alpina – women's supported FKT report (Liz Derstine)"
    year_hiked: 2023
    summary: "Fastest-known-time attempt Vaduz–Montreux in July 2023 with about 8 days available; notes on following the Via Alpina 1 signs."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:1588-Oeschinensee.jpg
    author: Friedrich-Karl Mohr (FkMohr)
    license: CC BY-SA 3.0 DE
    shows: Oeschinensee and the Blüemlisalp, on the Griesalp–Hohtürli–Kandersteg stage
  - file_url: https://commons.wikimedia.org/wiki/File:Oeschinensee_at_sunset.jpg
    author: Jean Schmitt
    license: CC BY-SA 4.0
    shows: Oeschinensee at sunset with Fründenhorn and Doldenhorn
  - file_url: https://commons.wikimedia.org/wiki/File:Oeschinensee_mit_K%C3%BChen.jpg
    author: Monika.frischknecht
    license: CC BY-SA 3.0
    shows: Cows grazing above Oeschinensee
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/via-alpina/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/via-alpina/
  typical_days: https://www.cicerone.co.uk/trekking-the-swiss-via-alpina
  best_months: https://www.cicerone.co.uk/trekking-the-swiss-via-alpina
  open_season: https://www.myswitzerland.com/en/experiences/route/via-alpina/
  sleeping: https://www.cicerone.co.uk/9781786311603
  difficulty: https://www.eurotrek.ch/en/activities/hiking-holidays/switzerland/hiking-via-alpina-vaduz-montreux-21-20
  logistics: https://www.myswitzerland.com/en-ch/experiences/route/via-alpina-1_01
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-1
conflicts:
  - field: best_months
    values:
      - { value: "May–October (route season)", source: "https://www.myswitzerland.com/en/experiences/route/via-alpina/" }
      - { value: "early July–mid September", source: "https://www.cicerone.co.uk/trekking-the-swiss-via-alpina" }
  - field: distance_km
    values:
      - { value: 390, source: "https://www.myswitzerland.com/en/experiences/route/via-alpina/" }
      - { value: 379.5, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/12359033" }
last_verified: 2026-11-27
```

### 3. Tour Monte Rosa

```yaml
id: tour-monte-rosa
name: Tour Monte Rosa (TMR; Tour du Mont Rose / Giro del Monte Rosa)
countries: [CH, IT]
region: Pennine Alps – Mattertal and Saastal (Valais), Aosta Valley, Valsesia, Valle Anzasca
one_liner: "A big high loop around Monte Rosa linking Zermatt and Saas-Fee with Walser villages in Italy; two glacier passes, long days, huts and villages each night."
route:
  type: loop
  start: Zermatt
  end: Zermatt
  osm_relation_id: 10353523
  gpx_source: https://www.cicerone.co.uk/9781786312662
distance_km: 164.1
total_ascent_m: 10654
typical_days: { min: 9, max: 11 }
when:
  best_months: [July, August, September]
  open_season: "July to mid-September; heavy snow likely in June and early July, and some huts open only late June to early September (Cicerone)."
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Mountain huts, lodges and refuges plus village hotels (Zermatt, Grächen, Saas-Fee, Gressoney, Alagna, Macugnaga). Zermatt Tourism advises reserving huts and village beds in advance. Rifugio Gabiet closed for renovation in summer 2026."
difficulty:
  level: 4
  reason: "About 1,000 m ascent per day with several 1,500 m+ climbs, Theodul Pass at ~3,300 m on a glacier, steep/exposed/unstable paths in places."
logistics:
  getting_to_start: "Zermatt is car-free and reached by train from Visp/Täsch; the loop can also be joined in Saas-Fee, Grächen or the Italian valleys."
  leaving_from_end: "Loop – train down from Zermatt."
  nearest_airports: [Geneva, Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: "No permit, but glacier crossings (Theodul Pass, optional Monte Moro variant) – Zermatt Tourism advises not to go on glaciers without a mountain guide and lists crampons, harness and rope; lifts can bypass part of the Theodul glacier. Check for route closures (Europaweg Spriegelboden–Täschalp marked closed since 2024; Britannia–Plattjen–Saas-Fee path closed)."
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.tmr-matterhorn.ch/en/home.html
establishment_signals: [official_status, waymarked, official_site, guidebook, trip_reports]
trip_reports:
  - url: https://summitpost.org/three-winter-days-early-september-under-matterhorn/1050852
    title: "Three winter days in early September under Matterhorn"
    year_hiked: 2019
    summary: "Days 4–6 of a 9-day TMR in September 2019 in a group of three; early snow turned the Theodul crossing into a winter outing."
  - url: https://summitpost.org/monte-rosa-tour/1048362
    title: "Monte Rosa Tour (route page)"
    year_hiked: null
    summary: "Author's own 9-day 'maximum hiking version' from Macugnaga, with day-by-day distances and ascents."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Theodulpass.JPG
    author: Woudloper
    license: Public domain
    shows: Theodul Pass on the Swiss–Italian border with Rifugio Teodulo
  - file_url: https://commons.wikimedia.org/wiki/File:Rif-theodulo.jpg
    author: Jan Liska
    license: CC BY-SA 3.0 DE
    shows: Theodulhütte (Rifugio Teodulo) and Testa Grigia
sources:
  distance_km: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Tour-Monte-Rosa-Matterhorn
  total_ascent_m: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Tour-Monte-Rosa-Matterhorn
  typical_days: https://www.cicerone.co.uk/9781786312662
  best_months: https://www.cicerone.co.uk/9781786312662
  open_season: https://www.cicerone.co.uk/9781786312662
  sleeping: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Tour-Monte-Rosa-Matterhorn
  difficulty: https://www.cicerone.co.uk/9781786312662
  logistics: https://muchbetteradventures.com/magazine/tour-of-monte-rosa-guide
  permit: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Tour-Monte-Rosa-Matterhorn
conflicts:
  - field: distance_km
    values:
      - { value: 164.1, source: "https://light.zermatt.ch/en/Media/Planning-hikes-tours/Tour-Monte-Rosa-Matterhorn" }
      - { value: 174, source: "https://www.cicerone.co.uk/9781786312662" }
      - { value: "160–170", source: "https://summitpost.org/monte-rosa-tour/1048362" }
  - field: typical_days
    values:
      - { value: "9 stages", source: "https://light.zermatt.ch/en/Media/Planning-hikes-tours/Tour-Monte-Rosa-Matterhorn" }
      - { value: "10–11 days", source: "https://www.cicerone.co.uk/9781786312662" }
last_verified: 2026-11-27
```

### 4. Tour des Combins

```yaml
id: tour-des-combins
name: Tour des Combins (Grand Tour des Combins)
countries: [CH, IT]
region: Pennine Alps – Val de Bagnes and Pays du Saint-Bernard (Valais), Valpelline and Great St Bernard valley (Aosta Valley)
one_liner: "A quieter TMB neighbour circling the glaciated Grand Combin via Swiss cabanes and Italian rifugi, reservoir lakes and the Great St Bernard Pass."
route:
  type: loop
  start: Bourg-Saint-Pierre
  end: Bourg-Saint-Pierre
  osm_relation_id: 49181
  gpx_source: null
distance_km: 105.2
total_ascent_m: 5658
typical_days: { min: 6, max: 7 }
when:
  best_months: [July, August]
  open_season: "Official season mid-June to mid-September; mid-July to end of August gives the best chance of snow-free passes."
sleeping:
  type: huts
  booking_ahead: null
  notes: "Swiss cabanes (Mille, Brunet, Panossière, Chanrion) and Italian rifugi, plus village inns at Bourg-Saint-Pierre, Saint-Rhémy and the Great St Bernard hospice."
difficulty:
  level: 3
  reason: "Rated comparable to the Walker's Haute Route; the official site calls it a little more demanding than the TMB, with several alpine passes and rocky sections such as the Pas des Chevaux."
logistics:
  getting_to_start: "Bourg-Saint-Pierre on the Great St Bernard road, reached from Geneva by train and bus in about 3.5 h."
  leaving_from_end: "Loop – back to Bourg-Saint-Pierre."
  nearest_airports: [Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://mongrandtourdescombins.com/en
establishment_signals: [official_site, waymarked, guidebook, trip_reports]
trip_reports:
  - url: https://www.novo-monde.com/en/tour-des-combins-hike/
    title: "Tour des Combins: our complete trekking guide for this stunning hike in the Swiss and Italian Alps"
    year_hiked: null
    summary: "Seven days from Bourg-Saint-Pierre via Cabane de Mille, Panossière, Chanrion and Champillon (trip supported by the regional tourism boards)."
  - url: https://www.i-trekkings.net/carnet-outdoor/tour-des-combins/
    title: "Tour des Combins (carnet outdoor)"
    year_hiked: null
    summary: "Personal account with GPS track; high-mountain scenery but 'very accessible', starting in a thunderstorm at Bourg-Saint-Pierre."
  - url: https://www.nationalgeographic.com/travel/article/tour-des-combins-long-distance-hike-alps
    title: "How to walk the Tour des Combins, the best long-distance hike in the Alps"
    year_hiked: null
    summary: "Six-day loop from Bourg-Saint-Pierre, ~63 miles, written first-hand (walked with local mountain leaders)."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Grand_combin.jpg
    author: Sideshowbob (German Wikipedia)
    license: CC BY-SA 3.0
    shows: Grand Combin and the Corbassière glacier from Cabane de Panossière
sources:
  distance_km: https://bookatrekking.com/en/trek/tour-des-combins-7-days/
  total_ascent_m: https://bookatrekking.com/en/trek/tour-des-combins-7-days/
  typical_days: https://www.verbier.ch/app/uploads/ot-verbier/2023/03/Up-Hill-and-Down-Dale.pdf
  best_months: https://bookatrekking.com/en/blog/tour-des-combins/
  open_season: https://bookatrekking.com/en/blog/tour-des-combins/
  sleeping: https://summitpost.org/tour-des-combins/162426
  difficulty: https://mongrandtourdescombins.com/en
  logistics: https://www.nationalgeographic.com/travel/article/tour-des-combins-long-distance-hike-alps
  permit: https://mongrandtourdescombins.com/en
conflicts:
  - field: typical_days
    values:
      - { value: "6 days (classic Tour des Combins)", source: "https://www.verbier.ch/app/uploads/ot-verbier/2023/03/Up-Hill-and-Down-Dale.pdf" }
      - { value: "10 days (Grand Tour des Combins, official site)", source: "https://mongrandtourdescombins.com/en" }
  - field: distance_km
    values:
      - { value: 105.2, source: "https://bookatrekking.com/en/trek/tour-des-combins-7-days/" }
      - { value: "~101 (63 miles)", source: "https://www.nationalgeographic.com/travel/article/tour-des-combins-long-distance-hike-alps" }
last_verified: 2026-11-27
```

### 5. Alpine Passes Trail (national route 6)

```yaml
id: alpine-passes-trail
name: Alpine Passes Trail (Alpenpässe-Weg / Chemin des cols alpins) – Swiss national route 6
countries: [CH]
region: Southern Swiss Alps – Engadin, Graubünden (Greina), Ticino, Upper Valais, Pennine Alps, Chablais
one_liner: "The longest and wildest Swiss national trail: ~40 passes in 43 stages from St. Moritz to Lake Geneva, huts and mountain villages, for very fit, experienced walkers."
route:
  type: point-to-point
  start: St. Moritz (Corviglia)
  end: St-Gingolph
  osm_relation_id: 18021781
  gpx_source: null
distance_km: 695
total_ascent_m: 47100
typical_days: { min: 39, max: 43 }
when:
  best_months: [June, July, August, September]
  open_season: "June to September; watch for lingering snow in June and early snowfall in September."
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Mountain huts, village guesthouses and some campsites (e.g. a campground at the Great St Bernard is listed as a highlight)."
difficulty:
  level: 4
  reason: "Technically medium, physically difficult: 47,100 m ascent, highest point ~2,987 m (Col de Prafleuri), scree and short rope-assisted exposed sections."
logistics:
  getting_to_start: "Corviglia above St. Moritz (funicular from St. Moritz, Engadin rail)."
  leaving_from_end: "St-Gingolph on Lake Geneva at the French border."
  nearest_airports: [Zurich, Geneva, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-6
establishment_signals: [official_status, waymarked, official_site, trip_reports]
trip_reports:
  - url: https://www.komoot.com/adventure-hub/notes-from-outside/13/two-peas-in-a-plod-hiking-the-alpine-passes-trail-as-a-couple
    title: "Two peas in a plod: hiking the Alpine Passes Trail as a couple"
    year_hiked: null
    summary: "Month-long through-hike as a couple, ~700 km and ~38,000 m of ascent."
  - url: https://www.thegreatoutdoorsmag.com/long-reads/alpenpasse-weg/
    title: "Alpenpässe-Weg: walking the Swiss Alps' wildest trail"
    year_hiked: null
    summary: "David Myers' end-to-end walk from Lake Geneva eastwards, over Col de Prafleuri, the trail's high point."
  - url: https://www.imperial.ac.uk/media/imperial-college/be-inspired/exploration-board/public/Paper-N---Alpine-Passes-Report-compressed.pdf
    title: "The Alpine Passes Trail – Expedition Report 2025 (Imperial College London)"
    year_hiked: 2025
    summary: "Nine-day section in the Valais (Col de Louvie, Grand Désert, Col de Riedmatten); exposed rope-assisted sections and scree."
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/
  typical_days: https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/
  best_months: https://besthike.com/?p=69296
  open_season: https://besthike.com/?p=69296
  sleeping: https://www.myswitzerland.com/en/experiences/summer-autumn/hiking/alpine-passes-trail/the-jura-crest-trail-tailormade
  difficulty: https://search.ch/leisure/attraction/98b2fb38b19f823e50d5633659cc6515/alpine-passes-trail
  logistics: https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-6
conflicts:
  - field: distance_km
    values:
      - { value: 695, source: "https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/" }
      - { value: 669, source: "https://www.graubuenden.ch/en/tours/006-alpenpasse-weg-gesamttour-43-etappen" }
  - field: total_ascent_m
    values:
      - { value: 47100, source: "https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/" }
      - { value: 39455, source: "https://www.graubuenden.ch/en/tours/006-alpenpasse-weg-gesamttour-43-etappen" }
  - field: typical_days
    values:
      - { value: "43 stages / 39 days", source: "https://www.myswitzerland.com/en/experiences/route/alpine-passes-trail/" }
      - { value: "34 one-day stages (older Chur start)", source: "https://www.myswitzerland.com/en/experiences/summer-autumn/hiking/alpine-passes-trail/the-jura-crest-trail-tailormade" }
last_verified: 2026-11-27
```

### 6. ViaJacobi (national route 4)

```yaml
id: viajacobi
name: ViaJacobi (Swiss Way of St James) – Swiss national route 4
countries: [CH, DE]
region: Northern foot of the Swiss Alps – Lake Constance, Einsiedeln, Brünig, Fribourg, Lausanne, Geneva
one_liner: "The Swiss leg of the Camino from Lake Constance to Geneva past abbeys, lakes and the Brünig Pass; easy walking, pilgrim and village lodgings."
route:
  type: point-to-point
  start: Rorschach or Konstanz (DE)
  end: Geneva / French border at Charrot
  osm_relation_id: 2927471
  gpx_source: null
distance_km: 450
total_ascent_m: 11900
typical_days: { min: 20, max: 24 }
when:
  best_months: [April, May, June, July, August, September, October]
  open_season: "April to October."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Guesthouses, small hotels and B&Bs; pilgrims also report farm 'sleeping in the straw' stays."
difficulty:
  level: 1
  reason: "Officially technically easy (physically difficult only because of length); average ~360 m ascent per stage."
logistics:
  getting_to_start: "Rorschach (rail) or Konstanz/Kreuzlingen on Lake Constance."
  leaving_from_end: "Last stage starts at Geneva railway station and runs to the French border, where the Via Gebennensis continues."
  nearest_airports: [Zurich, Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-4
establishment_signals: [official_status, waymarked, official_site, trip_reports]
trip_reports:
  - url: https://caminodesantiago.me/community/threads/via-jacobi-2013.20744
    title: "Via Jacobi 2013"
    year_hiked: 2013
    summary: "Walked Rorschach–Geneva from 26 August 2013 plus the Konstanz branch; candid that it disappointed compared with other Caminos."
  - url: https://caminodesantiago.me/community/posts/1296924
    title: "Jakobsweg / Via Jacobi Switzerland from Rorschach to Geneva"
    year_hiked: null
    summary: "Forum thread: planned 30 days, found it takes 20–24; walkers recommend extra nights in Einsiedeln and Rapperswil."
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/viajacobi/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/viajacobi/
  typical_days: https://caminodesantiago.me/community/posts/1296924
  best_months: https://www.myswitzerland.com/en/experiences/route/viajacobi/
  open_season: https://www.myswitzerland.com/en/experiences/route/viajacobi/
  sleeping: https://www.walkersbritain.co.uk/self-guided-walking/switzerland/via-jacobi-switzerland-hike
  difficulty: https://www.myswitzerland.com/en/experiences/route/viajacobi/
  logistics: https://www.myswitzerland.com/en-my/experiences/route/viajacobi-4_20/
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-4
conflicts:
  - field: typical_days
    values:
      - { value: "33 official stages (includes both Lake Constance branches and variants)", source: "https://www.myswitzerland.com/en/experiences/route/viajacobi/" }
      - { value: "20–24 days Rorschach–Geneva", source: "https://caminodesantiago.me/community/posts/1296924" }
last_verified: 2026-11-27
```

### 7. Walker's Haute Route

```yaml
id: walkers-haute-route
name: Walker's Haute Route (Chamonix – Zermatt)
countries: [FR, CH]
region: Pennine Alps – Chamonix valley and Valais (Val de Bagnes, Val d'Hérens, Val d'Anniviers, Mattertal)
one_liner: "Mont Blanc to the Matterhorn over 11 high passes, valley-to-valley across the Valais; tougher and quieter than the TMB, huts and inns every night."
route:
  type: point-to-point
  start: Chamonix
  end: Zermatt
  osm_relation_id: 3020521
  gpx_source: null
distance_km: 215
total_ascent_m: 14500
typical_days: { min: 10, max: 14 }
when:
  best_months: [July, August, September]
  open_season: "Mid-July to mid-September (Cicerone); earlier in summer the high passes can hold snow."
sleeping:
  type: mixed
  booking_ahead: required
  notes: "Mountain huts (cabanes), gîtes, guesthouses and hotels in the villages. Hut bookings described as essential; bed numbers at some stage ends are limited."
difficulty:
  level: 4
  reason: "Eleven passes, several close to 3,000 m (high point ~2,987 m), typical days ~15 km with 1,000 m+ ascent, steep ladders at Pas de Chèvres and rockfall-prone Europaweg."
logistics:
  getting_to_start: "Chamonix, reached by bus or train via Geneva."
  leaving_from_end: "Zermatt is car-free; trains run down the Mattertal to Visp for connections to the rest of Switzerland."
  nearest_airports: [Geneva, Zurich]
flags:
  permit: none
  permit_notes: "No permit needed (hut bookings are the constraint)."
  waymarked: "partial"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: null
establishment_signals: [waymarked, guidebook, trip_reports]
trip_reports:
  - url: https://earthtrekkers.com/walkers-haute-route
    title: "Walker's Haute Route"
    year_hiked: 2022
    summary: "Full route without shortcuts in 13 days (late July–early August), 204 km and 14,300 m ascent by their own tracking."
  - url: https://stephabegg.com/?p=5703
    title: "Walker's Haute Route 2005: Chamonix to Zermatt (188 km hut to hut) (with my sister)"
    year_hiked: 2005
    summary: "Two-week hut-to-hut trek; author repeated the route in July 2013 with her parents."
  - url: https://www.mountaineers.org/activities/trip-reports/global-adventures-trek-from-mont-blanc-to-the-matterhorn-on-the-walkers-haute-route
    title: "Global Adventures – Trek from Mont Blanc to the Matterhorn on the Walker's Haute Route"
    year_hiked: null
    summary: "Club group of 12; skipped the exposed Posettes ridge variant and took the direct trail to Col de Balme."
  - url: https://www.locationscout.net/articles/80-hiking-the-haute-route-9-days-from-chamonix-to-zermatt
    title: "Hiking the Haute Route – 9 Days from Chamonix to Zermatt"
    year_hiked: null
    summary: "A fast version of the route in 9 days, written by two photographers."
photos: []
sources:
  distance_km: https://www.cicerone.co.uk/trekking-chamonix-to-zermatt-eighth
  total_ascent_m: https://www.cicerone.co.uk/trekking-chamonix-to-zermatt-eighth
  typical_days: https://www.cicerone.co.uk/trekking-chamonix-to-zermatt-eighth
  best_months: https://www.cicerone.co.uk/the-walkers-haute-route-chamonix-to-zermatt-a-complete-planning-guide
  open_season: https://www.cicerone.co.uk/the-walkers-haute-route-chamonix-to-zermatt-a-complete-planning-guide
  sleeping: https://www.trailhiking.com.au/planning-guides/guide-to-the-walkers-haute-route/
  difficulty: https://www.muchbetteradventures.com/magazine/haute-route-guide/
  logistics: https://weareexplorers.co/walkers-haute-route-france-to-switzerland-hike-europe/
  permit: https://www.trailhiking.com.au/planning-guides/guide-to-the-walkers-haute-route/
conflicts:
  - field: distance_km
    values:
      - { value: 215, source: "https://www.cicerone.co.uk/trekking-chamonix-to-zermatt-eighth" }
      - { value: 180, source: "https://en.wikipedia.org/wiki/Haute_Route" }
      - { value: "213–225", source: "https://www.trailhiking.com.au/planning-guides/guide-to-the-walkers-haute-route/" }
last_verified: 2026-11-27
```

### 8. Tour of the Matterhorn

```yaml
id: tour-of-the-matterhorn
name: Tour of the Matterhorn (Tour du Cervin / Tour Matterhorn / Giro del Cervino)
countries: [CH, IT]
region: Pennine Alps – Mattertal, Turtmanntal, Val d'Anniviers, Val d'Hérens (Valais), Valpelline and Valtournenche (Aosta Valley)
one_liner: "A tough high-alpine circuit of the Matterhorn through six valleys and over two glaciated cols; huts and villages nightly, for experienced trekkers."
route:
  type: loop
  start: Randa (or Zermatt)
  end: Zermatt
  osm_relation_id: 1176308
  gpx_source: null
distance_km: 147.3
total_ascent_m: 10353
typical_days: { min: 8, max: 10 }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Mountain huts and village accommodation; Zermatt Tourism recommends reserving huts and village beds."
difficulty:
  level: 4
  reason: "Rated T4 'demanding'; long stages (up to ~10 h) and two glacier crossings (Col Collon ~3,087 m, Theodul ~3,316 m) needing crampons, harness and rope."
logistics:
  getting_to_start: "Randa and Zermatt are on the Matterhorn-Gotthard railway up the Mattertal from Visp."
  leaving_from_end: "Train from Zermatt down to Visp."
  nearest_airports: [Geneva, Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: "No permit, but Zermatt Tourism recommends a mountain guide with local knowledge for the glacier traverses and lists crampons, harness and one rope per four people; some hikers use lifts over the Theodul glacier."
  waymarked: "partial"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://zermatt.swiss/en/p/tour-matterhorn-01tVj000005EvgHIAS
establishment_signals: [official_site, guidebook, trip_reports]
trip_reports:
  - url: https://www.walkhighlands.co.uk/Forum/viewtopic.php?p=356998
    title: "Tour of the Matterhorn"
    year_hiked: 2017
    summary: "10 days from 11 July 2017 with family, full circuit with photos of each col."
  - url: https://www.haroldstreet.org.uk/other/tour-du-matterhorn-june-2007/
    title: "Tour du Matterhorn – June 2007"
    year_hiked: 2007
    summary: "Two weeks hut to hut in June; first glacier crossing over Col Collon to Rifugio Prarayer."
  - url: https://annevankesteren.nl/2010/07/matterhorn-tour
    title: "Matterhorn tour"
    year_hiked: 2010
    summary: "Summer 2010 with the Hilary Sharp guide; shorter but much tougher than the TMB, crossed the Arolla glacier without crampons."
  - url: https://www.roadtrailrun.com/2022/08/tour-du-cervin-matterhorn-and-austria.html
    title: "Tour du Cervin-Matterhorn and Austria Trek and Super Light Fast Packing Gear Reports"
    year_hiked: 2022
    summary: "Fastpacked the 156 km circuit from Randa to Zermatt in summer 2022, with a gear review."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Theodulpass.JPG
    author: Woudloper
    license: Public domain
    shows: Theodul Pass, the final glacier crossing back into Switzerland
sources:
  distance_km: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Matterhorn-Tour
  total_ascent_m: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Matterhorn-Tour
  typical_days: https://www.lehmanns.ch/shop/reisen/7188702-9781852844721-tour-of-the-matterhorn
  best_months: null
  open_season: null
  sleeping: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Matterhorn-Tour
  difficulty: https://zermatt.swiss/en/p/tour-matterhorn-01tVj000005EvgHIAS
  logistics: https://www.haroldstreet.org.uk/other/tour-du-matterhorn-june-2007/
  permit: https://light.zermatt.ch/en/Media/Planning-hikes-tours/Matterhorn-Tour
conflicts:
  - field: distance_km
    values:
      - { value: 147.3, source: "https://light.zermatt.ch/en/Media/Planning-hikes-tours/Matterhorn-Tour" }
      - { value: 145, source: "https://www.lehmanns.ch/shop/reisen/7188702-9781852844721-tour-of-the-matterhorn" }
      - { value: 156, source: "https://www.roadtrailrun.com/2022/08/tour-du-cervin-matterhorn-and-austria.html" }
last_verified: 2026-11-27
```

### 9. Tour des Muverans

```yaml
id: tour-des-muverans
name: Tour des Muverans
countries: [CH]
region: Vaud and Valais Alps – Derborence, Ovronnaz, Pont de Nant
one_liner: "A little-known four-day hut loop around the Grand Muveran over six passes and past three lakes, mostly above the treeline."
route:
  type: loop
  start: Lac de Derborence
  end: Lac de Derborence
  osm_relation_id: 241670
  gpx_source: null
distance_km: 52
total_ascent_m: 4380
typical_days: { min: 4, max: 5 }
when:
  best_months: [June, July, August, September]
  open_season: "June to September."
sleeping:
  type: huts
  booking_ahead: recommended
  notes: "Numerous huts and gîtes (e.g. Cabane Rambert, Cabane du Demècre, Cabane de la Tourche, Refuge Giacomini, Refuge du Lac de Derborence). A 2022 trip report advises booking huts ahead, especially at weekends."
difficulty:
  level: 3
  reason: "Not technically difficult but needs ~6 h/day; officially technically medium, physically difficult; days up to ~1,400 m ascent (Derborence–Rambert)."
logistics:
  getting_to_start: "Four entry points reachable by public transport: Derborence (PostBus from Sion in summer), Solalex, Pont de Nant and Ovronnaz."
  leaving_from_end: "Loop – leave from any of the same access points."
  nearest_airports: [Geneva]
flags:
  permit: none
  permit_notes: "Several conservation areas: dogs must be leashed almost the whole way."
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/
establishment_signals: [official_site, waymarked, trip_reports]
trip_reports:
  - url: https://www.rexby.com/it/hike_away/i/B8yfSFmcRSe9AqiHgiv4CA
    title: "Tour des Muverans (Alexandra Elias – hike_away)"
    year_hiked: 2022
    summary: "Solo 4-day hut-to-hut loop in summer 2022; book huts beforehand, dogs on leash in protected areas."
  - url: https://oboeclassics.com/~oboe3583/weekwalks/Muverans_narrative.htm
    title: "The Tour des Muverans – narrative (Week Walks)"
    year_hiked: null
    summary: "Five-day version with gîtes and cabanes (Dorbon, Lui d'Août, Demècre), chamois at Cabane Rambert."
  - url: https://summitpost.org/muverans-hiking-tour/162348
    title: "Muverans hiking tour"
    year_hiked: null
    summary: "Four days at an average altitude of ~2,000 m over six cols, with stage times."
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/
  total_ascent_m: https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/
  typical_days: https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/
  best_months: https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/
  open_season: https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/
  sleeping: https://www.rexby.com/it/hike_away/i/B8yfSFmcRSe9AqiHgiv4CA
  difficulty: https://www.myswitzerland.com/en-my/experiences/route/tour-des-muverans/
  logistics: https://www.myswitzerland.com/cs/zazitky/route/tour-des-muverans/
  permit: https://www.myswitzerland.com/en-my/experiences/route/tour-des-muverans/
conflicts:
  - field: distance_km
    values:
      - { value: 52, source: "https://www.myswitzerland.com/en-gb/experiences/route/tour-des-muverans/" }
      - { value: 54, source: "https://bookatrekking.com/en/trek/tour-des-muverans-5-days/" }
last_verified: 2026-11-27
```

### 10. Tour des Dents du Midi

```yaml
id: tour-des-dents-du-midi
name: Tour des Dents du Midi
countries: [CH]
region: Chablais Alps – Val d'Illiez and Salanfe (Valais)
one_liner: "A compact loop around the seven summits of the Dents du Midi with lakes, a chained passage and small auberges; huts must be booked."
route:
  type: loop
  start: Champéry
  end: Champéry
  osm_relation_id: 302402
  gpx_source: null
distance_km: 56.5
total_ascent_m: 3182
typical_days: { min: 2, max: 4 }
when:
  best_months: [June, July, August, September, October]
  open_season: "June to October, depending on snow."
sleeping:
  type: huts
  booking_ahead: required
  notes: "Booking essential via dentsdumidi.ch: Auberge de Chindonne, Auberge de Salanfe, Refuge de Bonavau, Cabane d'Anthème, Cabane de Susanfe (Susanfe closed for full renovation – check status)."
difficulty:
  level: 3
  reason: "Officially 'hard'; Col du Jorat climb (~1,400 m) and the steep, vertiginous Pas d'Encel equipped with chains."
logistics:
  getting_to_start: "Champéry, terminus of the AOMC train from Aigle/Monthey."
  leaving_from_end: "Loop – train from Champéry; other access points include Mex and Vérossaz."
  nearest_airports: [Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
establishment_signals: [official_site, waymarked, trip_reports]
trip_reports:
  - url: https://www.novo-monde.com/en/dents-du-midi-swiss-alps/
    title: "The Dents du Midi Tour: A stunning hike in the swiss Alps"
    year_hiked: null
    summary: "Five easy-paced days Barmes–Susanfe–Salanfe–Mex–Anthème–Champéry, with notes on doing it in 2–4 days."
  - url: https://swisshiking.ch/fr/file/8b46537adb6cb1757d38346f5750631c247f6dc348502f5d96220b910cdc9360/download
    title: "Tour des Dents du Midi (swisshiking.ch route sheet)"
    year_hiked: null
    summary: "Four-day itinerary Champéry–Susanfe–Salanfe–Les Jeurs/Chindonne–Champéry, 46 km and ~18 h of walking."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Lac_de_salanfe_et_la_tour_saliere.jpg
    author: Superpoor
    license: CC BY-SA 4.0
    shows: Lac de Salanfe, the Tour Sallière and the Salanfe dam, an overnight stop on the tour
sources:
  distance_km: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  total_ascent_m: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  typical_days: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  best_months: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  open_season: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  sleeping: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  difficulty: https://www.valais.ch/fr/explorer/activites/randonnees/tours/tour-des-dents-du-midi
  logistics: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
  permit: https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485
conflicts:
  - field: distance_km
    values:
      - { value: 56.5, source: "https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485" }
      - { value: 47.0, source: "https://en.portesdusoleil.com/offers/the-tour-des-dents-du-midi-champery-en-3864108/" }
      - { value: 45, source: "https://issuu.com/agaune/docs/tdm_prospectus_2019" }
      - { value: 42, source: "https://www.novo-monde.com/en/dents-du-midi-swiss-alps/" }
  - field: total_ascent_m
    values:
      - { value: 3182, source: "https://regiondentsdumidi.ch/en/the-dents-du-midi-trail-fp485" }
      - { value: "6,700 m ascent+descent combined (~3,350 up)", source: "https://swisshiking.ch/fr/file/8b46537adb6cb1757d38346f5750631c247f6dc348502f5d96220b910cdc9360/download" }
last_verified: 2026-11-27
```

### 11. Via Alta della Verzasca

```yaml
id: via-alta-della-verzasca
name: Via Alta della Verzasca
countries: [CH]
region: Ticino – ridge between Valle Verzasca, Leventina and Riviera
one_liner: "A wild, exposed white-blue alpine ridge route linking five huts above the Verzasca valley; T5–T6, only for experienced, sure-footed mountaineers."
route:
  type: point-to-point
  start: Tenero / Gordola / Vogorno (Capanna Borgna)
  end: Sonogno (via Capanna Barone)
  osm_relation_id: 1775892
  gpx_source: null
distance_km: 57
total_ascent_m: null
typical_days: { min: 4, max: 5 }
when:
  best_months: []
  open_season: null
sleeping:
  type: huts
  booking_ahead: null
  notes: "Five huts along the ridge (Borgna, Cornavòsa, Efra, Cognora, Barone); overnight stays must be organised in advance."
difficulty:
  level: 4
  reason: "Officially an alpine route (white-blue-white) rated T5–T6: exposed ridges and rock, 1,500–1,700 m approach climbs, very long first stage."
logistics:
  getting_to_start: "Train to Tenero (via Bellinzona), then bus 321 to the Verzasca dam (Diga Verzasca) or Vogorno."
  leaving_from_end: "From Sonogno, bus 321 back to Tenero."
  nearest_airports: [Lugano, Milan Malpensa, Zurich]
flags:
  permit: none
  permit_notes: "No permit, but tourism boards recommend it only for expert alpine walkers with suitable equipment."
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.ascona-locarno.com/en/hike/details/Via-Alta-della-Verzasca/21811797
establishment_signals: [official_site, waymarked, trip_reports]
trip_reports:
  - url: https://www.outdoor-magazin.com/wanderwege/mehrtagestour-auf-der-via-alta-della-verzasca-in-tessin/
    title: "Mehrtagestour auf der Via Alta della Verzasca im Tessin"
    year_hiked: null
    summary: "Magazine trip report with stage data from the Verzasca dam: day 1 to Capanna Borgna +1,740 m, day 2 to Cornavòsa up to T6."
  - url: https://www.bergwelten.com/a/via-alta-della-verzasca-gratwanderung-im-tessin
    title: "Via Alta della Verzasca – Gratwanderung im Tessin"
    year_hiked: null
    summary: "Short first-hand tour tip (2025): lonely paths, exposed ridges, T5–T6."
photos: []
sources:
  distance_km: https://www.illagomaggiore.com/en_US/54066,Itineraries.html
  total_ascent_m: null
  typical_days: https://www.illagomaggiore.com/itineraries/via-alta-della-verzasca/
  best_months: null
  open_season: null
  sleeping: https://www.illagomaggiore.com/itineraries/via-alta-della-verzasca/
  difficulty: https://www.ascona-locarno.com/en/hike/details/Via-Alta-della-Verzasca/21811797
  logistics: https://www.outdoor-magazin.com/wanderwege/mehrtagestour-auf-der-via-alta-della-verzasca-in-tessin/
  permit: https://www.ascona-locarno.com/en/commons/details/Via-Alta-della-Verzasca/140869
conflicts:
  - field: distance_km
    values:
      - { value: 57, source: "https://www.illagomaggiore.com/en_US/54066,Itineraries.html" }
      - { value: "69 (variant starting from Bellinzona, 6,160 m ascent)", source: "https://www.komoot.com/collection/3756685/-via-alta-della-verzasca-bergtour-entlang-der-gipfel-die-das-verzascatal-von-der-leventina-und-der-riviera-trennen" }
last_verified: 2026-11-27
```

### 12. Trans Swiss Trail (national route 2)

```yaml
id: trans-swiss-trail
name: Trans Swiss Trail – Swiss national route 2
countries: [CH]
region: Jura, Seeland, Emmental, Central Switzerland, Gotthard, Ticino
one_liner: "Switzerland top to bottom from the Jura to Ticino through four language regions and over the Gotthard, sleeping in towns every night."
route:
  type: point-to-point
  start: Porrentruy
  end: Mendrisio
  osm_relation_id: 1107386
  gpx_source: null
distance_km: 510
total_ascent_m: 17700
typical_days: { min: 32, max: 32 }
when:
  best_months: [June, July, August, September, October]
  open_season: "June to October for the whole route (Gotthard section); lowland stages are walkable much longer."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Every stage ends in a town or village with hotels/guesthouses; public transport allows shortening any stage."
difficulty:
  level: 2
  reason: "Officially technically easy, physically medium; 2–6 h walking days, highest point the Gotthard Pass."
logistics:
  getting_to_start: "Porrentruy has a railway station (Jura)."
  leaving_from_end: "Mendrisio has a railway station on the Lugano–Chiasso line."
  nearest_airports: [Basel-Mulhouse, Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-2
establishment_signals: [official_status, waymarked, official_site]
trip_reports:
  - url: https://fastestknowntime.com/fkt/brian-stark-trans-swiss-trail-switzerland-2021-07-23
    title: "FKT: Brian Stark – Trans Swiss Trail (Switzerland)"
    year_hiked: 2021
    summary: "Ran the whole trail solo and self-supported in 10 d 11 h in July 2021; notes the green '2' signs from Mendrisio station."
  - url: https://statesrunner.blogspot.com/2021
    title: "New FKT: Trans Swiss Trail! 10d 11h 3m"
    year_hiked: 2021
    summary: "Blog version of the same 2021 run, extended border to border (Chiasso–Boncourt)."
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/
  typical_days: https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/
  best_months: https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/
  open_season: https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/
  sleeping: https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/
  difficulty: https://www.komoot.com/collection/905071
  logistics: https://www.komoot.com/collection/905071
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-2
conflicts:
  - field: distance_km
    values:
      - { value: 510, source: "https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/" }
      - { value: 488, source: "https://www.myswitzerland.com/en-ae/experiences/route/trans-swiss-trail/" }
      - { value: 523, source: "https://www.komoot.com/collection/905071" }
  - field: total_ascent_m
    values:
      - { value: 17700, source: "https://www.myswitzerland.com/en/experiences/route/trans-swiss-trail/" }
      - { value: 17800, source: "https://www.myswitzerland.com/en-ch/experiences/route/trans-swiss-trail/" }
last_verified: 2026-11-27
```

### 13. Jura Crest Trail (national route 5)

```yaml
id: jura-crest-trail
name: Jura Crest Trail (Jura-Höhenweg / Chemin des Crêtes du Jura) – Swiss national route 5
countries: [CH]
region: Swiss Jura – Lägern to La Dôle, cantons Zurich, Aargau, Solothurn, Bern, Neuchâtel, Vaud
one_liner: "Switzerland's oldest long-distance trail (signed since 1905): sixteen days of limestone ridges, wooded pastures and Alpine views from Zurich's edge to Lake Geneva."
route:
  type: point-to-point
  start: Dielsdorf
  end: Nyon
  osm_relation_id: 120118
  gpx_source: null
distance_km: 320
total_ascent_m: 13800
typical_days: { min: 16, max: 18 }
when:
  best_months: [March, April, May, June, July, August, September, October]
  open_season: "Official season March to October."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Stage ends at villages, passes and summit inns (e.g. Weissenstein, Chasseral, Vue des Alpes, Col du Marchairuz)."
difficulty:
  level: 2
  reason: "Technically easy, physically difficult: 13–25 km stages averaging ~860 m ascent, max altitude ~1,680 m."
logistics:
  getting_to_start: "First signpost is at Dielsdorf railway station ."
  leaving_from_end: "Nyon is on the Lausanne–Geneva rail line."
  nearest_airports: [Zurich, Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-5
establishment_signals: [official_status, waymarked, official_site]
trip_reports:
  - url: http://activityworkshop.net/hiking/jura/
    title: "Jura ridgeway (activityworkshop.net)"
    year_hiked: null
    summary: "Personal stage-by-stage account of walking the Jura ridgeway, linked from Wikipedia."
  - url: https://www.komoot.com/collection/1051181/rocks-distant-views-and-fondue-16-stages-on-the-jura-crest-trail
    title: "Rocks, distant views and fondue – 16 stages on the Jura Crest Trail"
    year_hiked: null
    summary: "Komoot editor collection of all 16 stages (317 km, 10,780 m) with notes per stage."
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/jura-crest-trail/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/jura-crest-trail/
  typical_days: https://en.wikipedia.org/wiki/Jura_ridgeway
  best_months: https://www.myswitzerland.com/en/experiences/route/jura-crest-trail/
  open_season: https://www.myswitzerland.com/en/experiences/route/jura-crest-trail/
  sleeping: https://search.ch/leisure/attraction/60ce32bf7e8ec8461168ae8c6ec330fa/jura-hoehenweg
  difficulty: https://www.j3l.ch/en/Z10914
  logistics: https://www.myswitzerland.com/en/experiences/route/jura-crest-trail-5_01/
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-5
conflicts:
  - field: distance_km
    values:
      - { value: 320, source: "https://www.myswitzerland.com/en/experiences/route/jura-crest-trail/" }
      - { value: 310, source: "https://en.wikipedia.org/wiki/Jura_ridgeway" }
  - field: total_ascent_m
    values:
      - { value: 13800, source: "https://www.myswitzerland.com/en/experiences/route/jura-crest-trail/" }
      - { value: 13900, source: "https://search.ch/leisure/attraction/60ce32bf7e8ec8461168ae8c6ec330fa/jura-crest-trail" }
last_verified: 2026-11-27
```

### 14. ViaGottardo (national route 7)

```yaml
id: viagottardo
name: ViaGottardo – Swiss national route 7
countries: [CH]
region: Basel Jura, Mittelland, Lake Lucerne, Reuss valley, Gotthard, Ticino
one_liner: "The historic Basel–Milan trade route on foot: Jura hills, Lake Lucerne, the Schöllenen gorge and Gotthard, then down through Ticino to Chiasso."
route:
  type: point-to-point
  start: Basel
  end: Chiasso
  osm_relation_id: 2927508
  gpx_source: null
distance_km: 330
total_ascent_m: 10400
typical_days: { min: 20, max: 20 }
when:
  best_months: [May, June, July, August, September]
  open_season: "Route season March to October; the Gotthard stages are rated May/June to September."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Stages end in towns and villages (Liestal, Olten, Lucerne, Altdorf, Andermatt, Airolo, Bellinzona, Lugano…)."
difficulty:
  level: 2
  reason: "Technically and physically medium overall; highest point ~2,109 m at the Gotthard; some long stages (e.g. Bellinzona–Tesserete 23 km, +1,250 m)."
logistics:
  getting_to_start: "Starts at Basel railway station."
  leaving_from_end: "Ends at Chiasso railway station on the Italian border."
  nearest_airports: [Basel-Mulhouse, Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-7
establishment_signals: [official_status, waymarked, official_site]
trip_reports:
  - url: https://www.newlyswissed.com/viagottardo-trail/
    title: "ViaGottardo Hiking Trail (Newly Swissed)"
    year_hiked: null
    summary: "Interview with a Basel couple who walked the whole route in segments by train, from their doorstep to Chiasso; few other hikers outside the Gotthard."
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/viagottardo/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/viagottardo/
  typical_days: https://www.myswitzerland.com/en/experiences/route/viagottardo/
  best_months: https://www.myswitzerland.com/en/experiences/route/viagottardo-7_11/
  open_season: https://www.myswitzerland.com/en/experiences/route/viagottardo/
  sleeping: https://search.ch/leisure/attraction/00dd11a57596cde70b0726db616d16ef/viagottardo
  difficulty: https://search.ch/leisure/attraction/00dd11a57596cde70b0726db616d16ef/viagottardo
  logistics: https://www.myswitzerland.com/en/experiences/route/viagottardo-7_01/
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-7
conflicts:
  - field: distance_km
    values:
      - { value: 330, source: "https://www.myswitzerland.com/en/experiences/route/viagottardo/" }
      - { value: 320, source: "https://www.myswitzerland.com/en-ch/experiences/route/viagottardo-7_20/" }
      - { value: 379, source: "https://www.komoot.com/pt-pt/collection/900473/seguindo-trilhos-historicos-via-gottardo" }
last_verified: 2026-11-27
```

### 15. Alpine Panorama Trail (national route 3)

```yaml
id: alpine-panorama-trail
name: Alpine Panorama Trail (Alpenpanorama-Weg) – Swiss national route 3
countries: [CH]
region: Swiss Prealps – Appenzell, Toggenburg, Central Switzerland, Emmental, Gruyère, Lake Geneva
one_liner: "A month-long foothills traverse from Lake Constance to Geneva with constant views of the Alps, dairy farms and cheese, villages every night."
route:
  type: point-to-point
  start: Rorschach
  end: Geneva (Genève)
  osm_relation_id: 3372194
  gpx_source: null
distance_km: 510
total_ascent_m: 17800
typical_days: { min: 29, max: 30 }
when:
  best_months: [April, May, June, July, August, September, October]
  open_season: "April to October."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Stages end in villages and towns (e.g. Appenzell, Einsiedeln, Zug, Lucerne, Fribourg region)."
difficulty:
  level: 2
  reason: "Officially technically easy, physically medium; first stage alone climbs ~1,200 m, mostly farm tracks and hill paths."
logistics:
  getting_to_start: "Rorschach railway station on Lake Constance."
  leaving_from_end: "Geneva, main rail hub."
  nearest_airports: [Zurich, Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://schweizmobil.ch/en/hiking-in-switzerland/route-3
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/alpine-panorama-trail/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/alpine-panorama-trail/
  typical_days: https://www.myswitzerland.com/en/experiences/route/alpine-panorama-trail/
  best_months: https://www.myswitzerland.com/en/experiences/route/alpine-panorama-trail/
  open_season: https://www.myswitzerland.com/en/experiences/route/alpine-panorama-trail/
  sleeping: https://www.myswitzerland.com/en-us/experiences/route/alpine-panorama-trail/
  difficulty: https://www.myswitzerland.com/en-my/experiences/route/alpine-panorama-trail-3_01/
  logistics: https://www.myswitzerland.com/en-my/experiences/route/alpine-panorama-trail-3_01/
  permit: https://schweizmobil.ch/en/hiking-in-switzerland/route-3
last_verified: 2026-11-27
```

### 16. Walserweg Graubünden (regional 35)

```yaml
id: walserweg-graubuenden
name: Walserweg Graubünden – regional route 35
countries: [CH, AT]
region: Graubünden high valleys (Rheinwald, Vals, Safiental, Avers, Davos, Prättigau) to Vorarlberg
one_liner: "Three weeks through the remote high valleys settled by the Walser, from San Bernardino to Austria's Brandnertal, with farm dinners and quiet passes."
route:
  type: point-to-point
  start: San Bernardino
  end: Brand (AT)
  osm_relation_id: 17036352
  gpx_source: null
distance_km: 320
total_ascent_m: 19600
typical_days: { min: 19, max: 23 }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Mostly village accommodation (Vals, Safien, Juf/Avers, Davos, Arosa, Klosters, St. Antönien) plus an SAC hut (Chamonas d'Ela)."
difficulty:
  level: 3
  reason: "Technically medium, physically difficult; 4.5–7 h stages averaging ~1,000 m ascent over many passes."
logistics:
  getting_to_start: "San Bernardino village (Misox side of the San Bernardino Pass)."
  leaving_from_end: "Brand in the Brandnertal, Vorarlberg (Austria)."
  nearest_airports: [Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.myswitzerland.com/en/experiences/route/walserweg/
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/walserweg/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/walserweg/
  typical_days: https://www.myswitzerland.com/en/experiences/route/walserweg/
  best_months: null
  open_season: null
  sleeping: https://www.myswitzerland.com/en/experiences/route/walserweg/
  difficulty: https://www.myswitzerland.com/en/experiences/route/walserweg/
  logistics: https://www.myswitzerland.com/en/experiences/route/walserweg/
  permit: https://www.myswitzerland.com/en/experiences/route/walserweg/
conflicts:
  - field: typical_days
    values:
      - { value: "19 stages (stage list)", source: "https://www.myswitzerland.com/en/experiences/route/walserweg/" }
      - { value: "23 one-day stages (intro text)", source: "https://www.myswitzerland.com/en-gb/experiences/summer-autumn/hiking/regional-multiday-routes-search/?p=2" }
  - field: distance_km
    values:
      - { value: 320, source: "https://www.myswitzerland.com/en/experiences/route/walserweg/" }
      - { value: 300, source: "https://www.myswitzerland.com/en-gb/experiences/summer-autumn/hiking/regional-multiday-routes-search/?p=2" }
last_verified: 2026-11-27
```

### 17. Via Albula/Bernina (regional 33)

```yaml
id: via-albula-bernina
name: Via Albula/Bernina – regional route 33
countries: [CH, IT]
region: Graubünden – Albula valley, Upper Engadin, Bernina Pass, Val Poschiavo – to Valtellina
one_liner: "Ten stages alongside the UNESCO-listed Albula and Bernina railway, from Thusis over the Bernina Pass to Tirano in Italy; trains everywhere for shortcuts."
route:
  type: point-to-point
  start: Thusis
  end: Tirano (IT)
  osm_relation_id: 912415
  gpx_source: null
distance_km: 130
total_ascent_m: 5100
typical_days: { min: 7, max: 10 }
when:
  best_months: [May, June, July, August, September, October]
  open_season: "May to October (stage season)."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Stage ends in villages along the railway (Tiefencastel, Filisur, Bergün, Preda, St. Moritz, Ospizio Bernina, Cavaglia, Le Prese); 4- and 7-day hotel packages exist."
difficulty:
  level: 2
  reason: "Grade medium, fitness medium; ~13 km and ~500 m ascent per stage on average, high point ~2,470 m near the Bernina Pass."
logistics:
  getting_to_start: "Thusis, on the Rhaetian Railway."
  leaving_from_end: "Tirano (Italy), southern end of the Bernina railway."
  nearest_airports: [Zurich, Milan Bergamo, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.graubuenden.ch/de/touren/via-albulabernina
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en-in/experiences/route/via-albulabernina/
  total_ascent_m: https://www.myswitzerland.com/en-in/experiences/route/via-albulabernina/
  typical_days: https://www.myswitzerland.com/en-in/experiences/route/via-albulabernina/
  best_months: https://www.myswitzerland.com/en-us/experiences/route/via-albulabernina-33_01/
  open_season: https://www.myswitzerland.com/en-us/experiences/route/via-albulabernina-33_01/
  sleeping: https://myswitzerland.com/en/experiences/route/via-albulabernina-33_03
  difficulty: https://search.ch/leisure/attraction/e408b2bfb5694711a40fa6d56989d4e0/via-albula-bernina
  logistics: https://search.ch/libero/attraction/e408b2bfb5694711a40fa6d56989d4e0/via-albula-bernina.en.html
  permit: https://www.myswitzerland.com/en-in/experiences/route/via-albulabernina/
conflicts:
  - field: typical_days
    values:
      - { value: "10 official stages", source: "https://www.myswitzerland.com/en-in/experiences/route/via-albulabernina/" }
      - { value: "7-day hotel package", source: "https://myswitzerland.com/en/experiences/route/via-albulabernina-33_03" }
last_verified: 2026-11-27
```

### 18. ViaSpluga (regional 50)

```yaml
id: viaspluga
name: ViaSpluga – regional route 50
countries: [CH, IT]
region: Graubünden (Domleschg, Schams, Rheinwald) and Valchiavenna (Lombardy)
one_liner: "Four days on the ancient Splügen trade route from Thusis through the Viamala gorge and over the pass to Italian Chiavenna."
route:
  type: point-to-point
  start: Thusis
  end: Chiavenna (IT)
  osm_relation_id: 1504263
  gpx_source: null
distance_km: 68
total_ascent_m: 2900
typical_days: { min: 4, max: 4 }
when:
  best_months: []
  open_season: "Package offers run mid-June to late September."
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Village stage ends: Andeer, Splügen, Isola; hotel-to-hotel packages with luggage transfer exist."
difficulty:
  level: 2
  reason: "Technically medium, physically difficult; Splügen Pass 2,114 m on historic mule tracks, otherwise valley and gorge paths."
logistics:
  getting_to_start: "Thusis (Rhaetian Railway; see SBB timetable)."
  leaving_from_end: "Chiavenna, Italy."
  nearest_airports: [Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.graubuenden.ch/index%2ephp/en/tours/viaspluga
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/viaspluga/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/viaspluga/
  typical_days: https://www.myswitzerland.com/en/experiences/route/viaspluga/
  best_months: null
  open_season: https://www.myswitzerland.com/en/experiences/route/viaspluga/
  sleeping: https://www.myswitzerland.com/en/experiences/route/viaspluga/
  difficulty: https://www.graubuenden.ch/index%2ephp/en/tours/viaspluga
  logistics: https://www.graubuenden.ch/index%2ephp/en/tours/viaspluga
  permit: https://www.myswitzerland.com/en/experiences/route/viaspluga/
conflicts:
  - field: distance_km
    values:
      - { value: 68, source: "https://www.myswitzerland.com/en/experiences/route/viaspluga/" }
      - { value: 65, source: "https://www.myswitzerland.com/en-th/experiences/route/viaspluga/" }
      - { value: 70.4, source: "https://www.komoot.com/de-de/collection/1120889/auf-der-viaspluga-von-thusis-nach-chiavenna" }
last_verified: 2026-11-27
```

### 19. Swiss Tour Monte Rosa (regional 27)

```yaml
id: swiss-tour-monte-rosa
name: Swiss Tour Monte Rosa (Balfrin high path + Europaweg) – regional route 27
countries: [CH]
region: Valais – Saastal and Mattertal
one_liner: "Three big balcony days from Saas-Fee to Zermatt along the Balfrin high path and the Europaweg, facing the Valais 4,000 m peaks."
route:
  type: point-to-point
  start: Saas-Fee
  end: Zermatt
  osm_relation_id: 1610155
  gpx_source: null
distance_km: 56
total_ascent_m: 4000
typical_days: { min: 3, max: 3 }
when:
  best_months: [May, June, July, August, September, October]
  open_season: "Official season May to October."
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Village nights in Grächen and Zermatt, hut night at the Europahütte."
difficulty:
  level: 3
  reason: "Technically medium, physically difficult (~1,300 m ascent per day); rope-secured sections, waterfalls and bridges; rockfall risk on the Europaweg."
logistics:
  getting_to_start: "Saas-Fee."
  leaving_from_end: "Zermatt (railway down the Mattertal)."
  nearest_airports: [Geneva, Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: "Check closures: Cicerone reports the Europaweg section Spriegelboden–Täschalp marked closed since 2024 (some walkers pass; ask the Europahütte)."
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  typical_days: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  best_months: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  open_season: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  sleeping: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  difficulty: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  logistics: https://www.myswitzerland.com/en/experiences/route/swiss-tour-monte-rosa/
  permit: https://www.cicerone.co.uk/9781786312662
last_verified: 2026-11-27
```

### 20. Vier-Quellen-Weg (regional 49)

```yaml
id: vier-quellen-weg
name: Vier-Quellen-Weg (Four Springs Trail) – regional route 49
countries: [CH]
region: Gotthard massif – Uri, Graubünden, Ticino, Valais
one_liner: "Five hut-and-pass days around the Gotthard linking the sources of the Rhine, Reuss, Ticino and Rhône over six passes."
route:
  type: point-to-point
  start: Oberalppass (Andermatt)
  end: Furkapass (Belvédère)
  osm_relation_id: 3094421
  gpx_source: null
distance_km: 82
total_ascent_m: 4700
typical_days: { min: 5, max: 5 }
when:
  best_months: []
  open_season: "Package offers run late June to mid-September."
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Stage ends include Vermigelhütte, Gotthard Pass, Capanna Piansecco CAS and the village of Obergesteln."
difficulty:
  level: 3
  reason: "Technically medium, physically difficult; ~940 m ascent per day over Maighels, Sella, Gotthard, Lucendro, Nufenen and Furka passes."
logistics:
  getting_to_start: "Oberalppass above Andermatt."
  leaving_from_end: "Furka Pass (Belvédère)."
  nearest_airports: [Zurich, Milan Malpensa]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  typical_days: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  best_months: null
  open_season: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  sleeping: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  difficulty: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  logistics: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
  permit: https://www.myswitzerland.com/en/experiences/route/vier-quellen-weg/
last_verified: 2026-11-27
```

### 21. Senda Sursilvana (regional 85)

```yaml
id: senda-sursilvana
name: Senda Sursilvana – regional route 85
countries: [CH]
region: Graubünden – Surselva (Vorderrhein valley), Oberalp to Chur
one_liner: "Five gentle-to-steady days down the Romansh-speaking Surselva from the Rhine's source area at Oberalp to Chur, village to village."
route:
  type: point-to-point
  start: Oberalppass
  end: Chur
  osm_relation_id: 1305494
  gpx_source: null
distance_km: 105
total_ascent_m: 3400
typical_days: { min: 5, max: 5 }
when:
  best_months: []
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Stage ends in villages: Sedrun, Sumvitg, Breil/Brigels, Laax."
difficulty:
  level: 2
  reason: "Technically medium, physically difficult; ~21 km stages with more descent (4,800 m) than ascent (3,400 m)."
logistics:
  getting_to_start: "Oberalppass."
  leaving_from_end: "Chur."
  nearest_airports: [Zurich]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
  typical_days: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
  best_months: null
  open_season: null
  sleeping: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
  difficulty: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
  logistics: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
  permit: https://www.myswitzerland.com/en/experiences/route/senda-sursilvana/
last_verified: 2026-11-27
```

### 22. Via Francigena – Swiss section (regional 70)

```yaml
id: via-francigena-switzerland
name: Via Francigena – Swiss section (regional route 70)
countries: [CH]
region: Vaud and Valais – Jura foot, Lake Geneva, Rhône valley, Val d'Entremont
one_liner: "The Swiss leg of the Canterbury–Rome pilgrim road: vineyards and Lake Geneva, then up the Rhône and Val d'Entremont to the Great St Bernard hospice."
route:
  type: point-to-point
  start: Ballaigues
  end: Col du Grand-St-Bernard
  osm_relation_id: 124582
  gpx_source: null
distance_km: 200
total_ascent_m: 5600
typical_days: { min: 10, max: 12 }
when:
  best_months: []
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Stage ends in towns and villages (Orbe, Cossonay, Lausanne, Vevey, Aigle, St-Maurice, Martigny, Orsières, Bourg-St-Pierre) and the Great St Bernard hospice."
difficulty:
  level: 2
  reason: "Technically easy, physically difficult; mostly low-level, but the final stages climb up Val d'Entremont to the Great St Bernard Pass."
logistics:
  getting_to_start: "Ballaigues (Vaud), where the route enters from France."
  leaving_from_end: "Great St Bernard Pass hospice; the Via Francigena continues into Italy."
  nearest_airports: [Geneva]
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
establishment_signals: [official_status, waymarked, official_site]
trip_reports: []
photos: []
sources:
  distance_km: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
  total_ascent_m: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
  typical_days: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
  best_months: null
  open_season: null
  sleeping: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
  difficulty: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
  logistics: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
  permit: https://www.myswitzerland.com/en/experiences/route/viafrancigena/
last_verified: 2026-11-27
```

---

## 2. Excluded candidates

| Candidate | Rule failed | Note |
|---|---|---|
| Europaweg (Grächen – Zermatt) | Rule 1: 2 days | Included as part of the Swiss Tour Monte Rosa and the TMR. A section is officially marked closed since 2024 (Cicerone). |
| Weg der Schweiz / Swiss Path (Lake Uri) | Rule 1: 35 km, ~10 h – 1–2 days | myswitzerland regional route list |
| Furka-Höhenweg | Rule 1: 2 days | myswitzerland regional route list |
| The Swiss Path: William Tell Path | Rule 1: 9 km | myswitzerland regional route list |
| Haute Route (ski, Chamonix–Zermatt) | Out of scope: glaciated spring ski tour, not a hiking trek | The summer walking version is included as the Walker's Haute Route. |
| Alpine Pass Route (Sargans – Montreux) | Duplicate | Now waymarked as Via Alpina 1 (Cicerone). Merged into the Via Alpina entry. |
| Bärentrek (Meiringen – Gstaad area) | Duplicate | A packaged section of Via Alpina 1 (myswitzerland offers). Not a separate route. |
| The Matterhorn Trek (Zermatt Tourism, 5 days) | Rule 2: not confirmed | Sold as a self-guided hut package. Needs a check on whether it is a named, signed route or only a package itinerary. |

Likely Rule 1 failures (short regional routes, 2 days or less on official data). Confirm the stage counts before you rule them out for good: Sentiero Cristallina (43 km, listed as 10 h), ViaStockalper (31 km, 10 h), Sentiero Verzasca (35 km), Zürich-Zugerland-Panoramaweg (34 km), Thurgauer Panoramaweg (37 km), Senda Scuol–Samnaun (37 km), Dreiland-Wanderweg (43 km), Klettgau-Rhein-Weg (46 km).

## 3. Screened, not yet fully researched

These pass the three rules on official data (named and signed SwitzerlandMobility routes or known hut tours, 3+ days, no permit). They still need the full field-by-field pass. Distances are from the myswitzerland regional route list.

| Candidate | Official data | Why it likely qualifies |
|---|---|---|
| Aletsch Panoramaweg | 30 km, "three days" | Regional route, 3 days |
| Tour des Alpes Vaudoises | 130 km, 8-day round tour | Regional route |
| Lötschberg-Panoramaweg | 51 km, 4 days | Regional route |
| Obwaldner Höhenweg | 100 km, 5-day tour | Regional route |
| Waldstätterweg | 115 km, 7 stages / 7 days | Regional route |
| Sentiero Lago di Lugano | 135 km, 9 stages | Regional route (CH/IT) |
| ViaSurprise | 88 km, 6-day round trip | Regional route |
| Freiburger Voralpenweg | 73 km, 5 stages | Regional route |
| Chemin du vignoble | 65 km (text says 74), 4 stages | Regional route |
| Toggenburger Höhenweg | 88 km | Regional route |
| Senda Segantini | 73 km, ~23 h walking | Regional route |
| Nationalpark-Panoramaweg | 105 km | Regional route (Swiss National Park) |
| ViaValtellina | 135 km | Regional route (CH/IT/AT) |
| ViaSbrinz | 115 km | Regional route (CH/IT) |
| ViaSuworow | 170 km | Regional route |
| ViaRhenana | 195 km | Regional route (CH/DE) |
| Thurweg | 160 km | Regional route |
| ViaSett | 110 km | Regional route |
| Chemin des Bisses | 110 km | Regional route |
| Jakobsweg Graubünden | 265 km | Regional route |
| Rheintaler Höhenweg, Sardona-Welterbe-Weg, Aargauer Weg, ViaJura, Zürichsee-Rundweg | 100–130 km each | Regional routes |
| Züri Oberland-Höhenweg, Walliser Sonnenweg, Kulturspur Appenzellerland, Au fil du Doubs, Seeland-Solothurn-Weg, Chemin du Jura bernois, Panorama Rundweg Thunersee, Schwyzer Höhenweg, Chemin des Trois-Lacs | 61–77 km each | Regional routes, probably 3–5 stages – check |
| WALSA-Weg, Appenzeller Weg, Pragelpass-Weg, Liechtensteiner Panoramaweg, Sanetsch-Muveran-Weg, Mittelbünden-Panoramaweg | 41–53 km each | Borderline on Rule 1 – check the stage count |
| Tour des Dents Blanches (Champéry) | 47.4 km, 3,390 m, 5 days, "hard" (Région Dents du Midi) | Hut tour, CH/FR |
| Via Alta Vallemaggia | Multi-day T5–T6 ridge route (Ascona-Locarno Tourism) | Alpine route, like the Via Alta Verzasca |
| Via Alta Idra | 12 stages, ~100 km, Nufenen – Tenero (Outdoor-Magazin) | Alpine route; stages 7–10 = Via Alta Verzasca |
| Tour of the Jungfrau Region, Prättigauer Höhenweg, Tour du Wildhorn, Tour du Saint-Bernard, Tour du Val d'Anniviers | – | Known hut tours, not researched this pass |
| Via Alpina international (Red trail, Trieste – Monaco) | Pan-Alpine trail; the Swiss part follows national route 1 | Decide whether the site shows it as its own trek |
| E-paths | Wikipedia states the Jura Crest Trail is part of E4 | E1 through Switzerland was not verified. Decide how E-paths should appear on the site. |

## 4. Open questions for a human check

**Rule decisions**

1. **Tour Monte Rosa and Tour of the Matterhorn (Rule 3).** No guide is mandatory, but Zermatt Tourism advises not to go onto glaciers without a mountain guide. It lists crampons, a harness and a rope for the Theodul crossing (both treks) and the Col Collon crossing (Matterhorn). Lifts can bypass part of the Theodul glacier. I kept both treks. Decide whether the site should keep them, flag them, or exclude them.
2. **Tour des Dents du Midi (Rule 1).** The official page gives 4 days but says it can be done in 2 or 3. About 18 h of walking. Kept, as borderline.
3. **Tour des Combins vs Grand Tour des Combins.** The classic loop is 6–7 days and ~105 km. The official site now promotes a 10-day "Grand Tour des Combins". The entry uses the classic loop numbers. Decide which version the site shows.

**Conflicts to resolve** (details in each block)

- Distance: Via Alpina (390 official vs 379.5 OSM), TMB (170 vs 165), Haute Route (215 vs 180 vs 213–225), TMR (164.1 vs 174), Matterhorn (147.3 vs 145 vs 156), Dents du Midi (56.5 vs 47 vs 45 vs 42), Alpine Passes (695 vs 669), Trans Swiss (510 vs 488 vs 523), Jura (320 vs 310), ViaGottardo (330 vs 320), Walserweg (320 vs 300), ViaSpluga (68 vs 65).
- Days and stages: Walserweg (19 vs 23 stages), ViaJacobi (33 stages vs 20–24 days), Alpine Passes (43 vs older 34 stages), TMR (9 stages vs 10–11 days), Tour des Combins (6 vs 10 days).
- Ascent: Alpine Passes (47,100 vs 39,455), Dents du Midi (3,182 vs ~3,350).

**Fields left empty**

- `best_months` / `open_season` missing: Tour of the Matterhorn, Via Alta Verzasca, Walserweg, Senda Sursilvana, Via Francigena (CH). ViaSpluga and Vier-Quellen-Weg have only package-offer dates.
- `total_ascent_m` missing: Via Alta Verzasca. Komoot gives 6,160 m for a longer variant only.
- `booking_ahead` is null where no source says it: most national and regional routes, Via Alpina, Tour des Combins, Via Alta Verzasca.
- `gpx_source` is null for most treks. OSM relations can produce GPX, and Cicerone offers GPX for the TMR.

**Photos and trip reports**

- Photos: 10 verified photo entries (9 distinct files) across 6 treks. 16 treks have none, because Commons file pages could not be opened directly. The next pass needs direct Commons access. Look at the category pages already found (e.g. *Category:Via Alpina in Switzerland*, *Category:Hohtürli*, *Category:Lac de Salanfe*, *Category:Theodul Pass*).
- Trip reports below 3: TMR (2), Dents du Midi (2), Via Alta Verzasca (2), Trans Swiss (2, both from the same runner), Jura (2, one is an editorial collection), ViaJacobi (2 forum posts), ViaGottardo (1). None found for Alpine Panorama, Walserweg, Via Albula/Bernina, ViaSpluga, Swiss Tour Monte Rosa, Vier-Quellen-Weg, Senda Sursilvana, Via Francigena (CH). German- and French-language blogs are the best next source.
- `year_hiked` is null wherever the report does not state it.

**Other checks**

- **OSM.** Tour du Cervin relation 1176308 has `from`/`to` = St. Niklaus–Zermatt and is mapped at 133.7 km. It looks like the full loop, but check that it covers the Italian side. Via Francigena relation 124582 is the **Swiss section only** (206.7 km).
- **Closures (summer 2026).** Susanfe hut (Dents du Midi) is closed for renovation. Rifugio Gabiet (TMR) is closed in summer 2026. The Britannia–Plattjen–Saas-Fee path (TMR) is closed. Recheck before publishing.
