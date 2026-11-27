<script lang="ts">
  /** The opened card of the selected trek: its photo, the plain facts, and the way to its own page. */
  import { onMount } from 'svelte';
  import type { TrekIndexEntry } from '../data/types';
  import Button from '../design/Button.svelte';
  import Flags from '../design/Flags.svelte';
  import { pen } from '../design/sketch';
  import { trekFlags } from '../lib/flags';
  import { ROUTE_TYPE_LABELS, formatCountries, formatMonths } from '../lib/format';
  import { PHOTO_SOURCE_NAMES } from '../lib/photo-source';
  import { url } from '../lib/paths';

  let { trek, onclose }: { trek: TrekIndexEntry; onclose: () => void } = $props();

  let heading: HTMLHeadingElement;
  // Move the keyboard focus to the card when it opens.
  onMount(() => heading.focus({ preventScroll: true }));

  const route = $derived(
    trek.route_type === 'loop' || !trek.end ? `From and back to ${trek.start}` : `${trek.start} to ${trek.end}`,
  );
</script>

<article class="trek-card" aria-labelledby="trek-card-name">
  <div><Button variant="quiet" onclick={onclose}>Back to the list</Button></div>

  {#if trek.photo}
    <figure class="kv-photo">
      <span class="kv-grain kv-photo-print">
        <img src={url(trek.photo.src)} width={trek.photo.width} height={trek.photo.height} alt={trek.photo.alt} />
      </span>
      <figcaption class="t-caption">
        {trek.photo.alt}. Photo: <a href={trek.photo.page_url} rel="noopener">{trek.photo.author}</a>, {PHOTO_SOURCE_NAMES[trek.photo.source]}
      </figcaption>
    </figure>
  {/if}

  <div class="words">
    <p class="t-caption">{trek.region} · {formatCountries(trek.countries)}{trek.status === 'draft' ? ' · draft, not reviewed yet' : ''}</p>
    <h2 class="t-heading kv-hand" id="trek-card-name" tabindex="-1" bind:this={heading}>
      <span class="kv-mark kv-mark-highlight" use:pen={{ kind: 'mark' }}>{trek.name}</span>
    </h2>
    <p class="t-body">{trek.one_liner}</p>
    <ul class="numbers" aria-label="The trek in numbers">
      {#if trek.days}
        <li use:pen={{ kind: 'frame', weight: 'fine' }}>
          <span class="number">{trek.days[0] === trek.days[1] ? trek.days[0] : `${trek.days[0]}–${trek.days[1]}`}</span>
          <span class="t-caption">days</span>
        </li>
      {/if}
      <li use:pen={{ kind: 'frame', weight: 'fine' }}>
        <span class="number">{Math.round(trek.distance_km)}</span>
        <span class="t-caption">km</span>
      </li>
      <li use:pen={{ kind: 'frame', weight: 'fine' }}>
        <span class="number">{trek.ascent_m.toLocaleString('en-GB')}</span>
        <span class="t-caption">m up</span>
      </li>
      {#if trek.difficulty}
        <li use:pen={{ kind: 'frame', weight: 'fine' }}>
          <span class="number">{trek.difficulty}<small> of 4</small></span>
          <span class="t-caption">how hard</span>
        </li>
      {/if}
    </ul>
    <Flags flags={trekFlags(trek)} badges />
    <p class="t-small">
      {trek.route_type ? `${ROUTE_TYPE_LABELS[trek.route_type]}. ` : ''}{route}.
      {#if trek.best_months.length > 0}Best in {formatMonths(trek.best_months)}.{/if}
    </p>
  </div>

  <div><Button variant="primary" href={url(`/treks/${trek.id}/`)}>See the whole trek</Button></div>
  <p class="t-caption">Last verified <time datetime={trek.last_verified}>{trek.last_verified}</time></p>
</article>

<style>
  .trek-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }
  .words {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  .numbers {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4.75rem, 1fr));
    gap: var(--space-2);
  }
  .numbers li {
    display: flex;
    flex-direction: column;
    padding: var(--space-3) var(--space-3) var(--space-2);
  }
  .number {
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .number small {
    font-size: 13px;
    font-weight: 500;
  }
  h2:focus {
    outline: none;
  }
  h2:focus-visible {
    outline: 2px solid var(--focus);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }
</style>
