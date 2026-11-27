# Multi-day treks in Bosnia and Herzegovina: research report

Last verified: 2026-11-27. Every non-null field has a source URL in `sources`. Fields I could not source are `null`. OSM relation IDs were checked against the Waymarked Trails API. Photo licences were read from the Wikimedia Commons file pages as shown in search results.

Bosnia has few named multi-day treks that pass all three rules. The Via Dinarica White Trail dominates; the rest are two new Camino pilgrimage routes in Herzegovina. Many "Bosnia treks" online are tour-operator itineraries built from Via Dinarica stages, so they are listed as excluded rather than as separate treks.

## 1. Included treks, ranked by establishment

| Rank | Trek | Signals (of 5) |
|---|---|---|
| 1 | Via Dinarica White Trail – BiH section | 4 (waymarking partial) |
| 2 | Via Dinarica White Trail (cross-border, full) | 4 (waymarking partial) |
| 3 | Camino Dubrovnik (Dubrovnik – Međugorje, cross-border) | 4 (no guidebook) |
| 4 | Camino Medjugorje | 2–3 (official status partial) |

Ties are broken by maturity: the Via Dinarica entries have a dedicated guidebook and years of trip reports, while Camino Dubrovnik opened in March 2026. The full White Trail also appears in `croatia-treks.yaml` under the same `id`; this copy updates the BiH-specific details and the permit flag (see open questions).

### 1. Via Dinarica White Trail – BiH section

