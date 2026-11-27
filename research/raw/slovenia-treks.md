# Multi-day treks in Slovenia: research report

Last verified: 2026-11-27. 18 treks are included and ranked, 9 are excluded, and 20+ candidates are deferred for a human decision.

## How to read this

- **Ranking** counts the Step 2 signals that apply to each trek (0–5). Ties are broken by how many first-hand trip reports were found.
- **Every value has a source URL** in `sources`. If no reliable source was found, the field is `null`. Values the sources disagree on are listed in `conflicts`, with the official figure in the main field where one exists.
- **OSM IDs** were checked against the Waymarked Trails API (name, operator and mapped length). The Juliana Trail relation exists, but only about 161 km of the 270 km loop is mapped.
- **Photos** were checked in the Commons API for author and licence. A photo is only used if its Commons title or description ties it to the trail or to a named place the sources put on the route.
- **Water and exposure flags** are `null` when no source states them, as the brief asks. They are not guesses of `false`.
- **"Official website"** for the lower-ranked regional trails is often a tourist-board page (slovenia-outdoor.com / slovenia.info), not a dedicated trail authority. I counted it, but it is a weaker signal.

## 1. Included treks, ranked

| Rank | Trek | Countries | km | Days | Difficulty | Signals |
|---|---|---|---|---|---|---|
| 1 | Slovenian Mountain Trail (Slovenska planinska pot / Transverzala) | SI | 617.5 | 28–49 | 4 | 5 |
| 2 | Juliana Trail | SI, IT | 270 | 16–21 | 2 | 5 |
| 3 | Alpe-Adria-Trail | AT, SI, IT | 750 | 43–43 | 2 | 5 |
| 4 | Walk of Peace from the Alps to the Adriatic (Pot miru) | SI, IT | — | 13–19 | 3 | 5 |
| 5 | European long-distance path E6 – Slovenia (Ciglarjeva pot) | SI | 350 | 20–20 | 2 | 4 |
| 6 | European long-distance path E7 – Slovenia (Naprudnikova pot) | SI | 600 | 30–30 | 2 | 4 |
| 7 | Via Alpina | IT, SI, AT, DE, LI, CH, FR, MC | 2000 | 116–116 | 4 | 3 |
| 8 | Julius Kugy Alpine Trail (Julius-Kugy-Dreiländerweg / Pot Juliusa Kugya) | AT, SI, IT | 720 | 30–30 | 4 | 3 |
| 9 | Karawanken-Karavanke Trail (Geopark) | AT, SI | 265 | 13–13 | 3 | 3 |
| 10 | Loka Mountain Trail (Loška planinska pot) | SI | 188 | 12–12 | — | 2 |
| 11 | Via Dinarica Slovenia | SI | 159 | 7–10 | 2 | 2 |
| 12 | Camino Slovenia – Central Way (Jakobova pot, Dolenjska and Primorska branches) | SI, IT | — | — | — | 2 |
| 13 | Pohorje-Kozjak Trail | SI | 187.5 | — | 2 | 1 |
| 14 | Koroška Mountain Trail (Koroška planinska pot) | SI | 230 | 10–12 | 3 | 1 |
| 15 | Karavanke Trail | SI | 143 | 7–7 | 2 | 1 |
| 16 | Zasavje Mountain Trail (Zasavska planinska pot) | SI | 200 | 12–12 | 2 | 1 |
| 17 | Carsus Trail | SI | 103 | 6–6 | 2 | 1 |
| 18 | Trdina Trail (Trdinova pot) | SI | 150 | — | — | 0 |

### 1. Slovenian Mountain Trail (Slovenska planinska pot / Transverzala)

```yaml
id: slovenian-mountain-trail
name: Slovenian Mountain Trail (Slovenska planinska pot / Transverzala)
countries: [SI]
region: Pohorje, Kamnik-Savinja Alps, Karavanke, Julian Alps, Karst
one_liner: "Slovenia's oldest and hardest long trail, hut-to-hut from Maribor over Triglav to the Adriatic, with protected (via ferrata-style) sections."
route:
  type: point-to-point
  start: Maribor (Spodnje Radvanje)
  end: Ankaran (Debeli rtič)
  osm_relation_id: 6443086
  gpx_source: null
distance_km: 617.5
total_ascent_m: 37300
typical_days: { min: 28, max: 49 }
when:
  best_months: [June, July, August, September]
  open_season: "Main season mid-June to end of September; some higher huts only open from the third weekend in June"
sleeping:
  type: huts
  booking_ahead: recommended
  notes: "Official site lists 49 obligatory + 6 optional huts. Book a few days ahead around Triglav and in the Julian and Kamnik-Savinja Alps in July-August; many huts are cash-only."
difficulty:
  level: 4
  reason: "Long high-mountain days; grade-3 sections with steel pegs and cables (Kamnik-Savinja Alps, Triglav); helmet and via ferrata kit strongly recommended."
logistics:
  getting_to_start: "Maribor; every stage start and end is served by public transport, with Ljubljana as the hub."
  leaving_from_end: "Ends at Debeli rtič near Ankaran; like every stage end, it is reachable by public transport."
  nearest_airports: [Ljubljana Jože Pučnik (Brnik)]
flags:
  permit: none
  permit_notes: "Optional stamp booklet (Dnevnik SPP) for the completion badge."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: true
links:
  official_site: https://www.slovenska-planinska-pot.si/
establishment_signals:
  - "official status (national trail of the Alpine Association of Slovenia)"
  - "waymarked along the whole route"
  - "official website"
  - "published guidebook (Cicerone; PZS)"
  - "regularly covered in trip reports"
trip_reports:
  - url: https://travelspot06.blogspot.com/2023/01/slovenian-mountain-trail-logistics-gear.html
    title: "Slovenian Mountain Trail: Logistics, Gear and Planning"
    year_hiked: 2022
    summary: "10 hiking days in September 2022 from Maribor toward Bohinj; long descents were slower than expected and popular huts needed reservations."
  - url: https://sites.google.com/view/edventuretrips-slovenia/venture/slovenian-mountain-trail/section-1
    title: "Slovenian Mountain Trail – Section 1 (Pohorje)"
    year_hiked: 2025
    summary: "Day-by-day log of the Pohorje section from Maribor in August 2025, hut to hut through forest."
  - url: https://sites.google.com/view/edventuretrips-slovenia/venture/slovenian-mountain-trail/section-3
    title: "Slovenian Mountain Trail – Section 3 (Karawanks)"
    year_hiked: 2025
    summary: "Tržič to Mojstrana over the Karawanks in late August 2025, with hut prices and a whiteout on the ridge."
  - url: https://sites.google.com/view/edventuretrips-slovenia/venture/slovenian-mountain-trail/section-4
    title: "Slovenian Mountain Trail – Section 4 (Julian Alps)"
    year_hiked: 2025
    summary: "Rudno Polje over Triglav (Kredarica, Dolič) to Bohinj in September 2025 in difficult weather."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Slovenska_planinska_pot_-_Osankarica_(3626122380).jpg
    author: breki74 from Maribor, Slovenia
    license: CC BY-SA 2.0
    shows: The trail at Osankarica on Pohorje
  - file_url: https://commons.wikimedia.org/wiki/File:Slovenska_planinska_pot_-_proti_Mariboru_-_panoramio.jpg
    author: dominkod
    license: CC BY 3.0
    shows: A section of the trail heading toward Maribor
  - file_url: https://commons.wikimedia.org/wiki/File:Tinjan._Tocka_SPP.JPG
    author: Lacen
    license: CC BY 2.5
    shows: Trail checkpoint in Tinjan (coastal end)
sources:
  distance_km: https://www.slovenska-planinska-pot.si/
  total_ascent_m: https://www.slovenska-planinska-pot.si/
  typical_days: https://www.slovenska-planinska-pot.si/
  best_months: https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide
  open_season: https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide
  sleeping: https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide
  difficulty: https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide
  logistics: https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide
  permit: https://www.slovenska-planinska-pot.si/
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/6443086
conflicts:
  - field: distance_km
    values:
      - { value: 617.5, source: "https://www.slovenska-planinska-pot.si/" }
      - { value: 616.4, source: "https://www.slovenska-planinska-pot.si/" }
      - { value: 599, source: "https://www.slovenia.info/en/things-to-do/active-holidays/hiking-backpacking/long-distance-trails" }
      - { value: 550, source: "https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide" }
  - field: typical_days
    values:
      - { value: 37, source: "https://www.slovenska-planinska-pot.si/" }
      - { value: 28, source: "https://www.slovenia.info/en/things-to-do/active-holidays/hiking-backpacking/long-distance-trails" }
      - { value: 49, source: "https://www.cicerone.co.uk/the-slovene-mountain-trail-a-complete-planning-guide" }
  - field: total_ascent_m
    values:
      - { value: 37300, source: "https://www.slovenska-planinska-pot.si/" }
      - { value: 45200, source: "https://en.wikipedia.org/wiki/Slovenian_Mountain_Hiking_Trail" }
last_verified: 2026-11-27
```

