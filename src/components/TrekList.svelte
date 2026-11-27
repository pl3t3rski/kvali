<script lang="ts">
  /**
   * The treks in the map's viewport that pass the filters, best established first.
   * This list is the accessible way through the data: every trek on the map is a card here.
   */
  import Flags from '../design/Flags.svelte';
  import { pen } from '../design/sketch';
  import { cardFlags } from '../lib/flags';
  import { formatCountries, statsLine } from '../lib/format';
  import type { ViewState } from './view-state.svelte';

  let { view }: { view: ViewState } = $props();

  let list: HTMLUListElement | undefined = $state();

  const summary = $derived.by(() => {
    const shown = view.visible.length;
    const elsewhere = view.matching.length - shown;
    if (view.matching.length === 0) return 'No treks match these filters.';
    if (shown === 0) return `No treks in this part of the map. ${elsewhere} elsewhere.`;
    return `${shown} ${shown === 1 ? 'trek' : 'treks'} in view${elsewhere > 0 ? ` · ${elsewhere} elsewhere` : ''}`;
  });

  // A route hovered on the map brings its card into view.
  $effect(() => {
    if (view.hoverSource !== 'map' || !view.hoveredId) return;
    list?.querySelector(`[data-trek-id="${view.hoveredId}"]`)?.scrollIntoView({ block: 'nearest' });
  });
</script>

<p class="t-caption" aria-live="polite">{summary}</p>

<ul class="trek-list" bind:this={list}>
  {#each view.visible as trek (trek.id)}
    <li>
      <button
        type="button"
        class="kv-card"
        data-trek-id={trek.id}
        onclick={() => view.select(trek.id)}
        onmouseenter={() => view.hover(trek.id, 'list')}
        onmouseleave={() => view.hover(undefined, 'list')}
        onfocus={() => view.hover(trek.id, 'list')}
        onblur={() => view.hover(undefined, 'list')}
        use:pen={{ kind: 'card', selected: view.hoveredId === trek.id }}
      >
        <span class="kv-card-body">
          <span class="t-caption">{trek.region} · {formatCountries(trek.countries)}{trek.status === 'draft' ? ' · draft' : ''}</span>
          <span class="kv-card-name">{trek.name}</span>
          <span class="kv-stats">{statsLine(trek)}</span>
          <Flags flags={cardFlags(trek)} />
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
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
</style>