```yaml
id: via-dinarica-white-trail-bih
name: Via Dinarica White Trail – Bosnia and Herzegovina section (Via Dinarica Bijela staza)
countries: [BA, ME]
region: Central Dinaric Alps (Čvrsnica, Prenj, Bjelašnica, Visočica, Treskavica, Zelengora, Maglić)
one_liner: "The heart of the Via Dinarica: twelve mountain stages from the Croatian border to Maglić, hut and village-house hopping, with real remoteness and landmine-era caution."
route:
  type: point-to-point
  start: Kamensko border crossing (Croatia–BiH), near Tomislavgrad
  end: Trnovačko Lake under Maglić (just inside Montenegro)
  osm_relation_id: null   # no single relation for the BiH section; stages are separate relations inside superroute 7388026 (e.g. BH-W-01 = 7391340)
  gpx_source: https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/
distance_km: 334.5
total_ascent_m: 18723
typical_days: { min: 15, max: 20 }
when:
  best_months: [July, August, September]
  open_season: null
sleeping:
  type: mixed
  booking_ahead: recommended
  notes: "Mountain huts and shelters roughly every 6–8 hours of walking; where there are none, rural households take hikers. Check in advance that huts are open; the new Međuprenje hut on Prenj is locked and the door code comes from the local mountain club. Camping is generally unrestricted outside national parks."
difficulty:
  level: 4
  reason: "About 18,700 m of ascent over 334 km, highest point 2,118 m, remote stretches, short via-ferrata-assisted sections on Visočica, and storms and late snow possible."
logistics:
  getting_to_start: "The trail enters BiH at the Kamensko border crossing, the official crossing it was designed around. The official trail page lists buses to Split."
  leaving_from_end: "Walk back from Trnovačko Lake to Prijevor in Sutjeska National Park. The official road crossing into Montenegro is at Šćepan Polje. Mid-route, the Sarajevo–Mostar train stops at Konjic and Jablanica, both on the trail."
  nearest_airports: [Sarajevo (SJJ), Mostar (OMO), Tuzla (TZL), Split (SPU), Dubrovnik (DBV)]
flags:
  permit: paid-permit
  permit_notes: "No trail permit inside BiH. Stage BH-W-12 ends at Trnovačko Lake in Montenegro across an unmarked 'green' border. Bradt says crossing for Maglić is tolerated if you return to Sutjeska; continuing into Montenegro needs a green-border permit from the Montenegrin police (an older application form gave a €5 fee). The current process and fee are unverified. Sutjeska and other parks may charge entry."
  waymarked: partial
  water_scarce: true
  exposed_or_via_ferrata: true
links:
  official_site: https://viadinarica.com/en/countries/bosnia-and-herzehovina
establishment_signals:
  - "Official status: Via Dinarica-branded long-distance trail developed by Terra Dinarica with UNDP BiH; each stage is an OSM relation inside the international (iwn) Via Dinarica White Trail superroute"
  - "Official website and trail portal with stage GPX files (trail.viadinarica.com)"
  - "Guidebook: Tim Clancy, 'Via Dinarica: Hiking the White Trail in Bosnia & Herzegovina' (Bradt, 2018, ISBN 9781784773830)"
  - "Regularly covered in trip reports and travel articles (Much Better Adventures, Lonely Planet, National Geographic)"
  - "Partly waymarked: Via Dinarica says most stages carry Knafelc red-and-white blazes and VD signposts, but the first BiH stage is unmarked and thru-hikers report weak marking in places"
trip_reports:
  - url: https://viadinarica.com/en/blog-2/341-beautifully-wild-bosnia-and-herzegovina
    title: "Beautifully wild Bosnia and Herzegovina"
    year_hiked: null
    summary: "Eva Smeele walked the whole BiH section from the Montenegro border to Croatia (published Aug 2016); good marking in Sutjeska, patchy on Zelengora, a bad-weather wait at Donje Bare and a near-miss off-trail in Rakitnica Canyon."
  - url: https://www.outdooractive.com/en/route/mountain-hike/bosnia-and-herzegovina/via-dinarica-bh-w-04-vran-mountain-and-blidinje-lake/17302916/
    title: "Via Dinarica BH-W-04 Vran Mountain and Blidinje Lake (community reviews)"
    year_hiked: 2025
    summary: "Mark van Leeuwen walked stage 29 in early June 2025: well-marked but dry, steep in places, and the ridge took longer than expected. Another reviewer did it in July 2024."
  - url: https://www.outdooractive.com/en/mountain-hikes/bosnia-herzegovina/mountain-hikes-in-bosnia-and-herzegovina/14746700/
    title: "Mountain hikes in Bosnia and Herzegovina – review of Via Dinarica BH-W-06 Prenj"
    year_hiked: 2026
    summary: "July 2026 review of the Prenj stage: recommends the new route up to Međuprenje via Glogošnica; the new hut is locked, so call the local club for the code. Water and power inside."
  - url: https://57hours.com/review/via-dinarica/
    title: "Hiking the Untouched Nature of the via Dinarica"
    year_hiked: 2018
    summary: "Ante Romac's 59-day thru-hike; his six-day highlight runs from Zelengora and Donje Bare over Maglić into Montenegro, mostly in huts and B&Bs."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Hajdu%C4%8Dka_Vrata.JPG
    author: Dino Džino
    license: CC BY-SA 3.0
    shows: "Hajdučka Vrata rock arch on Čvrsnica (stage BH-W-05)"
  - file_url: https://commons.wikimedia.org/wiki/File:Prenj1.jpg
    author: Frfincon
    license: CC0 1.0
    shows: "Otis and Zelena Glava on Prenj in early spring (stage BH-W-06)"
  - file_url: https://commons.wikimedia.org/wiki/File:Lukomir_Village_(3886707753).jpg
    author: NH53
    license: CC BY 2.0
    shows: "Lukomir, Bosnia's highest village (stages BH-W-08/09)"
  - file_url: https://commons.wikimedia.org/wiki/File:Stirinsko_jezero.jpg
    author: Martin Brož
    license: CC BY 3.0
    shows: "Štirinsko Lake in the Zelengora mountains (stage BH-W-11 area)"
  - file_url: https://commons.wikimedia.org/wiki/File:Trnova%C4%8Dko_jezero,_Magli%C4%87.jpg
    author: Dingoa
    license: CC BY-SA 3.0 (also 2.5, 2.0, 1.0)
    shows: "Maglić massif from Trnovačko Lake, the end of the BiH section"
sources:
  distance_km: https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/
  total_ascent_m: https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/
  typical_days: https://www.takeyourbackpack.com/backpacking-in-bosnia-and-herzegovina/hike-via-dinarica/
  best_months: https://www.bradtguides.com/destinations/europe/via-dinarica/
  open_season: null
  sleeping: https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/
  booking_ahead: https://www.muchbetteradventures.com/magazine/hike-the-best-sections-of-the-via-dinarica
  camping: https://viadinarica.com/index.php/en/donate/faq
  difficulty: https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/
  via_ferrata: https://www.muchbetteradventures.com/magazine/hike-the-best-sections-of-the-via-dinarica
  logistics: https://www.bradtguides.com/destinations/europe/via-dinarica/
  permit: https://www.bradtguides.com/destinations/europe/via-dinarica/
  permit_montenegro_green_border: https://form.jotform.com/221276473804356
  waymarked: https://viadinarica.com/index.php/en/donate/faq
  waymarked_gaps: https://viadinarica.com/en/blog-3/338-note-on-the-via-dinarica-trails
  water_scarce: https://www.outdooractive.com/en/route/mountain-hike/opstina-pluzine/bosnia-herzegovina-my-via-dinarica-white-trail/21280882/
  stage_list: https://www.bradtguides.com/?p=55002
  osm_stage_relation: https://hiking.waymarkedtrails.org/api/v1/details/relation/7391340
conflicts:
  - field: distance_km
    values:
      - { value: 334.5, source: "https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/" }
      - { value: 350, source: "https://www.bradtguides.com/?p=55002" }
      - { value: 333, source: "https://bradtguides.com/?p=7585" }
      - { value: "324.4 (one hiker's recorded track)", source: "https://www.outdooractive.com/en/route/mountain-hike/opstina-pluzine/bosnia-herzegovina-my-via-dinarica-white-trail/21280882/" }
      - { value: "1000 (clearly wrong)", source: "https://www.takeyourbackpack.com/backpacking-in-bosnia-and-herzegovina/hike-via-dinarica/" }
  - field: total_ascent_m
    values:
      - { value: 18723, source: "https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/" }
      - { value: "9531 (one hiker's recorded track)", source: "https://www.outdooractive.com/en/route/mountain-hike/opstina-pluzine/bosnia-herzegovina-my-via-dinarica-white-trail/21280882/" }
      - { value: 12000, source: "https://www.takeyourbackpack.com/backpacking-in-bosnia-and-herzegovina/hike-via-dinarica/" }
  - field: stages
    values:
      - { value: "12 stages", source: "https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/" }
      - { value: "13 stages (adds BH/CG-W-01 Maglić to Pivska planina)", source: "https://www.bradtguides.com/?p=55002" }
  - field: walking_time
    values:
      - { value: "120:38 h", source: "https://trail.viadinarica.com/en/route/long-distance-hiking-trail/via-dinarica-white-trail-in-bosnia-and-herzegovina/18530620/" }
      - { value: "about 125 h", source: "https://www.bradtguides.com/?p=55002" }
  - field: waymarked
    values:
      - { value: "most stages marked with Knafelc blazes", source: "https://viadinarica.com/index.php/en/donate/faq" }
      - { value: "weak marking; long jeep-track stretches where 'the trail simply doesn't exist'", source: "https://www.treelinereview.com/where-to-go/via-dinarica-white-trail" }
last_verified: 2026-11-27
```

