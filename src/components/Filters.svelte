<script lang="ts">
  /**
   * The five filters, as chips. They stay folded away until asked for, so the list of
   * treks is what you see first.
   */
  import Button from '../design/Button.svelte';
  import Chip from '../design/Chip.svelte';
  import type { IconName } from '../design/icon-names';
  import { DAYS_MAX, isFiltering } from '../lib/filters';
  import { MONTHS, SLEEPING_LABELS } from '../lib/format';
  import { SLEEPING_TYPES, type SleepingType } from '../schema/values';
  import type { ViewState } from './view-state.svelte';

  let { view, onopenchange }: { view: ViewState; onopenchange?: (open: boolean) => void } = $props();

  let open = $state(false);
  $effect(() => onopenchange?.(open));

  const LEVELS = [1, 2, 3, 4];
  const SLEEPING_ICONS: Partial<Record<SleepingType, IconName>> = { huts: 'hut', guesthouses: 'guesthouse', camping: 'camping' };
  /** Lengths offered as chips. The top one means "10 days or more". */
  const LENGTHS: { days: [number, number]; label: string }[] = [
    { days: [3, 5], label: '3 to 5 days' },
    { days: [6, 9], label: '6 to 9 days' },
    { days: [10, DAYS_MAX], label: '10 days or more' },
  ];

  const sameDays = (a?: [number, number], b?: [number, number]) => a?.[0] === b?.[0] && a?.[1] === b?.[1];
  /** A length from a shared link that is not one of the chips still shows as a chip of its own. */
  const customLength = $derived(
    view.filters.days && !LENGTHS.some((length) => sameDays(length.days, view.filters.days))
      ? `${view.filters.days[0]} to ${view.filters.days[1] >= DAYS_MAX ? `${DAYS_MAX}+` : view.filters.days[1]} days`
      : undefined,
  );

  const active = $derived(
    (view.filters.month !== undefined ? 1 : 0) +
      (view.filters.days ? 1 : 0) +
      view.filters.sleeping.length +
      view.filters.difficulty.length +
      (view.filters.noPermit ? 1 : 0) +
      (view.filters.waymarked ? 1 : 0),
  );

  function toggle<T>(list: T[], value: T): T[] {
    return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }
</script>

<div class="filters">
  <div class="bar">
    <Button onclick={() => (open = !open)} aria-expanded={open} aria-controls="filter-groups">
      {open ? 'Hide filters' : active > 0 ? `Filters · ${active} on` : 'Filter the treks'}
    </Button>
    {#if isFiltering(view.filters)}
      <Button variant="quiet" onclick={() => view.clearFilters()}>Clear</Button>
    {/if}
  </div>

  {#if open}
    <div class="groups" id="filter-groups">
      <div role="group" aria-labelledby="filter-month">
        <p class="t-label kv-hand" id="filter-month">When</p>
        <div class="kv-chips">
          {#each MONTHS as name, index}
            <Chip selected={view.filters.month === index + 1} onclick={() => (view.filters.month = view.filters.month === index + 1 ? undefined : index + 1)}>
              <span aria-hidden="true">{name.slice(0, 3)}</span><span class="visually-hidden">{name}</span>
            </Chip>
          {/each}
        </div>
      </div>

      <div role="group" aria-labelledby="filter-days">
        <p class="t-label kv-hand" id="filter-days">How long</p>
        <div class="kv-chips">
          {#each LENGTHS as length}
            <Chip selected={sameDays(length.days, view.filters.days)} onclick={() => (view.filters.days = sameDays(length.days, view.filters.days) ? undefined : length.days)}>
              {length.label}
            </Chip>
          {/each}
          {#if customLength}
            <Chip selected onclick={() => (view.filters.days = undefined)}>{customLength}</Chip>
          {/if}
        </div>
      </div>

      <div role="group" aria-labelledby="filter-sleeping">
        <p class="t-label kv-hand" id="filter-sleeping">Where you sleep</p>
        <div class="kv-chips">
          {#each SLEEPING_TYPES as type}
            <Chip icon={SLEEPING_ICONS[type]} selected={view.filters.sleeping.includes(type)} onclick={() => (view.filters.sleeping = toggle(view.filters.sleeping, type))}>
              {SLEEPING_LABELS[type]}
            </Chip>
          {/each}
        </div>
      </div>

      <div role="group" aria-labelledby="filter-level">
        <p class="t-label kv-hand" id="filter-level">How hard</p>
        <div class="kv-chips">
          {#each LEVELS as level}
            <Chip selected={view.filters.difficulty.includes(level)} onclick={() => (view.filters.difficulty = toggle(view.filters.difficulty, level))}>
              <span class="visually-hidden">Level </span>{level}
            </Chip>
          {/each}
        </div>
        <p class="t-caption">1 is the easiest, 4 the hardest.</p>
      </div>

      <div role="group" aria-labelledby="filter-flags">
        <p class="t-label kv-hand" id="filter-flags">Only show</p>
        <div class="kv-chips">
          <Chip selected={view.filters.noPermit} onclick={() => (view.filters.noPermit = !view.filters.noPermit)}>No permit</Chip>
          <Chip icon="waymarked" selected={view.filters.waymarked} onclick={() => (view.filters.waymarked = !view.filters.waymarked)}>Waymarked</Chip>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .filters {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }
  .bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
  }
  .groups {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }
  .groups > div {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
</style>
