<script lang="ts">
  /** The five filters. Plain form controls for now; the design decides how they look. */
  import { DAYS_MAX, DAYS_MIN, isFiltering } from '../lib/filters';
  import { MONTHS } from '../lib/format';
  import { SLEEPING_TYPES, type SleepingType } from '../schema/values';
  import SleepingLabel from './SleepingLabel.svelte';
  import type { ViewState } from './view-state.svelte';

  let { view }: { view: ViewState } = $props();

  const LEVELS = [1, 2, 3, 4];
  const daysFrom = $derived(view.filters.days?.[0] ?? DAYS_MIN);
  const daysTo = $derived(view.filters.days?.[1] ?? DAYS_MAX);
  const daysText = $derived(
    view.filters.days ? `${daysFrom} to ${daysTo === DAYS_MAX ? `${DAYS_MAX}+` : daysTo} days` : 'Any length',
  );

  function setMonth(value: string) {
    view.filters.month = value === '' ? undefined : Number(value);
  }

  /** Keep "from" at or below "to": moving one slider past the other drags it along. */
  function setDays(from: number, to: number, moved: 'from' | 'to') {
    if (from > to) {
      if (moved === 'from') to = from;
      else from = to;
    }
    view.filters.days = from === DAYS_MIN && to === DAYS_MAX ? undefined : [from, to];
  }

  function toggle<T>(list: T[], value: T): T[] {
    return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }

  const toggleSleeping = (type: SleepingType) => (view.filters.sleeping = toggle(view.filters.sleeping, type));
  const toggleLevel = (level: number) => (view.filters.difficulty = toggle(view.filters.difficulty, level));
</script>

<form class="filters" aria-label="Filters" onsubmit={(event) => event.preventDefault()}>
  <label>
    Month
    <select value={view.filters.month ?? ''} onchange={(event) => setMonth(event.currentTarget.value)}>
      <option value="">Any month</option>
      {#each MONTHS as name, index}
        <option value={index + 1}>{name}</option>
      {/each}
    </select>
  </label>

  <fieldset>
    <legend>Days: {daysText}</legend>
    <label>
      From
      <input
        type="range"
        min={DAYS_MIN}
        max={DAYS_MAX}
        value={daysFrom}
        aria-valuetext={`${daysFrom} days`}
        oninput={(event) => setDays(event.currentTarget.valueAsNumber, daysTo, 'from')}
      />
    </label>
    <label>
      To
      <input
        type="range"
        min={DAYS_MIN}
        max={DAYS_MAX}
        value={daysTo}
        aria-valuetext={daysTo === DAYS_MAX ? `${DAYS_MAX} days or more` : `${daysTo} days`}
        oninput={(event) => setDays(daysFrom, event.currentTarget.valueAsNumber, 'to')}
      />
    </label>
  </fieldset>

  <fieldset>
    <legend>Sleeping</legend>
    {#each SLEEPING_TYPES as type}
      <label>
        <input type="checkbox" checked={view.filters.sleeping.includes(type)} onchange={() => toggleSleeping(type)} />
        <SleepingLabel {type} />
      </label>
    {/each}
  </fieldset>

  <fieldset>
    <legend>Difficulty</legend>
    {#each LEVELS as level}
      <label>
        <input type="checkbox" checked={view.filters.difficulty.includes(level)} onchange={() => toggleLevel(level)} />
        {level}
      </label>
    {/each}
  </fieldset>

  <fieldset>
    <legend>Only show</legend>
    <label><input type="checkbox" bind:checked={view.filters.noPermit} /> No permit needed</label>
    <label><input type="checkbox" bind:checked={view.filters.waymarked} /> Waymarked</label>
  </fieldset>

  {#if isFiltering(view.filters)}
    <button type="button" onclick={() => view.clearFilters()}>Clear filters</button>
  {/if}
</form>

<style>
  .filters {
    display: grid;
    gap: 0.5rem;
  }
  fieldset label {
    margin-right: 0.75rem;
    white-space: nowrap;
  }
</style>