### 2. Via Dinarica White Trail (full, cross-border)

```yaml
id: via-dinarica-white-trail
name: Via Dinarica White Trail
countries: [SI, HR, BA, ME, AL]
region: Dinaric Alps (BiH section via Čvrsnica, Prenj, Bjelašnica, Zelengora and Maglić)
one_liner: "A trans-Balkan thru-hike along the Dinaric spine; Bosnia holds its longest and wildest mountain section, with patchy marking, scarce water and border paperwork."
route:
  type: point-to-point
  start: Postojna (Slovenia)
  end: Valbona (Albania)
  osm_relation_id: 7388026
  gpx_source: https://trail.viadinarica.com/route/17291189/
distance_km: 1261.2
total_ascent_m: 49579
typical_days: { min: 45, max: 60 }
when:
  best_months: [May, June, July, August, September, October]
  open_season: null
sleeping:
  type: mixed
  booking_ahead: null
  notes: "Mountain huts (many free), guesthouses, village households and campsites. Serviced huts cost about €10–15 per bunk. Camping is banned in Slovenia and Croatia's national parks; Durmitor charges a camping fee; elsewhere it is usually unrestricted."
difficulty:
  level: 4
  reason: "Remote stretches, unreliable GPX and signage outside Croatia, high point 2,694 m (Maja Jezerce), landmine and UXO areas in HR/BA."
logistics:
  getting_to_start: "Bus from Ljubljana to Razdrto (alternative start)."
  leaving_from_end: null
  nearest_airports: [Ljubljana (LJU), Zagreb (ZAG)]
flags:
  permit: paid-permit
  permit_notes: "No unified permit. Use the official Kamensko crossing between Croatia and BiH (strictly enforced). Mountain crossings between BiH and Montenegro and further south need green-border permits from border police (an older Montenegro form gave a €5 fee). Some national parks charge entry or camping fees. Cost and process not verified."
  waymarked: partial
  water_scarce: true
  exposed_or_via_ferrata: null
links:
  official_site: https://www.viadinarica.com/en/about/trails
establishment_signals:
  - "Official status: international long-distance trail (OSM network iwn, operator Via Dinarica)"
  - "Official website and trail portal (trail.viadinarica.com)"
  - "Guidebook: Bradt 'Via Dinarica: Hiking the White Trail in Bosnia & Herzegovina' covers the BiH stages"
  - "Regularly covered in trip reports and travel articles (National Geographic, Outside, Treeline Review, Lonely Planet)"
  - "Partly waymarked: Croatia, BiH and Montenegro up to Žabljak are marked or branded; parts of BiH and Albania are weak"
trip_reports:
  - url: https://www.treelinereview.com/where-to-go/via-dinarica-white-trail
    title: "Thru-hiking the Via Dinarica White Trail in the Balkans"
    year_hiked: null
    summary: "Lauren Roerick's early-summer thru-hike from Slovenia; strict Croatia–BiH border, several good huts in BiH but long jeep-track stretches with weak marking."
  - url: https://57hours.com/review/via-dinarica/
    title: "Hiking the Untouched Nature of the via Dinarica"
    year_hiked: 2018
    summary: "Ante Romac took 59 days for the full White Trail and spent only 5 nights in a tent; highlights Zelengora, Maglić and the crossing into Montenegro."
  - url: https://www.viadinarica.com/en/blog-2/386-how-we-backpacked-the-vdt
    title: "Backpacking Through Breathtakingly Brilliant Beauty"
    year_hiked: null
    summary: "Seth Schy's 10-day, 138 km section from Suha in Sutjeska NP into Montenegro (published 2017); had no green-border permit so took a bus round to Mratinje."
  - url: https://chasingthedonkey.com/hiking-the-via-dinarica-reverse-solo-balkans
    title: "Hiking The Via Dinarica White Trail In Reverse & Solo"
    year_hiked: null
    summary: "Solo, east to west from Albania to Slovenia, finishing in October."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Sinjal.jpg
    author: Goran Zec
    license: CC BY-SA 2.0
    shows: "Sinjal on Dinara, Croatia's highest peak (1,831 m)"
  - file_url: https://commons.wikimedia.org/wiki/File:Hajdu%C4%8Dka_Vrata.JPG
    author: Dino Džino
    license: CC BY-SA 3.0
    shows: "Hajdučka Vrata arch on Čvrsnica, BiH"
  - file_url: https://commons.wikimedia.org/wiki/File:Lukomir_Village_(3886707753).jpg
    author: NH53
    license: CC BY 2.0
    shows: "Lukomir village on Bjelašnica, BiH"
  - file_url: https://commons.wikimedia.org/wiki/File:Trnova%C4%8Dko_jezero,_Magli%C4%87.jpg
    author: Dingoa
    license: CC BY-SA 3.0 (also 2.5, 2.0, 1.0)
    shows: "Trnovačko Lake and Maglić on the BiH–Montenegro border"
sources:
  distance_km: https://trail.viadinarica.com/route/17291189/
  total_ascent_m: https://trail.viadinarica.com/route/17291189/
  typical_days: https://www.treelinereview.com/where-to-go/via-dinarica-white-trail
  best_months: https://www.treelinereview.com/where-to-go/via-dinarica-white-trail
  open_season: null
  sleeping: https://www.treelinereview.com/where-to-go/via-dinarica-white-trail
  camping: https://viadinarica.com/index.php/en/donate/faq
  difficulty: https://trail.viadinarica.com/route/17291189/
  logistics: https://www.treelinereview.com/where-to-go/via-dinarica-white-trail
  permit: https://www.treelinereview.com/where-to-go/via-dinarica-white-trail
  permit_kamensko: https://www.bradtguides.com/destinations/europe/via-dinarica/
  permit_montenegro_green_border: https://form.jotform.com/221276473804356
  waymarked: https://viadinarica.com/en/blog-3/338-note-on-the-via-dinarica-trails
  osm_relation: https://hiking.waymarkedtrails.org/api/v1/details/relation/7388026
conflicts:
  - field: route.start
    values:
      - { value: "Postojna", source: "https://trail.viadinarica.com/route/17291189/" }
      - { value: "Razdrto", source: "https://en.wikipedia.org/wiki/Via_Dinarica" }
  - field: distance_km
    values:
      - { value: 1261.2, source: "https://trail.viadinarica.com/route/17291189/" }
      - { value: 1260.8, source: "https://en.wikipedia.org/wiki/Via_Dinarica" }
      - { value: 1200, source: "https://www.treelinereview.com/where-to-go/via-dinarica-white-trail" }
      - { value: "1142.6 (mapped length of OSM superroute)", source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/7388026" }
  - field: flags.permit
    values:
      - { value: "free-registration", source: "croatia-treks.yaml (same trek, earlier entry)" }
      - { value: "paid-permit (€5 Montenegro green-border form, outdated)", source: "https://form.jotform.com/221276473804356" }
last_verified: 2026-11-27
```