### 2. Juliana Trail

```yaml
id: juliana-trail
name: Juliana Trail
countries: [SI, IT]
region: Julian Alps
one_liner: "Valley-and-village loop around Triglav National Park, inn to inn with trains and buses on most stages, no mountain huts."
route:
  type: loop
  start: Kranjska Gora
  end: Kranjska Gora
  osm_relation_id: 11724854
  gpx_source: https://julian-alps.com/en/tour/backpacking/juliana-trail-overall-tour/34541732/
distance_km: 270
total_ascent_m: null
typical_days: { min: 16, max: 21 }
when:
  best_months: [April, May, September, October]
  open_season: "Late March to late October; some low stages passable year-round without snow"
sleeping:
  type: guesthouses
  booking_ahead: required
  notes: "No mountain huts on the trail. Official advice is to book at least 3 months ahead; high season (late June to late September) can sell out. Camping only on campsites, strictly enforced in Triglav National Park."
difficulty:
  level: 2
  reason: "Stages of about 8-23 km with up to about 1,000 m ascent on the steepest days; no technical sections in the sources."
logistics:
  getting_to_start: "Trains serve Jesenice, Bled, Bohinjska Bistrica, Podbrdo and Most na Soči, so you can start at many stages."
  leaving_from_end: "Loop back to Kranjska Gora; Arriva buses run from Kranjska Gora."
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://julian-alps.com/en/p/juliana-trail/42271466/
establishment_signals:
  - "official status (Julian Alps destination / Triglav National Park area trail)"
  - "waymarked along the whole route"
  - "official website"
  - "published guidebook (official guide book; Cicerone)"
  - "regularly covered in trip reports"
trip_reports:
  - url: https://www.outsideonline.com/outdoor-adventure/hiking-and-backpacking/juliana-trail-trek-slovenia?scope=anon
    title: "A New Trail in Slovenia Takes You Back in Time (Outside)"
    year_hiked: 2019
    summary: "Walked the loop over about two and a half weeks in autumn 2019, just after it opened; the village hospitality was the highlight."
  - url: https://www.afar.com/magazine/what-it-was-like-to-hike-slovenias-juliana-trail
    title: "Learning the Value of Slowing Down on Slovenia's Juliana Trail (AFAR)"
    year_hiked: null
    summary: "Nine days of selected stages in off-season April; a snowstorm forced her to skip stage 2."
  - url: https://charlieontravel.com/juliana-trail-slovenia/
    title: "Hiking Slovenia's Juliana Trail"
    year_hiked: null
    summary: "Three days (stages 5-7, Bled to Bohinjska Bistrica, walked in reverse) in September; finding beds was the hard part, so book months ahead."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Juliana_trail.jpg
    author: Hladnikm
    license: CC BY-SA 4.0
    shows: "Juliana Trail (Commons description says only 'Juliana trail')"
sources:
  distance_km: https://julian-alps.com/en/p/juliana-trail/42271466/
  total_ascent_m: https://julian-alps.com/en/p/juliana-trail/42271466/
  typical_days: https://cicerone.co.uk/the-juliana-trail-what-you-need-to-know
  best_months: https://julian-alps.com/en/p/juliana-trail-q-a/50160113/
  open_season: https://julian-alps.com/en/p/juliana-trail-q-a/50160113/
  sleeping: https://julian-alps.com/en/p/juliana-trail-q-a/50160113/
  difficulty: https://julian-alps.com/en/p/juliana-trail/42271466/
  logistics: https://julian-alps.com/en/p/juliana-trail-q-a/50160113/
  permit: https://julian-alps.com/en/p/juliana-trail-q-a/50160113/
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/11724854
conflicts:
  - field: total_ascent_m
    values:
      - { value: 7163, source: "https://www.slovenia.info/en/press-centre/press-releases/10492-the-new-270-km-trail-through-the-julian-alps-is-also-officially-open" }
      - { value: 7412, source: "https://julian-alps.com/en/p/juliana-trail/42271466/" }
      - { value: 10000, source: "https://www.slovenia.info/en/stories/juliana-trail-a-long-distance-hiking-trail" }
  - field: distance_km
    values:
      - { value: "270 (16-stage core loop)", source: "https://julian-alps.com/en/p/juliana-trail/42271466/" }
      - { value: "330 (20 stages incl. 4 Brda stages)", source: "https://cicerone.co.uk/the-juliana-trail-what-you-need-to-know" }
last_verified: 2026-11-27
```

### 3. Alpe-Adria-Trail

