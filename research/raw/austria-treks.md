# Multi-day treks in Austria (AT): research report

Last verified: 2026-11-27. Scope agreed: the ~25 most established treks researched in full; every other qualifying trek is listed in section 3 for a later batch. Very long umbrella routes (national Weitwanderwege, Via Alpina, E-paths) are included as normal entries, with E-paths de-duplicated.

## How to read this

- 24 treks pass all three rules and are filled in. They are ranked by how many of the five establishment signals apply; ties are ordered by how much trip-report and media coverage turned up.
- Fields with no reliable source are `null` (or an empty list). Where sources disagree, both values are in `conflicts`.
- OSM relation IDs were looked up through the Waymarked Trails API and checked against the relation details (name, operator, mapped length). Where only a partial or wrong-scope relation exists, the ID is `null` or carries a comment.
- Photos come from Wikimedia Commons only; author and licence were read from each file's Commons metadata (API `extmetadata`). Several Höhenwege have no Commons category, so their photos show huts or landmarks on the route; `shows` says which.
- Trip reports are real pages found by search; `year_hiked` is filled only when the page states it. Most are German-language blogs, which is where the Austrian coverage is. A few are written by tour operators or tourist boards and are labelled as such in the summary.
- Difficulty uses your 1–4 scale and is my rating based on the sourced facts in `reason`, not the source's own grade.
- `waymarked` uses your yes/partial/no values (quoted in YAML so they stay strings). `exposed_or_via_ferrata` is `null` where no source says either way.
- Permits: none of these treks needs a permit, guide or lottery. `permit: none` is cited to the official page, which mentions none.

## Ranking

| # | Trek | Countries | Signals (of 5) | Signals that apply |
|---|------|-----------|----------------|--------------------|
| 1 | Adlerweg (Eagle Walk) | AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 2 | Stubaier Höhenweg (Stubai High Trail) | AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 3 | Karnischer Höhenweg (Carnic Peace Trail, KHW 403) | AT, IT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 4 | Glocknerrunde (Glockner Trail) | AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 5 | Zentralalpenweg 02 (Austrian Long-Distance Trail 02) | AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 6 | Nordalpenweg 01 (Austrian Long-Distance Trail 01) | AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 7 | SalzAlpenSteig | DE, AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 8 | Südalpenweg 03 (Austrian Long-Distance Trail 03) | AT | 5 | official status, waymarked, official site, guidebook, trip reports |
| 9 | Lechweg | AT, DE | 4 | official status, waymarked, official site, trip reports |
| 10 | Alpe-Adria-Trail | AT, SI, IT | 4 | official status, waymarked, official site, trip reports |
| 11 | E5 Alpenüberquerung Oberstdorf – Meran | DE, AT, IT | 4 | official status, waymarked, official site, trip reports |
| 12 | Berliner Höhenweg (Zillertaler Runde) | AT | 4 | waymarked, official site, guidebook, trip reports |
| 13 | Venediger Höhenweg | AT | 4 | waymarked, official site, guidebook, trip reports |
| 14 | Welterbesteig Wachau (Wachau World Heritage Trail) | AT | 4 | official status, waymarked, official site, trip reports |
| 15 | Donausteig | DE, AT | 4 | official status, waymarked, official site, trip reports |
| 16 | Lechtaler Höhenweg | AT | 3 | official status, official site, trip reports |
| 17 | Hohe Tauern Panorama Trail | AT | 3 | official status, official site, trip reports |
| 18 | Schladminger Tauern Höhenweg | AT | 3 | official status, official site, trip reports |
| 19 | Via Alpina (main route) | IT, SI, AT, DE, LI, CH, FR, MC | 3 | official status, official site, trip reports |
| 20 | Salzburger Almenweg | AT | 3 | waymarked, official site, trip reports |
| 21 | KAT Walk Alpin (Kitzbüheler Alpen Trail) | AT | 3 | waymarked, official site, trip reports |
| 22 | Karwendel Höhenweg | AT | 2 | official site, trip reports |
| 23 | Koasa Trail | AT | 2 | official site, trip reports |
| 24 | Arnoweg | AT | 2 | official site, trip reports |

Notes on the ranking: the Lechweg is Austria's only Leading Quality Trail but sits at 4 signals because I found only a map, not a guidebook. The Karwendel Höhenweg, Koasa Trail and Arnoweg score low because I could not find a source for continuous waymarking or a guidebook, not because they are obscure.

---

## 1. Included treks (ranked)

### 1. Adlerweg (Eagle Walk)

```yaml
id: adlerweg
name: Adlerweg (Eagle Walk)
countries:
- AT
region: Tyrol and East Tyrol (Kaisergebirge to Arlberg; Glockner and Venediger groups)
one_liner: Tyrol's flagship long-distance trail, 33 stages from St. Johann to the Arlberg plus an East Tyrol loop; huts and inns, many stages need a head for heights.
route:
  type: point-to-point
  start: St. Johann in Tirol
  end: Arlbergpass (St. Christoph am Arlberg)
  osm_relation_id: 3305327  # OSM superroute 'Adlerweg' (operator Tirol) maps ~339 km in 27 sub-routes, i.e. probably North Tyrol only; East Tyrol stages not confirmed in it.
  gpx_source: null
distance_km: 426
total_ascent_m: 30000
typical_days:
  min: 16
  max: 33
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: Stages end at Alpine Club huts and valley inns (e.g. Gaudeamushütte, Gasthof Buchacker, Lucknerhaus).
difficulty:
  level: 3
  reason: Long alpine stages; tirol.at rates it 'schwierig' and says many (black) stages need alpine experience, sure-footedness and a head for heights; Cicerone gives easier alternatives.
logistics:
  getting_to_start: St. Johann in Tirol is the official start (stage 1 to the Gaudeamushütte).
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit mentioned by the official site.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://www.moonhoneytravel.com/europe/austria/eagle-walk-lechtal-alps/
  title: 'Eagle Walk Lechtal Alps: Our Complete Hiking Guide'
  year_hiked: null
  summary: Hiked stages 19–24 across the Lechtal Alps; found it far harder than expected but the most spectacular trail they had hiked in Austria.
- url: https://www.tirol.at/blog/b-sport/zu-fuss-vom-kaisergebirge-zum-arlberg-fabians-weitwander-abenteuer-am-tiroler-adlerweg
  title: Zu Fuß vom Kaisergebirge zum Arlberg – Fabians Weitwander-Abenteuer am Tiroler Adlerweg
  year_hiked: null
  summary: First-person account of walking the North Tyrol Adlerweg end to end (published on the Tirol tourism blog).
- url: https://fastestknowntime.com/fkt/philipp-ausserhofer-adlerweg-eagle-walk-2026-10-01
  title: 'FKT: Philipp Ausserhofer – Adlerweg'
  year_hiked: 2026
  summary: Supported speed attempt starting 27 Sept 2026 in St. Johann; finished in 4 d 1 h 50 min – a running report, not a typical hike.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Las%C3%B6rling_-_Vom_Adlerweg_zur_Sajath%C3%BCtte_mit_Bergerseekogel_I.JPG
  author: Michael Kranewitter
  license: CC BY-SA 3.0 at
  shows: Path from the Adlerweg (East Tyrol section) towards the Sajathütte, Bergerseekogel behind
- file_url: https://commons.wikimedia.org/wiki/File:Las%C3%B6rling_-_Vom_Adlerweg_zur_Sajath%C3%BCtte_mit_Bergerseekogel_II.JPG
  author: Michael Kranewitter
  license: CC BY-SA 3.0 at
  shows: Same East Tyrol section, second view
- file_url: https://commons.wikimedia.org/wiki/File:Memminger_Huette_vom_Vorderen_Seekopf.jpg
  author: Karl Haarmann
  license: CC BY-SA 3.0
  shows: Memminger Hütte, end of Adlerweg stage 21 in the Lechtal Alps
sources:
  distance_km: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  total_ascent_m: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  typical_days: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  typical_days_min: https://www.cicerone.co.uk/trekking-austrias-adlerweg
  best_months: null
  open_season: null
  sleeping: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  difficulty: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  logistics: https://www.kitzbueheler-alpen.com/en/stjo/so/hiking/eagle-walk.html
  permit: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  waymarked: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  official_status: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  guidebook: https://www.cicerone.co.uk/products/trekking-austrias-adlerweg
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=3305327
conflicts:
- field: distance_km
  values:
  - value: 426
    source: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  - value: 413
    source: https://www.austria.info/uk/austriantime/the-eagle-walk
  - value: 326
    source: https://www.cicerone.co.uk/trekking-austrias-adlerweg
- field: total_ascent_m
  values:
  - value: 30000
    source: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  - value: 28463
    source: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg (tour-info box)
  - value: 23000
    source: https://www.cicerone.co.uk/trekking-austrias-adlerweg
- field: typical_days
  values:
  - value: 33 stages (24 North Tyrol + 9 East Tyrol)
    source: https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg
  - value: 24 stages, 16–21 days, North Tyrol only, ends St. Anton
    source: https://www.cicerone.co.uk/trekking-austrias-adlerweg
last_verified: '2026-11-27'
```

### 2. Stubaier Höhenweg (Stubai High Trail)

```yaml
id: stubaier-hoehenweg
name: Stubaier Höhenweg (Stubai High Trail)
countries:
- AT
region: Stubai Alps, Tyrol
one_liner: Hut-to-hut loop around the Stubai valley past eight Alpine Club huts; black-graded paths with cable-protected passages, huts full in summer.
route:
  type: loop
  start: Neustift im Stubaital (Starkenburger Hütte)
  end: Neustift im Stubaital (Innsbrucker Hütte)
  osm_relation_id: 6560812
  gpx_source: null
distance_km: 79.4
total_ascent_m: 5821
typical_days:
  min: 8
  max: 9
when:
  best_months:
  - July
  - August
  - September
  open_season: Huts open mid-June to end of September; snow can linger on north slopes into July
sleeping:
  type: huts
  booking_ahead: required
  notes: Eight Alpine Club huts; descent to the valley possible from every hut.
difficulty:
  level: 3
  reason: Black (difficult) mountain paths with cable-secured passages on most stages; up to 2,879 m; daily ascent mostly under 1,000 m.
logistics:
  getting_to_start: Neustift im Stubaital has regular buses from Innsbruck; ascent to the Starkenburger Hütte (or the Kreuzjoch lift).
  leaving_from_end: Descend from the Innsbrucker Hütte through the Pinnistal to Neustift.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit mentioned by the official site.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.stubai.at/en/stubai-high-trail/
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://thehikinglife.com/2020/09/a-quick-dirty-guide-to-the-stubai-high-trail/
  title: A Quick & Dirty Guide to the Stubai High Trail
  year_hiked: 2019
  summary: Walked it counter-clockwise in mid-October 2019 as one of four Austrian high trails on a long Alps trip.
- url: https://inafarawayland.com/stubai-high-trail-guide/
  title: 'Stubai High Trail Guide: 7 Days Hiking Austria''s Famous Hut-To-Hut Trail'
  year_hiked: null
  summary: Seven-day hut-to-hut account; stresses steep, sure-footed terrain.
- url: https://services.alpenverein.de/chameleon/public/13502/p_unt1_13502.pdf
  title: Stubaier Höhenweg – Glanzpunkte im Angesicht der Gletscher (DAV Panorama 4/2007)
  year_hiked: null
  summary: Text and photos by Heinz Zak; long-route version quoted at 120 km / 8,000 m with daily flexibility thanks to many huts.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Blick_Richtung_Sulzenau_H%C3%BCtte.jpg
  author: The jackal100
  license: CC BY-SA 4.0
  shows: Stage Dresdner Hütte – Sulzenauhütte
- file_url: https://commons.wikimedia.org/wiki/File:Kurz_vor_der_Neuen_Regensburger_H%C3%BCtte.jpg
  author: The jackal100
  license: CC BY-SA 4.0
  shows: Approach to the Neue Regensburger Hütte (from Franz-Senn-Hütte)
- file_url: https://commons.wikimedia.org/wiki/File:Blick_auf_die_Franz-Senn-H%C3%BCtte.jpg
  author: The jackal100
  license: CC BY-SA 4.0
  shows: Franz-Senn-Hütte seen from the trail
- file_url: https://commons.wikimedia.org/wiki/File:Stubai-Elfer-StubaierH%C3%B6henweg-n.jpg
  author: SchiDD
  license: CC BY-SA 4.0
  shows: Trail below the Elferhütte above the Pinnistal
sources:
  distance_km: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/stubaier-hoehenweg-variante-2-innsbrucker-huette-starkenburger-huette
  total_ascent_m: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/stubaier-hoehenweg-variante-2-innsbrucker-huette-starkenburger-huette
  typical_days: https://www.tyrol.com/activities/sport/hiking/hiking-tours/stubaier-hoehenweg-variante-1-starkenburger-huette-innsbrucker-huette
  best_months: https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps
  open_season: https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps
  sleeping: https://bookatrekking.com/de/blog/stubaier-hoehenweg/
  difficulty: https://www.almenrausch.at/einkehr-uebernachtung/detail/stubaier-hoehenweg-9-tagesetappen/
  logistics: https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps
  permit: https://www.stubai.at/en/stubai-high-trail/
  waymarked: https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps
  official_status: https://www.stubai.at/en/stubai-high-trail/
  guidebook: https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=6560812
conflicts:
- field: distance_km
  values:
  - value: 79.4
    source: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/stubaier-hoehenweg-variante-2-innsbrucker-huette-starkenburger-huette
  - value: 80
    source: https://en.wikipedia.org/wiki/Stubai_Hohenweg
  - value: 120
    source: https://services.alpenverein.de/chameleon/public/13502/p_unt1_13502.pdf
- field: total_ascent_m
  values:
  - value: 5821
    source: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/stubaier-hoehenweg-variante-2-innsbrucker-huette-starkenburger-huette
  - value: 8000
    source: https://services.alpenverein.de/chameleon/public/13502/p_unt1_13502.pdf
- field: typical_days
  values:
  - value: 8 days
    source: https://www.tyrol.com/activities/sport/hiking/hiking-tours/stubaier-hoehenweg-variante-1-starkenburger-huette-innsbrucker-huette
  - value: 9 stages
    source: https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps
last_verified: '2026-11-27'
```

### 3. Karnischer Höhenweg (Carnic Peace Trail, KHW 403)

