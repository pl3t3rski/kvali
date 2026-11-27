/**
 * The MapLibre map of the main view. Plain TypeScript, no Svelte: the component
 * TrekMap.svelte creates one and passes state changes to it.
 *
 * Drawn as the design system asks:
 *   - the ground in paper-deep, with contour lines in dusk at low strength
 *   - water as a glacier fill with a pen outline
 *   - trek midpoint dots below zoom 6, route lines from zoom 6, coloured by where you sleep
 *   - the hovered or selected route with a wide butter line under it; full detail once selected
 *   - route lines follow the real geography and are never wobbled; a dashed line is used nowhere,
 *     because a dotted line means a route
 */
import {
  Map as MapLibreMap,
  addProtocol,
  setWorkerUrl,
  type ExpressionSpecification,
  type FilterSpecification,
  type GeoJSONSource,
  type MapLayerMouseEvent,
} from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import mlcontour from 'maplibre-contour';
import type { FeatureCollection, Point } from 'geojson';
import type { BBox, RouteLiteProperties, TrekIndexEntry } from '../data/types';
import type { MapView } from '../lib/url-state';
import { url } from '../lib/paths';
import {
  BASE_STYLE_URL,
  DEFAULT_BOUNDS,
  DEM_ATTRIBUTION,
  DEM_TILES_URL,
  FIT_MAX_ZOOM,
  FIT_PADDING,
  LINE_MIN_ZOOM,
  ROUTES_ATTRIBUTION,
  readColours,
  sleepingColours,
  type MapColours,
} from './map-config';

// The bundler moves the worker file, so tell MapLibre where it ended up.
setWorkerUrl(workerUrl);

export interface TrekMapEvents {
  /** The map stopped moving. `settled` is false while the map takes its first position on load. */
  onMove(viewport: BBox, view: MapView, settled: boolean): void;
  onHover(id: string | undefined): void;
  onSelect(id: string): void;
}

const EMPTY: FeatureCollection = { type: 'FeatureCollection', features: [] };

/** Layers that react to hover and click. */
const INTERACTIVE_LAYERS = ['trek-dots', 'trek-lines-hit'];

const idIn = (ids: string[]): ExpressionSpecification => ['in', ['get', 'id'], ['literal', ids]];

/** Base-map layers that only add noise to a trek overview. */
const HIDDEN_LAYERS = /^(building|aeroway|road_area_pier|road_pier|railway|landuse_residential|airport|highway-shield|road_shield|highway-name|.*_casing$)/;

export class TrekMap {
  private map: MapLibreMap;
  private ready: Promise<void>;
  private colours: MapColours = readColours();
  private matching: string[] = [];
  private hoveredId: string | undefined;
  private selectedId: string | undefined;
  /** Trek whose full-detail route is on the map. */
  private detailId: string | undefined;
  /** False until the first position is set, so that it does not count as a move. */
  private settled = false;

  constructor(
    container: HTMLElement,
    private treks: TrekIndexEntry[],
    /** Where the map opens: a saved position, a box to fit, or nothing for the default view. */
    initial: MapView | BBox | undefined,
    private events: TrekMapEvents,
  ) {
    this.matching = treks.map((trek) => trek.id);
    this.map = new MapLibreMap({
      container,
      style: BASE_STYLE_URL,
      ...(initial && !Array.isArray(initial)
        ? { center: [initial.lon, initial.lat] as [number, number], zoom: initial.zoom }
        : initial
          ? { bounds: initial, fitBoundsOptions: { padding: FIT_PADDING, maxZoom: FIT_MAX_ZOOM } }
          : { bounds: DEFAULT_BOUNDS }),
      // Always shown, because the dots and the lines both come from OpenStreetMap routes.
      attributionControl: { compact: false, customAttribution: ROUTES_ATTRIBUTION },
      // Rotating and tilting add nothing to a trek overview and confuse the bounding-box list.
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
    });
    this.map.touchZoomRotate.disableRotation();
    this.map.keyboard.disableRotation();

    this.ready = this.map.once('load').then(() => {
      this.restyleBase();
      this.addContours();
      this.addLayers();
      this.addInteractions();
      this.reportMove();
      this.settled = true;
    });
    this.map.on('moveend', () => this.reportMove());
  }