```yaml
id: alpe-adria-trail
name: Alpe-Adria-Trail
countries: [AT, SI, IT]
region: Hohe Tauern, Carinthian lakes, Karavanke, Julian Alps, Soča Valley, Brda, Karst
one_liner: "Glacier to sea in 43 signposted stages through Austria, Slovenia and Italy, inn to inn with a booking centre and luggage transfers."
route:
  type: point-to-point
  start: Kaiser-Franz-Josefs-Höhe (Grossglockner, Austria)
  end: Muggia (Italy)
  osm_relation_id: 3176522
  gpx_source: https://www.alpe-adria-trail.com/user_upload_AAT/user_upload/Service/alpe-adria-trail-gesamtverlauf-202305.gpx
distance_km: 750
total_ascent_m: null
typical_days: { min: 43, max: 43 }
when:
  best_months: [April, May, June, July, August, September, October]
  open_season: "Slovenian part best April to end of October (March/November in good conditions); Italian part Cividale-Muggia year-round; Vršič and Solarji passes can hold snow in spring"
sleeping:
  type: guesthouses
  booking_ahead: recommended
  notes: "Each stage ends where there is accommodation (chalets, farms, guesthouses, hotels); official booking centres arrange packages and luggage transfer."
difficulty:
  level: 2
  reason: "Easy to medium; no parts marked very difficult or dangerous, but Slovenian stages climb to about 1,200 m and run up to 25 km."
logistics:
  getting_to_start: "Start at the end of the Grossglockner High Alpine Road; nearest airports Salzburg (about 2.5 h) and Innsbruck."
  leaving_from_end: "Muggia is next to Trieste (train station on the route list)."
  nearest_airports: [Salzburg, Innsbruck, Ljubljana, Trieste, Klagenfurt, Venice]
flags:
  permit: none
  permit_notes: "Crosses Schengen internal borders; carry ID."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://www.alpe-adria-trail.com/en/the-trail/
establishment_signals:
  - "official status (international trail run by three tourism regions)"
  - "waymarked along the whole route"
  - "official website"
  - "published guidebook (Rother)"
  - "regularly covered in trip reports"
trip_reports:
  - url: https://slovenia.si/this-is-slovenia/hiking-in-the-garden-of-eden
    title: "Hiking in the Garden of Eden"
    year_hiked: 2019
    summary: "Four days from Kranjska Gora via Trenta and Bovec to Tolmin (partly on the Walk of Peace); scenery and food were the highlights."
  - url: https://www.outdoor-magazin.com/wanderwege/kaernten-slowenien-italien-der-alpe-adria-trail/
    title: "Kärnten, Slowenien, Italien: Der Alpe-Adria-Trail"
    year_hiked: null
    summary: "Three weeks on the trail (German); they ran out of time before reaching the Adriatic. Article from 2015."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Alpe_Adria_Trail_Markierung.jpg
    author: Naturpuur
    license: CC BY 4.0
    shows: Alpe-Adria-Trail waymark
  - file_url: https://commons.wikimedia.org/wiki/File:Kamnica_Graben,_Alpe_Adria_Trail,_Etappe_27_über_den_Kolovrat_(1169_m).jpg
    author: Naturpuur
    license: CC BY 4.0
    shows: Stage 27 over the Kolovrat ridge from Tolmin
  - file_url: https://commons.wikimedia.org/wiki/File:Soca-trail-21.jpg
    author: MartinThoma
    license: CC0
    shows: Soča Trail section (stage 24)
sources:
  distance_km: https://www.alpe-adria-trail.com/en/the-trail/
  total_ascent_m: null
  typical_days: https://www.kaernten.at/berglust/weitwanderwege/alpe-adria-trail
  best_months: https://www.soca-valley.com/en/activities-presentation/alpe-adria-trail/create-your-own-package
  open_season: https://www.soca-valley.com/en/activities-presentation/alpe-adria-trail/create-your-own-package
  sleeping: https://www.alpe-adria-trail.com/en/the-trail/
  difficulty: https://www.soca-valley.com/en/activities-presentation/alpe-adria-trail/create-your-own-package
  logistics: https://www.austria.info/us/austriantime/alpe-adria-trail
  permit: https://www.soca-valley.com/en/activities-presentation/alpe-adria-trail/create-your-own-package
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/3176522
conflicts:
  - field: distance_km
    values:
      - { value: 750, source: "https://www.alpe-adria-trail.com/en/the-trail/" }
      - { value: 680, source: "https://www.slovenia.info/en/press-centre/news-of-the-tourism-press-agency/6319-the-alpe-adria-trail-from-glaciers-to-the-sea" }
      - { value: 690, source: "https://www.outdoor-magazin.com/wanderwege/kaernten-slowenien-italien-der-alpe-adria-trail/" }
last_verified: 2026-11-27
```

### 4. Walk of Peace from the Alps to the Adriatic (Pot miru)

```yaml
id: walk-of-peace
name: Walk of Peace from the Alps to the Adriatic (Pot miru)
countries: [SI, IT]
region: Upper Soča Valley, Brda, Karst, Isonzo Front
one_liner: "Follows the First World War Isonzo Front past some 300 heritage sites from the Julian Alps to Trieste, demanding in the mountains, gentle at the end."
route:
  type: point-to-point
  start: Log pod Mangartom
  end: Trieste (Italy)
  osm_relation_id: null
  gpx_source: null
distance_km: null
total_ascent_m: 19130
typical_days: { min: 13, max: 19 }
when:
  best_months: [May, June, July, August, September, October]
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 3
  reason: "Officially a demanding trail; high point Mt Krn (2,244 m) and about 19,000 m of ascent over 13-19 days."
logistics:
  getting_to_start: "Summer buses Bovec - Log pod Mangartom (hop on-hop off)."
  leaving_from_end: "Ends in Trieste."
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: https://www.thewalkofpeace.com/
establishment_signals:
  - "official status (on Slovenia's UNESCO tentative list; cross-border Interreg trail)"
  - "waymarked along the whole route"
  - "official website"
  - "published guidebook (official WoP guidebook 2024)"
  - "regularly covered in trip reports"
trip_reports:
  - url: https://www.hiddeneurope.co.uk/the-magazine/issues/hidden-europe-70/of-mountains-and-memories-slovenias-walk-of-peace/
    title: "Of mountains and memories: Slovenia's Walk of Peace (hidden europe 70)"
    year_hiked: null
    summary: "Rudolf Abraham's first-person account of walking the trail via Drežnica and the Isonzo Front sites; published July 2023."
  - url: https://slovenia.si/this-is-slovenia/hiking-in-the-garden-of-eden
    title: "Hiking in the Garden of Eden"
    year_hiked: 2019
    summary: "Four days in 2019 from Kranjska Gora to Tolmin; the last part followed the Walk of Peace."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Pot_Miru_Wegweiser_am_Alpe_Adria_Trail_in_Slowenien.jpg
    author: Naturpuur
    license: CC BY 4.0
    shows: Walk of Peace (Pot miru) signpost in Slovenia
  - file_url: https://commons.wikimedia.org/wiki/File:Freilichtmuseum_am_Kolovrat_(1114_m)_beim_"Pot_Miru",_Friedensweg_in_Tolmin,_Slowenien,_EU.jpg
    author: Naturpuur
    license: CC BY 4.0
    shows: Kolovrat open-air WWI museum on the trail above Tolmin
  - file_url: https://commons.wikimedia.org/wiki/File:Memorial_in_Tolmin,_Slovenia,_along_the_Walk_of_Peace_from_the_Alps_to_the_Adriatic_sea_in_Italy,_EU.jpg
    author: Naturpuur
    license: CC BY 4.0
    shows: Memorial near Tolmin along the trail
sources:
  distance_km: https://thewalkofpeace.com/?p=13994
  total_ascent_m: https://www.thewalkofpeace.com/wp-content/uploads/2024/03/Walk-of-Peace-information-for-tourist-providers-ANG-1.pdf
  typical_days: https://thewalkofpeace.com/?p=13994
  best_months: https://www.thewalkofpeace.com/?p=4093
  open_season: null
  sleeping: null
  difficulty: https://thewalkofpeace.com/?p=13994
  logistics: https://www.thewalkofpeace.com/?p=1773
  permit: https://thewalkofpeace.com/?p=13994
conflicts:
  - field: distance_km
    values:
      - { value: "500+ (whole network, 30 sections)", source: "https://thewalkofpeace.com/?p=13994" }
      - { value: 230, source: "https://www.hiddeneurope.co.uk/the-magazine/issues/hidden-europe-70/of-mountains-and-memories-slovenias-walk-of-peace/" }
      - { value: 220, source: "https://www.lonelyplanet.com/news/best-long-haul-treks-slovenia" }
  - field: total_ascent_m
    values:
      - { value: 19130, source: "https://www.thewalkofpeace.com/wp-content/uploads/2024/03/Walk-of-Peace-information-for-tourist-providers-ANG-1.pdf" }
      - { value: 19170, source: "https://www.go2025.eu/en/imports/poi/vipavskadolina/walk-of-peace-from-the-alps-to-the-adriatic" }
last_verified: 2026-11-27
```

### 5. European long-distance path E6 – Slovenia (Ciglarjeva pot)