### 3. Camino Dubrovnik

```yaml
id: camino-dubrovnik
name: Camino Dubrovnik (Camino Dubrovnik – Međugorje)
countries: [HR, BA]
region: Dubrovnik coast and Herzegovina (Popovo polje, Hutovo blato, Neretva)
one_liner: "A brand-new seven-day Camino from Dubrovnik's St James church over coastal karst and Popovo polje to Međugorje; easy grades, hot and shadeless in summer."
route:
  type: point-to-point
  start: Dubrovnik (Church of St James)
  end: Međugorje (Church of St James)
  osm_relation_id: 18103779
  gpx_source: https://www.caminocroatia.com/camino-dubrovnik.kml   # KML, not GPX
distance_km: 145
total_ascent_m: 3090   # sum of the seven official stage figures
typical_days: { min: 7, max: 7 }
when:
  best_months: null
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: required
  notes: "Apartments, guesthouses and small hotels in most stage towns; beds are limited and must be booked. Many pilgrims stay at one base and use local taxis to and from the stage ends."
difficulty:
  level: 1
  reason: "Daily ascent 180–610 m on paths and quiet roads, but stage 6 is 30 km and there is little shade on Popovo polje."
logistics:
  getting_to_start: "Starts at the Church of St James, east of Dubrovnik's old town."
  leaving_from_end: null
  nearest_airports: [Dubrovnik (DBV), Mostar (OMO)]
flags:
  permit: none
  permit_notes: "No permit. Stage 4 (Slano–Ravno) crosses the Croatia–BiH border: carry a valid ID or passport and check the current border regime; mobile signal may drop for about 8 km after the border. A pilgrim credential is optional."
  waymarked: "yes"
  water_scarce: true
  exposed_or_via_ferrata: false
links:
  official_site: https://caminocroatia.com/camino-dubrovnik/
establishment_signals:
  - "Official status: part of the Camino Croatia / Way of St James network, opened 7 March 2026 with the Dubrovnik tourist board; mapped in OSM as an international (iwn) pilgrimage route"
  - "Waymarked along the whole route with Camino signs"
  - "Official website (Camino Croatia) and tourist-board page with app"
  - "Covered in travel articles (BBC Travel, Great Walks, The Dubrovnik Times)"
trip_reports:
  - url: https://rtv-hb.com/vijesti-bosna-i-hercegovina/od-dubrovnika-do-medugorja-150-kilometara-izazova-molitve-i-ustrajnosti
    title: "Od Dubrovnika do Međugorja: 150 kilometara izazova, molitve i ustrajnosti"
    year_hiked: 2026
    summary: "Interview with Tugomir and Marijo, among the first to walk the whole route, finishing at the end of May 2026."
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Staro_Slano.JPG
    author: Igor Trklja
    license: CC BY-SA 3.0
    shows: "Slano, end of stage 3"
  - file_url: https://commons.wikimedia.org/wiki/File:Popovo_polje.JPG
    author: Teodora Mijanovic
    license: CC BY-SA 3.0
    shows: "Popovo polje karst field near Zavala (stages 4–5)"
  - file_url: https://commons.wikimedia.org/wiki/File:Me%C4%91ugorje_St.James_Church.jpg
    author: Mariusz Musiał
    license: Public domain
    shows: "St James Church in Međugorje, the finish"
sources:
  distance_km: https://caminocroatia.com/camino-dubrovnik/map-stages/
  total_ascent_m: https://caminocroatia.com/camino-dubrovnik/map-stages/
  typical_days: https://tzdubrovnik.hr/lang/en/get/vijesti/87927/mediji.html
  best_months: null
  open_season: null
  sleeping: https://caminocroatia.com/camino-dubrovnik/accommodation/
  booking_ahead: https://caminocroatia.com/camino-dubrovnik/useful-info/
  difficulty: https://caminocroatia.com/camino-dubrovnik/map-stages/
  logistics: https://caminocroatia.com/camino-dubrovnik/map-stages/
  nearest_airports: https://www.bradtguides.com/destinations/europe/via-dinarica/
  permit: https://caminocroatia.com/camino-dubrovnik/map-stages/
  waymarked: https://caminocroatia.com/camino-dubrovnik/map-stages/
  water_scarce: https://caminocroatia.com/camino-dubrovnik/map-stages/
  opening_date: https://www.travelandtourworld.com/news/article/7njsrp6cxvp2/
  osm_relation: https://hiking.waymarkedtrails.org/api/v1/details/relation/18103779
conflicts:
  - field: distance_km
    values:
      - { value: 145, source: "https://caminocroatia.com/camino-dubrovnik/map-stages/" }
      - { value: "142.7 (mapped length in OSM)", source: "https://hiking.waymarkedtrails.org/api/v1/details/relation/18103779" }
      - { value: 147, source: "https://www.post.ba/philately/post-stamps/details/medugorje-2025" }
      - { value: 140, source: "https://neum-touristguide.com/camino-dubrovnik-a-step-closer-to-nature-and-history/" }
  - field: total_ascent_m
    values:
      - { value: "3090 (sum of official stage figures)", source: "https://caminocroatia.com/camino-dubrovnik/map-stages/" }
      - { value: 2800, source: "https://www.mightytravels.com/2026/07/walk-dubrovniks-new-camino-trail-to-escape-the-crowds/" }
  - field: typical_days
    values:
      - { value: "7 stages", source: "https://caminocroatia.com/camino-dubrovnik/map-stages/" }
      - { value: "6 stages (earlier route plan)", source: "https://neum-touristguide.com/camino-dubrovnik-a-step-closer-to-nature-and-history/" }
last_verified: 2026-11-27
```

