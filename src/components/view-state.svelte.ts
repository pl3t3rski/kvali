/**
 * The single state of the main view: filters, map viewport, selected and hovered trek.
 * The map and the list both read from it, which is what keeps them in sync.
 */
import type { BBox, TrekIndexEntry } from '../data/types';
import { NO_FILTERS, visibleTreks, type Filters } from '../lib/filters';
import { parseState, serializeState, type MapView } from '../lib/url-state';

export class ViewState {
  /** Every trek from index.json. */
  treks = $state.raw<TrekIndexEntry[]>([]);
  filters = $state<Filters>({ ...NO_FILTERS });
  /** What the map shows now; undefined until the map has reported it. */
  viewport = $state.raw<BBox | undefined>(undefined);
  /** Map position for the URL; undefined until the map has been moved or a trek opened. */
  mapView = $state.raw<MapView | undefined>(undefined);
  selectedId = $state<string | undefined>(undefined);
  hoveredId = $state<string | undefined>(undefined);
  /** Where the hover came from, so the list only scrolls for hovers on the map. */
  hoverSource = $state<'map' | 'list'>('list');
  /** Counts requests to zoom the map to the selected trek. */
  fitRequests = $state(0);

  /** Treks that pass the filters, anywhere on the map. */
  matching = $derived(visibleTreks(this.treks, this.filters));
  /** Treks that pass the filters and are in the viewport: the list. */
  visible = $derived(visibleTreks(this.treks, this.filters, this.viewport));
  selected = $derived(this.treks.find((trek) => trek.id === this.selectedId));
  /** The query string for the current state. */
  query = $derived(serializeState({ filters: this.filters, trek: this.selectedId, map: this.mapView }));

  /** Restore filters, selection and map position from a query string. */
  restore(query: string): void {
    const state = parseState(query);
    this.filters = state.filters;
    this.selectedId = state.trek;
    this.mapView = state.map;
  }

  /** Open a trek's card and zoom the map to it. */
  select(id: string): void {
    this.selectedId = id;
    this.fitRequests++;
  }

  close(): void {
    this.selectedId = undefined;
  }

  hover(id: string | undefined, source: 'map' | 'list'): void {
    this.hoveredId = id;
    this.hoverSource = source;
  }

  clearFilters(): void {
    this.filters = { ...NO_FILTERS };
  }
}