```yaml
id: e6-slovenia-ciglar-trail
name: European long-distance path E6 – Slovenia (Ciglarjeva pot)
countries: [SI]
region: Pohorje, Posavje Hills, Dinaric Karst, Slovenian coast
one_liner: "Slovenian leg of the Baltic-Adriatic E-path, crossing the country north to south through forests and hills to the sea at Strunjan."
route:
  type: point-to-point
  start: Radlje ob Dravi (Radelj border crossing)
  end: Strunjan
  osm_relation_id: 1191538
  gpx_source: https://slovenia-outdoor.com/en/map-detail-2/?id=37421378
distance_km: 350
total_ascent_m: null
typical_days: { min: 20, max: 20 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 2
  reason: "Rated easy to medium; mostly hills and forest."
logistics:
  getting_to_start: "Trains and buses cover most of Slovenia."
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Optional stamps (39 checkpoints) for a memorial badge."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://era-ewv-ferp.org/?p=8217
establishment_signals:
  - "official status (European long-distance path E6)"
  - "waymarked along the whole route"
  - "official website (ERA / KEUPS)"
  - "published guidebook (Cortese - Evropska pešpot E6)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Strunjan-cliffs.jpg
    author: Mihael Simonic
    license: CC BY-SA 3.0
    shows: Strunjan cliffs at the southern end
  - file_url: https://commons.wikimedia.org/wiki/File:Strunjan_cliff_bottom.jpg
    author: Yerpo
    license: CC BY-SA 4.0
    shows: Strunjan cliff from Moon Bay
sources:
  distance_km: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  total_ascent_m: null
  typical_days: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  logistics: https://era-ewv-ferp.org/?p=8217
  permit: https://dirros.openscience.si/Dokument.php?id=13252
  waymarked: https://www.kozjanski-park.si/eng/wp-content/uploads/2025/03/ERP-RK.pdf
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/1191538
conflicts:
  - field: distance_km
    values:
      - { value: 350, source: "https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/" }
      - { value: 315, source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/1191538" }
  - field: route.end
    values:
      - { value: Strunjan, source: "https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/" }
      - { value: "continues past Portorož to Sečovlje", source: "https://rtvslo.si/news-in-english/from-italy-to-croatia-another-european-walking-trail-will-cross-slovenia/409521" }
last_verified: 2026-11-27
```

### 6. European long-distance path E7 – Slovenia (Naprudnikova pot)

```yaml
id: e7-slovenia-naprudnik-trail
name: European long-distance path E7 – Slovenia (Naprudnikova pot)
countries: [SI]
region: Soča Valley, Cerkno Hills, Dolenjska, Kozjansko, Pomurje
one_liner: "West-to-east crossing of Slovenia on the Atlantic-Black Sea E-path, from the Soča at Robič to the Hungarian border at Hodoš."
route:
  type: point-to-point
  start: Robič (Italian border)
  end: Hodoš (Hungarian border)
  osm_relation_id: 11232818
  gpx_source: null
distance_km: 600
total_ascent_m: null
typical_days: { min: 30, max: 30 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 2
  reason: "Rated easy and medium; highest point Mt Porezen."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Optional stamps (42 checkpoints) for a memorial badge."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://era-ewv-ferp.org/?p=14188
establishment_signals:
  - "official status (European long-distance path E7)"
  - "waymarked along the whole route"
  - "official website (ERA / KEUPS)"
  - "published guidebook (Cortese - Evropska pešpot E7)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Porezen.jpg
    author: Mhladnik
    license: CC BY-SA 4.0
    shows: Mt Porezen, the highest point of the Slovenian E7
  - file_url: https://commons.wikimedia.org/wiki/File:Porezen_-_panoramio.jpg
    author: dominkod
    license: CC BY 3.0
    shows: Mt Porezen
sources:
  distance_km: https://rtvslo.si/news-in-english/from-italy-to-croatia-another-european-walking-trail-will-cross-slovenia/409521
  total_ascent_m: null
  typical_days: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  logistics: null
  permit: https://rtvslo.si/news-in-english/from-italy-to-croatia-another-european-walking-trail-will-cross-slovenia/409521
  waymarked: https://www.kozjanski-park.si/eng/wp-content/uploads/2025/03/ERP-RK.pdf
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/11232818
conflicts:
  - field: distance_km
    values:
      - { value: 600, source: "https://rtvslo.si/news-in-english/from-italy-to-croatia-another-european-walking-trail-will-cross-slovenia/409521" }
      - { value: "634 (OSM mapped length)", source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/11232818" }
last_verified: 2026-11-27
```

### 7. Via Alpina

```yaml
id: via-alpina
name: Via Alpina
countries: [IT, SI, AT, DE, LI, CH, FR, MC]
region: The whole Alpine arc (enters via the Karst and Julian Alps in Slovenia)
one_liner: "The trans-Alpine route from Trieste to Monaco across all eight Alpine countries; since 2024 a single main route of 116 stages."
route:
  type: point-to-point
  start: Muggia / Trieste (Italy)
  end: Monaco
  osm_relation_id: 20014200
  gpx_source: null
distance_km: 2000
total_ascent_m: null
typical_days: { min: 116, max: 116 }
when:
  best_months: [June, July, August, September, October]
  open_season: "Season usually June to October; snow above 2,000 m can last into early July and return from late September"
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Alpine club huts and village accommodation; call huts ahead, ideally the evening before; no route-wide booking system."
difficulty:
  level: 4
  reason: "Alpine route up to about 3,000 m with exposed sections and scree; snow possible early and late in the season."
logistics:
  getting_to_start: "Start near Trieste; the route often passes close to railway stations."
  leaving_from_end: "Ends in Monaco."
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Bivouac rules vary by country and are restricted in national parks."
  waymarked: partial
  water_scarce: null
  exposed_or_via_ferrata: true
links:
  official_site: https://www.via-alpina.org/
establishment_signals:
  - "official status (international trail run by CIPRA)"
  - "official website"
  - "regularly covered in trip reports"
trip_reports:
  - url: https://joachim-breitner.de/blog/791-The_Via_Alpina_red_trail_through_Slovenia
    title: The Via Alpina red trail through Slovenia
    year_hiked: 2022
    summary: "Hiked the Slovenian part from the Julian Alps to Trieste in July 2022; trails well marked but Via Alpina rarely signed, so GPS was needed."
  - url: https://vakantio.de/en/blog/vakantiodeaneah/via-alpina
    title: "Via Alpina (Slovenia) – Travel diary"
    year_hiked: 2024
    summary: "Solo start near Trieste in May 2024; water was the biggest issue on the Karst, with few springs and huts still closed."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Via_Alpine_Wegweiser_Oberthörl,_Kärnten.jpg
    author: Naturpuur
    license: CC BY 4.0
    shows: Via Alpina signpost at Oberthörl / Zgornja Vrata on the Austria-Slovenia border
  - file_url: https://commons.wikimedia.org/wiki/File:Via_Alpina_crosses_the_Alps_to_Trieste,_trails_connecting_to_Monaco,_Slovenia,_Austria,_Germany,_Liechtenstein,_Switzerland_and_France.jpg
    author: Naturpuur
    license: CC BY-SA 4.0
    shows: "Via Alpina (exact subject unclear from the Commons description; check before use)"
sources:
  distance_km: https://www.via-alpina.org/via-alpina/
  total_ascent_m: null
  typical_days: https://www.cipra.org/en/cipra/about-cipra/networks/via-alpina
  best_months: https://www.via-alpina.org/faq/
  open_season: https://www.via-alpina.org/faq/
  sleeping: https://www.via-alpina.org/faq/
  difficulty: https://www.via-alpina.org/faq/
  logistics: https://www.via-alpina.org/faq/
  permit: https://www.via-alpina.org/faq/
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/20014200
conflicts:
  - field: distance_km
    values:
      - { value: "about 2,000 (2024 route)", source: "https://www.via-alpina.org/via-alpina/" }
      - { value: "2,600 (old Red Trail, Eichmann book)", source: "https://www.via-alpina.org/via-alpina/" }
last_verified: 2026-11-27
```

### 8. Julius Kugy Alpine Trail (Julius-Kugy-Dreiländerweg / Pot Juliusa Kugya)