```yaml
id: karnischer-hoehenweg
name: Karnischer Höhenweg (Carnic Peace Trail, KHW 403)
countries:
- AT
- IT
region: Carnic Alps (East Tyrol and Carinthia, on the Italian border)
one_liner: Ridge-line hut trek along the Austro-Italian border through WWI front-line relics; exposed in the west, gentle east of the Plöckenpass.
route:
  type: point-to-point
  start: Sillian (East Tyrol)
  end: Thörl-Maglern / Arnoldstein (Carinthia)
  osm_relation_id: 1163255
  gpx_source: null
distance_km: 156
total_ascent_m: 9499
typical_days:
  min: 8
  max: 11
when:
  best_months:
  - July
  - August
  - September
  open_season: Walkable mid-July to end of September depending on snow
sleeping:
  type: huts
  booking_ahead: null
  notes: 11 huts and rifugi along the ridge; daily descent to valleys possible.
difficulty:
  level: 3
  reason: Exposed ridgelines and cable/ladder sections (no special gear needed) in the higher western half; long days.
logistics:
  getting_to_start: Train via Lienz to Sillian, then hut taxi or walk up to the Leckfeldalm.
  leaving_from_end: Bus or train from Arnoldstein back towards Lienz/Sillian; a return taxi service ('Rückholservice Karnischer Kamm') exists.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit mentioned.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/the-karnische-hoehenweg-trail
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://gepacktundlos.com/karnischer-hoehenweg/
  title: Karnischer Höhenweg – Erfahrung auf einzelnen Etappen
  year_hiked: null
  summary: Guest post with stage-by-stage experiences of the KHW 403.
- url: https://leckomio-outdoor.de/huttentour-karnische-hohenweg/
  title: 'Der Karnische Höhenweg: 10 Tage im Nirgendwo'
  year_hiked: null
  summary: Ten days on the trail; author first met it while walking part of the Via Alpina in 2021.
- url: https://www.bergzeit.de/magazin/wandern-karnischer-hoehenweg/
  title: Wandern am Karnischen Höhenweg
  year_hiked: null
  summary: Report with a stage table (Leckfeldalm start, 1,100–1,200 m daily ascents in the west).
- url: https://www.hikingfex.com/en/post/carnic-high-trail
  title: 'Carnic high trail: The peace trail (+Guide and GPX)'
  year_hiked: null
  summary: Personal guide with GPX files and hut notes.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Karnischer_Hoehenweg.jpg
  author: Felsigel
  license: CC BY 3.0
  shows: Trail between the Sillianer Hütte and the Obstanserseehütte
- file_url: https://commons.wikimedia.org/wiki/File:Karnischer_Hoehenweg_(Gro%C3%9Fe_Kinigat).jpg
  author: Felsigel
  license: CC BY 3.0
  shows: Trail north of the Große Kinigat massif
- file_url: https://commons.wikimedia.org/wiki/File:Ausgesetzter_Pfad.jpg
  author: Mikmaq
  license: CC BY 3.0
  shows: An exposed section of the trail
- file_url: https://commons.wikimedia.org/wiki/File:Hollbrucker_Seen_Karnische_Alpen_20070706a.jpg
  author: Tigerente
  license: CC BY 4.0
  shows: Hollbrucker Seen lakes, Carnic Alps
- file_url: https://commons.wikimedia.org/wiki/File:Karnischer_H%C3%B6henweg_Wegweiser_20070707.jpg
  author: Tigerente
  license: CC BY-SA 4.0
  shows: Trail signpost on the Karnischer Höhenweg
sources:
  distance_km: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/the-karnische-hoehenweg-trail
  total_ascent_m: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/the-karnische-hoehenweg-trail
  typical_days: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  best_months: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  open_season: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  sleeping: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  difficulty: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  logistics: https://osttirol.com/fileadmin/userdaten/pdf/a-z/karnischer-hoehenweg-infos-de.pdf
  permit: https://osttirol.com/fileadmin/userdaten/pdf/a-z/karnischer-hoehenweg-infos-de.pdf
  waymarked: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  official_status: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  guidebook: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=1163255
  countries: https://www.wanderdoerfer.at/kaernten/wanderweg/karnischer-hoehenweg-etappe-8-dolinza-alm-thoerl-maglern/
conflicts:
- field: distance_km
  values:
  - value: 156
    source: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/the-karnische-hoehenweg-trail
  - value: 170
    source: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  - value: 137.77
    source: https://www.wanderdoerfer.at/kaernten/wanderweg/karnischer-hoehenweg/
- field: typical_days
  values:
  - value: 8–11 days
    source: https://www.cicerone.co.uk/products/the-karnischer-hohenweg
  - value: 4–8 day stages
    source: https://osttirol.com/fileadmin/userdaten/pdf/a-z/karnischer-hoehenweg-infos-de.pdf
last_verified: '2026-11-27'
```

### 4. Glocknerrunde (Glockner Trail)

```yaml
id: glocknerrunde
name: Glocknerrunde (Glockner Trail)
countries:
- AT
region: Hohe Tauern National Park (Salzburg, East Tyrol, Carinthia)
one_liner: Seven-day hut circuit around the Großglockner, Austria's highest peak; glacier-free but with cable-secured passages.
route:
  type: loop
  start: Kaprun (Mooserboden reservoir)
  end: Kaprun (Gletscherbahn valley station)
  osm_relation_id: null  # No relation found by name on Waymarked Trails.
  gpx_source: null
distance_km: 95.06
total_ascent_m: 7100
typical_days:
  min: 7
  max: 7
when:
  best_months: []
  open_season: Only during the summer hut-operating season (e.g. Salmhütte open June–September)
sleeping:
  type: mixed
  booking_ahead: null
  notes: Mountain huts, plus valley guesthouses in Kals, Heiligenblut and Fusch; you can leave or join after any stage.
difficulty:
  level: 3
  reason: Demanding stages with cable-secured passages but no glacier or via ferrata; up to ~1,500 m ascent per day, high point ~2,820 m.
logistics:
  getting_to_start: Kaprun is chosen as start for its easy access; reservoir buses go up to the Mooserboden.
  leaving_from_end: Last stage ends at the Kaprun glacier-railway car park; bus to Kaprun.
  nearest_airports:
  - Munich
  - Innsbruck
  - Salzburg
flags:
  permit: none
  permit_notes: No permit mentioned.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.nationalpark.at/en/holiday/summer/hiking/glockner-trail
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://www.hikingfex.com/en/post/glockner-circuit
  title: 'Glockner circuit: Long-distance hike in Austria (+Guide and GPX)'
  year_hiked: null
  summary: Seven days hut to hut around the Großglockner with GPX.
- url: https://jasperzuallaert.com/trekkings/trek:Glocknerrunde/
  title: Glocknerrunde
  year_hiked: null
  summary: Personal trek log of the loop.
- url: https://www.alpenverein.at/villach/berichte/berichte_2007/2007_08_03_51666476_glocknerrunde.php
  title: Glocknerrunde (ÖAV Sektion Villach report)
  year_hiked: 2007
  summary: Alpine Club section's tour report; lucky with weather, glaciated scenery.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Sudetendeutsche_H%C3%BCtte_2015.jpg
  author: Whgler
  license: CC BY-SA 3.0
  shows: Sudetendeutsche Hütte, overnight stop on stage 2
- file_url: https://commons.wikimedia.org/wiki/File:Glorerh%C3%BCtte.jpg
  author: Maddl79
  license: CC BY-SA 4.0
  shows: Glorer Hütte, passed on stage 4 (Kals – Salmhütte)
- file_url: https://commons.wikimedia.org/wiki/File:Heiligenblut_-_Salmh%C3%BCtte_(1).JPG
  author: C.Stadler/Bwag
  license: CC BY-SA 4.0
  shows: Salmhütte, end of stage 4
- file_url: https://commons.wikimedia.org/wiki/File:Gleiwitzer_H%C3%BCtte_20080806a.jpg
  author: Tigerente
  license: CC BY 4.0
  shows: Gleiwitzer Hütte on the last stage (Fusch – Kaprun)
sources:
  distance_km: https://www.zellamsee-kaprun.com/en/tour/around-the-grossglockner-in-7-days~10455
  total_ascent_m: https://www.zellamsee-kaprun.com/en/tour/around-the-grossglockner-in-7-days~10455
  typical_days: https://www.nationalpark.at/en/holiday/summer/hiking/glockner-trail
  best_months: null
  open_season: https://www.nationalpark.at/en/holiday/summer/hiking/glockner-trail
  sleeping: https://www.nationalpark.at/en/holiday/summer/hiking/glockner-trail
  difficulty: https://www.bergwelten.com/a/glocknerrunde
  logistics: https://magazin.alpenverein.de/files/1805-grossglocknerrunde-broschuere-en_ol.pdf
  nearest_airports: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  permit: https://www.nationalpark.at/en/holiday/summer/hiking/glockner-trail
  waymarked: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  official_status: https://www.nationalpark.at/en/holiday/summer/hiking/glockner-trail
  guidebook: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
conflicts:
- field: distance_km
  values:
  - value: 95.06
    source: https://www.zellamsee-kaprun.com/en/tour/around-the-grossglockner-in-7-days~10455
  - value: 86.09
    source: https://www.osttirol.com/aktiv-outdoor/wandern/detail/glocknerrunde-1/pdf
  - value: 99
    source: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern (Glockner Rucksack Route)
  - value: 135
    source: https://www.hikingfex.com/post/glocknerrunde
- field: total_ascent_m
  values:
  - value: 7100
    source: https://www.zellamsee-kaprun.com/en/tour/around-the-grossglockner-in-7-days~10455
  - value: 7209
    source: https://www.osttirol.com/aktiv-outdoor/wandern/detail/glocknerrunde-1/pdf
last_verified: '2026-11-27'
```

### 5. Zentralalpenweg 02 (Austrian Long-Distance Trail 02)

```yaml
id: zentralalpenweg-02
name: Zentralalpenweg 02 (Austrian Long-Distance Trail 02)
countries:
- AT
region: 'Across Austria: Leitha hills, Niedere and Hohe Tauern, Zillertal/Ötztal Alps to Vorarlberg'
one_liner: Austria's longest national trail, Hainburg to Feldkirch along the Central Alps; the alpine main route needs glacier experience, route 02A avoids ice.
route:
  type: point-to-point
  start: Hainburg an der Donau
  end: Feldkirch
  osm_relation_id: 193073  # Glacier-free variant 02A: relation 398221.
  gpx_source: null
distance_km: 1200
total_ascent_m: null
typical_days: null
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: null
difficulty:
  level: 4
  reason: Main alpine route 02 crosses glaciers and reaches ~3,400 m (Venediger group); needs glacier experience, sure-footedness, head for heights. 02A is glacier-free.
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit; glacier sections are on the main alpine route only.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://zentralalpenweg02.blogspot.com/
  title: Zentralalpenweg 02 (blog)
  year_hiked: null
  summary: Multi-season blog of the whole route, ending at the Feldkircher Hütte.
- url: https://weitzuwandern.blogspot.com/2026/08/www02a-zentralalpenweg.html
  title: 'Weitwandern: WWW02A Zentralalpenweg'
  year_hiked: 2026
  summary: Day-by-day log of the glacier-free 02A in August 2026 (Zell am Ziller onwards).
- url: https://transperpedes.blogspot.com/2009/11/zentralalpenweg-02-der-beginn-hainburg.html
  title: Zentralalpenweg 02 – Der Beginn Hainburg bis …
  year_hiked: null
  summary: Start of a section-by-section walk from Hainburg.
- url: https://www.outdoorseiten.net/forum/viewtopic.php?t=49951
  title: Zentralalpenweg 02 Glockner & Venediger
  year_hiked: null
  summary: Couple walking the high-alpine 02 over three summers, so far to the Ankogel.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Hainburg-Hauptplatz_2792.JPG
  author: Karl Gruber
  license: CC BY-SA 4.0
  shows: Zentralalpenweg 02 marker stone on the main square of Hainburg (start)
- file_url: https://commons.wikimedia.org/wiki/File:Klafferkessel-2.JPG
  author: Gergi084
  license: CC BY-SA 3.0
  shows: Klafferkessel on the Schladminger Tauern section of the 02
- file_url: https://commons.wikimedia.org/wiki/File:Nenzing-Nenzinger_hiking_sign_Zentralalpenweg_102-01ASD.jpg
  author: Asurnipal
  license: CC BY-SA 4.0
  shows: 02/102 signpost at Nenzinger Himmel, Vorarlberg
sources:
  distance_km: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php
  total_ascent_m: null
  typical_days: null
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php
  logistics: null
  permit: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php
  waymarked: https://www.austria.info/de-de/aktivitaeten/weitwandern/
  official_status: https://www.alpenverein.at/weitwanderer/weitwanderwege/index.php?navid=159071997350
  guidebook: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=193073
conflicts:
- field: distance_km
  values:
  - value: 1200
    source: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php
  - value: 1270
    source: https://www.alpenverein.at/weitwanderer/weitwanderwege/zentralalpenweg.php (page heading)
last_verified: '2026-11-27'
```

### 6. Nordalpenweg 01 (Austrian Long-Distance Trail 01)

```yaml
id: nordalpenweg-01
name: Nordalpenweg 01 (Austrian Long-Distance Trail 01)
countries:
- AT
region: Northern Limestone Alps, Burgenland/Vienna to Lake Constance
one_liner: Austria's oldest east–west long trail through the Northern Limestone Alps, ~1,000 km and mostly high-alpine, from Lake Neusiedl or Vienna to Bregenz.
route:
  type: point-to-point
  start: Rust am Neusiedler See (01A) or Perchtoldsdorf near Vienna
  end: Bregenz (Lake Constance)
  osm_relation_id: 177745
  gpx_source: null
distance_km: 1000
total_ascent_m: null
typical_days: null
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: null
difficulty:
  level: 4
  reason: Largely high-alpine up to ~3,000 m (Zugspitze variant); alpine gear, sure-footedness and route-finding needed; one avoidable via ferrata (Zahme Gamseck).
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://www.weissenboek.com/nordalpenweg/
  title: Nordalpenweg, der österreichische Weitwanderweg 01
  year_hiked: null
  summary: Walked Vienna to Bregenz in 55 stages, mostly on the original route.
- url: https://www.outdoorseiten.net/archiv/tourenberichte-d-a-ch/78215-at-der-sterreichische-weitwanderweg-01-in-sechs-jahren.html
  title: '[AT] Der Österreichische Weitwanderweg 01 in sechs Jahren'
  year_hiked: null
  summary: Completed the 01 in sections over six years.
- url: https://www.komoot.com/de-de/collection/1140546/nordalpenweg-01-in-49-tagen-quer-durch-oesterreich
  title: Nordalpenweg 01 – In 49 Tagen quer durch Österreich
  year_hiked: null
  summary: Komoot collection of a 49-day crossing.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Eisenerz_-_%C3%96WWW_01_-_Nordalpenweg_Bodensee-Wienerwald.jpg
  author: Haeferl
  license: CC BY-SA 3.0
  shows: Nordalpenweg sign in Eisenerz, Styria
- file_url: https://commons.wikimedia.org/wiki/File:Blick_vom_Nordalpenweg_auf_die_SO_Bergkette.jpg
  author: MeckiZ1967
  license: CC BY-SA 4.0
  shows: View from the trail between Ravensburger Hütte and Spullersee
sources:
  distance_km: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  total_ascent_m: null
  typical_days: null
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  logistics: null
  permit: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  waymarked: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  official_status: https://www.alpenverein.at/weitwanderer/weitwanderwege/index.php?navid=159071997350
  guidebook: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  stages: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=177745
conflicts:
- field: stages
  values:
  - value: 61 (2025 guidebook)
    source: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  - value: 49 (guidebooks to 2024)
    source: https://www.alpenverein.at/weitwanderer/weitwanderwege/nordalpenweg.php
  - value: 55 (walked)
    source: https://www.weissenboek.com/nordalpenweg/der-weg/
last_verified: '2026-11-27'
```

