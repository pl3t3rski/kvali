# Multi-day treks in Poland: research report

Last verified: 2026-11-27. 11 treks are included and ranked, 13 candidates are excluded, and 15+ are deferred for a human decision.

## How to read this

- **Ranking** counts the Step 2 signals that apply to each trek (0–5). Ties are broken by how many first-hand trip reports were found.
- **Every value has a source URL** in `sources`. If no reliable source was found, the field is `null` (or an empty list). Values the sources disagree on are listed in `conflicts`; the main field holds the most official figure found.
- **OSM IDs** were checked against the Waymarked Trails API (name, operator, official and mapped length). The Camino Polaco is split into three OSM relations, so its ID is `null` (see open questions).
- **Photos** were checked one by one in the Wikimedia Commons API (file exists, author, licence). A photo is used only if its Commons title or description ties it to the trail, or to a named place the sources put on the route. All 30 photos passed.
- **`permit: none`** means none of the sources checked mentions a permit or registration. National-park entrance fees are noted in `permit_notes`. No Polish trek here needs a guide, a lottery or a quota.
- **Water and exposure flags** are `null` where no source states them. They are not guesses of `false`.
- **Poland has a lot of marked long-distance trails.** Łukasz Supergan counts about 135 trails of 50 km or more ([National Geographic](https://www.national-geographic.pl/traveler/porady/poznaj-szlaki-dlugodystansowe-w-polsce-220805020633/)). This report researches the 11 best-known in depth and lists other credible ones as deferred.

## 1. Included treks, ranked

| Rank | Trek | Countries | km | Days | Difficulty | Signals |
|---|---|---|---|---|---|---|
| 1 | Main Beskid Trail (Główny Szlak Beskidzki im. Kazimierza Sosnowskiego, GSB) | PL | 500 | 16–21 | 3 | 5 |
| 2 | Main Sudetes Trail (Główny Szlak Sudecki im. Mieczysława Orłowicza, GSS) | PL | 443 | 18–20 | 2 | 5 |
| 3 | Carpathian Trail (Szlak Karpacki, blue trail Rzeszów-Grybów) | PL | 445 | 22–22 | 3 | 4 |
| 4 | Main Świętokrzyski Trail (Główny Szlak Świętokrzyski im. Edmunda Massalskiego, GSŚ) | PL | 92.4 | 3–5 | 2 | 4 |
| 5 | European long-distance path E9 - Poland (incl. Szlak Nadmorski coastal trail) | PL | 726.8 | — | 1 | 4 |
| 6 | Small Beskid Trail (Mały Szlak Beskidzki, MSB) | PL | 137 | 5–6 | 3 | 3 |
| 7 | Trail of the Eagles' Nests (Szlak Orlich Gniazd) | PL | 163.91 | 4–6 | 1 | 3 |
| 8 | Camino Polaco (Droga św. Jakuba "Droga Polska") | PL | 650 | 23–28 | 1 | 2 |
| 9 | Kashubian Trail (Szlak Kaszubski) | PL | 138 | 4–5 | 1 | 2 |
| 10 | Tarnów-Wielki Rogacz Blue Trail (Niebieski szlak Tarnów - Wielki Rogacz) | PL | 191.4 | 5–8 | 2 | 2 |
| 11 | Central Roztocze Trail (Centralny Szlak Roztocza) | PL | 190 | 5–7 | 1 | 2 |

### 1. Main Beskid Trail (Główny Szlak Beskidzki im. Kazimierza Sosnowskiego, GSB)

```yaml
id: main-beskid-trail
name: Main Beskid Trail (Główny Szlak Beskidzki im. Kazimierza Sosnowskiego, GSB)
countries: [PL]
region: Polish Beskids (Silesian, Żywiec, Gorce, Sądecki, Low Beskids, Bieszczady)
one_liner: "Poland's longest mountain trail, 500 km along the southern border from Ustroń to Wołosate; hut-to-hut in the west, quieter and wilder in the Low Beskids and Bieszczady."
route:
  type: point-to-point
  start: Ustroń
  end: Wołosate
  osm_relation_id: 545421
  gpx_source: null
distance_km: 500
total_ascent_m: 21545
typical_days: { min: 16, max: 21 }
when:
  best_months: [June, July, August, September]
  open_season: "Main season roughly May to October; winter thru-hikes are possible but need winter gear and experience"
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "PTTK mountain huts most nights in the west, villages and guesthouses in the east (fewer beds in the Low Beskids). Camping only at huts, designated campsites or State Forests 'camping-allowed' areas; not in national parks. Book July-August."
difficulty:
  level: 3
  reason: "No scrambling, but about 21,500 m of ascent; at a regular 16-day pace that is ~30 km and ~1,300 m of climbing a day, with steep descents and wind-exposed ridges (Babia Góra, Bieszczady połoniny)."
logistics:
  getting_to_start: "Ustroń: buses from Bielsko-Biała and Cieszyn; the trail starts in the centre near the railway station."
  leaving_from_end: "From Wołosate walk ~5 km of road to Ustrzyki Górne, then single buses to Sanok or Ustrzyki Dolne; expect changes and waiting."
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Entrance tickets for Bieszczady and Babia Góra national parks (and online tickets for Magura and Gorce). Carry an ID document; parts of the trail run along the Slovak and Ukrainian borders. Dogs not allowed in the national parks."
  waymarked: "yes"
  water_scarce: false
  exposed_or_via_ferrata: false
links:
  official_site: https://visitmalopolska.pl/en/-/glowny-szlak-beskidzki
establishment_signals:
  - "official status (PTTK national trail; PTTK GSB badge; east of Chyrowa it carries the E8 European path)"
  - "waymarked along the whole route (red)"
  - "official trail authority (PTTK) and regional tourism-board pages"
  - "published guidebooks (Compass, L. Piekło 2026; Bezdroża 'MountainBook', K. Bzowski)"
  - "regularly covered in trip reports and travel articles"
trip_reports:
  - url: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
    title: "Main Beskidy Trail - longest mountain trail in Poland"
    year_hiked: 2016
    summary: "Thru-hike Wołosate to Ustroń in mid-September 2016 in 10 days 18 hours, ultralight with no tent or stove; full planning guide."
  - url: https://www.national-geographic.pl/traveler/kierunki/beskidy-ze-znizka-pttk-na-gorze-burze/
    title: "Beskidy ze zniżką PTTK: Na górze burze"
    year_hiked: null
    summary: "Ustroń to Wołosate in 17 days through heat and storms, sleeping in PTTK huts and the Głuchaczki student tent camp."
  - url: https://travelfeed.io/@olusiu/main-beskid-trail-stage-no-2-shelter-in-soszow-wielki-mraznica
    title: "Main Beskid Trail stage no. 2: shelter in Soszów Wielki - Mraźnica"
    year_hiked: null
    summary: "Stage-by-stage blog of a section hike in the Silesian Beskids, with daily statistics."
  - url: https://www.youtube.com/playlist?list=PLmjN9f8lchrh2L4LDGHr1GbW-pqDwniGt
    title: "Thru-hiking Poland's 500km mountain trail (Główny Szlak Beskidzki)"
    year_hiked: null
    summary: "Video series of a west-to-east thru-hike from Ustroń to Wołosate."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Chryszczata_-_Główny_Szlak_Beskidzki_01.jpg
    author: Yarl
    license: CC BY-SA 3.0
    shows: The trail to Chryszczata (Bieszczady foothills)
  - file_url: https://commons.wikimedia.org/wiki/File:Główny_Szlak_Beskidzki_-_Path_to_Smerek_02.jpg
    author: Yarl
    license: CC BY-SA 3.0
    shows: The trail from Kalnica up to Smerek (Bieszczady)
  - file_url: https://commons.wikimedia.org/wiki/File:Maciejowa,_Gorce,_trail.jpg
    author: MOs810
    license: CC BY-SA 4.0
    shows: The trail at Maciejowa in the Gorce
  - file_url: https://commons.wikimedia.org/wiki/File:Czerwony_szlak_pieszy_na_Przehybę_w_Beskidzie_Sądeckim,_20240921_1234_5912.jpg
    author: Jakub Hałun
    license: CC BY 4.0
    shows: The red-marked trail near Przehyba (Beskid Sądecki)
sources:
  distance_km: https://visitmalopolska.pl/en/-/glowny-szlak-beskidzki
  total_ascent_m: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  typical_days: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  best_months: https://thru-hiking.com/trail/main-beskid-trail/
  open_season: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  sleeping: https://thru-hiking.com/the-main-beskid-trail-everything-you-need-to-know/
  difficulty: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  logistics: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  permit: https://podkarpackie.travel/en/articles/the-main-beskid-trail-in-podkarpackie--a-step-by-step-guide
  water_scarce: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  exposed_or_via_ferrata: https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/545421
conflicts:
  - field: distance_km
    values:
      - { value: 500, source: "https://visitmalopolska.pl/en/-/glowny-szlak-beskidzki" }
      - { value: 495.8, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/545421" }
      - { value: 496, source: "https://en.wikipedia.org/wiki/Main_Beskid_Trail" }
      - { value: "495-518 (GPS ~500)", source: "https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/" }
  - field: total_ascent_m
    values:
      - { value: 21545, source: "https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/" }
      - { value: 21969, source: "https://mapa-turystyczna.pl/route/3wtqo" }
      - { value: 22000, source: "https://thru-hiking.com/trail/main-beskid-trail/" }
  - field: typical_days
    values:
      - { value: "16-21", source: "https://www.national-geographic.pl/traveler/kierunki/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce/" }
      - { value: "14-20 (16 at regular pace)", source: "https://lukaszsupergan.com/main-beskidy-trail-longest-mountain-trail-in-poland/" }
      - { value: "21-28 (3-4 weeks)", source: "https://podkarpackie.travel/en/articles/the-main-beskid-trail-in-podkarpackie--a-step-by-step-guide" }
last_verified: 2026-11-27
```

### 2. Main Sudetes Trail (Główny Szlak Sudecki im. Mieczysława Orłowicza, GSS)

```yaml
id: main-sudetes-trail
name: Main Sudetes Trail (Główny Szlak Sudecki im. Mieczysława Orłowicza, GSS)
countries: [PL]
region: Sudetes (Jizera, Karkonosze, Owl, Table, Śnieżnik and Opawskie mountains)
one_liner: "The Sudetes end to end on red waymarks: Karkonosze ridge, the Table Mountains' rock labyrinths and gentle forest ranges, mostly hut and guesthouse nights."
route:
  type: point-to-point
  start: Świeradów-Zdrój
  end: Prudnik
  osm_relation_id: 951694
  gpx_source: null
distance_km: 443
total_ascent_m: 14000
typical_days: { min: 18, max: 20 }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "A 20-stage plan uses 12 nights in mountain hostels (mostly PTTK) and the rest in valley guesthouses and agritourism farms."
difficulty:
  level: 2
  reason: "Mountain paths through 12 ranges with no technical sections; many flat and asphalt stretches. About 14,000 m of ascent over ~20 days."
logistics:
  getting_to_start: "Świeradów-Zdrój: the railway line is closed, so arrive by bus."
  leaving_from_end: null
  nearest_airports: [Wrocław]
flags:
  permit: none
  permit_notes: "No permit; entrance fees in Karkonosze National Park (and Table Mountains National Park)."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: https://dolnoslaskie.szlaki.pttk.pl/en
establishment_signals:
  - "official status (PTTK national trail, est. 1947; PTTK end point officially Paczków, extension to Prudnik)"
  - "waymarked along the whole route (red)"
  - "official trail authority (PTTK Lower Silesia trails portal)"
  - "published guidebook (Compass, 2026)"
  - "regularly covered in trip reports and travel articles"
trip_reports:
  - url: https://www.ptt.org.pl/coslychac/cs381.pdf
    title: "Co Słychać? nr 9 (381), September 2022 - GSS report (Polish Tatra Society newsletter)"
    year_hiked: 2022
    summary: "Świeradów-Zdrój to Prudnik, 16-27 August 2022, in 11 days 4 h 40 min including rests; charity walk."
  - url: https://8a.pl/8academy/?p=20612
    title: "Jak przejść Główny Szlak Sudecki?"
    year_hiked: null
    summary: "Author's own photos and range-by-range account, west to east; notes ~440 km and ~14 km of total ascent."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Główny_Szlak_Sudecki_-_panoramio.jpg
    author: Sławek Zawadzki
    license: CC BY-SA 3.0
    shows: A section of the trail (location not given in the file description)
  - file_url: https://commons.wikimedia.org/wiki/File:Główny_Szlak_Sudecki_-_panoramio_(1).jpg
    author: Sławek Zawadzki
    license: CC BY-SA 3.0
    shows: A section of the trail (location not given in the file description)
  - file_url: https://commons.wikimedia.org/wiki/File:Główny_Szlak_Sudecki_-_panoramio_(19).jpg
    author: Jarosław Szczepaniak
    license: CC BY-SA 3.0
    shows: A section of the trail (location not given in the file description)
sources:
  distance_km: https://en.wikipedia.org/wiki/Main_Sudetes_Trail
  total_ascent_m: https://8a.pl/8academy/?p=20612
  typical_days: https://www.c-and-a.com/pl/pl/shop/glowny-szlak-sudecki-etapy-i-schroniska
  sleeping: https://www.c-and-a.com/pl/pl/shop/glowny-szlak-sudecki-etapy-i-schroniska
  difficulty: https://www.national-geographic.pl/traveler/porady/poznaj-szlaki-dlugodystansowe-w-polsce-220805020633/
  logistics: https://de.wikivoyage.org/wiki/Sudeten-Hauptwanderweg
  nearest_airports: https://hiiker.app/hikes/poland/swieradow-zdroj/main-sudety-trail
  permit: https://www.komoot.com/smarttour/e2066019124
  route_end: https://dolnyslask.travel/en/atrakcje/przejdz-glowny-szlak-sudecki
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/951694
conflicts:
  - field: distance_km
    values:
      - { value: 443, source: "https://en.wikipedia.org/wiki/Main_Sudetes_Trail" }
      - { value: 440, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/951694" }
      - { value: 445, source: "https://fastestknowntime.com/route/glowny-szlak-sudecki-poland" }
      - { value: 430, source: "https://www.c-and-a.com/pl/pl/shop/glowny-szlak-sudecki-etapy-i-schroniska" }
  - field: total_ascent_m
    values:
      - { value: 14000, source: "https://8a.pl/8academy/?p=20612" }
      - { value: 14169, source: "https://fastestknowntime.com/route/glowny-szlak-sudecki-poland" }
      - { value: 10625, source: "https://hiiker.app/hikes/poland/swieradow-zdroj/main-sudety-trail" }
  - field: typical_days
    values:
      - { value: "18-20 (20 stages)", source: "https://www.c-and-a.com/pl/pl/shop/glowny-szlak-sudecki-etapy-i-schroniska" }
      - { value: "14 (about 120 hours)", source: "https://www.koronakarkonoszy.pl/blog-atrakcje/en/?p=5013" }
  - field: route.end
    values:
      - { value: "Prudnik", source: "https://en.wikipedia.org/wiki/Main_Sudetes_Trail" }
      - { value: "Paczków (end point under PTTK resolution)", source: "https://dolnyslask.travel/en/atrakcje/przejdz-glowny-szlak-sudecki" }
last_verified: 2026-11-27
```

### 3. Carpathian Trail (Szlak Karpacki, blue trail Rzeszów-Grybów)

```yaml
id: szlak-karpacki
name: Carpathian Trail (Szlak Karpacki, blue trail Rzeszów-Grybów)
countries: [PL]
region: Carpathian foothills, Bieszczady, Low Beskids
one_liner: "Poland's remote blue border trail from Rzeszów through the foothills, Bieszczady and Low Beskids to Grybów: shelters, camping and few people."
route:
  type: point-to-point
  start: Rzeszów
  end: Grybów
  osm_relation_id: 1730439
  gpx_source: null
distance_km: 445
total_ascent_m: null
typical_days: { min: 22, max: 22 }
when:
  best_months: [May, June, July, August, September]
  open_season: null
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Not enough indoor beds for hut-to-hut; tent camping is the main option, plus basic huts/shelters and some village B&Bs and hotels. No camping in national parks. Book in July-August, especially in Ustrzyki Górne."
difficulty:
  level: 3
  reason: "Remote and rugged: steep climbs, mud and overgrown sections, long stretches with little resupply."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "No permit, but carry a passport: Border Guard checks are common on the stages near the Ukrainian border."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals:
  - "official status (PTTK trail with its own PTTK badge)"
  - "waymarked along the whole route (blue)"
  - "published guidebook (Compass 'Szlak Karpacki - Rzeszów-Grybów', 2026)"
  - "regularly covered in trip reports"
trip_reports:
  - url: https://acrossthewilderness.blogspot.com/2022/06/szlak-karpacki-czesc-2-ustrzyki-gorne.html
    title: "Szlak Karpacki, część 2: Ustrzyki Górne"
    year_hiked: 2022
    summary: "Westbound from Ustrzyki Górne in spring 2022 with snow near Wielka Rawka; nights in Slovak and Polish shelters."
  - url: https://kronikapodroznika.pl/niebieskie-wyzwanie-2016-odc-11-koncoweczka-i-podsumowanie/
    title: "Niebieskie wyzwanie 2016, odc. 11: końcóweczka i podsumowanie"
    year_hiked: 2016
    summary: "Self-supported fast traverse of the whole trail in 164.5 hours (summary episode of a series)."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:02020_0617_Kalwaria_Pacławska_in_2020.jpg
    author: Silar
    license: CC BY-SA 4.0
    shows: Kalwaria Pacławska, a stage end on the trail
sources:
  distance_km: https://hiking.waymarkedtrails.org/api/v1/details/relation/1730439
  typical_days: https://thru-hiking.com/?p=10694
  best_months: https://thru-hiking.com/?p=10694
  sleeping: https://thru-hiking.com/?p=10694
  difficulty: https://thru-hiking.com/?p=10694
  permit: https://thru-hiking.com/?p=10694
  waymarked: https://fastestknowntime.com/route/szlak-karpacki-rzeszow-grybow
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/1730439
conflicts:
  - field: distance_km
    values:
      - { value: 445, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/1730439" }
      - { value: 428, source: "https://www.national-geographic.pl/traveler/porady/poznaj-szlaki-dlugodystansowe-w-polsce-220805020633/" }
      - { value: 430, source: "https://fastestknowntime.com/route/szlak-karpacki-rzeszow-grybow" }
      - { value: 440, source: "https://thru-hiking.com/?p=10694" }
  - field: route.end
    values:
      - { value: "Grybów", source: "https://fastestknowntime.com/route/szlak-karpacki-rzeszow-grybow" }
      - { value: "Wołosate", source: "https://thru-hiking.com/?p=10694" }
  - field: waymarked
    values:
      - { value: "yes (blue)", source: "https://fastestknowntime.com/route/szlak-karpacki-rzeszow-grybow" }
      - { value: "contradictory: 'well marked' and 'limited waymarking'", source: "https://thru-hiking.com/?p=10694" }
last_verified: 2026-11-27
```

### 4. Main Świętokrzyski Trail (Główny Szlak Świętokrzyski im. Edmunda Massalskiego, GSŚ)

```yaml
id: main-swietokrzyski-trail
name: Main Świętokrzyski Trail (Główny Szlak Świętokrzyski im. Edmunda Massalskiego, GSŚ)
countries: [PL]
region: Świętokrzyskie (Holy Cross) Mountains
one_liner: "Poland's 'shortest long trail': three to five days over Łysica and Łysa Góra's stone runs and fir forests, guesthouse to guesthouse, no huts."
route:
  type: point-to-point
  start: Gołoszyce
  end: Kuźniaki
  osm_relation_id: 3372500
  gpx_source: https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki
distance_km: 92.4
total_ascent_m: 2643
typical_days: { min: 3, max: 5 }
when:
  best_months: []
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: recommended
  notes: "No mountain huts; agritourism guesthouses in Miedziana Góra, Tumlin, Dąbrowa, Masłów, Święta Katarzyna, Huta Szklana and Nowa Słupia. Resupply is limited."
difficulty:
  level: 2
  reason: "Low mountains (max ~600 m) but steady climbs and descents; PTTK grades it 'very difficult' for its length and steep sections, travel media call the climbs gentle."
logistics:
  getting_to_start: "Both ends are reached by a few daily buses from Kielce; Gołoszyce is near the Kielce-Opatów road."
  leaving_from_end: "Kuźniaki: bus back to Kielce (few connections a day)."
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Świętokrzyski National Park entrance fee on the Święta Katarzyna-Trzcianka section (18.8 km)."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki
establishment_signals:
  - "official status (named PTTK main trail, managed by PTTK Kielce)"
  - "waymarked along the whole route (red)"
  - "official trail page (PTTK Świętokrzyskie trails portal, with GPX)"
  - "regularly covered in trip reports and travel articles"
trip_reports:
  - url: https://podrozebezosci.pl/glowny-szlak-swietokrzyski-gss-porady-praktyczne-mapa-noclegi-wyposazenie-odznaka
    title: "Główny Szlak Świętokrzyski (GSŚ) - porady praktyczne, mapa, noclegi"
    year_hiked: null
    summary: "Walked Gołoszyce to Kuźniaki in three stages with agritourism nights; practical notes on buses, shops and marking (published 2019)."
  - url: https://www.komoot.com/pt-pt/collection/3579047/floresta-de-abeto-picos-magnificos-e-historia-polaca-trilha-principal-de-swietokrzyski
    title: "Główny Szlak Świętokrzyski - spruce forest, magnificent peaks and Polish history (komoot collection)"
    year_hiked: null
    summary: "Stage-by-stage write-up from Kuźniaki through the national park to Gołoszyce."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Łysica_szlak_IMG_20230716.jpg
    author: Michał Derela
    license: CC BY-SA 4.0
    shows: The path up Łysica
  - file_url: https://commons.wikimedia.org/wiki/File:Święta_Katarzyna._Szlak_na_Łysicę_1.jpg
    author: Gorofil
    license: CC BY-SA 4.0
    shows: The trail from Święta Katarzyna to Łysica
  - file_url: https://commons.wikimedia.org/wiki/File:Gołoborze_Łysa_Góra_Góry_Świętokrzyskie_2020-08-15_04.jpg
    author: Agnieszka Kwiecień, Nova
    license: CC BY-SA 4.0
    shows: The quartzite stone run (gołoborze) on Łysa Góra
sources:
  distance_km: https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki
  total_ascent_m: https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki
  typical_days: https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce
  sleeping: https://podrozebezosci.pl/glowny-szlak-swietokrzyski-gss-porady-praktyczne-mapa-noclegi-wyposazenie-odznaka
  difficulty: https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki
  logistics: https://podrozebezosci.pl/glowny-szlak-swietokrzyski-gss-porady-praktyczne-mapa-noclegi-wyposazenie-odznaka
  permit: https://www.swietokrzyskipn.org.pl/turystyka/szlaki-piesze/czerwony/?lang=en
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/list/search?query=%C5%9Awi%C4%99tokrzyski&limit=10
conflicts:
  - field: distance_km
    values:
      - { value: 92.4, source: "https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki" }
      - { value: 105, source: "https://www.swietokrzyskipn.org.pl/turystyka/szlaki-piesze/czerwony/?lang=en" }
      - { value: 93.2, source: "https://podrozebezosci.pl/glowny-szlak-swietokrzyski-gss-porady-praktyczne-mapa-noclegi-wyposazenie-odznaka" }
  - field: total_ascent_m
    values:
      - { value: 2643, source: "https://swietokrzyskie.szlaki.pttk.pl/en/53-swietokrzyskie-the-main-swietokrzyski-trail-named-after-edmund-massalski-goloszyce-kuzniaki" }
      - { value: 2411, source: "https://mapa-turystyczna.pl/route/whdk" }
      - { value: 2755, source: "https://fastestknowntime.com/route/glowny-szlak-swietokrzyski-kuzniaki-goloszyce-poland" }
last_verified: 2026-11-27
```

### 5. European long-distance path E9 - Poland (incl. Szlak Nadmorski coastal trail)

```yaml
id: e9-poland-baltic-coast
name: European long-distance path E9 - Poland (incl. Szlak Nadmorski coastal trail)
countries: [PL]
region: Polish Baltic coast
one_liner: "The whole Polish Baltic coast on foot, from the German border at Świnoujście past dunes, cliffs and resorts to the Vistula Lagoon; flat, sandy and busy in summer."
route:
  type: point-to-point
  start: Świnoujście (German border)
  end: Gronowo (Russian border, Kaliningrad)
  osm_relation_id: 3009329
  gpx_source: null
distance_km: 726.8
total_ascent_m: null
typical_days: null
when:
  best_months: []
  open_season: "Some accommodation and catering close outside the summer holiday season."
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Hotels, guesthouses and tent sites at least every 10-20 km. Single-night stays can be hard to find in high season. Camping on beaches and entering the dunes is not allowed."
difficulty:
  level: 1
  reason: "Flat coastal walking on asphalt, dirt and sand; the challenge is distance and soft sand."
logistics:
  getting_to_start: "Świnoujście has rail and bus links; the route uses the Bielik ferry crossing in town."
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "No permit. Beach camping and walking in the dunes are prohibited."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://www.era-ewv-ferp.org/?p=8495
establishment_signals:
  - "official status (E9 European long-distance path; PTTK)"
  - "waymarked along the whole route (local trails joined with a uniform E9 symbol)"
  - "official website (European Ramblers Association route page)"
  - "regularly covered in trip reports and travel articles (mainly the Świnoujście-Hel beach walk)"
trip_reports:
  - url: https://www.national-geographic.pl/traveler/kierunki/pocztowki-znad-baltyku/
    title: "Pocztówki znad Bałtyku"
    year_hiked: null
    summary: "Świnoujście to Hel along the beach (~350 km) in 9 days 7 hours, about 40 km a day, sleeping in the open; published 2012."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Szlak_Nadmorski_Rowy_-_Łeba_(czerwony).jpg
    author: Mirrabellka44
    license: CC BY 3.0
    shows: The red coastal trail between Rowy and Łeba
  - file_url: https://commons.wikimedia.org/wiki/File:Szlak1002_PromenadaGwiazdMiędzyzdroje.jpg
    author: PawelNorbertStrzelecki
    license: CC BY-SA 4.0
    shows: Coastal trail waymark on the promenade in Międzyzdroje
  - file_url: https://commons.wikimedia.org/wiki/File:Ekopark_Wschodni_kz03.jpg
    author: Krzysztof Ziarnek, Kenraiz
    license: CC BY-SA 4.0
    shows: The coastal trail in Ekopark Wschodni east of Kołobrzeg
sources:
  distance_km: https://www.era-ewv-ferp.org/?p=8495
  open_season: https://www.era-ewv-ferp.org/?p=8495
  sleeping: https://www.era-ewv-ferp.org/?p=8495
  difficulty: https://www.era-ewv-ferp.org/?p=8495
  logistics: https://www.era-ewv-ferp.org/?p=8495
  permit: https://www.national-geographic.pl/traveler/kierunki/pocztowki-znad-baltyku/
  waymarked: https://www.era-ewv-ferp.org/?p=8495
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/3009329
conflicts:
  - field: distance_km
    values:
      - { value: 726.8, source: "https://www.era-ewv-ferp.org/?p=8495" }
      - { value: 607.9, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/3009329" }
  - field: route.end
    values:
      - { value: "Gronowo (border crossing)", source: "https://www.era-ewv-ferp.org/?p=8495" }
      - { value: "Braniewo (Russian border)", source: "https://hiking.waymarkedtrails.org/api/v1/list/search?query=E9%20Polska&limit=15" }
last_verified: 2026-11-27
```

### 6. Small Beskid Trail (Mały Szlak Beskidzki, MSB)

```yaml
id: small-beskid-trail
name: Small Beskid Trail (Mały Szlak Beskidzki, MSB)
countries: [PL]
region: Beskid Mały, Beskid Makowski (Średni), Beskid Wyspowy
one_liner: "The GSB's little sibling: a red-marked week-ish crossing of three quiet Beskid ranges from Bielsko-Biała to Luboń Wielki, with a surprising amount of climbing."
route:
  type: point-to-point
  start: Bielsko-Biała (Straconka)
  end: Luboń Wielki
  osm_relation_id: 961607
  gpx_source: null
distance_km: 137
total_ascent_m: 6500
typical_days: { min: 5, max: 6 }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Village accommodation (e.g. Kasina Wielka, Myślenice) plus huts such as Chatka pod Potrójną. Luboń Wielki is a summit; the nearest town is Rabka-Zdrój, about 8 km away on the blue trail."
difficulty:
  level: 3
  reason: "Long 26-36 km days; one stage alone climbs about 1,600 m."
logistics:
  getting_to_start: null
  leaving_from_end: "From Luboń Wielki descend about 8 km on the blue trail to Rabka-Zdrój."
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals:
  - "official status (national-level PTTK trail in the Polish OSM hiking register)"
  - "waymarked along the whole route (red)"
  - "covered in trip reports"
trip_reports:
  - url: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
    title: "Long-Distance Hiking in Poland - The Small Beskid Trail"
    year_hiked: null
    summary: "Luboń Wielki to Bielsko-Biała in 5 walking days plus a rest day, 26-36 km a day, rain at the start (published 2022)."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Łysina_891_m_2023.jpg
    author: Adrian Tync
    license: CC BY-SA 4.0
    shows: Łysina summit on the trail
  - file_url: https://commons.wikimedia.org/wiki/File:Babica_Zachodnia_2023.jpg
    author: Adrian Tync
    license: CC BY-SA 4.0
    shows: Babica Zachodnia summit (650 m) on the trail
  - file_url: https://commons.wikimedia.org/wiki/File:Mały_Szlak_Beskidzki_wzgórza_12.08.2024_p.jpg
    author: Przykuta
    license: CC BY-SA 3.0
    shows: Hills on the trail near Jasienica, Myślenice in the background
sources:
  distance_km: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
  total_ascent_m: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
  typical_days: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
  sleeping: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
  difficulty: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
  logistics: https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland
  route_start_end: https://fastestknowntime.com/route/maly-szlak-beskidzki-poland
  official_status: https://wiki.openstreetmap.org/wiki/Poland/Turystyka/G%C3%B3rska/Krajowa
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/list/search?query=Beskidzki&limit=20
conflicts:
  - field: distance_km
    values:
      - { value: 137, source: "https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland" }
      - { value: 134, source: "https://www.national-geographic.pl/traveler/porady/poznaj-szlaki-dlugodystansowe-w-polsce-220805020633/" }
      - { value: 134.2, source: "https://fastestknowntime.com/route/maly-szlak-beskidzki-poland" }
  - field: total_ascent_m
    values:
      - { value: 6500, source: "https://www.livingthedreamrtw.com/hiking-the-small-beskid-trail-poland" }
      - { value: 6000, source: "https://www.national-geographic.pl/traveler/porady/poznaj-szlaki-dlugodystansowe-w-polsce-220805020633/" }
      - { value: 5423, source: "https://fastestknowntime.com/route/maly-szlak-beskidzki-poland" }
last_verified: 2026-11-27
```

### 7. Trail of the Eagles' Nests (Szlak Orlich Gniazd)

```yaml
id: trail-of-the-eagles-nests
name: Trail of the Eagles' Nests (Szlak Orlich Gniazd)
countries: [PL]
region: Kraków-Częstochowa Upland (Polish Jura)
one_liner: "Castle-to-castle across the limestone Jura from Kraków to Częstochowa: ruined 'eagles' nests', Ojców's rock gates and easy village-to-village days."
route:
  type: point-to-point
  start: Kraków
  end: Częstochowa
  osm_relation_id: 1697841
  gpx_source: https://mapa-turystyczna.pl/trail/szlak-orlich-gniazd-t0
distance_km: 163.91
total_ascent_m: 2569
typical_days: { min: 4, max: 6 }
when:
  best_months: []
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: recommended
  notes: "Agritourism and guesthouses; in summer book ahead around busy spots like Ogrodzieniec and Ojców."
difficulty:
  level: 1
  reason: "Daily climbing stays under ~400 m; mostly easy forest and field paths. Limestone gets slippery after rain."
logistics:
  getting_to_start: "Kraków (either end works; walkable in both directions). Most castles along the way are reachable by bus."
  leaving_from_end: "Częstochowa city buses connect the trail to the centre."
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: https://orlegniazda.pl/en-US/Trasy/Pokaz/10801
establishment_signals:
  - "official status (PTTK red trail; regional tourism boards of Silesia and Lesser Poland)"
  - "waymarked along the whole route (red)"
  - "official website (orlegniazda.pl / slaskie.travel route page)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Eagles_Nests_Trail_01.jpg
    author: Scotch Mist
    license: CC BY-SA 4.0
    shows: Scenery on the Trail of the Eagles' Nests
  - file_url: https://commons.wikimedia.org/wiki/File:Eagles_Nests_Trail_03.jpg
    author: Scotch Mist
    license: CC BY-SA 4.0
    shows: Scenery on the Trail of the Eagles' Nests
  - file_url: https://commons.wikimedia.org/wiki/File:Eagles_Nests_Trail_32.jpg
    author: Scotch Mist
    license: CC BY-SA 4.0
    shows: Bobolice Castle on the trail
sources:
  distance_km: https://slaskie.travel/en-US/Trasy/Pokaz/10801
  total_ascent_m: https://mapa-turystyczna.pl/trail/szlak-orlich-gniazd-t0
  typical_days: https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce
  sleeping: https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce?page=6
  difficulty: https://www.komoot.com/ko-kr/collection/3806336
  logistics: https://www.wikiwand.com/en/Eagle_Nests_Trail
  leaving_from_end: https://www.komoot.com/ko-kr/collection/3806336
  permit: https://slaskie.travel/en-US/Trasy/Pokaz/10801
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/list/search?query=Orlich%20Gniazd&limit=10
conflicts:
  - field: distance_km
    values:
      - { value: 163.91, source: "https://slaskie.travel/en-US/Trasy/Pokaz/10801" }
      - { value: 164, source: "https://orlegniazda.pl/en-US/Trasy/Pokaz/10801" }
      - { value: 164.2, source: "https://mapa-turystyczna.pl/trail/szlak-orlich-gniazd-t0" }
  - field: total_ascent_m
    values:
      - { value: 2569, source: "https://mapa-turystyczna.pl/trail/szlak-orlich-gniazd-t0" }
      - { value: 2120, source: "https://www.komoot.com/ko-kr/collection/3806336" }
  - field: typical_days
    values:
      - { value: "4-6", source: "https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce" }
      - { value: "7", source: "https://www.komoot.com/ko-kr/collection/3806336" }
      - { value: "6-8 without a tent", source: "https://mapa-turystyczna.pl/photo/110867/trail/10" }
last_verified: 2026-11-27
```

### 8. Camino Polaco (Droga św. Jakuba "Droga Polska")

```yaml
id: camino-polaco
name: Camino Polaco (Droga św. Jakuba "Droga Polska")
countries: [PL]
region: Suwałki region, Masuria, Warmia, Chełmno Land, Kuyavia
one_liner: "The Polish Way of St James from the Lithuanian border through the Masurian lakes, Olsztyn and Toruń; four weeks of flat, quiet pilgrim walking with shell waymarks."
route:
  type: point-to-point
  start: Ogrodniki (Polish-Lithuanian border)
  end: Trzemeszno
  osm_relation_id: null
  gpx_source: https://www.caminoninja.com/caminos/camino-polaco
distance_km: 650
total_ascent_m: 2859
typical_days: { min: 23, max: 28 }
when:
  best_months: [May, June, July, August, September]
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: recommended
  notes: "No dedicated pilgrim hostels listed; guesthouses, agritourism farms, rectories and parish halls. Book ahead in midsummer in the lake district."
difficulty:
  level: 1
  reason: "Flat lowland walking (highest point 196 m), about 25 km a day."
logistics:
  getting_to_start: "Train Warsaw-Suwałki (~4.5 h), then bus via Sejny to the Ogrodniki border crossing; or fly to Kaunas/Vilnius and bus via Lazdijai."
  leaving_from_end: "Mogilno station (Poznań-Toruń line): about 1.5 h to Poznań, 1 h to Toruń."
  nearest_airports: [Warsaw Chopin, Warsaw Modlin, Kaunas, Vilnius, Poznań-Ławica, Bydgoszcz]
flags:
  permit: none
  permit_notes: "Optional pilgrim passport (Paszport Pielgrzyma) from Stowarzyszenie Przyjaciele Dróg św. Jakuba w Polsce."
  waymarked: partial
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: null
establishment_signals:
  - "official status (part of the Ways of St James network; promoted by regional tourism boards)"
  - "published guidebook (Kuyavian-Pomeranian section, Wydawnictwo UMK)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Pokrzydowo_Camino.jpg
    author: Fionaelisa
    license: CC BY-SA 4.0
    shows: Camino Polaco waymark in Pokrzydowo
  - file_url: https://commons.wikimedia.org/wiki/File:Ilawa-Camino-pielgrzymi.jpg
    author: Fionaelisa
    license: CC BY-SA 4.0
    shows: Pilgrims on the Camino Polaco in Iława
  - file_url: https://commons.wikimedia.org/wiki/File:Jakobsweg_Heiligelinde.jpg
    author: Beatclub
    license: CC BY-SA 4.0
    shows: Granite marker at Święta Lipka (Heiligelinde) on the Camino Polaco
sources:
  distance_km: https://pomorskie.travel/en/articles/camino-in-pomorskie/
  total_ascent_m: https://www.caminoninja.com/caminos/camino-polaco
  typical_days: https://www.caminoninja.com/caminos/camino-polaco
  best_months: https://www.caminoninja.com/caminos/camino-polaco
  sleeping: https://www.caminoninja.com/caminos/camino-polaco
  difficulty: https://www.caminoninja.com/caminos/camino-polaco
  logistics: https://www.caminoninja.com/caminos/camino-polaco
  permit: https://www.caminoninja.com/caminos/camino-polaco
  waymarked: https://www.caminoninja.com/caminos/camino-polaco
  guidebook: https://torun.pl/pl/print/pdf/node/49627
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/list/search?query=Camino%20Polaco&limit=10
conflicts:
  - field: distance_km
    values:
      - { value: 650, source: "https://pomorskie.travel/en/articles/camino-in-pomorskie/" }
      - { value: 638.8, source: "https://www.caminoninja.com/caminos/camino-polaco" }
      - { value: 782.7, source: "https://mapa-turystyczna.pl/trail/droga-sw-jakuba-camino-polaco-cf4" }
  - field: route.end
    values:
      - { value: "Trzemeszno", source: "https://pomorskie.travel/en/articles/camino-in-pomorskie/" }
      - { value: "Mogilno", source: "https://www.caminoninja.com/caminos/camino-polaco" }
  - field: total_ascent_m
    values:
      - { value: 2859, source: "https://www.caminoninja.com/caminos/camino-polaco" }
      - { value: 3451, source: "https://mapa-turystyczna.pl/trail/droga-sw-jakuba-camino-polaco-cf4" }
last_verified: 2026-11-27
```

### 9. Kashubian Trail (Szlak Kaszubski)

```yaml
id: kashubian-trail
name: Kashubian Trail (Szlak Kaszubski)
countries: [PL]
region: Kashubian Lake District (Kashubian and Wdzydze landscape parks)
one_liner: "Four or five easy days of lakes, moraine hills and Kashubian villages from Sierakowice to the Wdzydze lakes."
route:
  type: point-to-point
  start: Sierakowice
  end: Gołuń
  osm_relation_id: 4728457
  gpx_source: null
distance_km: 138
total_ascent_m: null
typical_days: { min: 4, max: 5 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 1
  reason: "Lowland lake-district walking; one awkward stretch along the shore of Jezioro Wieprznickie."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: https://pomorskie.travel/?p=91044
establishment_signals:
  - "waymarked along the whole route (red)"
  - "official tourism-board page (pomorskie.travel)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Wdzydzki_PK_szlak_kaszubski_most_na_Wdzie_05.07.10_p.jpg
    author: Przykuta
    license: CC BY-SA 3.0
    shows: Bridge over the Wda on the trail, Wdzydze Landscape Park
  - file_url: https://commons.wikimedia.org/wiki/File:Kosy,_Szlak_Kaszubski_(Trail_Kashubian)_-_panoramio.jpg
    author: Sławek Zawadzki
    license: CC BY-SA 3.0
    shows: The trail at Kosy
  - file_url: https://commons.wikimedia.org/wiki/File:Zielona_Góra,_Szlak_Kaszubski_(Trail_Kashubian)_-_panoramio.jpg
    author: Sławek Zawadzki
    license: CC BY-SA 3.0
    shows: The trail at Zielona Góra (Kashubia)
sources:
  distance_km: https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce
  typical_days: https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce
  difficulty: https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce
  route_start_end: https://www.national-geographic.pl/traveler/kierunki/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce?page=1
  waymarked: https://pomorskie.travel/?p=91044
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/list/search?query=Szlak%20Kaszubski&limit=10
conflicts:
  - field: distance_km
    values:
      - { value: 138, source: "https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce" }
      - { value: 131, source: "https://pomorskie.travel/?p=91044" }
last_verified: 2026-11-27
```

### 10. Tarnów-Wielki Rogacz Blue Trail (Niebieski szlak Tarnów - Wielki Rogacz)

```yaml
id: tarnow-wielki-rogacz-trail
name: Tarnów-Wielki Rogacz Blue Trail (Niebieski szlak Tarnów - Wielki Rogacz)
countries: [PL]
region: Ciężkowice and Rożnów foothills, Beskid Wyspowy, Gorce, Pieniny, Beskid Sądecki
one_liner: "From the city of Tarnów through rock-city foothills and over Lubań and the Pieniny's Three Crowns to the Beskid Sądecki ridge, in about a week."
route:
  type: point-to-point
  start: Tarnów
  end: Wielki Rogacz (Beskid Sądecki)
  osm_relation_id: 1472092
  gpx_source: null
distance_km: 191.4
total_ascent_m: null
typical_days: { min: 5, max: 8 }
when:
  best_months: []
  open_season: "The Dunajec river crossing on the route is closed 1 November to 14 April."
sleeping:
  type: null
  booking_ahead: null
  notes: "Well-developed accommodation in the Pieniny before the last stage; little else documented."
difficulty:
  level: 2
  reason: "Foothills first, then mountain ranges (Gorce, Pieniny, Beskid Sądecki); no technical sections reported."
logistics:
  getting_to_start: "Tarnów: the trail starts on ul. Tuchowska next to the Old Cemetery (St Valentine's chapel)."
  leaving_from_end: "Ends at a junction with the red Main Beskid Trail below Wielki Rogacz; no direct transport."
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Part of the route is in a fee-paying national park (Pieniny)."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals:
  - "waymarked along the whole route (blue, PTTK)"
  - "covered in national media as one of Poland's long-distance trails"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Wielki_Rogacz_szlak.jpg
    author: Andrzej O
    license: CC BY-SA 3.0
    shows: Trail junction on the Wielki Rogacz summit (1182 m), the end of the trail
  - file_url: https://commons.wikimedia.org/wiki/File:Skamieniałe_Miasto_a12.jpg
    author: Jerzy Opioła
    license: CC BY 2.5
    shows: Skamieniałe Miasto rock reserve at Ciężkowice
  - file_url: https://commons.wikimedia.org/wiki/File:Ciezkowice_Skamieniale_Miasto_08.jpg
    author: Andrzej Otrębski
    license: CC BY-SA 4.0
    shows: Skamieniałe Miasto (Petrified Town) reserve, Ciężkowice
sources:
  distance_km: https://hiking.waymarkedtrails.org/api/v1/details/relation/1472092
  typical_days: https://www.rmf24.pl/fakty/news-szlak-tarnow-wielki-rogacz-urok-polskich-gor,nId,5385689
  open_season: https://mapa-turystyczna.pl/photo/174821/route/p9us?page=1
  sleeping: https://www.rmf24.pl/fakty/news-szlak-tarnow-wielki-rogacz-urok-polskich-gor,nId,5385689
  difficulty: https://www.rmf24.pl/fakty/news-szlak-tarnow-wielki-rogacz-urok-polskich-gor,nId,5385689
  logistics: https://www.rmf24.pl/fakty/news-szlak-tarnow-wielki-rogacz-urok-polskich-gor,nId,5385689
  leaving_from_end: https://www.komoot.com/highlight/5160629
  permit: https://mapa-turystyczna.pl/photo/174821/route/p9us?page=1
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/1472092
conflicts:
  - field: distance_km
    values:
      - { value: 191.4, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/1472092" }
      - { value: "over 180", source: "https://www.rmf24.pl/fakty/news-szlak-tarnow-wielki-rogacz-urok-polskich-gor,nId,5385689" }
last_verified: 2026-11-27
```

### 11. Central Roztocze Trail (Centralny Szlak Roztocza)

```yaml
id: central-roztocze-trail
name: Central Roztocze Trail (Centralny Szlak Roztocza)
countries: [PL]
region: Roztocze
one_liner: "Five to seven days through Roztocze's beech forests, loess gullies and border villages, from Szastarka to the spa of Horyniec-Zdrój."
route:
  type: point-to-point
  start: Szastarka
  end: Horyniec-Zdrój
  osm_relation_id: 2204530
  gpx_source: null
distance_km: 190
total_ascent_m: null
typical_days: { min: 5, max: 7 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 1
  reason: "Gentle upland; loess roads get very heavy after rain."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals:
  - "waymarked along the whole route (PTTK national-network trail)"
  - "covered in travel articles (National Geographic Traveler list of Poland's 15 best walks)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Horyniec-Zdrój,_deptak_(HB8).jpg
    author: Henryk Bielamowicz
    license: CC BY-SA 4.0
    shows: Promenade in Horyniec-Zdrój, the end of the trail
sources:
  distance_km: https://hiking.waymarkedtrails.org/api/v1/details/relation/2204530
  typical_days: https://radio.lublin.pl/2024/05/szlak-pieszy-przez-lubelszczyzne-jednym-z-najpiekniejszych-w-polsce-zdjecia
  difficulty: https://radio.lublin.pl/2024/05/szlak-pieszy-przez-lubelszczyzne-jednym-z-najpiekniejszych-w-polsce-zdjecia
  route_start_end: https://hiking.waymarkedtrails.org/api/v1/details/relation/2204530
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/2204530
conflicts:
  - field: distance_km
    values:
      - { value: 190, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/2204530" }
      - { value: 195, source: "https://radio.lublin.pl/2024/05/szlak-pieszy-przez-lubelszczyzne-jednym-z-najpiekniejszych-w-polsce-zdjecia" }
last_verified: 2026-11-27
```

## 2. Excluded candidates

| Candidate | Rule failed | Note |
|---|---|---|
| Western Tatras ridge (Tatry Zachodnie), Chochołowska–Kiry | Rule 1: 1 day | 31 km day walk ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| Tatra hut-to-hut traverse (Polish Tatras) | Rule 2: no named route | Hut-hopping in Tatra NP is popular, but no source names a defined multi-day route. |
| Orla Perć (Tatras) | Rule 1: 1–2 days | A single exposed ridge route, not a multi-day trek. |
| Jizera Mountains and Karkonosze, Świeradów–Okraj pass | Rule 1: 2.5 days | ~60 km; it is the first part of the GSS anyway ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| Polish–Czech Friendship Trail (Karkonosze ridge) | Rule 1 | Short ridge route along the border. |
| "Bieszczadzka Koronka" loop from Wetlina | Rule 1: 1 day | ~12-hour day loop ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| Gorce "most beautiful glades" to Turbacz | Rule 1: 1 day | Day walk ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| Wolf Trail in Białowieża Forest (Narewka–Masiewo) | Rule 1: 1 day | ~22 km ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| Trzciel–Pszczew loop | Rule 1: 1 day | 36 km ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| Around the Kłodzko Valley (Dookoła Kotliny Kłodzkiej) | Rule 2: no defined route | ~240 km, but unmarked and self-planned from other trails ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)). |
| "Brzegiem Bałtyku" beach walk, Świnoujście–Hel | Rule 2: not a defined trail | A beach line rather than a waymarked route; the marked coastal route is covered by the E9 entry. |
| The Wolf Trail (Jack Wolfskin), Hel → Trieste | Rule 2: brand-curated composite | 3,494 km launched 2026 by a gear brand, stitched from existing paths; no own waymarking or authority reported ([Euronews](https://www.euronews.com/travel/2026/07/22/trek-from-poland-to-italy-new-3500km-hiking-trail-crosses-six-european-countries)). Revisit if it becomes established. |
| Trail of the Eagles' Nests cycle route, R10 / EuroVelo 10, Green Velo | Not hiking | Cycling routes ([slaskie.travel](https://slaskie.travel/Trasy/Pokaz/12398), [centrumrowerowe.pl](https://www.centrumrowerowe.pl/trasy-rowerowe/trasa-rowerowa-r10/)). |

## 3. Deferred: these pass the rules on paper but were not researched in depth

| Candidate | Length | OSM relation | Why deferred |
|---|---|---|---|
| E11 European long-distance path – Poland (Słubice → near Suwałki) | 1,237 km (OSM) | 2856709 | OSM marks detours around "impassable sections"; no Polish trail authority or stage data found. The [ERA E11 page](https://www.era-ewv-ferp.org/e-paths/e11/) has no Polish section details. |
| E8 European long-distance path – Poland | — | 3084125 | Runs Vyšný Komárnik → Wołosate and largely shares the GSB east of Chyrowa ([thru-hiking.com](https://thru-hiking.com/the-main-beskid-trail-everything-you-need-to-know/)). Probably a duplicate. |
| E3 European long-distance path – Poland (west and east parts) | — | 3083510, 5242655 | Overlaps Sudetes trails; route and length not researched. |
| Eisenach–Budapest International Mountain Friendship Trail (EB), PL–CZ–SK | — | 4621732 (west), 4686198 (east) | Cross-border; Polish parts are fragments of a longer route. |
| The Loop – Great Beskid Loop (Wielka Pętla Beskidzka) | ~250 km | — | Launched by LOT Beskidy on existing PTTK trails with logo plaques and badges; walkers report ~14 days ([wiadomosci.ox.pl](https://wiadomosci.ox.pl/250-km-petelka-po-beskidach-jak-funkcjonuje-the-loop-po-ponad-roku-od-debiutu,89700/pdf)). New, and partly a "virtual" trail. |
| Pomeranian Way of St James (Camino Polaco del Norte) | ~900 km in PL, 35 stages | — | Braniewo → Szczecin/Świnoujście ([Pomorskie.travel](https://pomorskie.travel/en/articles/camino-in-pomorskie/)). |
| Other Polish Ways of St James (Wielkopolska, Dolnośląska / Via Regia, Małopolska, Świętokrzyska) | various | 15847947 (Świętokrzyska) | Poland had 36 marked sections totalling 7,150 km at the end of 2020 ([Radio Kraków](https://www.radiokrakow.pl/audycje/polskie-camino)). Camino Dolnośląska is 160 km in 6 stages ([Camino Ninja](https://www.caminoninja.com/caminos/camino-dolnoslaska)). |
| Szymbark Hills Trail (Szlak Wzgórz Szymbarskich) | 121.5 km | — | Tri-City → Sierakowice ([Pomorskie.travel](https://pomorskie.travel/?p=91044)); few beds on the way ([RMF](https://www.rmf24.pl/fakty/news-szlak-wzgorz-szymbarskich-nad-morzem-mozna-poczuc-sie-jak-w-,nId,5387835)). |
| Solska Forest Trail (Biłgoraj–Góreck Kościelny) | ? | — | Listed by [NG](https://www.national-geographic.pl/artykul/najlepsze-szlaki-piesze-w-polsce); length not found. |
| Masurian Trail (Szlak Mazurski, Ostróda–Piławki) | ? | — | Listed by [NG](https://www.national-geographic.pl/nauka/najlepsze-szlaki-piesze-w-polsce/); length not found. |
| Moszczona Valley Trail (Nurzec–Olendry) | ? | — | Listed by [NG](https://www.national-geographic.pl/nauka/najlepsze-szlaki-piesze-w-polsce/); may not reach 3 days. |
| Around the Lubusz Lakes (green loop from Gościkowo) | ~80 km | — | 3–4 days ([NG](https://www.national-geographic.pl/traveler/artykul/wakacje-na-szlaku-15-najpiekniejszych-tras-pieszych-w-polsce)); borderline on Rule 2. |
| Jurassic Strongholds Trail (Szlak Warowni Jurajskich, blue) | ? | — | Parallel to the Eagles' Nests trail ([8a.pl](https://8a.pl/8academy/?p=68091)). |
| Piast Castles Trail and Wieluń Jura Trail | 100–150 km | — | Mid-distance trails in [C&A's guide](https://www.c-and-a.com/pl/pl/shop/polskie-szlaki-sredniodystansowe); not verified. |
| Pogórzański (yellow) trail and other PTTK regional trails | ? | — | Listed in the [Rzeszów University guide](https://interregpl-sk2019-2021.ur.edu.pl/assets/files/Turystyka-wregionie_srodki_kor2_low.pdf). |

## 4. Open questions for a human check

**Conflicts to resolve**

- **GSB length and ascent.** 500 km (tourism board, GPS) vs 495.8 (OSM tag) vs 496 (Wikipedia). Ascent 21,545 m (Supergan) vs 21,969 m (mapa-turystyczna) vs 22,000 m. Days range from 14 to 28 depending on source.
- **GSS end point and length.** PTTK's resolution still names Paczków as the end; the marked extension goes to Prudnik. Length 440–445 km; ascent 10,625–14,169 m.
- **Szlak Karpacki end point.** Rzeszów–Grybów per OSM, FKT and the Compass guide; thru-hiking.com says Wołosate. Its ascent figure (147,390 m) is clearly wrong and was not used, so `total_ascent_m` is `null`. thru-hiking.com is also self-contradictory on waymarking.
- **GSŚ length.** 92.4 km (PTTK trail manager) vs 105 km (national park, NG). A blog commenter says 105 km includes ~12 km from Ujazd. PTTK grades it "very difficult"; travel media call it gentle. I set level 2.
- **E9 length and end.** 726.8 km to Gronowo (ERA) vs 607.9 km mapped in OSM ending at Braniewo.
- **Camino Polaco.** End point Trzemeszno (Pomorskie.travel, 650 km) vs Mogilno (Camino Ninja, 638.8 km); mapa-turystyczna gives 782.7 km from Dusznica. OSM splits the route into three relations (12634254, 12596217, 12599562), so `osm_relation_id` is `null`.
- **Smaller conflicts:** Eagles' Nests 163.91 vs 164.2 km, ascent 2,120 vs 2,569 m, 4–8 days; MSB 134 vs 137 km and 5,423–6,500 m; Kashubian 131 vs 138 km; Roztocze 190 vs 195 km; Tarnów–Wielki Rogacz "over 180" vs 191.4 km.

**Empty fields worth filling**

- **Nearest airports** are empty for most treks: only Camino Polaco (Camino Ninja) and GSS (Wrocław, via Hiiker) have a sourced answer.
- **Best months** are empty for GSS, GSŚ, Eagles' Nests, E9, MSB, Kashubian, Tarnów and Roztocze. No source gave months.
- **Total ascent** is missing for Karpacki, E9, Kashubian, Tarnów and Roztocze.
- **Sleeping** is empty or thin for Kashubian, Tarnów and Roztocze; booking advice is missing for GSS and MSB.
- **Karpacki best months** are my reading of "late spring to early autumn" as May–September.
- **GPX:** only GSŚ (PTTK), Eagles' Nests (mapa-turystyczna) and Camino Polaco (Camino Ninja) have a GPX source. Supergan offers a GSB GPX on his site, but I did not find the file URL.
- **Trip reports:** none found for Eagles' Nests, Camino Polaco, Kashubian, Tarnów and Roztocze. E9 has one (a 2012 beach walk, not the marked trail). Several reports have no hiking year.
- **Photos:** only one Commons photo each for Karpacki and Roztocze, and both show a town on the route rather than the trail. The three GSS photos are labelled "Główny Szlak Sudecki" without a location.
- **Water** is unsourced everywhere except GSB (frequent springs, some long dry ridge sections).

**Judgement calls**

- **GSB difficulty** is set to 3. There is no scrambling, but at a regular 16-day pace daily ascent is about 1,300 m.
- **E9** is entered as the full Polish section, not only the red Szlak Nadmorski (Świnoujście–Żarnowiec, 372 km in OSM).
- **"Official site"** for the GSB, Kashubian Trail and Eagles' Nests is a regional tourism-board page, not a dedicated trail authority. I counted it, but it is a weaker signal.
- **Cross-border:** no Polish trek in the included list crosses a border. The Camino Polaco links to the Camino Lituano at the Lithuanian border, the E-paths continue abroad, and the EB trail is deferred.