```yaml
id: julius-kugy-alpine-trail
name: Julius Kugy Alpine Trail (Julius-Kugy-Dreiländerweg / Pot Juliusa Kugya)
countries: [AT, SI, IT]
region: Karavanke, Kamnik-Savinja Alps, Julian Alps, Carnic Alps
one_liner: "720 km alpine-club loop around the Southern Alps through Carinthia, Slovenia and Friuli, with big climbs and short exposed scrambles."
route:
  type: loop
  start: Bertahütte (Carinthia, Austria)
  end: Bertahütte (Carinthia, Austria)
  osm_relation_id: 10909145
  gpx_source: null
distance_km: 720
total_ascent_m: 45000
typical_days: { min: 30, max: 30 }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Stage ends alternate between mountain huts (e.g. Kredarica, Wolayersee Hütte) and guesthouses in villages."
difficulty:
  level: 4
  reason: "For experienced hikers: exposed sections with easy climbing, 3 km of secured path, high point 2,401 m, about 1,500 m ascent per day on average."
logistics:
  getting_to_start: "Public transport to Feistritz im Rosental for stage 1 (Bertahütte)."
  leaving_from_end: "Loop back to Bertahütte."
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: true
links:
  official_site: https://www.julius-kugy-alpine-trail.com
establishment_signals:
  - "official status (created by the alpine clubs of Carinthia + Slovenia + Friuli-Venezia Giulia)"
  - "waymarked along the whole route"
  - "official website"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Julius-Kugy-Dreiländerweg_in_30_Etappen.jpg
    author: Vwulz
    license: CC BY-SA 4.0
    shows: Overview map of the 30-stage main route
  - file_url: https://commons.wikimedia.org/wiki/File:Villach_Warmbad,_Julius_Kugy_Alpine_Trail,_Etappe_in_Kärnten.jpg
    author: Naturpuur
    license: CC BY-SA 4.0
    shows: Trail stage at Villach Warmbad, Carinthia
  - file_url: https://commons.wikimedia.org/wiki/File:Julius_Kugy_Alpine_Trail,_Kärnten_-_Slovenija_-_Friuli_Venezia_Giulia.jpg
    author: Naturpuur
    license: CC BY-SA 4.0
    shows: Trail information board in Judendorf (Villach)
sources:
  distance_km: https://www.julius-kugy-alpine-trail.com
  total_ascent_m: https://www.julius-kugy-alpine-trail.com
  typical_days: https://www.julius-kugy-alpine-trail.com
  best_months: null
  open_season: null
  sleeping: https://www.nassfeld.at/en/Summer-World/Hike-World/Berge-erleben/Weitwanderungen/Julius-Kugy-Dreilaenderweg
  difficulty: https://www.julius-kugy-alpine-trail.com
  logistics: https://www.bergwelten.com/t/w/42140
  permit: null
  route_type: https://www.bergwelten.com/t/w/42173
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/list/search?query=Julius%20Kugy
conflicts:
  - field: total_ascent_m
    values:
      - { value: 45000, source: "https://www.julius-kugy-alpine-trail.com" }
      - { value: 44000, source: "https://www.visitvillach.at/en/julius-kugy-alpine-trail.html" }
  - field: route.type
    values:
      - { value: loop, source: "https://www.julius-kugy-alpine-trail.com" }
      - { value: "point-to-point (Berta Hut / Kamniška koča to Wolayersee Hut / Dobratsch)", source: "https://www.nassfeld.at/en/Summer-World/Hike-World/Berge-erleben/Weitwanderungen/Julius-Kugy-Dreilaenderweg" }
last_verified: 2026-11-27
```

### 9. Karawanken-Karavanke Trail (Geopark)

```yaml
id: karawanken-karavanke-trail
name: Karawanken-Karavanke Trail (Geopark)
countries: [AT, SI]
region: Karavanke / Karawanken (UNESCO Global Geopark)
one_liner: "13-stage geology loop through the Karavanke Geopark on both sides of the Austria-Slovenia border, alpine in places."
route:
  type: loop
  start: Zell-Pfarre / Sele (Austria)
  end: Zell-Pfarre / Sele (Austria)
  osm_relation_id: null
  gpx_source: https://www.geopark-karawanken.at/en/seite/view/karawankentrail
distance_km: 265
total_ascent_m: null
typical_days: { min: 13, max: 13 }
when:
  best_months: [June, July, August, September, October]
  open_season: "About June to October; high alpine stages only after snowmelt"
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Huts, guesthouses or villages along the route."
difficulty:
  level: 3
  reason: "Moderately difficult to difficult; alpine paths with exposed terrain needing sure footing; high point Hochobir 2,139 m; 5-10 h stages."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "Crosses the Austria-Slovenia border; carry a passport or ID card."
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: true
links:
  official_site: https://www.geopark-karawanken.at/en/seite/view/karawankentrail
establishment_signals:
  - "official status (UNESCO Global Geopark trail)"
  - "official website"
  - "published guidebook (printed Karawanken Trail Guide from the Geopark)"
trip_reports: []
photos: []
sources:
  distance_km: https://www.geopark-karawanken.at/en/seite/view/karawankentrail
  total_ascent_m: null
  typical_days: https://www.geopark-karawanken.at/en/seite/view/karawankentrail
  best_months: https://www.kaernten.at/wandern/weitwandern/karawanken-trail/
  open_season: https://www.kaernten.at/wandern/weitwandern/karawanken-trail/
  sleeping: https://www.kaernten.at/wandern/weitwandern/karawanken-trail/
  difficulty: https://www.kaernten.at/wandern/weitwandern/karawanken-trail/
  logistics: null
  permit: https://www.kaernten.at/wandern/weitwandern/karawanken-trail/
last_verified: 2026-11-27
```

### 10. Loka Mountain Trail (Loška planinska pot)

```yaml
id: loka-mountain-trail
name: Loka Mountain Trail (Loška planinska pot)
countries: [SI]
region: Škofja Loka Hills (Poljanska and Selška valleys)
one_liner: "Regional mountain trail around the Škofja Loka hills, 12 stages with stamp checkpoints."
route:
  type: null
  start: Škofja Loka
  end: Škofja Loka
  osm_relation_id: 18549841
  gpx_source: null
distance_km: 188
total_ascent_m: null
typical_days: { min: 12, max: 12 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: null
  reason: null
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "32 stamp checkpoints."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: https://www.visitskofjaloka.si/en/experiences/active-breaks/hiking
establishment_signals:
  - "waymarked along the whole route"
  - "published guidebook (Loška planinska pot - Razvojna agencija Sora 2023)"
trip_reports: []
photos: []
sources:
  distance_km: https://plus.cobiss.net/cobiss/si/en/bib/155621891
  total_ascent_m: null
  typical_days: https://plus.cobiss.net/cobiss/si/en/bib/155621891
  best_months: null
  open_season: null
  sleeping: null
  difficulty: null
  logistics: null
  permit: https://www.visitskofjaloka.si/en/experiences/active-breaks/hiking
  waymarked: https://www.visitskofjaloka.si/en/experiences/active-breaks/hiking
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/18549841
conflicts:
  - field: distance_km
    values:
      - { value: 188, source: "https://plus.cobiss.net/cobiss/si/en/bib/155621891" }
      - { value: 184, source: "https://wiki.openstreetmap.org/wiki/Sl:Slovenian_Hiking_Routes" }
last_verified: 2026-11-27
```

### 11. Via Dinarica Slovenia

