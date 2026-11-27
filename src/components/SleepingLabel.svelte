<script lang="ts">
  /** The sleeping type as text with its route colour next to it: never colour alone. */
  import { SLEEPING_LABELS } from '../lib/format';
  import type { SleepingType } from '../schema/values';
  import { PLACEHOLDER_SLEEPING_COLOURS } from './map-config';

  let { type }: { type: SleepingType } = $props();
</script>

<span class="sleeping"
  ><span class="swatch" style:background-color={PLACEHOLDER_SLEEPING_COLOURS[type]} aria-hidden="true"></span>{SLEEPING_LABELS[type]}</span
>

<style>
  .sleeping {
    white-space: nowrap;
  }
  .swatch {
    display: inline-block;
    width: 0.75em;
    height: 0.75em;
    margin-right: 0.3em;
    border-radius: 50%;
  }
</style>
