<script lang="ts">
  /**
   * The treks in the map's viewport that pass the filters, best established first.
   * This list is the accessible way through the data: every trek on the map is a button here.
   */
  import { formatCountries, formatDays, formatKm } from '../lib/format';
  import SleepingLabel from './SleepingLabel.svelte';
  import type { ViewState } from './view-state.svelte';

  let { view }: { view: ViewState } = $props();

  let list: HTMLUListElement | undefined = $state();

  const summary = $derived.by(() => {
    const shown = view.visible.length;
    const elsewhere = view.matching.length - shown;
    if (view.matching.length === 0) return 'No treks match these filters.';
    if (shown === 0) return `No treks in this part of the map. ${elsewhere} elsewhere.`;
    return `${shown} ${shown === 1 ? 'trek' : 'treks'} in view${elsewhere > 0 ? `, ${elsewhere} elsewhere` : ''}`;
  });

  // A route hovered on the map brings its card into view.
  $effect(() => {
    if (view.hoverSource !== 'map' || !view.hoveredId) return;
    list?.querySelector(`[data-trek-id="${view.hoveredId}"]`)?.scrollIntoView({ block: 'nearest' });
  });
</script>

<p aria-live="polite">{summary}</p>

<ul class="trek-list" bind:this={list}>
  {#each view.visible as trek (trek.id)}
    <li>
      <button
        type="button"
        data-trek-id={trek.id}
        class:highlighted={view.hoveredId === trek.id}
        onclick={() => view.select(trek.id)}
        onmouseenter={() => view.hover(trek.id, 'list')}
        onmouseleave={() => view.hover(undefined, 'list')}
        onfocus={() => view.hover(trek.id, 'list')}
        onblur={() => view.hover(undefined, 'list')}
      >
        <strong>{trek.name}</strong>
        {#if trek.status === 'draft'}<em>(draft)</em>{/if}
        <span>{trek.region}, {formatCountries(trek.countries)}</span>
        <span>
          {formatDays(trek.days[0], trek.days[1])} · {formatKm(trek.distance_km)} · <SleepingLabel type={trek.sleeping} />
        </span>
      </button>
    </li>
  {/each}
</ul>

<style>
  .trek-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 0;
    border-top: 1px solid #ccc;
    background: none;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  button span {
    display: block;
  }
  /* Placeholder for the hovered state. */
  .highlighted {
    background: #eee;
  }
</style>