### 4. Camino Medjugorje

```yaml
id: camino-medjugorje
name: Camino Medjugorje (Camino Međugorje)
countries: [BA]
region: West Herzegovina (Trebižat valley, Ljubuški, Grude)
one_liner: "A short, flat three-day Camino from Međugorje past Kravica and the Trebižat waterfalls to Gorica-Sovići, with very few beds at the stage ends."
route:
  type: point-to-point
  start: Međugorje
  end: Gorica-Sovići (Church of St Stephen the Martyr)
  osm_relation_id: null
  gpx_source: https://www.caminocroatia.com/camino-medjugorje.kml   # KML, not GPX
distance_km: 73.5
total_ascent_m: null
typical_days: { min: 3, max: 3 }
when:
  best_months: null
  open_season: null
sleeping:
  type: guesthouses
  booking_ahead: required
  notes: "Very few beds at the stage ends; book ahead. Many pilgrims stay at one base and taxi to and from each stage."
difficulty:
  level: 1
  reason: "Low-lying route (27–168 m) with 21.5–27 km days and no exposure."
logistics:
  getting_to_start: null
  leaving_from_end: null
  nearest_airports: [Mostar (OMO), Split (SPU)]
flags:
  permit: none
  permit_notes: "No permit. An optional pilgrim credential is sold in Međugorje; a certificate is issued for walking at least one day."
  waymarked: "yes"
  water_scarce: null
  exposed_or_via_ferrata: false
links:
  official_site: https://caminocroatia.com/camino-medjugorje/
establishment_signals:
  - "Official status (partial): a named Camino Croatia route with its own pilgrim credential and certificate"
  - "Waymarked with Camino signposts (per the operator)"
  - "Official website (Camino Croatia)"
trip_reports: []
photos:
  - file_url: https://commons.wikimedia.org/wiki/File:Me%C4%91ugorje_St.James_Church.jpg
    author: Mariusz Musiał
    license: Public domain
    shows: "St James Church in Međugorje, the start"
  - file_url: https://commons.wikimedia.org/wiki/File:Kravica_Waterfalls,Bosnia_&_Herzegovina.jpg
    author: J McSporran (john mcsporran)
    license: CC BY 2.0
    shows: "Kravica waterfalls, passed on day 1"
  - file_url: https://commons.wikimedia.org/wiki/File:Humac_samostan_(03).JPG
    author: Ma▀▄Ga (MaGa)
    license: CC BY 3.0 (also GFDL)
    shows: "Franciscan monastery at Humac, end of day 1"
sources:
  distance_km: https://caminocroatia.com/camino-medjugorje/
  total_ascent_m: null
  typical_days: https://caminocroatia.com/camino-medjugorje/map-stages/
  best_months: null
  open_season: null
  sleeping: https://caminocroatia.com/camino-medjugorje/useful-info/
  difficulty: https://caminocroatia.com/camino-medjugorje/map-stages/
  logistics: null
  nearest_airports: https://www.bradtguides.com/destinations/europe/via-dinarica/
  permit: https://caminocroatia.com/?p=21993
  waymarked: https://caminocroatia.com/camino-medjugorje/map-stages/
conflicts:
  - field: route.end
    values:
      - { value: "Gorica-Sovići (BiH)", source: "https://caminocroatia.com/camino-medjugorje/map-stages/" }
      - { value: "Imotski / Vinjani Donji (Croatia), 3-day group pilgrimage presented as 'Camino Međugorje'", source: "https://www.croatiaweek.com/medugorje-to-imotski-pilgrimage/" }
last_verified: 2026-11-27
```