  /** Replace the base style's colours with the design tokens, and hide what a walker does not need. */
  private restyleBase(): void {
    const { map, colours: c } = this;
    type PaintProperty = Parameters<MapLibreMap['setPaintProperty']>[1];
    const paint = (layer: string, property: string, value: unknown) => {
      try {
        // The property depends on the layer type, which is only known while the style is walked.
        map.setPaintProperty(layer, property as PaintProperty, value as never);
      } catch {
        // A layer without that property keeps what it has.
      }
    };
    for (const layer of map.getStyle().layers) {
      const { id, type } = layer;
      if (HIDDEN_LAYERS.test(id)) {
        map.setLayoutProperty(id, 'visibility', 'none');
      } else if (type === 'background') {
        paint(id, 'background-color', c.paperDeep);
      } else if (type === 'fill') {
        if (id === 'water') {
          paint(id, 'fill-color', c.glacier);
          paint(id, 'fill-opacity', 0.55);
        } else if (id.includes('glacier') || id.includes('ice')) {
          paint(id, 'fill-color', c.paper);
          paint(id, 'fill-opacity', 0.9);
        } else {
          // Parks and woods: a faint wash of moss.
          paint(id, 'fill-color', c.moss);
          paint(id, 'fill-opacity', 0.09);
        }
      } else if (type === 'line') {
        paint(id, 'line-color', id.startsWith('waterway') ? c.glacier : c.dusk);
        paint(id, 'line-opacity', id.startsWith('boundary') ? 0.55 : id.startsWith('waterway') ? 0.9 : 0.3);
        // A dotted line means a route, so borders and tunnels are drawn solid.
        paint(id, 'line-dasharray', undefined);
      } else if (type === 'symbol') {
        paint(id, 'text-color', id.startsWith('label_country') || id.startsWith('label_city') ? c.ink : c.inkQuiet);
        paint(id, 'text-halo-color', c.paperDeep);
        paint(id, 'text-halo-width', 1.4);
        paint(id, 'icon-opacity', 0);
      }
    }
    // Water is a fill with a pen outline.
    if (map.getLayer('water')) {
      map.addLayer(
        {
          id: 'water-outline',
          type: 'line',
          source: 'openmaptiles',
          'source-layer': 'water',
          paint: { 'line-color': c.pen, 'line-width': 0.8, 'line-opacity': 0.7 },
        },
        this.firstSymbolLayer(),
      );
    }
  }

  private firstSymbolLayer(): string | undefined {
    return this.map.getStyle().layers.find((layer) => layer.type === 'symbol')?.id;
  }

  /** Contour lines in dusk at low strength, drawn from the elevation tiles. */
  private addContours(): void {
    const { map, colours: c } = this;
    try {
      const dem = new mlcontour.DemSource({ url: DEM_TILES_URL, encoding: 'terrarium', maxzoom: 12, worker: true });
      addProtocol(dem.sharedDemProtocolId, dem.sharedDemProtocolV4);
      addProtocol(dem.contourProtocolId, dem.contourProtocolV4);
      map.addSource('contours', {
        type: 'vector',
        tiles: [
          dem.contourProtocolUrl({
            // Metres between lines at each zoom: [every line, every bold line].
            thresholds: { 7: [500, 2500], 9: [200, 1000], 11: [100, 500], 13: [50, 250] },
            elevationKey: 'ele',
            levelKey: 'level',
            contourLayer: 'contours',
          }),
        ],
        maxzoom: 14,
        attribution: DEM_ATTRIBUTION,
      });
      map.addLayer(
        {
          id: 'contours',
          type: 'line',
          source: 'contours',
          'source-layer': 'contours',
          minzoom: 7,
          paint: {
            'line-color': c.dusk,
            'line-opacity': ['match', ['get', 'level'], 1, 0.34, 0.16],
            'line-width': ['match', ['get', 'level'], 1, 1, 0.6],
          },
        },
        this.firstSymbolLayer(),
      );
    } catch (error) {
      // The map works without its contour lines.
      console.warn('Could not add contour lines', error);
    }
  }