### 7. SalzAlpenSteig

```yaml
id: salzalpensteig
name: SalzAlpenSteig
countries:
- DE
- AT
region: Chiemgau, Berchtesgaden Land, Tennengau, Dachstein-Salzkammergut
one_liner: Certified premium trail following old salt routes from Lake Chiemsee via the Königssee to Hallstatt; mid-mountain, inns in villages, May to October.
route:
  type: point-to-point
  start: Prien am Chiemsee (DE)
  end: Obertraun am Hallstätter See (AT)
  osm_relation_id: 4033881
  gpx_source: null
distance_km: 233
total_ascent_m: null
typical_days:
  min: 18
  max: 18
when:
  best_months:
  - May
  - June
  - July
  - August
  - September
  - October
  open_season: Hiking season May–October
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: Partner hotels/inns along the stages; bookable luggage transport.
difficulty:
  level: 2
  reason: Medium difficulty; 456–1,663 m (Hochfelln); some stages near 1,000 m ascent.
logistics:
  getting_to_start: Train to Prien am Chiemsee (DB); 39 possible entry points.
  leaving_from_end: Last stage Bad Goisern – Hallstatt, then boat across the Hallstätter See or shore path to Obertraun.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.salzalpensteig.com/
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://mannis-reiseblog.com/salzalpensteig/
  title: Salzalpensteig – Zu Fuß vom Chiemsee bis nach Hallstatt
  year_hiked: null
  summary: Walked the whole route Chiemsee to Hallstatt.
- url: https://abenteuermomente.de/salzalpensteig-5/
  title: 'SalzAlpenSteig: Erfahrungen & Tipps zur Mehrtageswanderung'
  year_hiked: null
  summary: Personal experiences with stages, difficulty and ascent tips.
- url: https://www.abenteuerwege.de/wegweiser/2019/08/cindys-lieblingsplaetze-ein-reisebericht-vom-salzalpensteig/
  title: Cindys Lieblingsplätze – ein Reisebericht vom SalzAlpenSteig
  year_hiked: null
  summary: Report on favourite spots along the trail (published 2019).
- url: https://www.eurohike.at/de/blog/reisebericht-salzalpensteig
  title: Wandern am Salzalpensteig (Eurohike WanderBlog)
  year_hiked: null
  summary: Tour-operator staff report of the last three stages, Abtenau to Bad Goisern.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Abstieg_%C3%BCber_den_SalzAlpenSteig_nach_Hallstatt.jpg
  author: SalzAlpenSteig
  license: CC BY-SA 4.0
  shows: Descent to Hallstatt
- file_url: https://commons.wikimedia.org/wiki/File:Historische_Soleleitungen_am_SalzAlpenSteig.jpg
  author: SalzAlpenSteig
  license: CC BY-SA 4.0
  shows: Historic brine pipelines along the trail
- file_url: https://commons.wikimedia.org/wiki/File:Blick_auf_den_Chiemsee_vom_Gipfel_des_Hochfelln.jpg
  author: SalzAlpenSteig
  license: CC BY-SA 4.0
  shows: Lake Chiemsee from the Hochfelln, the trail's high point
- file_url: https://commons.wikimedia.org/wiki/File:Das_Ziel_des_SalzAlpenSteigs_in_Obertraun.jpg
  author: SalzAlpenSteig
  license: CC BY-SA 4.0
  shows: Finish in Obertraun
sources:
  distance_km: https://www.berchtesgaden.de/en/activities/hiking-and-mountaineering/salzalpensteig
  total_ascent_m: null
  typical_days: https://www.berchtesgaden.de/en/activities/hiking-and-mountaineering/salzalpensteig
  best_months: https://www.tips.at/freizeit/reisen/1215-salzalpensteig-der-neue-premium-weitwanderweg-zwischen-deutschland-und-oesterreich
  open_season: https://www.tips.at/freizeit/reisen/1215-salzalpensteig-der-neue-premium-weitwanderweg-zwischen-deutschland-und-oesterreich
  sleeping: https://dachstein.salzkammergut.at/artikel/detail/1427/weitwanderweg-salzalpensteig.html?type=2026
  difficulty: https://www.tips.at/freizeit/reisen/1215-salzalpensteig-der-neue-premium-weitwanderweg-zwischen-deutschland-und-oesterreich
  logistics: https://www.outdoor-magazin.com/wanderwege/salzalpensteig/
  permit: https://www.berchtesgaden.de/en/activities/hiking-and-mountaineering/salzalpensteig
  waymarked: https://www.abenteuerwege.de/wegweiser/2021/haeufigste-fragen-und-antworten-salzalpensteig/
  official_status: https://www.tips.at/freizeit/reisen/1215-salzalpensteig-der-neue-premium-weitwanderweg-zwischen-deutschland-und-oesterreich
  guidebook: https://netzwerk-weitwandern.de/wanderliteratur/wanderfuehrer/787-salzalpensteig
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=4033881
conflicts:
- field: total_ascent_m
  values:
  - value: 14215
    source: https://www.wildganz.com/fernwanderweg/salzalpensteig
  - value: 8848
    source: https://www.tourispo.de/wanderung/salzalpensteig--von-prien-am-chiemsee-nach-obertraun.html
- field: distance_km
  values:
  - value: 233
    source: https://www.berchtesgaden.de/en/activities/hiking-and-mountaineering/salzalpensteig
  - value: 230
    source: https://www.tips.at/freizeit/reisen/1215-salzalpensteig-der-neue-premium-weitwanderweg-zwischen-deutschland-und-oesterreich
  - value: 235
    source: https://dachstein.salzkammergut.at/en/artikel/detail/1427/long-hiking-trail-salzalpensteig.html?type=2026
last_verified: '2026-11-27'
```

### 8. Südalpenweg 03 (Austrian Long-Distance Trail 03)

```yaml
id: suedalpenweg-03
name: Südalpenweg 03 (Austrian Long-Distance Trail 03)
countries:
- AT
region: South Styrian wine country, Koralpe, Karawanken, Carnic Alps
one_liner: Austria's southern national trail from the Styrian vineyards along the Slovenian and Italian borders to East Tyrol; gentle in the east, alpine in the Carnic Alps.
route:
  type: point-to-point
  start: Bad Radkersburg (Styria)
  end: Sillian (East Tyrol)
  osm_relation_id: 186221  # Optional extension to Bozen (Italy) not in this relation.
  gpx_source: null
distance_km: 500
total_ascent_m: null
typical_days:
  min: 25
  max: 25
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: null
difficulty:
  level: 3
  reason: Ranges from very easy to demanding; up to ~2,700 m; full alpine equipment, sure-footedness and head for heights required on the western sections.
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
establishment_signals:
- official_status
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://www.ifollowedthewhiteblazes.com/fazit-suedalpenweg-03/
  title: Fazit – Südalpenweg 03
  year_hiked: null
  summary: Thru-hiker's summary of the whole trail.
- url: https://gepacktundlos.com/suedalpenweg-03/
  title: Südalpenweg 03 – Weitwandern von Bad Radkersburg bis nach Sillian
  year_hiked: null
  summary: Account of walking the border region between Austria, Slovenia and Italy.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Wolayerseehuette_Neu_seit_2013.jpg
  author: Wolayerseehütte
  license: CC BY-SA 4.0
  shows: Wolayerseehütte in the Carnic Alps (shared with the Karnischer Höhenweg)
sources:
  distance_km: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  total_ascent_m: null
  typical_days: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  logistics: null
  permit: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  waymarked: https://www.austria.info/de-de/aktivitaeten/weitwandern/
  official_status: https://www.alpenverein.at/weitwanderer/weitwanderwege/index.php?navid=159071997350
  guidebook: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=186221
conflicts:
- field: distance_km
  values:
  - value: ~500 km main route (660 km incl. Bozen extension)
    source: https://www.alpenverein.at/weitwanderer/weitwanderwege/suedalpenweg.php
  - value: 463.2
    source: https://www.outdooractive.com/de/route/fernwanderweg/weitwanderweg-03-suedalpenweg/14534584/review
last_verified: '2026-11-27'
```

### 9. Lechweg

```yaml
id: lechweg
name: Lechweg
countries:
- AT
- DE
region: Vorarlberg, Tyrolean Lech valley, Allgäu
one_liner: 'Europe''s first Leading Quality Trail: follows the wild Lech river from its source lake to the Lechfall in Füssen, mostly in the valley; a good first long trail.'
route:
  type: point-to-point
  start: Formarinsee (Lech am Arlberg)
  end: Lechfall, Füssen (DE)
  osm_relation_id: 4728034
  gpx_source: null
distance_km: 125
total_ascent_m: 3021
typical_days:
  min: 6
  max: 8
when:
  best_months:
  - June
  - July
  - August
  - September
  - October
  open_season: Most of the trail walkable May–October; the first two stages only later (snow); hiking bus to Formarinsee June–October
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: Villages along the valley; luggage transport offered.
difficulty:
  level: 2
  reason: Mostly valley paths with small daily climbs; red (intermediate) mountain trails on the first stages from 1,871 m.
logistics:
  getting_to_start: Hiking bus from Lech post office to the Formarinsee (June–October).
  leaving_from_end: Füssen; bus 4258/72 back to Reutte and bus 4268 Reutte–Lech.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.lechweg.com/
establishment_signals:
- official_status
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://gepacktundlos.com/lechweg-allein-als-frau-erfahrung/
  title: Lechweg allein als Frau wandern – Meine Erfahrung
  year_hiked: null
  summary: Walked solo in seven stages, with tips for women hiking alone.
- url: https://www.bergwelten.com/a/lechweg-von-der-quelle-bis-zu-den-koenigsschloessern
  title: 'Lechweg: von der Quelle bis zu den Königsschlössern'
  year_hiked: null
  summary: Lea Hajner walked it alone in autumn; calls it a good first long-distance trail.
- url: https://escape-town.com/lechweg-weitwanderweg-6-etappen/
  title: 'Am Lechweg: Von Lech nach Füssen in 6 Tagen'
  year_hiked: null
  summary: Six-day walk from Lech to Füssen.
- url: https://theoutsideworld.de/lechweg-in-5-tagen-rueckblick-auf-eine-grandiose-wanderung/
  title: Lechweg in 5 Tagen – Rückblick
  year_hiked: null
  summary: Compressed into five days.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Lechweg_bei_Forchach.jpg
  author: Gerhard Eisenschink
  license: CC BY-SA 4.0
  shows: The Lechweg along the river near Forchach
- file_url: https://commons.wikimedia.org/wiki/File:Holzgau_-_Lechweg_-_Markierung_01.jpg
  author: Basotxerri
  license: CC BY-SA 4.0
  shows: Lechweg trail blaze in the Höhenbachtal, Holzgau
- file_url: https://commons.wikimedia.org/wiki/File:Holzgau_-_H%C3%A4ngebr%C3%BCcke_03.jpg
  author: Basotxerri
  license: CC BY-SA 4.0
  shows: Suspension bridge over the Höhenbach gorge near Holzgau
- file_url: https://commons.wikimedia.org/wiki/File:Infotafel_Lechweg_Ehenbichel_Pflach_F%C3%BCssen.jpg
  author: Bruno413
  license: CC BY-SA 4.0
  shows: Lechweg info board at the Lechfall, Füssen (finish)
sources:
  distance_km: https://austria-forum.org/af/AustriaWiki/Lechweg
  total_ascent_m: https://www.tyrol.com/activities/sport/hiking/hiking-tours/lechweg-1
  typical_days: https://austria-forum.org/af/AustriaWiki/Lechweg
  best_months: https://austria-forum.org/af/AustriaWiki/Lechweg
  open_season: https://austria-forum.org/af/AustriaWiki/Lechweg
  sleeping: https://www.lechzuers.com/en/hiking/the-lechweg-trail
  difficulty: https://tyrol.com/things-to-do/sports/hiking/hiking-tours/a-lech-river-trail
  logistics: https://www.vorarlberg.travel/en/route/lechweg-2/
  permit: https://www.vorarlberg.travel/en/route/lechweg-2/
  waymarked: https://www.era-ewv-ferp.org/?p=13502
  official_status: https://www.era-ewv-ferp.org/lqt/
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=4728034
conflicts:
- field: distance_km
  values:
  - value: 125
    source: https://austria-forum.org/af/AustriaWiki/Lechweg
  - value: 123.7
    source: https://tyrol.com/things-to-do/sports/hiking/hiking-tours/a-lech-river-trail
- field: typical_days
  values:
  - value: 6–8 stages
    source: https://austria-forum.org/af/AustriaWiki/Lechweg
  - value: 7 days
    source: https://www.tyrol.com/activities/sport/hiking/hiking-tours/lechweg-1
  - value: 7, 8 or 10 days (three variants)
    source: https://www.lechtal.at/en/activities/hiking/lechweg/steps.html
last_verified: '2026-11-27'
```

### 10. Alpe-Adria-Trail