## 2. Excluded candidates

| Candidate | Rule failed | Note |
|---|---|---|
| Marš mira / Peace March (Nezuk – Potočari, ~100–110 km, 3 days) | Rule 3 | Walked only as an organised commemorative event on 8–10 July. A Danas report says mines still had to be cleared at three locations on the route. |
| Via Dinarica Green Trail (BiH) | Rule 2 | Via Dinarica says it is "still being defined". The 986 km outdooractive track is one hiker's own interpretation. |
| Via Dinarica Blue Trail (BiH variant in the Dubrovnik hinterland) | Rule 2 | Under development. |
| Our Lady of Sinj Route (Staza Gospi Sinjskoj) | Rule 1 / Rule 2 | The current official route is 30 km (Solin–Sinj). The older 148–183 km Solin–Sinj–Livno–Tomislavgrad–Rama version is not described on the current site. Its BiH part is Via Dinarica stage BH-W-01 (OSM 7391340). |
| Put Srebreničke povelje (mountaineering transversal, 118 km) | Rule 2 | The only source is an FKT route submission. No trail authority, waymarking or stage information found, and the end point is unclear (Tuzla/Konjuh vs. Neum). |
| Sutjeska – Durmitor pilot route (BiH–Montenegro) | Duplicate | Now part of the White Trail (BH-W-12 and BH/CG-W-01). |
| Operator itineraries: "Rakitnica necklace", Bjelašnica–Visočica self-guided tours, Much Better Adventures / Exodus / Intrepid Via Dinarica trips | Rule 2 (and Rule 3 for guided ones) | Commercial products assembled from Via Dinarica stages, not named routes in their own right. |
| Kozaračka transverzala | Rule 1 / Rule 3 | A one-day annual mountaineering event (14th edition reported by Grad Prijedor). |
| Bjelašnička transverzala (OSM 16921468) | Rule 1 (unverified) | Mapped in OSM but no length, stages or description found. Probably a day route. |
| Bosnian Highline, Trans Dinarica, Ćiro Trail | Not hiking | Bikepacking and cycling routes. |
| Međugorje – Imotski pilgrimage / Camino Imota link | Rule 2 | Presented as a new 3-day group pilgrimage; the link from Camino Imota to Međugorje is still planned. See the Camino Medjugorje conflict. |