```yaml
id: via-dinarica-slovenia
name: Via Dinarica Slovenia
countries: [SI]
region: Notranjska / Green Karst (Nanos to Snežnik area)
one_liner: "First section of the Via Dinarica, crossing Slovenia's karst plateaus and lakes from Mt Nanos to the Croatian border."
route:
  type: point-to-point
  start: Mt Nanos
  end: Babno polje (Croatian border)
  osm_relation_id: null
  gpx_source: null
distance_km: 159
total_ascent_m: null
typical_days: { min: 7, max: 10 }
when:
  best_months: [April, May, June, July, August, September, October]
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: null
  notes: "Inns and guesthouses along the way; packaged tours also sold."
difficulty:
  level: 2
  reason: "Easy to medium overall, with two harder climbs (to 1,313 m and 1,796 m)."
logistics:
  getting_to_start: "Postojna is used as the arrival base in the local tourism itinerary."
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/
establishment_signals:
  - "official status (Slovenian section of the international Via Dinarica)"
  - "official website (Slovenian Tourist Board)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Nanos_Plateau,_western_edge_02.jpg
    author: Ajznponar
    license: CC0
    shows: Western edge of the Nanos plateau, the starting massif
  - file_url: https://commons.wikimedia.org/wiki/File:Nanos_Plateau,_western_edge_05.jpg
    author: Ajznponar
    license: CC0
    shows: Western edge of the Nanos plateau
sources:
  distance_km: https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/
  total_ascent_m: null
  typical_days: https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/
  best_months: https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/
  open_season: null
  sleeping: https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/
  difficulty: https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/
  logistics: https://visit-postojna.si/en/what-to-do/activities/hiking/long-distance-trails/via-dinarica
  permit: null
conflicts:
  - field: typical_days
    values:
      - { value: "7 stages", source: "https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/" }
      - { value: "10 days", source: "https://www.slovenia.info/en/things-to-do/active-holidays/hiking-backpacking/long-distance-trails" }
  - field: distance_km
    values:
      - { value: 159, source: "https://slovenia-outdoor.com/en/via-dinarica-slovenia-en/" }
      - { value: 160, source: "https://www.slovenia.info/en/things-to-do/active-holidays/hiking-backpacking/long-distance-trails" }
last_verified: 2026-11-27
```

### 12. Camino Slovenia – Central Way (Jakobova pot, Dolenjska and Primorska branches)

```yaml
id: camino-slovenia-central-way
name: Camino Slovenia – Central Way (Jakobova pot, Dolenjska and Primorska branches)
countries: [SI, IT]
region: Dolenjska, Ljubljana, Notranjska, Karst
one_liner: "The main Slovenian Way of St James, pilgrim stamps from the Croatian border through Ljubljana to Trieste."
route:
  type: point-to-point
  start: Obrežje (Croatian border)
  end: Trieste (Italy)
  osm_relation_id: null
  gpx_source: null
distance_km: null
total_ascent_m: null
typical_days: { min: null, max: null }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Hostels, monasteries, parishes and private hosts for pilgrims; pilgrim passport from the Society of Friends of the Way of St James in Slovenia."
difficulty:
  level: null
  reason: null
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: free-registration
  permit_notes: "Optional pilgrim passport (credencial), needed for pilgrim lodging and the Slovenian 'Compostela' certificate."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://www.jakobova-pot.si/jakobs-way-slovenia/
establishment_signals:
  - "waymarked along the whole route"
  - "official website (Society of Friends of the Way of St James in Slovenia)"
trip_reports: []
photos: []
sources:
  distance_km: null
  total_ascent_m: null
  typical_days: null
  best_months: null
  open_season: null
  sleeping: https://www.jakobova-pot.si/jakobs-way-slovenia/
  difficulty: null
  logistics: null
  permit: https://www.jakobova-pot.si/jakobs-way-slovenia/
  waymarked: https://www.visitljubljana.com/fr/visiteurs/decouvrez/vacances-actives/le-chemin-de-saint-jacques/informations-pour-les-voyageurs
conflicts: []
last_verified: 2026-11-27
```

### 13. Pohorje-Kozjak Trail

```yaml
id: pohorje-kozjak-trail
name: Pohorje-Kozjak Trail
countries: [SI]
region: Pohorje and Kozjak (Štajerska)
one_liner: "Quiet forest loop from Maribor over Pohorje and back along the rougher Kozjak ridge above the Drava, huts and farm stays."
route:
  type: loop
  start: Maribor (Spodnje Radvanje)
  end: Maribor
  osm_relation_id: null
  gpx_source: null
distance_km: 187.5
total_ascent_m: null
typical_days: { min: null, max: null }
when:
  best_months: []
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Many huts on Pohorje, fewer on Kozjak; farm stays and other local providers."
difficulty:
  level: 2
  reason: "A more demanding multi-day mountain route but not technically difficult; high point Črni vrh 1,543 m."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://www.slovenia.info/en/stories/pohorje-kozjak-trail-a-long-distance-hiking-trail
establishment_signals:
  - "official website (Slovenian Tourist Board / Pohorje tourism)"
trip_reports: []
photos: []
sources:
  distance_km: https://www.slovenia.info/en/stories/pohorje-kozjak-trail-a-long-distance-hiking-trail
  total_ascent_m: null
  typical_days: null
  best_months: null
  open_season: null
  sleeping: https://www.slovenia.info/en/stories/pohorje-kozjak-trail-a-long-distance-hiking-trail
  difficulty: https://www.slovenia.info/en/stories/pohorje-kozjak-trail-a-long-distance-hiking-trail
  logistics: null
  permit: null
conflicts:
  - field: distance_km
    values:
      - { value: 187.5, source: "https://www.slovenia.info/en/stories/pohorje-kozjak-trail-a-long-distance-hiking-trail" }
      - { value: "180 (intro text on the same page)", source: "https://www.slovenia.info/en/stories/pohorje-kozjak-trail-a-long-distance-hiking-trail" }
last_verified: 2026-11-27
```

### 14. Koroška Mountain Trail (Koroška planinska pot)

```yaml
id: koroska-mountain-trail
name: Koroška Mountain Trail (Koroška planinska pot)
countries: [SI]
region: Koroška (Karavanke, Pohorje, Kozjak, Savinja Alps edges)
one_liner: "Circular stamp trail around the Mežica, Drava and Mislinja valleys with 31 checkpoints."
route:
  type: loop
  start: Ravne na Koroškem
  end: Ravne na Koroškem
  osm_relation_id: 121642
  gpx_source: https://slovenia-outdoor.com/en/map-detail-2/?id=37634061
distance_km: 230
total_ascent_m: null
typical_days: { min: 10, max: 12 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 3
  reason: "Rated difficult, with easier sections."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: "31 stamp checkpoints."
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals:
  - "official status (regional trail of the Alpine Association of Slovenia)"
trip_reports: []
photos: []
sources:
  distance_km: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  total_ascent_m: null
  typical_days: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://www.slovenia.info/en/things-to-do/active-holidays/hiking-backpacking/long-distance-trails
  logistics: null
  permit: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/121642
conflicts:
  - field: distance_km
    values:
      - { value: 230, source: "https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/" }
      - { value: 234, source: "https://wiki.openstreetmap.org/wiki/Sl:Slovenian_Hiking_Routes" }
last_verified: 2026-11-27
```

### 15. Karavanke Trail

