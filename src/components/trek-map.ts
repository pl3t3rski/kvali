/**
 * The MapLibre map of the main view. Plain TypeScript, no Svelte: the component
 * TrekMap.svelte creates one and passes state changes to it.
 *
 * Layers, bottom to top:
 *   1. OpenFreeMap base style with a hillshade from the terrain tiles
 *   2. trek midpoint dots, below zoom 6
 *   3. route lines from routes-lite.geojson, from zoom 6, coloured by sleeping type
 *   4. the hovered or selected trek, thicker; full detail once selected
 */
import {
  Map as MapLibreMap,
  setWorkerUrl,
  type ExpressionSpecification,
  type FilterSpecification,
  type GeoJSONSource,
  type MapLayerMouseEvent,
} from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import type { FeatureCollection, Point } from 'geojson';
import type { BBox, RouteLiteProperties, TrekIndexEntry } from '../data/types';
import type { MapView } from '../lib/url-state';
import {
  BASE_STYLE_URL,
  DEFAULT_BOUNDS,
  DEM_ATTRIBUTION,
  DEM_TILES_URL,
  FIT_MAX_ZOOM,
  FIT_PADDING,
  LINE_MIN_ZOOM,
  PLACEHOLDER_HIGHLIGHT_COLOUR,
  PLACEHOLDER_SLEEPING_COLOURS,
  ROUTES_ATTRIBUTION,
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

const sleepingColour: ExpressionSpecification = [
  'match',
  ['get', 'sleeping'],
  'huts',
  PLACEHOLDER_SLEEPING_COLOURS.huts,
  'guesthouses',
  PLACEHOLDER_SLEEPING_COLOURS.guesthouses,
  'camping',
  PLACEHOLDER_SLEEPING_COLOURS.camping,
  PLACEHOLDER_SLEEPING_COLOURS.mixed,
];

const idIn = (ids: string[]): ExpressionSpecification => ['in', ['get', 'id'], ['literal', ids]];

export class TrekMap {
  private map: MapLibreMap;
  private ready: Promise<void>;
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
      this.addLayers();
      this.addInteractions();
      this.reportMove();
      this.settled = true;
    });
    this.map.on('moveend', () => this.reportMove());
  }

  private addLayers(): void {
    const { map } = this;
    const firstSymbol = map.getStyle().layers.find((layer) => layer.type === 'symbol')?.id;

    map.addSource('dem', {
      type: 'raster-dem',
      tiles: [DEM_TILES_URL],
      tileSize: 256,
      encoding: 'terrarium',
      maxzoom: 12,
      attribution: DEM_ATTRIBUTION,
    });
    // Under the water layer, so that seas and lakes stay flat.
    map.addLayer(
      {
        id: 'hillshade',
        type: 'hillshade',
        source: 'dem',
        paint: { 'hillshade-exaggeration': 0.35, 'hillshade-shadow-color': '#5a5a5a' },
      },
      map.getLayer('water') ? 'water' : firstSymbol,
    );

    const dots: FeatureCollection<Point, RouteLiteProperties> = {
      type: 'FeatureCollection',
      features: this.treks.map((trek) => ({
        type: 'Feature',
        properties: { id: trek.id, sleeping: trek.sleeping },
        geometry: { type: 'Point', coordinates: trek.midpoint },
      })),
    };
    map.addSource('trek-dots', { type: 'geojson', data: dots });
    map.addSource('routes-lite', { type: 'geojson', data: '/routes-lite.geojson' });
    map.addSource('route-detail', { type: 'geojson', data: EMPTY });

    map.addLayer({
      id: 'trek-dots',
      type: 'circle',
      source: 'trek-dots',
      maxzoom: LINE_MIN_ZOOM,
      paint: {
        'circle-radius': 6,
        'circle-color': sleepingColour,
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': 1.5,
      },
    });
    map.addLayer({
      id: 'trek-lines',
      type: 'line',
      source: 'routes-lite',
      minzoom: LINE_MIN_ZOOM,
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: { 'line-color': sleepingColour, 'line-width': 3 },
    });
    // An invisible wide line, so a thin route is easy to point at.
    map.addLayer({
      id: 'trek-lines-hit',
      type: 'line',
      source: 'routes-lite',
      minzoom: LINE_MIN_ZOOM,
      paint: { 'line-color': '#000000', 'line-opacity': 0, 'line-width': 18 },
    });
    map.addLayer({
      id: 'highlight-dots',
      type: 'circle',
      source: 'trek-dots',
      maxzoom: LINE_MIN_ZOOM,
      paint: {
        'circle-radius': 9,
        'circle-color': sleepingColour,
        'circle-stroke-color': PLACEHOLDER_HIGHLIGHT_COLOUR,
        'circle-stroke-width': 3,
      },
    });
    for (const [id, source] of [
      ['highlight-lines', 'routes-lite'],
      ['highlight-detail', 'route-detail'],
    ]) {
      map.addLayer({
        id,
        type: 'line',
        source,
        minzoom: LINE_MIN_ZOOM,
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': PLACEHOLDER_HIGHLIGHT_COLOUR, 'line-width': 5 },
      });
    }
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
      const response = await fetch(`/routes/${id}.geojson`);
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