```yaml
id: alpe-adria-trail
name: Alpe-Adria-Trail
countries:
- AT
- SI
- IT
region: Carinthia, Slovenia (Julian Alps, Soča, Brda, Karst), Friuli-Venezia Giulia
one_liner: 'Glacier to sea: 43 waymarked stages from the foot of the Großglockner through Carinthia, Slovenia and Friuli to the Adriatic at Muggia; technically easy, long.'
route:
  type: point-to-point
  start: Kaiser-Franz-Josefs-Höhe (Großglockner)
  end: Muggia (near Trieste)
  osm_relation_id: 3176522
  gpx_source: null
distance_km: 750
total_ascent_m: 24160
typical_days:
  min: 30
  max: 43
when:
  best_months:
  - June
  - July
  - August
  - September
  open_season: End of May to end of September
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: Booking centre arranges stage accommodation; 23 stages in Austria, 9 in Slovenia, 11 in Italy.
difficulty:
  level: 2
  reason: Technically uncomplicated, designed for 'pleasure hikers'; ~6 h days; high point 2,370 m.
logistics:
  getting_to_start: Start at Kaiser-Franz-Josefs-Höhe above Heiligenblut.
  leaving_from_end: Muggia, south of Trieste.
  nearest_airports:
  - Salzburg
  - Innsbruck
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.alpe-adria-trail.com/en/the-trail/
establishment_signals:
- official_status
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://www.couchflucht.de/alpe-adria-trail/
  title: Alpe Adria Trail Weitwanderung – Mein großes Abenteuer
  year_hiked: null
  summary: Walked ~700 km solo from the Großglockner glacier to the Adriatic.
- url: https://www.alpe-adria-trail.com/de/service/wander-tipps/erfahrungsberichte/wie-der-alpe-adria-trail-mich-veraendert-hat/
  title: Wie der Alpe-Adria-Trail mich verändert hat
  year_hiked: null
  summary: 37 stages in 38 days, ~850 km (guest report on the official site).
- url: https://stephan-dose.de/alpe-adria-trail-erfahrungen-etappen-kosten-und-tipps
  title: Alpe-Adria-Trail Erfahrungen – Etappen, Kosten und Tipps
  year_hiked: null
  summary: First-hand report with stages and costs across three countries.
- url: https://www.trail-pfoten.de/wandern-alpe-adria-trail/
  title: Wandern auf dem Alpe-Adria-Trail
  year_hiked: null
  summary: Hiked with a dog.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Alpe_Adria_Trail_Markierung.jpg
  author: Naturpuur
  license: CC BY 4.0
  shows: Alpe-Adria-Trail waymark
- file_url: https://commons.wikimedia.org/wiki/File:Innerfragant_Wasserfall_am_Alpe_Adria_Trail,_M%C3%B6lltal,_K%C3%A4rnten.jpg
  author: Naturpuur
  license: CC BY 4.0
  shows: Innerfragant waterfall on the trail, Mölltal
- file_url: https://commons.wikimedia.org/wiki/File:Alpe_Adria_Trail_Etappe_27_%C3%BCber_den_Kolovrat_(1169_m)_nach_Castelmonte.jpg
  author: Naturpuur
  license: CC BY 4.0
  shows: Stage 27 over the Kolovrat ridge towards Castelmonte
- file_url: https://commons.wikimedia.org/wiki/File:Muggia,_Monument_Alpe-Adria-Trail,_final_destination_stage_37_from_the_glacier_(AT)_to_sea_(IT).jpg
  author: Naturpuur
  license: CC BY-SA 4.0
  shows: Finish monument in Muggia
sources:
  distance_km: https://www.kaernten.at/berglust/weitwanderwege/alpe-adria-trail
  total_ascent_m: https://www.komoot.com/user/kaerntenwerbung
  typical_days: https://www.kaernten.at/berglust/weitwanderwege/alpe-adria-trail
  best_months: https://www.austria.info/us/austriantime/alpe-adria-trail
  open_season: https://www.austria.info/us/austriantime/alpe-adria-trail
  sleeping: https://www.kaernten.at/fileadmin/user_upload/Touris/Clippings/Kaernten_Allgemein/Sommer_2023/AT_ER_Kronen_Zeitung_Alpe_Adria_Trail.pdf
  difficulty: https://www.kaernten.at/berglust/weitwanderwege/alpe-adria-trail
  logistics: https://www.austria.info/us/austriantime/alpe-adria-trail
  nearest_airports: https://www.austria.info/us/austriantime/alpe-adria-trail
  permit: https://www.alpe-adria-trail.com/en/the-trail/
  waymarked: https://press.austria.info/fileadmin/user_upload/Imported/uk/Sommer_2023/Carinthia/Alpe_Adria_Trail.pdf
  official_status: https://hiking.waymarkedtrails.org/#route?id=3176522
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=3176522
  typical_days_note: 'Stage count 43 is official; 30–40 days is trekhunt''s estimate: https://trekhunt.com/en/article/alpe-adria-trail/'
conflicts:
- field: distance_km
  values:
  - value: 750
    source: https://www.kaernten.at/berglust/weitwanderwege/alpe-adria-trail
  - value: 720
    source: https://trekhunt.com/en/article/alpe-adria-trail/
  - value: 690
    source: https://www.irishtimes.com/life-and-style/travel/trail-blazers-1.1723965
last_verified: '2026-11-27'
```

### 11. E5 Alpenüberquerung Oberstdorf – Meran

```yaml
id: e5-oberstdorf-meran
name: E5 Alpenüberquerung Oberstdorf – Meran
countries:
- DE
- AT
- IT
region: Allgäu Alps, Lechtal Alps, Ötztal Alps, South Tyrol
one_liner: 'The classic north–south Alpine crossing on the E5: Oberstdorf to Merano in about a week, busy huts, a few bus/taxi links between stages.'
route:
  type: point-to-point
  start: Oberstdorf (DE)
  end: Meran/Merano (IT)
  osm_relation_id: null  # No single relation; Tyrol part of E5 = relation 14073053 (82.9 km), whole E5 = 300393.
  gpx_source: null
distance_km: null
total_ascent_m: null
typical_days:
  min: 6
  max: 7
when:
  best_months:
  - July
  - August
  - September
  open_season: Late June to end of September (tour-operator guidance)
sleeping:
  type: mixed
  booking_ahead: required
  notes: Huts plus one valley night in Zams; huts very busy in summer.
difficulty:
  level: 3
  reason: Up to 9 h days; tirol.at rates fitness and technique 6/6; crosses ~3,000 m at the Niederjoch/Similaunhütte.
logistics:
  getting_to_start: Oberstdorf; bus to Spielmannsau trailhead.
  leaving_from_end: Vernagt (Schnalstal) then onward to Meran by bus, or two further walking stages.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.era-ewv-ferp.org/e-paths/e5/
establishment_signals:
- official_status
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://ready-steady-travel.com/alpenueberquerung-auf-dem-e5-von-oberstdorf-nach-meran-erfahrungsbericht-2022/
  title: Alpenüberquerung auf dem E5 von Oberstdorf nach Meran – Erfahrungsbericht 2022
  year_hiked: 2022
  summary: Classic crossing in August 2022.
- url: https://todaywetravel.de/alpenueberquerung-erfahrungen/
  title: 'Alpenüberquerung E5: alle Erfahrungen, Tipps & Ausrüstung'
  year_hiked: null
  summary: Solo crossing in six stages.
- url: https://www.outdoor-renner.de/blog/e5-alpenueberquerung-alle-etappen-von-oberstdorf-bis-meran.html
  title: 'E5 Alpenüberquerung: Alle Etappen von Oberstdorf bis Meran'
  year_hiked: 2014
  summary: Walked in 2014 as a gear tester; ~115 km, 7 stages.
- url: https://susannewandert.de/portfolio-item/oberstdorf-meran/
  title: 'E5 Oberstdorf-Meran: 5 Etappen, GPX & Erfahrungen'
  year_hiked: null
  summary: Five-stage version with GPX.
- url: https://gluecksberg.de/bergabenteuer/wandern/alpenueberquerung-e5/
  title: 'Alpenüberquerung E5: Mein Erfahrungsbericht'
  year_hiked: null
  summary: Six-stage crossing.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Similaunh%C3%BCtte_2024a.jpg
  author: Whgler
  license: CC BY 4.0
  shows: E5 hikers climbing from the Niedertal to the Similaunhütte
- file_url: https://commons.wikimedia.org/wiki/File:Kemptner_Huette_2022.jpg
  author: Lutz Lange
  license: CC0
  shows: Kemptner Hütte, first hut on the E5
- file_url: https://commons.wikimedia.org/wiki/File:Memminger_H%C3%BCtte.JPG
  author: Vince51
  license: CC BY-SA 3.0
  shows: Memminger Hütte (Lechtal Alps), an E5 overnight stop
- file_url: https://commons.wikimedia.org/wiki/File:Panorama_Kemptner_H%C3%BCtte.jpg
  author: Whgler
  license: CC BY-SA 4.0
  shows: Panorama from the Kemptner Hütte
sources:
  distance_km: null
  total_ascent_m: null
  typical_days: https://www.bergzeit.de/magazin/alpenueberquerung-oberstdorf-meran-fernwanderweg-e5/
  best_months: https://www.asi-reisen.de/fw/alpenuberquerung-oberstdorf-meran
  open_season: https://www.asi-reisen.de/fw/alpenuberquerung-oberstdorf-meran
  sleeping: https://www.bergwelten.com/t/w/26622
  difficulty: https://www.tirol.at/reisefuehrer/sport/wandern/wandertouren/a-weitwanderweg-e5
  logistics: https://www.bergzeit.de/magazin/alpenueberquerung-oberstdorf-meran-fernwanderweg-e5/
  permit: https://www.tirol.at/reisefuehrer/sport/wandern/wandertouren/a-weitwanderweg-e5
  waymarked: https://www.bergwelten.com/lp/die-alpenueberquerung-von-oberstdorf-nach-meran
  official_status: https://www.era-ewv-ferp.org/?p=1049
conflicts:
- field: distance_km
  values:
  - value: 176.7
    source: https://www.tirol.at/reisefuehrer/sport/wandern/wandertouren/a-weitwanderweg-e5
  - value: ~115
    source: https://www.outdoor-renner.de/blog/e5-alpenueberquerung-alle-etappen-von-oberstdorf-bis-meran.html
  - value: 104
    source: https://www.asi-reisen.de/fw/alpenueberquerung-oberstdorf-meran
- field: total_ascent_m
  values:
  - value: 8659
    source: https://www.tirol.at/reisefuehrer/sport/wandern/wandertouren/a-weitwanderweg-e5
  - value: 7,000+
    source: https://www.outdoor-renner.de/blog/e5-alpenueberquerung-alle-etappen-von-oberstdorf-bis-meran.html
  - value: 4950
    source: https://www.asi-reisen.de/fw/alpenueberquerung-oberstdorf-meran
last_verified: '2026-11-27'
```

### 12. Berliner Höhenweg (Zillertaler Runde)

```yaml
id: berliner-hoehenweg
name: Berliner Höhenweg (Zillertaler Runde)
countries:
- AT
region: Zillertal Alps, Tyrol
one_liner: High, glacier-flanked hut traverse of the Zillertal Alps over the 3,133 m Schönbichler Horn; steep and exposed in places, about a week.
route:
  type: point-to-point
  start: Finkenberg (Gamshütte)
  end: Mayrhofen (Karl-von-Edel-Hütte)
  osm_relation_id: 240736
  gpx_source: null
distance_km: 80.3
total_ascent_m: 7644
typical_days:
  min: 7
  max: 9
when:
  best_months:
  - July
  - September
  open_season: Huts open mid-June to late September; snow lingers on north slopes into July
sleeping:
  type: huts
  booking_ahead: null
  notes: Eight Alpine Club huts; descent to the valley from every hut.
difficulty:
  level: 4
  reason: High-alpine, close to glaciers, steep and exposed; crosses the Schönbichler Horn (3,133 m); several days above 1,200 m ascent.
logistics:
  getting_to_start: Mayrhofen by train/bus from Jenbach (also from Munich, Innsbruck, Salzburg); Finkenberg is next door.
  leaving_from_end: Descend from the Karl-von-Edel-Hütte to Mayrhofen; valley villages are linked by public transport.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.alpenverein.de/files/2303-zillertaler-runde-berliner-hoehenweg-broschuere_ol.pdf
establishment_signals:
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://www.puls-der-freiheit.de/wandern/h%C3%BCttentrekking/berliner-h%C3%B6henweg/
  title: Berliner Höhenweg – Erfahrungsbericht
  year_hiked: null
  summary: Continuous stage-by-stage account of the whole route.
- url: https://www.moonhoneytravel.com/de/europa/oesterreich/berliner-hoehenweg/
  title: Unsere Erfahrungen am Berliner Höhenweg
  year_hiked: null
  summary: Started at the Schlegeis reservoir instead of Finkenberg on the tourist board's advice.
- url: https://neumannmarcel.de/berliner-hoehenweg-in-3-tagen-fastpacking-durch-die-zillertaler-alpen/
  title: 'Berliner Höhenweg in 3 Tagen: Fastpacking'
  year_hiked: null
  summary: Fastpacked in 3 days instead of 7 (90 km, 7,649 m).
- url: https://airfreshing.com/ziel-berliner-hoehenweg-huettentour-zillertal/
  title: 'Ziel: Berliner Höhenweg – 3-tägige Hüttentour'
  year_hiked: null
  summary: Three-day section hike.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Berliner_H%C3%B6henweg_oberhalb_Berliner_H%C3%BCtte.jpg
  author: Whgler
  license: CC BY-SA 3.0
  shows: Trail just above the Berliner Hütte
- file_url: https://commons.wikimedia.org/wiki/File:Berliner_H%C3%B6henweg_Greizer_H%C3%BCtte.jpg
  author: Whgler
  license: CC BY-SA 3.0
  shows: Trail above the Greizer Hütte
- file_url: https://commons.wikimedia.org/wiki/File:Berliner_H_Weg_2006a.jpg
  author: Holger.Ellgaard
  license: Copyrighted free use
  shows: Berliner Höhenweg in September 2006
sources:
  distance_km: https://www.bergwelten.com/t/b/18865
  total_ascent_m: https://www.bergwelten.com/t/b/18865
  typical_days: https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps
  best_months: https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps
  open_season: https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps
  sleeping: https://www.alpenverein.de/files/2303-zillertaler-runde-berliner-hoehenweg-broschuere_ol.pdf
  difficulty: https://www.bergwelten.com/t/b/18865
  logistics: https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps
  permit: https://www.alpenverein.de/files/2303-zillertaler-runde-berliner-hoehenweg-broschuere_ol.pdf
  waymarked: https://www.alpenverein.de/files/broschueren/huettenflyer_berliner-huette_2016_27623.pdf
  guidebook: https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=240736
  high_point: https://www.tyrol.com/activities/sport/hiking/hiking-tours/stage-of-the-berliner-hoehenweg-zillertal-runde-furtschaglhaus-berliner-huette
conflicts:
- field: distance_km
  values:
  - value: 80.3
    source: https://www.bergwelten.com/t/b/18865
  - value: '>70'
    source: https://www.alpenverein.de/files/2303-zillertaler-runde-berliner-hoehenweg-broschuere_ol.pdf
  - value: 71 (tirol.at sidebar listing)
    source: https://www.tirol.at/reisefuehrer/sport/wandern/wandertouren/a-adlerweg-etappe-16-leutasch-ehrwald
  - value: 95.4
    source: https://www.bergwelten.com/a/die-berliner-huette
  - value: 80
    source: https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps
- field: total_ascent_m
  values:
  - value: 7644
    source: https://www.bergwelten.com/t/b/18865
  - value: 6700
    source: https://www.alpenverein.de/files/2303-zillertaler-runde-berliner-hoehenweg-broschuere_ol.pdf
  - value: 5300 (tirol.at sidebar listing)
    source: https://www.tirol.at/reisefuehrer/sport/wandern/wandertouren/a-adlerweg-etappe-16-leutasch-ehrwald
last_verified: '2026-11-27'
```