```yaml
id: karavanke-trail
name: Karavanke Trail
countries: [SI]
region: Karavanke (Slovenian side)
one_liner: "Seven stages along the Slovenian slopes and valleys of the Karavanke, from Jezersko to Kranjska Gora, with views of the whole range."
route:
  type: point-to-point
  start: Zgornje Jezersko
  end: Kranjska Gora
  osm_relation_id: null
  gpx_source: null
distance_km: 143
total_ascent_m: 4703
typical_days: { min: 7, max: 7 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 2
  reason: "Stages of 14-28 km; stage 1 is a demanding mountain path with no exposed sections."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://slovenia-outdoor.com/en/karavanke-long-distance-hiking-trail/
establishment_signals:
  - "official website (Slovenian Tourist Board / local tourism)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Narcise-Golica1.jpg
    author: Sl-Ziga
    license: CC BY-SA 3.0
    shows: Daffodil meadows at Golica (Planina pod Golico, mentioned on the route)
sources:
  distance_km: https://slovenia-outdoor.com/en/karavanke-long-distance-hiking-trail/
  total_ascent_m: https://www.visit.jesenice.si/en/adventures/hiking-and-climbing/long-distance-and-mountain-trails/
  typical_days: https://slovenia-outdoor.com/en/karavanke-long-distance-hiking-trail/
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://www.bergfex.com/sommer/gorenjska/touren/fernwanderweg/2021295,der-karawanken-fernwanderweg--etappe-1-zg-jezersko--preddvor/
  logistics: null
  permit: null
conflicts:
  - field: distance_km
    values:
      - { value: 143, source: "https://slovenia-outdoor.com/en/karavanke-long-distance-hiking-trail/" }
      - { value: 144, source: "https://www.bergfex.com/sommer/gorenjska/touren/fernwanderweg/2021303,karawanken-fernwanderweg-karawanken-trail--gesamtverlauf/" }
last_verified: 2026-11-27
```

### 16. Zasavje Mountain Trail (Zasavska planinska pot)

```yaml
id: zasavje-mountain-trail
name: Zasavje Mountain Trail (Zasavska planinska pot)
countries: [SI]
region: Posavje Hills (Zasavje)
one_liner: "From the Bizeljsko wine hills across the Posavje Hills to Mt Kum, a medium regional stamp trail."
route:
  type: point-to-point
  start: Šekoranja restaurant, Bizeljsko
  end: Kum hut (Trbovlje)
  osm_relation_id: 15850899
  gpx_source: https://slovenia-outdoor.com/en/map-detail-2/?id=34079219
distance_km: 200
total_ascent_m: null
typical_days: { min: 12, max: 12 }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 2
  reason: "Rated medium."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals:
  - "official status (regional trail of the Alpine Association of Slovenia)"
trip_reports: []
photos: []
sources:
  distance_km: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  total_ascent_m: null
  typical_days: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  best_months: null
  open_season: null
  sleeping: null
  difficulty: https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/
  logistics: null
  permit: null
  osm_relation_id: https://hiking.waymarkedtrails.org/api/v1/details/relation/15850899
conflicts:
  - field: distance_km
    values:
      - { value: 200, source: "https://slovenia-outdoor.com/en/experiences/hiking/long-distance-hiking-trails/" }
      - { value: 198, source: "https://wiki.openstreetmap.org/wiki/Sl:Slovenian_Hiking_Routes" }
last_verified: 2026-11-27
```

### 17. Carsus Trail

```yaml
id: carsus-trail
name: Carsus Trail
countries: [SI]
region: Karst (Kras) above the Vipava Valley and Miren
one_liner: "Six-day Karst loop from Miren over Trstelj, walkable all year and best in spring and autumn."
route:
  type: loop
  start: Miren
  end: Miren
  osm_relation_id: null
  gpx_source: null
distance_km: 103
total_ascent_m: null
typical_days: { min: 6, max: 6 }
when:
  best_months: [March, April, May, September, October, November]
  open_season: "Open all year; spring and autumn best, winter is an alternative when Alpine valleys are snowbound"
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: 2
  reason: "Not technically demanding, but longer stages (20+ km) with a fair amount of up and down need good basic fitness."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://slovenia-outdoor.com/en/carsus-trail/
establishment_signals:
  - "official website (Slovenian Tourist Board)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Trstelj_(1).jpg
    author: Ljuba brank
    license: CC BY-SA 4.0
    shows: Summit of Trstelj, the highest point of the Slovenian Karst on the route
  - file_url: https://commons.wikimedia.org/wiki/File:Lilium_bulbiferum_-_Trstelj_1.JPG
    author: Benjamin Zwittnig
    license: CC BY 2.5 si
    shows: Orange lilies on Trstelj
sources:
  distance_km: https://slovenia-outdoor.com/en/carsus-trail/
  total_ascent_m: null
  typical_days: https://slovenia-outdoor.com/en/carsus-trail/
  best_months: https://slovenia-outdoor.com/en/carsus-trail/
  open_season: https://slovenia-outdoor.com/en/carsus-trail/
  sleeping: null
  difficulty: https://slovenia-outdoor.com/en/carsus-trail/
  logistics: null
  permit: null
last_verified: 2026-11-27
```

### 18. Trdina Trail (Trdinova pot)

```yaml
id: trdina-trail
name: Trdina Trail (Trdinova pot)
countries: [SI]
region: Dolenjska (Gorjanci, Novo mesto area)
one_liner: "The longest trail in Dolenjska, a loop from Novo mesto through the region's hills."
route:
  type: loop
  start: Novo mesto
  end: Novo mesto
  osm_relation_id: null
  gpx_source: null
distance_km: 150
total_ascent_m: null
typical_days: { min: null, max: null }
when:
  best_months: []
  open_season: null
sleeping:
  type: null
  booking_ahead: null
  notes: null
difficulty:
  level: null
  reason: null
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: []
flags:
  permit: none
  permit_notes: null
  waymarked: null
  water_scarce: null
  exposed_or_via_ferrata: null
links:
  official_site: null
establishment_signals: []
trip_reports: []
photos: []
sources:
  distance_km: https://www.slovenia.info/en/things-to-do/active-holidays/hiking-and-mountaineering
  route_type: https://svet24.si/lokalno/dolenjska/posavje/novice/trdinova-pot-162-km-du-dolenjske-toplice-1861431
  total_ascent_m: null
  typical_days: null
  best_months: null
  open_season: null
  sleeping: null
  difficulty: null
  logistics: null
  permit: null
conflicts:
  - field: distance_km
    values:
      - { value: 150, source: "https://www.slovenia.info/en/things-to-do/active-holidays/hiking-and-mountaineering" }
      - { value: 162, source: "https://svet24.si/lokalno/dolenjska/posavje/novice/trdinova-pot-162-km-du-dolenjske-toplice-1861431" }
last_verified: 2026-11-27
```

## 2. Excluded candidates

