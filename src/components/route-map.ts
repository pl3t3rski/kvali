/**
 * The map on a trek page: the trek's own route on the same base map as the main view.
 * It can be moved and zoomed. On a phone it takes two fingers to move, so that scrolling
 * the page with one finger never gets stuck in the map.
 */
import { Map as MapLibreMap } from 'maplibre-gl';
import type { BBox } from '../data/types';
import { url } from '../lib/paths';
import { addContours, restyleBase, sleepingColourExpression } from './base-map';
import { BASE_STYLE_URL, FIT_PADDING, ROUTES_ATTRIBUTION, readColours } from './map-config';

export class RouteMap {
  private map: MapLibreMap;

  constructor(container: HTMLElement, id: string, bbox: BBox) {
    const colours = readColours();
    this.map = new MapLibreMap({
      container,
      style: BASE_STYLE_URL,
      bounds: bbox,
      fitBoundsOptions: { padding: FIT_PADDING },
      attributionControl: { compact: false, customAttribution: ROUTES_ATTRIBUTION },
      cooperativeGestures: true,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
    });
    this.map.touchZoomRotate.disableRotation();
    this.map.keyboard.disableRotation();

    void this.map.once('load').then(() => {
      const { map } = this;
      restyleBase(map, colours);
      addContours(map, colours);
      map.addSource('route', { type: 'geojson', data: url(`/routes/${id}.geojson`) });
      const round = { 'line-join': 'round', 'line-cap': 'round' } as const;
      // The trek's route, with the wide butter line under it that marks a selected route.
      map.addLayer({ id: 'route-under', type: 'line', source: 'route', layout: round, paint: { 'line-color': colours.butter, 'line-width': 14 } });
      map.addLayer({ id: 'route', type: 'line', source: 'route', layout: round, paint: { 'line-color': sleepingColourExpression(colours), 'line-width': 3.2 } });
    });
  }

  destroy(): void {
    this.map.remove();
  }
}
