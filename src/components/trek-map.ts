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
import { Map as MapLibreMap, type ExpressionSpecification, type FilterSpecification, type GeoJSONSource, type MapLayerMouseEvent } from 'maplibre-gl';
import type { FeatureCollection, Point } from 'geojson';
import type { BBox, RouteLiteProperties, TrekIndexEntry } from '../data/types';
import type { MapView } from '../lib/url-state';
import { url } from '../lib/paths';
import { addContours, restyleBase, sleepingColourExpression } from './base-map';
import {
  BASE_STYLE_URL,
  DEFAULT_BOUNDS,
  FIT_MAX_ZOOM,
  FIT_PADDING,
  LINE_MIN_ZOOM,
  ROUTES_ATTRIBUTION,
  readColours,
  type MapColours,
} from './map-config';

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
      restyleBase(this.map, this.colours);
      addContours(this.map, this.colours);
      this.addLayers();
      this.addInteractions();
      this.reportMove();
      this.settled = true;
    });
    this.map.on('moveend', () => this.reportMove());
  }

  private addLayers(): void {
    const { map, colours: c } = this;
    const sleepingColour = sleepingColourExpression(c);

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
