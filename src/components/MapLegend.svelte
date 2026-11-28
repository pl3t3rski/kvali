<script lang="ts">
  /**
   * The key to the map's colours. A route's colour says where you sleep; butter marks the
   * trek you point at or opened. Open by default on a desktop; on a phone, where the map is
   * small, it starts folded to a button.
   *
   * The swatches use the same design tokens the map reads, so they always match it.
   */
  import { onMount } from 'svelte';
  import { SLEEPING_LABELS } from '../lib/format';
  import type { SleepingType } from '../schema/values';
  import { pen } from '../design/sketch';
  import { UNKNOWN_OPACITY } from './map-config';

  /** Show the row for treks whose sleeping is not known yet. Only drafts can be unknown. */
  let { unknown = false }: { unknown?: boolean } = $props();

  const KNOWN: { colour: string; label: string; opacity: number }[] = (
    [
      ['huts', '--larch'],
      ['guesthouses', '--dusk'],
      ['camping', '--moss'],
      ['mixed', '--ink'],
    ] as [SleepingType, string][]
  ).map(([type, token]) => ({ colour: `var(${token})`, label: SLEEPING_LABELS[type], opacity: 1 }));
  const ROUTES = $derived(unknown ? [...KNOWN, { colour: 'var(--ink-quiet)', label: 'Not known yet', opacity: UNKNOWN_OPACITY }] : KNOWN);

  let open = $state(true);
  onMount(() => {
    if (matchMedia('(max-width: 767px)').matches) open = false;
  });
</script>

<div class="legend" use:pen={{ kind: 'frame', weight: 'fine' }}>
  <button type="button" class="toggle t-label kv-hand" aria-expanded={open} aria-controls="map-legend-body" onclick={() => (open = !open)}>
    Key
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" class:open>
      <path d="M3 5.5 L7 9.5 L11 5.5" />
    </svg>
  </button>
  <div id="map-legend-body" class="body" hidden={!open}>
    <p class="t-caption">Route colour: where you sleep</p>
    <ul>
      {#each ROUTES as route (route.label)}
        <li class="t-small">
          <svg width="28" height="10" viewBox="0 0 28 10" aria-hidden="true"><line x1="3" y1="5" x2="25" y2="5" style:stroke={route.colour} style:stroke-opacity={route.opacity} class="route" /></svg>
          {route.label}
        </li>
      {/each}
      <li class="t-small">
        <svg width="28" height="10" viewBox="0 0 28 10" aria-hidden="true">
          <line x1="5" y1="5" x2="23" y2="5" class="glow" />
          <line x1="5" y1="5" x2="23" y2="5" style:stroke="var(--ink-quiet)" class="route" />
        </svg>
        The trek you point at or opened
      </li>
    </ul>
    <p class="t-caption">Zoomed out, each trek is a dot in its colour.</p>
  </div>
</div>

<style>
  .legend {
    position: absolute;
    top: var(--space-4);
    left: var(--space-4);
    z-index: 3;
    max-width: 15rem;
    padding: var(--space-2) var(--space-4) var(--space-3);
    background: var(--paper);
    color: var(--ink);
  }
  .toggle {
    all: unset;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-1) 0;
    cursor: pointer;
  }
  .toggle:focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }
  .toggle svg path {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.15s ease-out;
    transform-origin: 7px 7px;
  }
  .toggle svg.open path {
    transform: rotate(180deg);
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding-top: var(--space-1);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }
  li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  svg {
    flex: none;
  }
  .route {
    stroke-width: 3.2;
    stroke-linecap: round;
  }
  .glow {
    stroke: var(--butter);
    stroke-width: 10;
    stroke-linecap: round;
  }
  @media (prefers-reduced-motion: reduce) {
    .toggle svg path {
      transition: none;
    }
  }
</style>