  private addLayers(): void {
    const { map, colours: c } = this;
    const bySleeping = sleepingColours(c);
    const sleepingColour: ExpressionSpecification = [
      'match',
      ['get', 'sleeping'],
      'huts',
      bySleeping.huts,
      'guesthouses',
      bySleeping.guesthouses,
      'camping',
      bySleeping.camping,
      'mixed',
      bySleeping.mixed,
      bySleeping.unknown,
    ];

    const dots: FeatureCollection<Point, RouteLiteProperties> = {
      type: 'FeatureCollection',
      features: this.treks.map((trek) => ({
        type: 'Feature',
        properties: { id: trek.id, sleeping: trek.sleeping ?? 'unknown' },
        geometry: { type: 'Point', coordinates: trek.midpoint },
      })),
    };
    map.addSource('trek-dots', { type: 'geojson', data: dots });
    map.addSource('routes-lite', { type: 'geojson', data: url('/routes-lite.geojson') });
    map.addSource('route-detail', { type: 'geojson', data: EMPTY });

    const round = { 'line-join': 'round', 'line-cap': 'round' } as const;
    // The highlight: a wide butter line under the hovered or selected route.
    map.addLayer({ id: 'highlight-dots', type: 'circle', source: 'trek-dots', maxzoom: LINE_MIN_ZOOM, paint: { 'circle-radius': 14, 'circle-color': c.butter } });
    map.addLayer({ id: 'highlight-lines', type: 'line', source: 'routes-lite', minzoom: LINE_MIN_ZOOM, layout: round, paint: { 'line-color': c.butter, 'line-width': 14 } });
    map.addLayer({ id: 'highlight-detail', type: 'line', source: 'route-detail', minzoom: LINE_MIN_ZOOM, layout: round, paint: { 'line-color': c.butter, 'line-width': 14 } });

    map.addLayer({
      id: 'trek-dots',
      type: 'circle',
      source: 'trek-dots',
      maxzoom: LINE_MIN_ZOOM,
      paint: { 'circle-radius': 6, 'circle-color': sleepingColour, 'circle-stroke-color': c.paperDeep, 'circle-stroke-width': 2 },
    });
    map.addLayer({ id: 'trek-lines', type: 'line', source: 'routes-lite', minzoom: LINE_MIN_ZOOM, layout: round, paint: { 'line-color': sleepingColour, 'line-width': 3.2 } });
    map.addLayer({ id: 'trek-detail', type: 'line', source: 'route-detail', minzoom: LINE_MIN_ZOOM, layout: round, paint: { 'line-color': sleepingColour, 'line-width': 3.2 } });
    // An invisible wide line, so a thin route is easy to point at.
    map.addLayer({ id: 'trek-lines-hit', type: 'line', source: 'routes-lite', minzoom: LINE_MIN_ZOOM, paint: { 'line-color': c.ink, 'line-opacity': 0, 'line-width': 20 } });
    this.applyFilters();
  }

  private addInteractions(): void {
    const { map } = this;
    const idOf = (event: MapLayerMouseEvent) => event.features?.[0]?.properties?.id as string | undefined;

    map.on('mousemove', INTERACTIVE_LAYERS, (event) => {
      map.getCanvas().style.cursor = 'pointer';
      const id = idOf(event);
      if (id !== this.hoveredId) this.events.onHover(id);
    });
    map.on('mouseleave', INTERACTIVE_LAYERS, () => {
      map.getCanvas().style.cursor = '';
      this.events.onHover(undefined);
    });
    map.on('click', INTERACTIVE_LAYERS, (event) => {
      const id = idOf(event);
      if (id) this.events.onSelect(id);
    });
  }

  private reportMove(): void {
    const bounds = this.map.getBounds();
    const center = this.map.getCenter();
    this.events.onMove(
      [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()],
      { zoom: this.map.getZoom(), lat: center.lat, lon: center.lng },
      this.settled,
    );
  }

  private applyFilters(): void {
    const { map } = this;
    const highlighted = [this.hoveredId, this.selectedId].filter((id): id is string => id !== undefined);
    // Once the full-detail line of a trek is drawn, its simplified line is hidden.
    const notDetailed: ExpressionSpecification = ['!=', ['get', 'id'], this.detailId ?? ''];
    const matching = idIn(this.matching);

    map.setFilter('trek-dots', matching);
    map.setFilter('trek-lines-hit', matching);
    map.setFilter('trek-lines', ['all', matching, notDetailed] as FilterSpecification);
    map.setFilter('highlight-dots', idIn(highlighted));
    map.setFilter('highlight-lines', ['all', idIn(highlighted), notDetailed] as FilterSpecification);
  }

  /** Show only these treks. */
  setMatching(ids: string[]): void {
    this.matching = ids;
    void this.ready.then(() => this.applyFilters());
  }

  /** Mark the hovered and the selected trek, and load the selected trek's full-detail route. */
  setHighlight(hoveredId: string | undefined, selectedId: string | undefined): void {
    const selectionChanged = selectedId !== this.selectedId;
    this.hoveredId = hoveredId;
    this.selectedId = selectedId;
    void this.ready.then(() => {
      this.applyFilters();
      if (selectionChanged) void this.loadDetail(selectedId);
    });
  }

  private async loadDetail(id: string | undefined): Promise<void> {
    const source = this.map.getSource<GeoJSONSource>('route-detail');
    if (!source) return;
    if (!id) {
      this.detailId = undefined;
      await source.setData(EMPTY);
      this.applyFilters();
      return;
    }
    try {
      const response = await fetch(url(`/routes/${id}.geojson`));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const detail = await response.json();
      // The selection may have changed while the file was loading.
      if (id !== this.selectedId) return;
      await source.setData(detail);
      this.detailId = id;
      this.applyFilters();
    } catch (error) {
      // The simplified line stays visible, so the map still works without the detail.
      console.warn(`Could not load the detailed route of ${id}`, error);
    }
  }

  /** Zoom to a trek's bounding box. */
  fitTo(bbox: BBox): void {
    void this.ready.then(() => this.map.fitBounds(bbox, { padding: FIT_PADDING, maxZoom: FIT_MAX_ZOOM }));
  }

  destroy(): void {
    this.map.remove();
  }
}
