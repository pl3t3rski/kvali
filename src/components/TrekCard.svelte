<script lang="ts">
  /** The full card of the selected trek, from index.json, with a link to its own page. */
  import { onMount } from 'svelte';
  import type { TrekIndexEntry } from '../data/types';
  import {
    PERMIT_LABELS,
    ROUTE_TYPE_LABELS,
    WAYMARKED_LABELS,
    formatCountries,
    formatDays,
    formatKm,
    formatMetres,
    formatMonths,
  } from '../lib/format';
  import SleepingLabel from './SleepingLabel.svelte';

  let { trek, onclose }: { trek: TrekIndexEntry; onclose: () => void } = $props();

  let heading: HTMLHeadingElement;
  // Move the keyboard focus to the card when it opens.
  onMount(() => heading.focus());
</script>

<article class="trek-card" aria-labelledby="trek-card-name">
  <button type="button" onclick={onclose}>Back to the list</button>

  <h2 id="trek-card-name" tabindex="-1" bind:this={heading}>{trek.name}</h2>
  {#if trek.status === 'draft'}<p><strong>Draft: not reviewed yet.</strong></p>{/if}
  <p>{trek.region}, {formatCountries(trek.countries)}</p>
  <p>{trek.one_liner}</p>

  <dl>
    <dt>Length</dt>
    <dd>{formatDays(trek.days[0], trek.days[1])}</dd>
    <dt>Distance</dt>
    <dd>{formatKm(trek.distance_km)}</dd>
    <dt>Total ascent</dt>
    <dd>{formatMetres(trek.ascent_m)}</dd>
    <dt>Route</dt>
    <dd>
      {ROUTE_TYPE_LABELS[trek.route_type]}:
      {trek.route_type === 'loop' ? `from and back to ${trek.start}` : `${trek.start} to ${trek.end}`}
    </dd>
    <dt>Best months</dt>
    <dd>{formatMonths(trek.best_months)}</dd>
    <dt>Sleeping</dt>
    <dd><SleepingLabel type={trek.sleeping} /></dd>
    <dt>Difficulty</dt>
    <dd>{trek.difficulty} of 4</dd>
  </dl>

  <ul>
    <li>{PERMIT_LABELS[trek.permit]}</li>
    <li>{WAYMARKED_LABELS[trek.waymarked]}</li>
    {#if trek.water_scarce}<li>Water is scarce on parts of the route</li>{/if}
    {#if trek.exposed_or_via_ferrata}<li>Has exposed or via ferrata sections</li>{/if}
  </ul>

  <p><a href={`/treks/${trek.id}/`}>Photos, trip reports and sources</a></p>
  <p>Last verified: <time datetime={trek.last_verified}>{trek.last_verified}</time></p>
</article>

<style>
  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.25rem 0.75rem;
  }
  dd {
    margin: 0;
  }
</style>
