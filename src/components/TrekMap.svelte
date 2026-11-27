<script lang="ts">
  /** Mounts the MapLibre map and passes state changes to it. The map code is in trek-map.ts. */
  import 'maplibre-gl/dist/maplibre-gl.css';
  import { onMount, untrack } from 'svelte';
  import { TrekMap } from './trek-map';
  import type { ViewState } from './view-state.svelte';

  let { view }: { view: ViewState } = $props();

  let container: HTMLDivElement;
  let map = $state.raw<TrekMap | undefined>(undefined);

  onMount(() => {
    // A shared link with a trek but no map position opens zoomed to that trek.
    const initial = view.mapView ?? view.selected?.bbox;
    const created = new TrekMap(container, view.treks, initial, {
      onMove(viewport, mapView, settled) {
        view.viewport = viewport;
        // The first position on load is not written to the URL, so a plain visit keeps a plain URL.
        if (settled) view.mapView = mapView;
      },
      onHover: (id) => view.hover(id, 'map'),
      onSelect: (id) => view.select(id),
    });
    map = created;
    return () => created.destroy();
  });

  $effect(() => {
    map?.setMatching(view.matching.map((trek) => trek.id));
  });

  $effect(() => {
    map?.setHighlight(view.hoveredId, view.selectedId);
  });

  // Zoom to the selected trek each time one is opened.
  $effect(() => {
    if (!map || view.fitRequests === 0) return;
    const trek = untrack(() => view.selected);
    if (trek) map.fitTo(trek.bbox);
  });
</script>

<div class="trek-map" bind:this={container} role="region" aria-label="Map of treks"></div>

<style>
  .trek-map {
    position: absolute;
    inset: 0;
  }
  /* The credits in the caption style, on the map's own ground. */
  .trek-map :global(.maplibregl-ctrl-attrib) {
    background: color-mix(in srgb, var(--paper-deep) 86%, transparent);
    font-family: var(--font-reading);
    font-size: 13px;
    line-height: 18px;
    color: var(--ink-quiet);
  }
  .trek-map :global(.maplibregl-ctrl-attrib a) {
    color: var(--ink-quiet);
  }
  .trek-map :global(.maplibregl-canvas:focus-visible) {
    outline: 2px solid var(--focus);
    outline-offset: -4px;
  }
</style>
