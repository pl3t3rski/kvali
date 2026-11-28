<script lang="ts">
  /**
   * The main view: map, list, filters and trek card, sharing one ViewState.
   *
   * On a desktop the list sits beside the map. On a phone it is a sheet over the bottom
   * of the map with three heights: peek (the count and the filter button), half (the list)
   * and full (the trek card, or the filters).
   */
  import { onMount, tick } from 'svelte';
  import type { TrekIndex } from '../data/types';
  import Button from '../design/Button.svelte';
  import { dataUrl } from '../lib/paths';
  import Filters from './Filters.svelte';
  import MapLegend from './MapLegend.svelte';
  import TrekCard from './TrekCard.svelte';
  import TrekList from './TrekList.svelte';
  import TrekMap from './TrekMap.svelte';
  import { ViewState } from './view-state.svelte';

  const PHONE = '(max-width: 767px)';

  const view = new ViewState();
  let status = $state<'loading' | 'ready' | 'error'>('loading');
  let panel: HTMLElement;
  let phone = $state(false);
  let sheet = $state<'peek' | 'half' | 'full'>('half');
  let filtersOpen = $state(false);
  /** Changes when the theme does, so the map is drawn again in the new colours. */
  let theme = $state('paper');

  onMount(() => {
    const media = matchMedia(PHONE);
    const onMedia = () => (phone = media.matches);
    onMedia();
    media.addEventListener('change', onMedia);
    const onTheme = () => (theme = document.documentElement.dataset.theme ?? 'paper');
    onTheme();
    window.addEventListener('kvali:theme', onTheme);

    view.restore(location.search);
    void load();
    return () => {
      media.removeEventListener('change', onMedia);
      window.removeEventListener('kvali:theme', onTheme);
    };
  });

  async function load() {
    try {
      const response = await fetch(dataUrl('/index.json'));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      view.treks = ((await response.json()) as TrekIndex).treks;
      // A link to a trek that no longer exists opens the plain view.
      if (view.selectedId && !view.selected) view.close();
      status = 'ready';
    } catch (error) {
      console.error('Could not load the trek index', error);
      status = 'error';
    }
  }

  // Keep the whole state in the URL, so any view can be shared.
  $effect(() => {
    if (status !== 'ready') return;
    const url = view.query ? `?${view.query}` : location.pathname;
    history.replaceState(history.state, '', url);
  });

  // On a phone an opened trek or the opened filters take the whole sheet.
  $effect(() => {
    if (view.selectedId || filtersOpen) sheet = 'full';
  });

  /** Where the list was scrolled to before a card opened, to put it back on closing. */
  let listScroll = 0;
  function onPanelScroll() {
    if (!view.selectedId) listScroll = panel.scrollTop;
  }
  // An opened card starts at its top.
  $effect(() => {
    if (view.selectedId) panel?.scrollTo({ top: 0 });
  });

  function onFilters(open: boolean) {
    if (filtersOpen && !open && sheet === 'full' && !view.selectedId) sheet = 'half';
    filtersOpen = open;
  }

  /** Close the card and put the keyboard focus back on the trek in the list. */
  async function closeCard() {
    const id = view.selectedId;
    if (!id) return;
    view.close();
    if (!filtersOpen) sheet = 'half';
    await tick();
    panel.scrollTop = listScroll;
    panel.querySelector<HTMLElement>(`[data-trek-id="${id}"]`)?.focus({ preventScroll: true });
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && view.selectedId) {
      event.preventDefault();
      void closeCard();
    }
  }

  const count = $derived(`${view.visible.length} ${view.visible.length === 1 ? 'trek' : 'treks'} in view`);
</script>

<svelte:window onkeydown={onKeydown} />

<div class="main-view">
  <section class="panel" class:peek={phone && sheet === 'peek'} class:full={phone && sheet === 'full'} aria-label="Treks" bind:this={panel} onscroll={onPanelScroll}>
    {#if phone && status === 'ready'}
      <div class="handle">
        {#if sheet === 'full'}
          <Button variant="quiet" onclick={() => (sheet = 'half')}>Show the map</Button>
        {:else}
          <Button variant="quiet" aria-expanded={sheet === 'half'} onclick={() => (sheet = sheet === 'peek' ? 'half' : 'peek')}>
            {count} · {sheet === 'peek' ? 'show the list' : 'hide the list'}
          </Button>
        {/if}
      </div>
    {/if}

    {#if status === 'loading'}
      <p class="t-body">Loading treks…</p>
    {:else if status === 'error'}
      <p class="t-body" role="alert">The treks could not be loaded. Reload the page to try again.</p>
    {:else}
      {#if view.selected}
        <TrekCard trek={view.selected} onclose={closeCard} />
      {/if}
      <!-- Hidden, not removed, while a card is open: the list keeps its scroll position. -->
      <div class="browse" hidden={view.selected !== undefined}>
        <div class="intro">
          <h1 class="t-heading kv-hand">Where to walk next</h1>
          <p class="t-body">Treks of three days or more that you can walk on your own. Move the map, or pick one from the list.</p>
        </div>
        <Filters {view} onopenchange={onFilters} />
        <TrekList {view} />
      </div>
    {/if}
  </section>

  <div class="map">
    {#if status === 'ready'}
      {#key theme}
        <TrekMap {view} />
      {/key}
      <MapLegend unknown={view.treks.some((trek) => !trek.sleeping)} />
    {/if}
  </div>
</div>

<style>
  /* The list sits on paper, the map on paper-deep. */
  .main-view {
    display: grid;
    grid-template-columns: minmax(20rem, 27rem) 1fr;
    height: 100%;
    min-height: 0;
  }
  .panel {
    overflow-y: auto;
    padding: var(--space-5) var(--space-6) var(--space-7);
    background: var(--paper);
  }
  .browse {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }
  .intro {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  .map {
    position: relative;
    min-height: 0;
    background: var(--paper-deep);
  }

  /* Phone: the map on top, the list as a sheet below it in three heights. */
  @media (max-width: 767px) {
    .main-view {
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .map {
      order: 0;
      flex: 1;
    }
    .panel {
      order: 1;
      flex: none;
      box-sizing: border-box;
      height: 56%;
      padding: 0 var(--space-4) var(--space-7);
    }
    .panel.peek {
      height: 8.25rem;
      overflow: hidden;
    }
    .panel.peek .intro {
      display: none;
    }
    .panel.full {
      position: absolute;
      inset: 0;
      /* Above the map and its credits line. */
      z-index: 5;
      height: auto;
    }
    .handle {
      position: sticky;
      top: 0;
      z-index: 1;
      display: flex;
      justify-content: center;
      padding: var(--space-2) 0;
      background: var(--paper);
    }
  }
</style>