### 13. Venediger Höhenweg

```yaml
id: venediger-hoehenweg
name: Venediger Höhenweg
countries:
- AT
region: Venediger Group, Hohe Tauern (East Tyrol)
one_liner: Six to eight hut stages under the Großvenediger glaciers from Prägraten to the Gschlösstal; cable-protected descents and late-lying snow on the high cols.
route:
  type: point-to-point
  start: Ströden car park, Prägraten am Großvenediger
  end: Matreier Tauernhaus (Gschlösstal)
  osm_relation_id: null  # No relation found by name on Waymarked Trails.
  gpx_source: null
distance_km: 55.5
total_ascent_m: 3975
typical_days:
  min: 6
  max: 8
when:
  best_months:
  - July
  - August
  - September
  open_season: Huts open mid-June to end of September; Kälberscharte/Galtenscharte section often only passable in high summer
sleeping:
  type: huts
  booking_ahead: null
  notes: Huts incl. Essener-Rostocker, Johannishütte, Neue Sajathütte, Bonn-Matreier, Badener Hütte; luggage transport to the first hut possible.
difficulty:
  level: 3
  reason: Up to 2,900 m; steel-cable-secured rocky descent to the Neue Sajathütte; snow on the high cols until high summer.
logistics:
  getting_to_start: Public transport to Prägraten/Ströden.
  leaving_from_end: Hut taxi or panorama train from Venedigerhaus Innergschlöß to the Matreier Tauernhaus (bus stop).
  nearest_airports:
  - Munich
  - Innsbruck
  - Salzburg
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/venediger-hoehenweg-trail
establishment_signals:
- waymarked
- official_site
- guidebook
- trip_reports
trip_reports:
- url: https://www.moonhoneytravel.com/de/europa/oesterreich/venediger-hoehenweg/
  title: 'Venediger Höhenweg: Unsere Erfahrungen (6-tägige Hüttentour)'
  year_hiked: null
  summary: Six-day hut tour report with stage notes.
- url: https://www.gipfelstuermerin.de/touren/venedigerhoehenweg0805
  title: Sechs Tage auf dem Venediger Höhenweg
  year_hiked: null
  summary: Six days in very wet weather during an Alpine flood period.
- url: https://www.dav-summit-club.de/blog/reiseberichte/der-venediger-hoehenweg
  title: Der Venediger Höhenweg (DAV Summit Club)
  year_hiked: null
  summary: Trip report from a guided group (not independent).
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Venediger_H%C3%B6henweg_2020.jpg
  author: Whgler
  license: CC BY-SA 4.0
  shows: Trail above Prägraten
- file_url: https://commons.wikimedia.org/wiki/File:Venediger_H%C3%B6henweg_Timmeltal.jpg
  author: Whgler
  license: CC BY-SA 4.0
  shows: View over the Timmeltal from the trail
- file_url: https://commons.wikimedia.org/wiki/File:Venediger_H%C3%B6henweg_Eselr%C3%BCcken.jpg
  author: Whgler
  license: CC BY-SA 4.0
  shows: Trail seen from the Eselrücken
- file_url: https://commons.wikimedia.org/wiki/File:Venedigerblick.jpg
  author: FkMohr
  license: CC BY-SA 3.0 de
  shows: Großvenediger from the east slope of the Türmljoch
sources:
  distance_km: https://www.osttirol.com/en/active-outdoor/hiking/detail/venediger-altitude-trail
  total_ascent_m: https://www.osttirol.com/en/active-outdoor/hiking/detail/venediger-altitude-trail
  typical_days: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/venediger-hoehenweg-trail
  best_months: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  open_season: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  sleeping: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/venediger-hoehenweg-trail
  difficulty: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/venediger-hoehenweg-trail
  logistics: https://www.osttirol.com/en/active-outdoor/hiking/detail/venediger-altitude-trail
  nearest_airports: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  permit: https://www.osttirol.com/en/active-outdoor/hiking/long-distance-hiking-trails/venediger-hoehenweg-trail
  waymarked: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  guidebook: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
  high_summer_note: https://osttirol.com/en/matrei/discover-and-experience/summer/hiking/long-distance-hiking-trails/venediger-altitude-trail
conflicts:
- field: total_ascent_m
  values:
  - value: 3975
    source: https://www.osttirol.com/en/active-outdoor/hiking/detail/venediger-altitude-trail
  - value: 3915
    source: https://www.osttirol.com/en/matrei/discover-and-experience/summer/hiking/detail/venediger-altitude-trail/
- field: distance_km
  values:
  - value: 55.5
    source: https://www.osttirol.com/en/active-outdoor/hiking/detail/venediger-altitude-trail
  - value: 68 (Cicerone 'Venediger Group Rucksack Route' – may be a different line)
    source: https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern
last_verified: '2026-11-27'
```

### 14. Welterbesteig Wachau (Wachau World Heritage Trail)

```yaml
id: welterbesteig-wachau
name: Welterbesteig Wachau (Wachau World Heritage Trail)
countries:
- AT
region: Wachau, Lower Austria (Danube valley)
one_liner: A 14-stage loop on both banks of the Danube through UNESCO-listed vineyards, abbeys and castle ruins; low-level, March to November.
route:
  type: loop
  start: Krems an der Donau
  end: Krems an der Donau
  osm_relation_id: 1309244
  gpx_source: null
distance_km: 180
total_ascent_m: null
typical_days:
  min: 14
  max: 14
when:
  best_months:
  - March
  - April
  - May
  - June
  - July
  - August
  - September
  - October
  - November
  open_season: Hiking season March to November
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: Every stage starts/ends in a village or town; luggage transport bookable.
difficulty:
  level: 1
  reason: Low-level vineyard and forest paths, ~10–17 km stages; highest point Jauerling area.
logistics:
  getting_to_start: Krems station; Wachau railway on the north bank and buses on the south bank; three Danube ferries link the banks.
  leaving_from_end: Loop returns to Krems.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.welterbesteig.at
establishment_signals:
- official_status
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://nadinswelt.de/welterbesteig-wachau-unsere-erfahrungen-tipps/
  title: 'Welterbesteig Wachau: Unsere Erfahrungen, Etappen & Tipps'
  year_hiked: null
  summary: Six stages with luggage transport, costs and lodging tips.
- url: https://gepacktundlos.com/welterbesteig-wachau/
  title: 'Wandern am Welterbesteig Wachau: 4 Etappen'
  year_hiked: null
  summary: Four-stage section report.
- url: https://wachauinside.at/welterbesteig-wachau/
  title: Welterbesteig Wachau – Wachau Inside
  year_hiked: 2017
  summary: Local blogger walked it in 2017 and again from 2019.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Welterbesteig_2.jpg
  author: Qualcuno
  license: CC BY-SA 3.0 de
  shows: Trail near Spitz
- file_url: https://commons.wikimedia.org/wiki/File:Welterbesteig_1.jpg
  author: Qualcuno
  license: CC BY-SA 3.0 de
  shows: Trail near Göttweig
- file_url: https://commons.wikimedia.org/wiki/File:Welterbesteig_Markierung.jpg
  author: Qualcuno
  license: CC BY-SA 3.0 de
  shows: Welterbesteig waymark
- file_url: https://commons.wikimedia.org/wiki/File:WeltErbeSteig_Richtung_Emmersdorf,_blick_zur_donaubr%C3%BCcke_und_zum_windpark_inning_-_panoramio.jpg
  author: josef lahmer
  license: CC BY-SA 3.0
  shows: Towards Emmersdorf with the Danube bridge
sources:
  distance_km: https://www.donau.com/en/the-danube-in-lower-austria/information-service/media-b2b/media/wachau-world-heritage-trail
  total_ascent_m: null
  typical_days: https://www.donau.com/en/the-danube-in-lower-austria/information-service/media-b2b/media/wachau-world-heritage-trail
  best_months: https://www.bergwelten.com/a/wanderfruehling-5-tipps-fuer-die-wachau
  open_season: https://www.bergwelten.com/a/wanderfruehling-5-tipps-fuer-die-wachau
  sleeping: https://issuu.com/donaunoe/docs/wachau_hiking_map_2025
  difficulty: https://www.donau.com/en/hiking-stages
  logistics: https://www.donau.com/en/the-danube-in-lower-austria/information-service/media-b2b/media/wachau-world-heritage-trail
  permit: https://www.donau.com/en/the-danube-in-lower-austria/information-service/media-b2b/media/wachau-world-heritage-trail
  waymarked: https://www.bergwelten.com/a/wanderfruehling-5-tipps-fuer-die-wachau
  official_status: https://www.nationalpark.at/en/service/partner/best-trails-of-austria
  route_type: https://fastestknowntime.com/comment/11483
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=1309244
conflicts:
- field: total_ascent_m
  values:
  - value: 770
    source: https://www.ich-geh-wandern.de/welterbesteig-wachau
  - value: 12016
    source: https://www.asi-reisen.de/fw/welterbesteigwachau
last_verified: '2026-11-27'
```

### 15. Donausteig

```yaml
id: donausteig
name: Donausteig
countries:
- DE
- AT
region: Danube valley, Passau – Upper Austria (Mühlviertel, Linz, Strudengau)
one_liner: 'Non-alpine ''Best Trail of Austria'' on both Danube banks from Passau via Linz to Grein: forests, river loops like the Schlögener Schlinge, inns every night.'
route:
  type: point-to-point
  start: Passau (DE)
  end: Grein (AT)
  osm_relation_id: null  # Relation 1560864 'Donausteig Wanderungen' (884 km) bundles stages and loops, not the main line only.
  gpx_source: null
distance_km: 450
total_ascent_m: null
typical_days:
  min: 23
  max: 23
when:
  best_months: []
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: Hotels and inns in riverside villages; packages with luggage transport.
difficulty:
  level: 1
  reason: Non-alpine long-distance trail along river slopes.
logistics:
  getting_to_start: Passau Hauptbahnhof.
  leaving_from_end: Train from Grein back to Passau.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://donauregion.at/en/hiking-at-the-donausteig.html
establishment_signals:
- official_status
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://gepacktundlos.com/donausteig-passau-linz/
  title: Donausteig Passau–Linz – Meine Erfahrung
  year_hiked: null
  summary: South-bank section Passau to Linz.
- url: https://netzwerk-weitwandern.de/berichte/donausteig-haelt-nicht-ganz-was-er-verspricht
  title: Donausteig hält nicht ganz was er verspricht
  year_hiked: 2016
  summary: Club's one-week group walk in 2016; mixed verdict.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Donausteig_Rastplatz.jpg
  author: Pfeifferfranz
  license: CC BY-SA 3.0
  shows: Donausteig rest area near Burg Bad Kreuzen
- file_url: https://commons.wikimedia.org/wiki/File:Rastplatz_-_Panorama_Blaas_Infotafel.jpg
  author: High Contrast
  license: CC BY 3.0 de
  shows: Panorama rest area and info board at Freinberg
- file_url: https://commons.wikimedia.org/wiki/File:Wilhering_Wegweiser_Prinzensteig.jpg
  author: Isiwal
  license: CC BY-SA 3.0
  shows: Signposts in Wilhering where the Donausteig passes
sources:
  distance_km: https://en.wikipedia.org/wiki/Donausteig_(Danube_Trail)
  total_ascent_m: null
  typical_days: https://www.donauregion.at/en/hiking-at-the-donausteig
  best_months: null
  open_season: null
  sleeping: https://www.salzkammergut.at/en/oesterreich-angebot/detail/3356/the-donausteig-trail-route-i-from-passau-to-linz.html
  difficulty: https://en.wikipedia.org/wiki/Donausteig_(Danube_Trail)
  logistics: https://www.wanderdoerfer.at/oberoesterreich/wanderweg/am-suedufer-des-donausteigs-wandern/
  permit: https://donauregion.at/en/hiking-at-the-donausteig.html
  waymarked: https://donauregion.at/en/hiking-at-the-donausteig.html
  official_status: https://donauregion.at/en/hiking.html
conflicts:
- field: distance_km
  values:
  - value: 450 (both banks)
    source: https://www.donauregion.at/en/hiking-at-the-donausteig
  - value: ~280 one line
    source: https://www.ich-geh-wandern.de/donausteig
  - value: '279'
    source: https://mytrails.info/de/trails/199/Donausteig
last_verified: '2026-11-27'
```

### 16. Lechtaler Höhenweg

```yaml
id: lechtaler-hoehenweg
name: Lechtaler Höhenweg
countries:
- AT
region: Lechtal Alps, Tyrol
one_liner: Rugged ridge-hopping hut route along the main crest of the Lechtal Alps at 2,000–2,500 m, with cable-secured cols; part of the Nordalpenweg/E4.
route:
  type: point-to-point
  start: Stuttgarter Hütte (above Zürs)
  end: Hanauer Hütte (above Boden/Bschlabs)
  osm_relation_id: 33863
  gpx_source: null
distance_km: 84.5
total_ascent_m: 6773
typical_days:
  min: 6
  max: 10
when:
  best_months: []
  open_season: null
sleeping:
  type: huts
  booking_ahead: null
  notes: Chain of Alpine Club huts incl. Stuttgarter, Leutkircher, Kaiserjochhaus, Ansbacher, Memminger, Württemberger Haus, Steinsee, Hanauer Hütte.
difficulty:
  level: 3
  reason: '''Difficult'' black stages with steel-cable-secured cols (e.g. Alperschonjoch); high point ~2,650 m; short but rough days.'
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: http://www.lechtaler-hoehenweg.at/
establishment_signals:
- official_status
- official_site
- trip_reports
trip_reports:
- url: https://rucksacktraeger.com/lechtaler-hoehenweg-in-6-tagen-mehrtagestour-lechtaler-alpen/
  title: 'Lechtaler Höhenweg: 6 Tage durch die Lechtaler Alpen'
  year_hiked: null
  summary: Six-day traverse with stage details.
- url: https://www.munichmountaingirls.de/2017/08/22/lechtaler-hoehenweg-wandern-bergsteigen/
  title: 3 Tage Lechtaler Höhenweg
  year_hiked: null
  summary: Three-day section, personal impressions.
- url: https://www.gipfel-glueck.de/lechtaler-hoehenweg-einmal-anders/
  title: Lechtaler Höhenweg – einmal anders
  year_hiked: null
  summary: Walked in persistent rain, adding via ferratas.
- url: https://trekkingtrails.de/lechtaler-hoehenweg/
  title: Lechtaler Höhenweg – 7 Tage in mehr als 2.000 m Höhe
  year_hiked: null
  summary: Simmshütte to Hanauer Hütte as part of a self-built Oberstdorf–Meran alternative.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Memminger_H%C3%BCtte.JPG
  author: Vince51
  license: CC BY-SA 3.0
  shows: Memminger Hütte with the Seeköpfel
- file_url: https://commons.wikimedia.org/wiki/File:Memminger_Huette_vom_Vorderen_Seekopf.jpg
  author: Karl Haarmann
  license: CC BY-SA 3.0
  shows: Memminger Hütte and Vorderer Seewisee from above
- file_url: https://commons.wikimedia.org/wiki/File:Stapfetobel.jpg
  author: Karl Haarmann
  license: CC BY-SA 3.0
  shows: Stapfetobel on the link between Leutkircher and Stuttgarter Hütte
sources:
  distance_km: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
  total_ascent_m: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
  typical_days: https://rucksacktraeger.com/lechtaler-hoehenweg-in-6-tagen-mehrtagestour-lechtaler-alpen/
  best_months: null
  open_season: null
  sleeping: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
  difficulty: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/lechtaler-hoehenweg-etappe-3
  logistics: null
  permit: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
  official_status: https://www.lechtal.at/en/tours/mehrtagestour-lechleiten-nach-hinterhornbach-1.html
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=33863
  typical_days_max: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
conflicts:
- field: distance_km
  values:
  - value: 84.5
    source: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
  - value: ~100 (13 huts, 10 days slogan)
    source: https://www.lechtal.at/en/tours/lechtaler-hoehenweg.html
last_verified: '2026-11-27'
```

