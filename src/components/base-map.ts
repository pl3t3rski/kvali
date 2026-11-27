/**
 * What every Kvali map shares: the base style redrawn in the design's colours, and the
 * contour lines. Used by the main view (trek-map.ts) and by the map on a trek page (route-map.ts).
 *
 * Drawn as the design system asks: the ground in paper-deep with contour lines in dusk at low
 * strength, water as a glacier fill with a pen outline, and no dashed lines anywhere, because
 * a dotted line means a route.
 */
import { addProtocol, setWorkerUrl, type ExpressionSpecification, type Map as MapLibreMap } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import mlcontour from 'maplibre-contour';
import { DEM_ATTRIBUTION, DEM_TILES_URL, sleepingColours, type MapColours } from './map-config';

// The bundler moves the worker file, so tell MapLibre where it ended up.
setWorkerUrl(workerUrl);

/** Base-map layers that only add noise to a trek overview. */
const HIDDEN_LAYERS = /^(building|aeroway|road_area_pier|road_pier|railway|landuse_residential|airport|highway-shield|road_shield|highway-name|.*_casing$)/;

export function firstSymbolLayer(map: MapLibreMap): string | undefined {
  return map.getStyle().layers.find((layer) => layer.type === 'symbol')?.id;
}

/** Replace the base style's colours with the design tokens, and hide what a walker does not need. */
export function restyleBase(map: MapLibreMap, c: MapColours): void {
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
      firstSymbolLayer(map),
    );
  }
}

/** Contour lines in dusk at low strength, drawn from the elevation tiles. */
export function addContours(map: MapLibreMap, c: MapColours): void {
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
      firstSymbolLayer(map),
    );
  } catch (error) {
    // The map works without its contour lines.
    console.warn('Could not add contour lines', error);
  }
}

/** The route colour for a feature, by its `sleeping` property. */
export function sleepingColourExpression(c: MapColours): ExpressionSpecification {
  const colours = sleepingColours(c);
  return ['match', ['get', 'sleeping'], 'huts', colours.huts, 'guesthouses', colours.guesthouses, 'camping', colours.camping, 'mixed', colours.mixed, colours.unknown];
}