## 3. Open questions for a human check

**Missing or weak data**
- Via Dinarica BiH section: no single OSM relation (only per-stage relations such as 7391340). Typical days (15–20) come from a blog whose other figures are wrong (1,000 km); they fit the official 120–125 h walking time but need a better source.
- Via Dinarica BiH: best months come from Bradt's general seasonal advice (summer high season, lovely early autumn), not a stage-by-stage table. Each stage page on trail.viadinarica.com lists all 12 months.
- Permit flag for both Via Dinarica entries is now `paid-permit`, based on an outdated Montenegrin green-border application form (€5). `croatia-treks.yaml` lists `free-registration` for the same trek. The current Montenegrin process and fee need checking, and the two files should be aligned.
- Camino Dubrovnik and Camino Medjugorje: no best months, no getting-to-start or leaving-from-end transport and no water information on the official pages. Airports are taken from Bradt's general list, not from a "nearest airport" statement.
- Camino Dubrovnik opened in March 2026, so there are no blog-style trip reports yet; the only entry is a radio interview with two early walkers. Camino Medjugorje has no trip reports at all.
- Camino Medjugorje: no OSM relation found, and no total ascent published (the route stays between 27 and 168 m).
- Camino routes publish their track as KML, not GPX.
- Photo licences for Staro Slano.JPG come from the file's structured data (CC BY-SA 3.0); the full licence text was not visible.