### 17. Hohe Tauern Panorama Trail

```yaml
id: hohe-tauern-panorama-trail
name: Hohe Tauern Panorama Trail
countries:
- AT
region: Hohe Tauern National Park holiday region (Pinzgau and Pongau, Salzburg)
one_liner: 17 stages on the sunny side opposite Austria's highest peaks, Krimml Waterfalls to the Großarltal; no cable sections, valley and mountain beds, shuttles and luggage transfer.
route:
  type: point-to-point
  start: Krimml (Krimml Waterfalls)
  end: Hüttschlag (Großarltal)
  osm_relation_id: null  # No relation found by name on Waymarked Trails.
  gpx_source: null
distance_km: 275
total_ascent_m: 13812
typical_days:
  min: 17
  max: 17
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: Nights alternate between valley villages and mountain huts; official booking centre and luggage transfer.
difficulty:
  level: 2
  reason: Rated intermediate; 4–8 h days between 1,500 and 2,400 m with no cable-secured sections; ~800 m ascent per day on average.
logistics:
  getting_to_start: Krimml from Zell am See by Postbus 670/673 or the Pinzgauer Lokalbahn.
  leaving_from_end: Public transport recommended to shorten parts of stages 12, 15 and 16.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.hohetauerntrail.at/de
establishment_signals:
- official_status
- official_site
- trip_reports
trip_reports:
- url: https://passenger-x.de/hohe-tauern-panorama-trail-et8-12/
  title: Unterwegs auf dem Hohe Tauern Panorama Trail
  year_hiked: null
  summary: Walked five of the 17 stages (8–12) with views and lodging tips.
- url: https://www.99erstemale.at/blog/resume-hohe-tauern-panorama-trail
  title: Resumé Hohe Tauern Panorama Trail
  year_hiked: null
  summary: Summary after the trail, compared with the Luchs Trail she coordinated in 2021.
- url: https://homeoftravel.de/hohe-tauern-panorama-trail-lohnt-es-sich/
  title: 'Hohe Tauern Panorama Trail: Die schönste Etappe (5)'
  year_hiked: null
  summary: Report on stage 5.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Krimmler_wasserfaelle_20040823.jpg
  author: Manuel Heinrich Emha
  license: CC BY-SA 2.5
  shows: Krimml Waterfalls at the start of stage 1
- file_url: https://commons.wikimedia.org/wiki/File:1444_-_Nationalpark_Hohe_Tauern_-_Krimmler_Wasserf%C3%A4lle.JPG
  author: Andrew Bossi
  license: CC BY-SA 2.5
  shows: Krimml Waterfalls, Hohe Tauern National Park
sources:
  distance_km: https://www.nationalpark.at/pdf/Drucksorten/HoheTauernPanoramaTrail_Folder.pdf
  total_ascent_m: https://www.zellamsee-kaprun.com/en/tour/hohe-tauern-panorama-trail-entire-trail~10398
  typical_days: https://www.nationalpark.at/pdf/Drucksorten/HoheTauernPanoramaTrail_Folder.pdf
  best_months: null
  open_season: null
  sleeping: https://aviation.direct/hohe-tauern-275-kilometer-wanderung-in-17-etappen
  difficulty: https://www.zellamsee-kaprun.com/en/tour/hohe-tauern-panorama-trail-entire-trail~10398
  logistics: https://www.komoot.com/de-de/collection/2010543/hohe-tauern-panorama-trail-vis-a-vis-mit-dreitausendern
  permit: https://www.nationalpark.at/en/panorama-trail/
  official_status: https://www.nationalpark.at/en/service/partner/best-trails-of-austria
  end_point: https://www.nationalpark.at/en/panorama-trail/
conflicts:
- field: distance_km
  values:
  - value: 275
    source: https://www.nationalpark.at/pdf/Drucksorten/HoheTauernPanoramaTrail_Folder.pdf
  - value: 269.81
    source: https://www.zellamsee-kaprun.com/en/tour/hohe-tauern-panorama-trail-entire-trail~10398
- field: best_months
  values:
  - value: June – end of September (komoot collection by COUCHFLUCHT, not official)
    source: https://www.komoot.com/de-de/collection/2010543/hohe-tauern-panorama-trail-vis-a-vis-mit-dreitausendern
  - value: not stated on official pages checked
    source: https://www.nationalpark.at/en/panorama-trail/
last_verified: '2026-11-27'
```

### 18. Schladminger Tauern Höhenweg

```yaml
id: schladminger-tauern-hoehenweg
name: Schladminger Tauern Höhenweg
countries:
- AT
region: Schladminger Tauern, Niedere Tauern (Styria)
one_liner: Classic five- or seven-day hut route among hundreds of mountain lakes south of the Dachstein, through the Klafferkessel; part of the Zentralalpenweg 02.
route:
  type: point-to-point
  start: Hochwurzen (Gipfelbahn top station)
  end: Seewigtal (5-day) or St. Nikolai im Sölktal (7-day)
  osm_relation_id: null  # No relation found by name on Waymarked Trails.
  gpx_source: https://tirol.mapservices.eu/nefos_app/api/gpx/el_oD9BiM7lvDWLMtVl/de/generate/121381092
distance_km: 45
total_ascent_m: 4115
typical_days:
  min: 5
  max: 7
when:
  best_months: []
  open_season: null
sleeping:
  type: huts
  booking_ahead: required
  notes: Huts often booked out months ahead; each hut is booked separately.
difficulty:
  level: 3
  reason: Alpine experience needed on all stages (fitness 6/6, technique 5/6); high point Greifenberg 2,618 m; cable-protected variant 702A.
logistics:
  getting_to_start: Hiking bus to the Hochwurzen Gipfelbahn, then lift up.
  leaving_from_end: Seewigtal (Bodensee car park) or St. Nikolai im Sölktal.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
establishment_signals:
- official_status
- official_site
- trip_reports
trip_reports:
- url: https://imprintmytravel.com/schladminger-tauern-hoehenweg/
  title: Wandern am Schladminger Tauern Höhenweg
  year_hiked: null
  summary: Five-day hike with recommendations.
- url: https://www.bergeaktiv.de/schladminger-tauern-hohenweg-huettentour/
  title: 'Schladminger Tauern Höhenweg: 5 Tage Hüttentour mit Bergseen'
  year_hiked: null
  summary: Five days, 'a thousand lakes'.
- url: https://www.dav-koblenz.de/artikel/Sechs-Tage-auf-dem-Schladminger-Tauern-Hohenweg-/155917
  title: Sechs Tage auf dem Schladminger Tauern Höhenweg
  year_hiked: null
  summary: DAV Koblenz section's six-day tour.
- url: https://www.outdoor-magazin.com/wanderwege/steiermark-5-tage-auf-dem-schladminger-tauern-hoehenweg/
  title: 'Weitwandern: 5 Tage auf dem Schladminger Tauern Höhenweg'
  year_hiked: null
  summary: Magazine team walked the five-day version.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Klafferkessel-2.JPG
  author: Gergi084
  license: CC BY-SA 3.0
  shows: Klafferkessel lake basin (~2,300 m)
- file_url: https://commons.wikimedia.org/wiki/File:Klafferkessel_with_Greifenberg.jpg
  author: Herzi Pinki
  license: CC BY 2.5
  shows: Klafferkessel with the Greifenberg (2,618 m), the route's high point
- file_url: https://commons.wikimedia.org/wiki/File:Giglach-H%C3%B6henweg_am_6.10.2023.jpg
  author: Michael Burgholzer
  license: CC BY-SA 4.0
  shows: Giglach high path (stage 1 area), October 2023
- file_url: https://commons.wikimedia.org/wiki/File:Greifenberg_von_Osten.jpg
  author: Jörg Braukmann
  license: CC BY-SA 4.0
  shows: Greifenberg from the Klafferkessel
sources:
  distance_km: https://www.schladming-dachstein.at/de/aktivitaeten/touren/Schladminger-Tauern-H-C3-B6henweg-7C-5-Tages-Tour_tour_7483.md
  total_ascent_m: https://www.schladming-dachstein.at/de/aktivitaeten/touren/Schladminger-Tauern-H-C3-B6henweg-7C-5-Tages-Tour_tour_7483.md
  typical_days: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
  best_months: null
  open_season: null
  sleeping: https://www.bergwelten.com/a/der-schladminger-tauern-hoehenweg
  difficulty: https://www.schladming-dachstein.at/de/aktivitaeten/touren/Schladminger-Tauern-H-C3-B6henweg-7C-5-Tages-Tour_tour_7483.md
  logistics: https://www.steiermark.com/de/Steiermark/Aktiv-in-der-Natur/Wandern/Wandertouren/Wandertouren-Oeffis/Keinprechthuette-Gollinghuette-Schladminger-Tauern-Hoehenweg-Etappe-03_tour_324883
  permit: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
  official_status: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
  gpx_source: https://www.schladming-dachstein.at/de/aktivitaeten/touren/Schladminger-Tauern-H-C3-B6henweg-7C-5-Tages-Tour_tour_7483.md
  high_point: https://www.wanderdoerfer.at/steiermark/wanderweg/schladminger-tauern-hoehenweg-5-tages-tour/
conflicts:
- field: distance_km
  values:
  - value: 45 (5-day)
    source: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
  - value: 75 (7-day)
    source: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
  - value: 80 (7-day)
    source: https://www.schladming-dachstein.at/de/Sommer/Wandern-und-Bergsport/Weitwanderwege/Schladminger-Tauern-Hoehenweg
  - value: 70 (7-day)
    source: https://www.wanderdoerfer.at/steiermark/wanderweg/schladminger-tauern-hoehenweg-5-tages-tour/
last_verified: '2026-11-27'
```

### 19. Via Alpina (main route)

```yaml
id: via-alpina
name: Via Alpina (main route)
countries:
- IT
- SI
- AT
- DE
- LI
- CH
- FR
- MC
region: 'Entire Alpine arc, Trieste to Monaco (Austria: Karawanken/Carnic Alps, Tyrol, Vorarlberg)'
one_liner: The longest trail across all eight Alpine countries, rebuilt in 2024 as one 116-stage main route; months-long, Austria is a large middle chunk.
route:
  type: point-to-point
  start: Trieste/Muggia (IT)
  end: Monaco
  osm_relation_id: 20014200  # New main-route superroute 'Via Alpina' with 116 sub-routes (1,912 km mapped).
  gpx_source: null
distance_km: 2000
total_ascent_m: null
typical_days:
  min: 116
  max: 116
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: null
difficulty:
  level: 3
  reason: Varies by stage; rises up to ~3,000 m.
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit. The former coloured routes (purple, yellow, green, blue) are no longer maintained as of 2024.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: null
links:
  official_site: https://www.via-alpina.org/
establishment_signals:
- official_status
- official_site
- trip_reports
trip_reports:
- url: https://www.outdooractive.com/en/route/mountain-hike/via-alpina-red-trail-austria/25087077/
  title: Via Alpina Red Trail | AUSTRIA
  year_hiked: null
  summary: Austrian Red Trail section walked as part of a hike from Amsterdam to Sarajevo.
- url: https://petervangeit.substack.com/p/via-alpina-2026
  title: Via Alpina 2026
  year_hiked: 2026
  summary: Personal account of the Via Alpina in 2026.
- url: https://leckomio-outdoor.de/huttentour-karnische-hohenweg/
  title: 'Der Karnische Höhenweg: 10 Tage im Nirgendwo'
  year_hiked: null
  summary: Mentions walking part of the Via Alpina in 2021 (Carnic section).
photos:
- file_url: https://commons.wikimedia.org/wiki/File:SegnaviaRossoVia_Alpina.jpg
  author: Vid395
  license: CC BY-SA 4.0
  shows: Via Alpina red-route waymark
- file_url: https://commons.wikimedia.org/wiki/File:Via_Alpina_crosses_the_Alps_to_Trieste,_trails_connecting_to_Monaco,_Slovenia,_Austria,_Germany,_Liechtenstein,_Switzerland_and_France.jpg
  author: Naturpuur
  license: CC BY-SA 4.0
  shows: Via Alpina sign
sources:
  distance_km: https://www.via-alpina.org/via-alpina/
  total_ascent_m: null
  typical_days: https://www.via-alpina.org/via-alpina/
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://www.via-alpina.org/via-alpina/
  logistics: null
  permit: https://www.via-alpina.org/faq/
  waymarked: https://www.via-alpina.org/faq/
  official_status: https://www.cipra.org/en/cipra/about-cipra/networks/via-alpina
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=20014200
conflicts:
- field: distance_km
  values:
  - value: ~2,000 (2024 main route, 116 stages)
    source: https://www.via-alpina.org/via-alpina/
  - value: ~2,600 (old Red Trail, 161 stages)
    source: https://www.via-alpina.org/author/laura-haberfellner/
last_verified: '2026-11-27'
```

### 20. Salzburger Almenweg