| Candidate | Rule failed | Note |
|---|---|---|
| Via Alpina Purple (violet) Trail | Rule 2 | Discontinued in 2024: the five colour routes were merged into one main route, and the old signs are no longer maintained ([FAQ](https://www.via-alpina.org/faq/)). The current route is included as "Via Alpina". |
| E12 European path, Slovenian section (Škofije–Sečovlje) | Rule 1 | Just under 50 km, 2–3 days in Slovenia ([dlib](https://www.dlib.si/stream/URN:NBN:SI:doc-IN7560ZX/89ad8d7d-efaf-4afc-acf4-819be1771624/PDF)). The full Mediterranean E12 was not evaluated. |
| Soča Trail (Soška pot) | Rule 1 | About 25 km, 1–2 days ([the-slovenia.com](https://the-slovenia.com/slovenia/best-of-slovenia/top-slovenian-hiking-trails/)). |
| Path of Remembrance and Comradeship (Pot ob žici), Ljubljana | Rule 1 | 33 km ([OSM wiki](https://wiki.openstreetmap.org/wiki/Sl:Slovenian_Hiking_Routes)). |
| Friendship Trail Snežnik–Snježnik | Rule 1 | 30 km ([OSM wiki](https://wiki.openstreetmap.org/wiki/Sl:Slovenian_Hiking_Routes)). |
| Jakobova pot – Preddvor branch | Rule 1 | About 30–40 km, 1–2 days ([svet24](https://svet24.si/clanek/zanimivosti/673b438733bc4/camino-slovenija-november-pohod-iphone-nagrada-generali)). |
| Triglav ascent / Seven Lakes Valley / "Triglav traverse" | Rule 2 | Popular hut-to-hut combinations, but no single named route with a fixed line. Most are 2–4 days. |
| Kamnik–Savinja Alps hut-to-hut | Rule 2 | No single named, defined route found. |
| Trans Karavanke | Not a hiking trail | Mountain-bike route ([PZS](https://trans-karavanke.pzs.si/?lang=en)). |

## 3. Deferred: these pass the rules on paper but were not researched in depth

All are named, waymarked or registered routes of more than about 60 km. Most are PZS regional stamp-collecting circuits (*obhodnice*). They were never designed or marketed as continuous treks, so a human should decide whether they belong on the site. Lengths and OSM IDs come from the [OSM Slovenian hiking routes wiki](https://wiki.openstreetmap.org/wiki/Sl:Slovenian_Hiking_Routes) unless noted otherwise.

| Candidate | Length | OSM relation | Why deferred |
|---|---|---|---|
| Courier and Signal Corps Trail (Pot kurirjev in vezistov NOB) | 1,073 km | 1658429 | A national stamp trail; may be too fragmented to walk as one trek. |
| Slovenian Geological Trail (Slovenska geološka pot) | 265 km | 11513932 | No official source found beyond waymark notes. |
| Extended Slovenian Mountain Trail (Razširjena SPP) | 842 km | — | A peak-collecting extension of the SPP, not a continuous line. |
| Emma's / Hemma Pilgrimage Route (Emina romarska pot), SI–AT | 687 km in SI | — | Has a pilgrim booklet and 48 checkpoints, but no stage plan ([Kozjanski park](https://www.kozjanski-park.si/eng/wp-content/uploads/2025/03/ERP-RK.pdf)). |
| Jakobova pot – Gorenjska branch (Ljubljana–Svete Višarje), SI–IT | 143 km | — | Length from [svet24](https://svet24.si/clanek/zanimivosti/673b438733bc4/camino-slovenija-november-pohod-iphone-nagrada-generali) only. |
| Jakobova pot – Prekmurje–Štajerska branch | 269 km | — | As above. |
| Pomurska planinska pot | 312 km | — | PZS regional circuit. |
| Idrijsko-Cerkljanska planinska pot | 198 km | 11485373 | PZS regional circuit. |
| Savinjska planinska pot | 106 km | 12539295 | PZS regional circuit. |
| Planinska pot čez Kozjak | 105 km | 152401 | PZS regional circuit; may overlap the Pohorje-Kozjak Trail. |
| Slomškova pot | 100 km | — | PZS regional circuit. |
| Velika Kočevska planinska pot | 97 km | 16348820 | PZS regional circuit. |
| Velika Krpanova pot | 95 km | — | PZS regional circuit. |
| Domžalska pot spominov | 91 km | 14535813 | PZS regional circuit. |
| Šaleška pot | 89 km | 6473997 | PZS regional circuit. |
| Ribniška planinska pot | 88 km | — | PZS regional circuit. |
| Slovenjegoriška / Štajersko-zagorska / Klub 24 / Ormoška | 74–82 km | — | PZS regional circuits; may not reach 3 days. |
| Roška pot (Kočevje) | 64 km | — | Borderline on Rule 1 ([slovenia.info](https://www.slovenia.info/en/things-to-do/active-holidays/hiking-and-mountaineering)). |
| Pot Svetega Martina (Via Sancti Martini) | ? | 3633887 | Slovenian length and stages not found. |
| Panoramaweg Südalpen, AT(–SI?) | 286 km, 20 stages | — | Crosses the Karavanke ([kaernten.at](https://www.kaernten.at/berglust/weitwanderwege/panoramaweg-suedalpen)); unclear whether it enters Slovenia. |
| Alpe-Adria-Trail Circular Route, AT–IT–SI | 6 stages | — | Loop variant around the three-country border ([Bradt](https://www.bradtguides.com/destinations/europe/alpe-adria-trail/)); unclear whether it counts as its own trek. |
| Via Dinarica White Trail (full, SI → AL) | >1,000 km | 7389262 | Cross-border full trail. Only the Slovenian section is included here. |

## 4. Open questions for a human check

**Conflicts to resolve**

- **SPP length and days.** Length is 617.5 km (official), 599 km (tourist board) or 550 km (Cicerone). Days are 28, 37 or 49. Ascent is 37,300 m (official) or 45,200 m (Wikipedia).
- **Juliana ascent.** Sources give 7,163 m, 7,412 m and 10,000 m. The 10,000 m figure probably includes the Brda and Breginj extensions; this is unconfirmed. `total_ascent_m` is left `null`.
- **Walk of Peace length.** The official figure, "500+ km", is the whole 30-section network. The main Log pod Mangartom–Trieste line is quoted as 230 km or 220 km. Final value: compute from OSM or the official GPX (the app offers GPX/KML).
- **Alpe-Adria-Trail length.** 750 km (current official) against 680/690 km in older sources.
- **Via Alpina length.** About 2,000 km for the 2024 route, against 2,600 km for the old Red Trail.
- **E6 end point.** Strunjan, or does it continue to Sečovlje?
- **Julius Kugy route type.** Official site and stage pages say loop (Bertahütte → Bertahütte); the Nassfeld page reads as point-to-point. I used loop.
- **Smaller conflicts:** Karavanke Trail 143 vs 144 km; Via Dinarica SI 7 stages vs 10 days; Koroška 230 vs 234 km; Zasavje 200 vs 198 km; Loška 188 vs 184 km; Trdina 150 vs 162 km.

**Empty fields worth filling**

- **OSM relation not found:** Walk of Peace, Karawanken-Karavanke Trail, Karavanke Trail, Pohorje-Kozjak, Via Dinarica Slovenia, Carsus, Trdina, Camino central way. Waymarked Trails returned unrelated results. Juliana relation 11724854 is only partly mapped.
- **Total ascent missing:** Alpe-Adria-Trail, Via Alpina, E6, E7 and every regional trail except the Karavanke Trail.
- **Logistics, sleeping and season** are thin or empty for E6, E7, Loška, Koroška, Zasavje, Trdina and Camino.
- **Difficulty level is `null`** for Loška, Camino and Trdina: no source describes the terrain.
- **Water scarcity is unsourced everywhere.** Karst sections are likely candidates. One Via Alpina hiker found water the main problem on the Karst in May 2024, which is a single report and not enough for the flag.
- **Trip reports:** none found for E6, E7, Kugy, Karawanken and all regional trails. Juliana, Alpe-Adria and Via Alpina have only 1–3 reports, and some lack a hiking year.
- **Photos:** fewer than 3 usable Commons photos for Juliana (1), Via Alpina (2, and one has an unclear subject), E6, E7, Via Dinarica, Carsus and Karavanke. None for Karawanken, Loška, Pohorje-Kozjak, Koroška, Zasavje, Camino and Trdina.
- **Camino central way:** the official site gives no length. Aggregator figures, which I did not use, are 123.6 km for Ljubljana–Trieste and 181.6 km for Zagreb–Ljubljana ([Camino Ninja](https://www.caminoninja.com/caminos/camino-slovenia-primorska-branch)).

**Judgement calls**

- **E6 and E7** are entered as their Slovenian sections, which carry official Slovenian names (Ciglarjeva pot and Naprudnikova pot). The full E-paths are not single treks.
- **Via Alpina** is entered as the whole 2024 route. The tourist board also promotes a Slovenian-only section (about 230 km, 14 stages, Tamar → Adriatic), which could be a separate entry.
- **Juliana Trail booking** is marked `required`. The official advice is "at least 3 months in advance", and in high season places sell out.
