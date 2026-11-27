<script lang="ts">
  /**
   * The main view: map, list, filters and trek card, sharing one ViewState.
   * Layout is the bare minimum to give the map a size; the design replaces it.
   */
  import { onMount, tick } from 'svelte';
  import type { TrekIndex } from '../data/types';
  import Filters from './Filters.svelte';
  import TrekCard from './TrekCard.svelte';
  import TrekList from './TrekList.svelte';
  import TrekMap from './TrekMap.svelte';
  import { ViewState } from './view-state.svelte';

  const view = new ViewState();
  let status = $state<'loading' | 'ready' | 'error'>('loading');
  let panel: HTMLElement;

  onMount(async () => {
    view.restore(location.search);
    try {
      const response = await fetch('/index.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      view.treks = ((await response.json()) as TrekIndex).treks;
      // A link to a trek that no longer exists opens the plain view.
      if (view.selectedId && !view.selected) view.close();
      status = 'ready';
    } catch (error) {
      console.error('Could not load the trek index', error);
      status = 'error';
    }
  });

  // Keep the whole state in the URL, so any view can be shared.
  $effect(() => {
    if (status !== 'ready') return;
    const url = view.query ? `?${view.query}` : location.pathname;
    history.replaceState(history.state, '', url);
  });

  /** Close the card and put the keyboard focus back on the trek in the list. */
  async function closeCard() {
    const id = view.selectedId;
    if (!id) return;
    view.close();
    await tick();
    panel.querySelector<HTMLElement>(`[data-trek-id="${id}"]`)?.focus();
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && view.selectedId) {
      event.preventDefault();
      void closeCard();
    }
  }
</script>

<svelte:window onkeydown={onKeydown} />

<div class="main-view">
  <section class="panel" aria-label="Treks" bind:this={panel}>
    {#if status === 'loading'}
      <p>Loading treks…</p>
    {:else if status === 'error'}
      <p role="alert">The treks could not be loaded. Reload the page to try again.</p>
    {:else}
      {#if view.selected}
        <TrekCard trek={view.selected} onclose={closeCard} />
      {/if}
      <!-- Hidden, not removed, while a card is open: the list keeps its scroll position. -->
      <div hidden={view.selected !== undefined}>
        <Filters {view} />
        <TrekList {view} />
      </div>
    {/if}
  </section>

  <div class="map">
    {#if status === 'ready'}
      <TrekMap {view} />
    {/if}
  </div>
</div>

<style>
  /* Minimal layout only. Under 768 px the panel sits below the map until the mobile sheet is designed. */
  .main-view {
    display: grid;
    grid-template-columns: minmax(18rem, 24rem) 1fr;
    height: 100%;
    min-height: 0;
  }
  .panel {
    overflow-y: auto;
    padding: 0.75rem;
  }
  .map {
    position: relative;
    min-height: 0;
  }
  @media (max-width: 767px) {
    .main-view {
      grid-template-columns: 1fr;
      grid-template-rows: 55% 45%;
    }
    .map {
      grid-row: 1;
    }
  }
</style>
