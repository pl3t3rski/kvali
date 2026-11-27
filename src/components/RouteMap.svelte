<script lang="ts">
  /** The map of one trek, for its own page. Loaded only when it scrolls into view. */
  import 'maplibre-gl/dist/maplibre-gl.css';
  import { onMount } from 'svelte';
  import type { BBox } from '../data/types';
  import { RouteMap } from './route-map';

  let { id, bbox, label }: { id: string; bbox: BBox; label: string } = $props();

  let container: HTMLDivElement;

  onMount(() => {
    let map = new RouteMap(container, id, bbox);
    // The map draws with the theme's colours, so a change of theme draws it again.
    const onTheme = () => {
      map.destroy();
      map = new RouteMap(container, id, bbox);
    };
    window.addEventListener('kvali:theme', onTheme);
    return () => {
      window.removeEventListener('kvali:theme', onTheme);
      map.destroy();
    };
  });
</script>

<div class="route-map" bind:this={container} role="region" aria-label={label}></div>

<style>
  .route-map {
    width: 100%;
    height: 460px;
    background: var(--paper-deep);
  }
  .route-map :global(.maplibregl-ctrl-attrib) {
    background: color-mix(in srgb, var(--paper-deep) 86%, transparent);
    font-family: var(--font-reading);
    font-size: 13px;
    line-height: 18px;
    color: var(--ink-quiet);
  }
  .route-map :global(.maplibregl-ctrl-attrib a) {
    color: var(--ink-quiet);
  }
  @media (max-width: 767px) {
    .route-map {
      height: 340px;
    }
  }
</style>