```yaml
id: salzburger-almenweg
name: Salzburger Almenweg
countries:
- AT
region: Pongau, Salzburg
one_liner: Gentle alm-to-alm circuit linking all 25 Pongau villages past 120+ working mountain pastures, marked by a blue gentian; easy to split into sections.
route:
  type: loop
  start: Werfen (stage 1; can start anywhere)
  end: Werfen
  osm_relation_id: 167878
  gpx_source: null
distance_km: 350
total_ascent_m: null
typical_days:
  min: 25
  max: 31
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: Alm huts and valley lodgings; cable cars can shorten some stages.
difficulty:
  level: 2
  reason: Mostly easy/moderate; >90 % above 1,000 m; longest stage ~21 km / 9 h.
logistics:
  getting_to_start: Every stage has access paths from a valley village.
  leaving_from_end: Loop; leave at any valley village.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.salzburger-almenweg.at/
establishment_signals:
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://www.doghammer.de/magazin/wanderroute-planen-salzburger-almenweg-in-11-tagen/
  title: Der Salzburger Almenweg in 11 Tagen
  year_hiked: null
  summary: Linda walked ~150 km in 11 days.
- url: https://www.bergeaktiv.de/salzburger-almenweg-gastein-grossarltal/
  title: '6 Tage auf dem Salzburger Almenweg: von Gastein ins Großarltal'
  year_hiked: null
  summary: Six-day section, Gastein to Großarltal.
- url: https://weltreiseforum.com/blog/salzburger-almenweg/
  title: 'Salzburger Almenweg: Das solltest du wissen'
  year_hiked: null
  summary: Personal take on why it is one of Europe's finest long trails.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Salzburger_Almenweg_Angertal_01.jpg
  author: Funke
  license: CC BY-SA 4.0
  shows: Trail in the Angertal, Bad Hofgastein
- file_url: https://commons.wikimedia.org/wiki/File:Salzburger_Almenweg_Angertal_02.jpg
  author: Funke
  license: CC BY-SA 4.0
  shows: Trail in the Angertal, Bad Hofgastein
- file_url: https://commons.wikimedia.org/wiki/File:Salzburger_Almenweg_Angertal_03.jpg
  author: Funke
  license: CC BY-SA 4.0
  shows: Trail in the Angertal, Bad Hofgastein
sources:
  distance_km: https://www.salzburgerland.com/en/?p=79341
  total_ascent_m: null
  typical_days: https://www.salzburgerland.com/de/salzburger-almenweg/
  best_months: null
  open_season: null
  sleeping: https://www.salzburgerland.com/de/salzburger-almenweg-3/
  difficulty: https://www.salzburgerland.com/da/vandreture-pa-sommerens-alpesaetere/
  logistics: https://www.salzburgerland.com/de/salzburger-almenweg-3/
  permit: https://www.salzburgerland.com/en/?p=79341
  waymarked: https://www.salzburgerland.com/en/?p=79341
  route_type: https://www.bergwelten.com/a/der-salzburger-almenweg
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=167878
conflicts:
- field: typical_days
  values:
  - value: 31 stages
    source: https://www.salzburgerland.com/en/?p=79341
  - value: 25 stages (current, restructured)
    source: https://www.salzburgerland.com/de/salzburger-almenweg/
last_verified: '2026-11-27'
```

### 21. KAT Walk Alpin (Kitzbüheler Alpen Trail)

```yaml
id: kat-walk-alpin
name: KAT Walk Alpin (Kitzbüheler Alpen Trail)
countries:
- AT
region: Kitzbühel Alps, Tyrol
one_liner: Six days over the soft grassy Kitzbühel Alps from Hopfgarten via Kitzbühel and the Kitzbüheler Horn to St. Ulrich am Pillersee; inn-to-inn, bookable without luggage.
route:
  type: point-to-point
  start: Hopfgarten im Brixental
  end: St. Ulrich am Pillersee
  osm_relation_id: null  # Relation 17096780 'KAT Walk' (87 km) links to the Kompakt variant, so not used for Alpin.
  gpx_source: null
distance_km: 113
total_ascent_m: 6300
typical_days:
  min: 6
  max: 6
when:
  best_months: []
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: Valley accommodation, packages with luggage transport.
difficulty:
  level: 2
  reason: Red (intermediate) mountain paths, ~1,000 m per day; no climbing, one short rope-secured passage on the Kitzbüheler Horn.
logistics:
  getting_to_start: Hopfgarten im Brixental Berglift station, 5 min walk to start; guest card gives free local transport.
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: 'yes'
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://www.kitzbueheler-alpen.com/de/kat-walk/alpin/ueberblick.html
establishment_signals:
- waymarked
- official_site
- trip_reports
trip_reports:
- url: https://www.couchflucht.de/kat-walk-alpin-kitzbueheler-alpen/
  title: KAT Walk Alpin – Mehrtagestour inmitten der Grasberge
  year_hiked: null
  summary: Three days on the Alpin variant.
- url: https://outside-stories.de/unterwegs/kat-walk-kitzb%C3%BCheler-alpen-wandern
  title: 6 exklusive Etappen auf dem KAT Walk
  year_hiked: null
  summary: All six stages (106 km).
- url: https://www.trail-pfoten.de/kat-walk-kitzbuheler-alpen/
  title: KAT Walk Alpin – Wandern durch die Kitzbüheler Alpen
  year_hiked: null
  summary: Hiked with a dog.
- url: https://www.diekuechebrennt.de/urlaubsbericht-kat-walk-weitwandern-durch-die-kitzbueheler-alpen/
  title: Urlaubsbericht KAT Walk
  year_hiked: null
  summary: Holiday report after three summers in the region.
photos: []
sources:
  distance_km: https://www.kitzbueheler-alpen.com/de/kat-walk/kat-walk-uebersicht.html
  total_ascent_m: https://www.kitzbueheler-alpen.com/de/kat-walk/kat-walk-uebersicht.html
  typical_days: https://www.kitzbueheler-alpen.com/de/kat-walk/kat-walk-uebersicht.html
  best_months: null
  open_season: null
  sleeping: https://www.kitzbueheler-alpen.com/de/kat-walk/weitwandern.html
  difficulty: https://kitzbueheler-alpen.com/en/kat-walk/variations.html
  logistics: https://www.kitzbuehel.com/en/tours/pdf/kat-walk-alpine
  permit: https://kitzbueheler-alpen.com/en/kat-walk/variations.html
  waymarked: https://asi-reisen.de/fw/kat-walk
conflicts:
- field: distance_km
  values:
  - value: 113
    source: https://www.kitzbueheler-alpen.com/de/kat-walk/kat-walk-uebersicht.html
  - value: 106
    source: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/kat-walk-alpin-1
- field: total_ascent_m
  values:
  - value: 6300
    source: https://www.kitzbueheler-alpen.com/de/kat-walk/kat-walk-uebersicht.html
  - value: 6350
    source: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/kat-walk-alpin-1
last_verified: '2026-11-27'
```

### 22. Karwendel Höhenweg

```yaml
id: karwendel-hoehenweg
name: Karwendel Höhenweg
countries:
- AT
region: Karwendel Nature Park, Tyrol
one_liner: Six demanding stages through the limestone Karwendel between Reith bei Seefeld and Scharnitz, five huts, rail-served at both ends.
route:
  type: point-to-point
  start: Reith bei Seefeld station
  end: Scharnitz (Nature Park info centre)
  osm_relation_id: null  # No relation found by name on Waymarked Trails.
  gpx_source: null
distance_km: 70
total_ascent_m: 4470
typical_days:
  min: 6
  max: 6
when:
  best_months:
  - July
  - August
  - September
  open_season: null
sleeping:
  type: huts
  booking_ahead: null
  notes: Five Alpine Club huts (e.g. Nördlinger Hütte, Solsteinhaus, Pfeishütte, Bettelwurfhütte, Hallerangerhaus); descent from every hut.
difficulty:
  level: 3
  reason: Fitness and technique 6/6 on tirol.at; long, difficult stages; not for alpine beginners; high point 2,699 m.
logistics:
  getting_to_start: Reith bei Seefeld is on the Karwendel railway (bus and train).
  leaving_from_end: Scharnitz station (bus and train).
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: true
links:
  official_site: https://karwendel-hoehenweg.at/
establishment_signals:
- official_site
- trip_reports
trip_reports:
- url: https://www.moonhoneytravel.com/de/europa/oesterreich/karwendel-hoehenweg/
  title: 'Karwendel Höhenweg: Unsere 6-tägige Hüttenwanderung'
  year_hiked: null
  summary: Six days, Scharnitz to Reith direction.
- url: https://mountainbalance.de/karwendelhoehenweg/
  title: Tourenbericht Karwendelhöhenweg – Wandern mit Hund
  year_hiked: null
  summary: Solo with a dog; notes on dog-friendly huts.
- url: https://www.ultraleicht-trekking.com/forum/topic/10917-karwendel-h%C3%B6henweg/
  title: Karwendel-Höhenweg – Reiseberichte (forum)
  year_hiked: null
  summary: Forum member combined stages and did it in 4 days.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Hallerangerhaus_Karwendel_(1).jpg
  author: Lehtho
  license: CC BY-SA 4.0
  shows: Hallerangerhaus, a hut on the route
- file_url: https://commons.wikimedia.org/wiki/File:Pfeish%C3%BCtte_2016-07.jpg
  author: HerrAdams
  license: CC BY-SA 4.0
  shows: Pfeishütte, a hut on the route
- file_url: https://commons.wikimedia.org/wiki/File:Hallerangerhaus.jpg
  author: Klaus Kettner
  license: CC BY-SA 3.0
  shows: Hallerangerhaus in the Karwendel
sources:
  distance_km: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg
  total_ascent_m: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg
  typical_days: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg
  best_months: https://www.seefeld.com/en/a-karwendel-hoehenweg
  open_season: null
  sleeping: https://magazin.alpenverein.de/files/broschueren/2103-karwendel-hoehenweg-broschuere_ol_30979.pdf
  difficulty: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg
  logistics: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg-etappe-1
  permit: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg
  huts_names: https://www.seefeld.com/en/karwendel-high-trail.html
conflicts:
- field: total_ascent_m
  values:
  - value: 4470
    source: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/karwendel-hoehenweg
  - value: 7,000 (60 km)
    source: https://www.moonhoneytravel.com/de/europa/oesterreich/karwendel-hoehenweg/
last_verified: '2026-11-27'
```

### 23. Koasa Trail

```yaml
id: koasa-trail
name: Koasa Trail
countries:
- AT
region: Wilder Kaiser / Region St. Johann in Tirol
one_liner: Five days circling the Wilder Kaiser ('Koasa') from St. Johann in Tirol, a new view of the massif each day; moderate, inns and alms, luggage transfer.
route:
  type: loop
  start: St. Johann in Tirol
  end: St. Johann in Tirol area (Oberndorf)
  osm_relation_id: null  # Only a stage-3 relation (11718451) found.
  gpx_source: null
distance_km: 83
total_ascent_m: 4700
typical_days:
  min: 5
  max: 6
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: Valley lodging plus alms (e.g. Fischbachalm); 6-night packages and optional luggage transfer.
difficulty:
  level: 2
  reason: Medium; stage 1 rated fitness 3/6, technique 2/6; about 900–1,100 m ascent per day, high point ~1,600 m.
logistics:
  getting_to_start: St. Johann in Tirol (Infobüro); Okto hiking bus in the region.
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
establishment_signals:
- official_site
- trip_reports
trip_reports:
- url: https://ausgelatschte-schuhe.de/koasa-trail-wandern/
  title: 'Koasa Trail wandern: 5 Etappen um den Wilden Kaiser'
  year_hiked: null
  summary: 86 km in 5 stages with GPX, lodging and luggage transfer notes.
- url: https://www.trekkinglife.de/koasa-trail/
  title: Koasa Trail – Wandern am Wilden Kaiser
  year_hiked: null
  summary: Stage-by-stage report.
- url: https://www.couchflucht.de/koasa-trail-wandern-am-wilden-kaiser/
  title: Koasa Trail – Wandern am Wilden Kaiser
  year_hiked: null
  summary: Author's first long-distance hike.
- url: https://barbaralicious.com/der-koasa-trail/
  title: Der Koasa Trail – Wandern in Tirol
  year_hiked: null
  summary: Walked in June on the tourist board's invitation.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:StripsenjochhausJPG.jpg
  author: Stefan.straub
  license: CC BY-SA 4.0
  shows: Stripsenjochhaus, passed on stage 2
- file_url: https://commons.wikimedia.org/wiki/File:Austria_2015-07-23_(20783108439).jpg
  author: Guillaume Baviere
  license: CC BY-SA 2.0
  shows: Griesenau, at the Stripsenjochhaus
sources:
  distance_km: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
  total_ascent_m: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
  typical_days: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
  best_months: null
  open_season: null
  sleeping: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
  difficulty: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/koasa-trail-etappe-1
  logistics: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/koasa-trail-etappe-1
  permit: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
  stage2_huts: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/koasa-trail-etappe-2
conflicts:
- field: typical_days
  values:
  - value: 5 days
    source: https://www.kitzbueheler-alpen.com/de/stjo/so/wandern/koasa-trail.html
  - value: 6 Tage (tour-info field)
    source: https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/koasa-trail
last_verified: '2026-11-27'
```

### 24. Arnoweg

```yaml
id: arnoweg
name: Arnoweg
countries:
- AT
region: Whole province of Salzburg (Flachgau, Pinzgau, Pongau, Lungau, Tennengau)
one_liner: A 1,200 km, 63-stage pilgrimage-style circuit of Salzburg province from the Hohensalzburg fortress, from lakeland lowlands to the 3,106 m Sonnblick.
route:
  type: loop
  start: Festung Hohensalzburg, Salzburg
  end: Festung Hohensalzburg, Salzburg
  osm_relation_id: 301659  # Mapped ~838 km in OSM, i.e. incomplete.
  gpx_source: null
distance_km: 1200
total_ascent_m: null
typical_days:
  min: 63
  max: 63
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: null
difficulty:
  level: 4
  reason: Includes high-alpine terrain up to the Sonnblick (3,106 m) in the 'Keesberge' section; long remote stretches.
logistics:
  getting_to_start: Salzburg city; further official entry points at Hallein, Werfen, Rauris (Bodenhaus) and Mauterndorf.
  leaving_from_end: Loop back to Salzburg.
  nearest_airports: []
flags:
  permit: none
  permit_notes: No permit.
  waymarked: null
  water_scarce: false
  exposed_or_via_ferrata: null
links:
  official_site: https://www.arnoweg.com/
establishment_signals:
- official_site
- trip_reports
trip_reports:
- url: https://www.meinarnoweg.at/
  title: Mein Arnoweg – Salzburger Weitwanderweg Blog
  year_hiked: null
  summary: Fabian Bergner's stage-by-stage blog of the whole route, begun in 2021.
- url: https://www.vergissmi.net/?p=14901
  title: Arnoweg – Drei Tage durch die Lungauer Nockberge
  year_hiked: null
  summary: Section through the Lungau Nockberge; author began the Arnoweg in summer 2021.
- url: https://smekiwandert.wordpress.com/2017/10/08/arnoweg-tage-8-bis-10-hirschbichlpechtl-leogang/
  title: 'Arnoweg Tage 8 bis 10: Hirschbichl/Pechtl – Leogang'
  year_hiked: null
  summary: Days 8–10 of a section hike.
photos:
- file_url: https://commons.wikimedia.org/wiki/File:Arnoweg_Wegschild.jpg
  author: Fabian Bergner
  license: CC BY-SA 4.0
  shows: Arnoweg signpost on stage 8 from the Hirschbichl
sources:
  distance_km: https://www.salzburgerland.com/en/?p=79454
  total_ascent_m: null
  typical_days: https://www.salzburgerland.com/en/?p=79454
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://en.abtenau-info.at/Betrieb/Arnoweg/
  logistics: https://www.salzburgerland.com/en/?p=79454
  permit: https://www.salzburgerland.com/en/?p=79454
  route_type: https://austria-forum.org/af/AustriaWiki/Arnoweg
  osm_relation_id: https://hiking.waymarkedtrails.org/#route?id=301659
conflicts:
- field: total_ascent_m
  values:
  - value: ~80,000
    source: https://www.gps-tour.info/92062
  - value: 57,000+
    source: https://en.wikipedia-on-ipfs.org/wiki/Arno_Trail
last_verified: '2026-11-27'
```