**Conflicts to settle**
- Via Dinarica BiH length: 334.5 km (official portal) vs 350 km (Bradt guidebook) vs 333 km (Bradt article). Stage count: 12 (portal) vs 13 (Bradt, adding Maglić → Pivska planina in Montenegro).
- Via Dinarica BiH ascent: 18,723 m (portal) vs 9,531 m (one hiker's recorded track).
- Via Dinarica BiH waymarking: "most stages marked" (Via Dinarica FAQ) vs "the trail simply doesn't exist" in places (Treeline Review).
- Full White Trail length: 1,261.2 / 1,260.8 / 1,200 km, and 1,142.6 km mapped in OSM.
- Camino Dubrovnik length (145 / 142.7 OSM / 147 / 140 km) and ascent (3,090 m from stage sums vs 2,800 m).
- Camino Medjugorje end point: Gorica-Sovići (current official page) vs Imotski (earlier news of a 3-day pilgrimage).

**Candidates not fully screened**
- Other BiH mountaineering transversals (e.g. in Krajina, Majevica, Vlašić). None with a defined multi-day route turned up, but local club sites (PSBiH, PSRS) were not checked.
- Any Via Dinarica Green Trail stages in BiH that may since have been defined under the UNDP "Via Dinarica III" project (2023–2026) and the Serbia–BiH "Green Trail Above Borders" project.