---

## 2. Excluded candidates

| Candidate | Rule failed | Why / source |
|-----------|-------------|--------------|
| 2-Tages Höhentour ums Kaisertal (Kaisergebirge) | Rule 1: 2 days | Named as a 2-day tour, 25.9 km – tirol.at Adlerweg page sidebar https://www.tirol.at/blog/b-sport/zu-fuss-vom-kaisergebirge-zum-arlberg-fabians-weitwander-abenteuer-am-tiroler-adlerweg |
| Via Alpina Purple (Violet) and Yellow trails | Rule 2: no longer a maintained defined route | Since 2024 the Via Alpina is one main route; old coloured routes' maintenance and waymarking are not guaranteed – https://www.via-alpina.org/faq/ |
| Stubai Glacier Tour (Cicerone) | Rule 3 (borderline): glacier crossings need specialist skills/equipment | No guide is mandatory, but the route is not a walk-up trek – https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps. Listed for a human call. |
| Venediger Glacier Tour (Cicerone) | Rule 3 (borderline): glacier travel | Same logic – https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern |

Not listed as separate treks (de-duplicated, not rule failures):

- **E4 / E4 alpine, E6, E8, E10 (Austrian sections)**: ERA says they mostly follow the Austrian Weitwanderwege 01–10 (https://www.era-ewv-ferp.org/?p=1049); e.g. E10 = Rupertiweg 10 in Austria and the Nassfeld–Sillian part of the Südalpenweg; E8 runs Oberkappel–Wolfsthal (OSM wiki https://wiki.openstreetmap.org/wiki/WikiProject_Austria/Wanderwege). Add them only as aliases of those entries.
- **E5 as a whole (Pointe du Raz – Verona)**: kept only as the named Oberstdorf–Meran crossing.

## 3. Qualifying treks not yet filled (next batch)

These look like they pass all three rules on the evidence seen, but were outside the agreed top-25 scope. Each still needs a full check.

| Trek | What I saw | Source |
|------|-----------|--------|
| Voralpenweg 04 | National trail, Vienna (Kahlenberg) – Salzburg | https://www.alpenverein.at/weitwanderer/weitwanderwege/voralpenweg.php |
| Nord-Süd-Weitwanderweg 05 | 500 km, Nebelstein – Eibiswald | https://www.alpenverein.at/weitwanderer/weitwanderwege/nord-sued-weitwanderweg.php |
| Pilgerwege nach Mariazell 06 (incl. Via Sacra) | ~1,400 km network to Mariazell | https://www.alpenverein.at/weitwanderer/weitwanderwege/pilgerwege-mariazell.php |
| Ostösterreichischer Grenzlandweg 07 | 700 km to Bad Radkersburg | https://www.alpenverein.at/weitwanderer/weitwanderwege/ostoesterreichischer-grenzlandweg.php |
| Eisenwurzenweg 08 | 580 km, Waldviertel – Karawanken | https://www.alpenverein.at/weitwanderer/weitwanderwege/eisenwurzenweg.php |
| Salzsteigweg 09 | 430 km, Mühlviertel – Arnoldstein | https://www.alpenverein.at/weitwanderer/weitwanderwege/salzsteigweg.php |
| Rupertiweg 10 (= E10) | 560 km, Bohemian Forest – Nassfeld | https://www.alpenverein.at/weitwanderer/weitwanderwege/rupertiweg.php |
| alpannonia | Best Trails of Austria member (Burgenland) | https://www.nationalpark.at/en/service/partner/best-trails-of-austria |
| Lasörling Höhenweg | Multi-stage hut route, East Tyrol | https://www.tirol.at/aktivitaeten/sport/wandern/venediger-hoehenweg-etappe-5-bonn-matreier-huette-badener-huette |
| Paznauner Höhenweg | 138.6 km, 10,316 m (tirol.at listing) | https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg/adlerweg-etappen-karwendel |
| Arlberg Trail | Tirol long-distance trail (tirol.at listing) | https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/koasa-trail |
| Iseltrail | 75.3 km, 2,347 m (tirol.at listing) | https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg/adlerweg-etappen-karwendel |
| Hoch und Heilig – Pilgerweg | 191.6 km, 10,475 m (tirol.at listing) | https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/adlerweg-gesamtverlauf |
| Sellrainer Hüttenrunde | 84.3 km, 5,085 m (tirol.at listing) | https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/a-adlerweg-etappe-09-lamsenjochhuette-falkenhuette |
| Kaiserblüte | 80.6 km, 6 days, star-shaped tour around Söll | https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/kaiserbluete-gesamtverlauf |
| Kaiserkrone | 57.7 km, 4,000 m (tirol.at listing) | https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg/adlerblicke |
| 3-Tages-Tour Wilder Kaiser Durchquerung | 52.1 km, 4,730 m, 3 days | https://www.tirol.at/reisefuehrer/sport/wandern/adlerweg |
| Gschnitztaler Hüttenstern / Gschnitztal Rundtour | ~67–82 km hut circuit | https://www.cicerone.co.uk/products/trekking-in-austrias-stubai-alps |
| Peter Habeler Runde | 7 days, 54 km (Tux) | https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps |
| Olperer Runde; Zillertal South Tirol Tour | 6 and 7 days | https://www.cicerone.co.uk/products/trekking-in-austrias-zillertal-alps |
| Reichen Group Rucksack Route | 61 km hut route (Hohe Tauern) | https://www.cicerone.co.uk/products/trekking-in-austrias-hohe-tauern |
| Glocknerkrone | 64 km, 5 stages, Matrei – Kals | https://www.osttirol.com/aktiv-outdoor/wandern/detail/glocknerkrone/pdf |
| KAT Walk Kompakt | 5 stages, 83 km | https://www.kitzbueheler-alpen.com/de/kat-walk/kat-walk-uebersicht.html |
| Salzburger Mariazellerweg | 293 km, 12–14 stages | https://www.salzburgerland.com/en/pilgrimages-in-salzburgerland |
| Weg des Buches | 500 km, 29 stages, to Agoritschach | https://www.salzburgerland.com/en/pilgrimages-in-salzburgerland |
| Alpina Antica Trail | New 2026: Kössen – Mittersill/Kaprun, 30+ stages | https://b2b.austria.info/ro/media/newsroom/hiking-news-austria/ |
| Seven Elements trail (Gesäuse) | Opened autumn 2025 | https://b2b.austria.info/ro/media/newsroom/hiking-news-austria/ |
| Silvretta and Rätikon hut treks | Cicerone guide | https://www.cicerone.co.uk/products/trekking-in-the-silvretta-and-ratikon-alps |
| Niederösterreichischer Landesrundwanderweg, Weinviertelweg 632, Traisentaler/Tullnerfelder Rundwanderweg | ÖAV regional long trails | https://www.alpenverein.at/weitwanderer/weitwanderwege/index.php?navid=159071997350 |

## 4. Open questions for a human check

General:

- **Seasons**: many official pages list 'best season' as all 12 months (a template default), so I left `best_months` empty rather than copy it. Hut opening dates per trek need checking on each hut's page (typically mid/late June to mid/late September).
- **Booking**: `booking_ahead` is filled only where a source says so (Stubai, E5, Schladminger Tauern). For other hut treks 'recommended' is very likely, but unsourced.
- **Airports**: filled only where a source names the access cities (Alpe-Adria-Trail; Zillertal and Hohe Tauern from the Cicerone pages, which say 'Munich, Innsbruck, Salzburg' without saying 'airport').
- **GPX**: only one direct full-route GPX URL (Schladminger 5-day). Most tirol.at/osttirol.com tour pages offer GPX downloads; worth adding by hand, or derive from OSM.
- **Photos**: KAT Walk Alpin has none (no Commons category or clearly on-route files found); Südalpenweg, Arnoweg, Hohe Tauern Panorama Trail, Koasa Trail, Nordalpenweg and Via Alpina have fewer than 3.
- **Trip reports**: Südalpenweg, Donausteig and Venediger (one is a guided DAV Summit Club trip) have fewer than 3 independent reports.

Per trek (null fields among the main ones, and conflicts):

- **Adlerweg (Eagle Walk)** – empty: best_months, open_season, booking_ahead, leaving_from_end; conflicts: distance_km, total_ascent_m, typical_days; OSM note: OSM superroute 'Adlerweg' (operator Tirol) maps ~339 km in 27 sub-routes, i.e. probably North Tyrol only; East Tyrol stages not confirmed in it.
- **Stubaier Höhenweg (Stubai High Trail)** – conflicts: distance_km, total_ascent_m, typical_days
- **Karnischer Höhenweg (Carnic Peace Trail, KHW 403)** – empty: booking_ahead; conflicts: distance_km, typical_days
- **Glocknerrunde (Glockner Trail)** – empty: best_months, booking_ahead, osm_relation_id; conflicts: distance_km, total_ascent_m
- **Zentralalpenweg 02 (Austrian Long-Distance Trail 02)** – empty: total_ascent_m, typical_days, best_months, open_season, booking_ahead, getting_to_start, leaving_from_end; conflicts: distance_km; OSM note: Glacier-free variant 02A: relation 398221.
- **Nordalpenweg 01 (Austrian Long-Distance Trail 01)** – empty: total_ascent_m, typical_days, best_months, open_season, booking_ahead, getting_to_start, leaving_from_end; conflicts: stages
- **SalzAlpenSteig** – empty: total_ascent_m, booking_ahead; conflicts: total_ascent_m, distance_km
- **Südalpenweg 03 (Austrian Long-Distance Trail 03)** – empty: total_ascent_m, best_months, open_season, booking_ahead, getting_to_start, leaving_from_end; conflicts: distance_km; OSM note: Optional extension to Bozen (Italy) not in this relation.
- **Lechweg** – empty: booking_ahead; conflicts: distance_km, typical_days
- **Alpe-Adria-Trail** – empty: booking_ahead; conflicts: distance_km
- **E5 Alpenüberquerung Oberstdorf – Meran** – empty: distance_km, total_ascent_m, osm_relation_id; conflicts: distance_km, total_ascent_m
- **Berliner Höhenweg (Zillertaler Runde)** – empty: booking_ahead; conflicts: distance_km, total_ascent_m
- **Venediger Höhenweg** – empty: booking_ahead, osm_relation_id; conflicts: total_ascent_m, distance_km
- **Welterbesteig Wachau (Wachau World Heritage Trail)** – empty: total_ascent_m, booking_ahead; conflicts: total_ascent_m
- **Donausteig** – empty: total_ascent_m, best_months, open_season, booking_ahead, osm_relation_id; conflicts: distance_km
- **Lechtaler Höhenweg** – empty: best_months, open_season, booking_ahead, getting_to_start, leaving_from_end, waymarked; conflicts: distance_km
- **Hohe Tauern Panorama Trail** – empty: best_months, open_season, booking_ahead, waymarked, osm_relation_id; conflicts: distance_km, best_months
- **Schladminger Tauern Höhenweg** – empty: best_months, open_season, waymarked, osm_relation_id; conflicts: distance_km
- **Via Alpina (main route)** – empty: total_ascent_m, best_months, open_season, booking_ahead, getting_to_start, leaving_from_end, waymarked, exposed_or_via_ferrata; conflicts: distance_km; OSM note: New main-route superroute 'Via Alpina' with 116 sub-routes (1,912 km mapped).
- **Salzburger Almenweg** – empty: total_ascent_m, best_months, open_season, booking_ahead; conflicts: typical_days
- **KAT Walk Alpin (Kitzbüheler Alpen Trail)** – empty: best_months, open_season, booking_ahead, leaving_from_end, osm_relation_id; conflicts: distance_km, total_ascent_m
- **Karwendel Höhenweg** – empty: open_season, booking_ahead, waymarked, osm_relation_id; conflicts: total_ascent_m
- **Koasa Trail** – empty: best_months, open_season, booking_ahead, leaving_from_end, waymarked, osm_relation_id; conflicts: typical_days
- **Arnoweg** – empty: total_ascent_m, best_months, open_season, booking_ahead, waymarked, exposed_or_via_ferrata; conflicts: total_ascent_m; OSM note: Mapped ~838 km in OSM, i.e. incomplete.

Specific checks worth doing:

- **Adlerweg**: decide whether the site entry is the full 33-stage Tyrol + East Tyrol route (426 km, tirol.at) or the 24-stage North Tyrol line (324–326 km, Cicerone). The OSM superroute looks like North Tyrol only.
- **E5**: tirol.at gives 176.7 km and a high point of 1,827 m for the 6-stage original route; the high point is clearly wrong (the route crosses ~3,000 m near the Similaunhütte), so its distance is doubtful too. I left distance and ascent empty.
- **Salzburger Almenweg**: the official site has moved from 31 to 25 stages; check which division to show.
- **Venediger Höhenweg**: Cicerone's 'Venediger Group Rucksack Route' (68 km from Streden) may not be the same line as the tourist-board Venediger Höhenweg (55.5 km); confirm before using it as the guidebook signal.
- **Via Alpina**: whether the 2024 main route is fully waymarked in Austria is unclear; left `waymarked` empty.
- **Lechtaler, Karwendel, Koasa, Hohe Tauern Panorama Trail, Schladminger Tauern, Arnoweg**: continuous waymarking is near-certain for Austrian AV paths, but I found no explicit source, so `waymarked` is empty.