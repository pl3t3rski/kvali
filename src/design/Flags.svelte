<script lang="ts">
  /** A row of flags: one fact each, as an icon and a word. Never the icon alone. */
  import type { TrekFlag } from '../lib/flags';
  import Icon from './Icon.svelte';

  let { flags }: { flags: TrekFlag[] } = $props();
</script>

{#if flags.length > 0}
  <div class="kv-flags">
    {#each flags as flag}
      <span class="kv-flag" class:kv-flag-warning={flag.tone === 'warning'}>
        {#if flag.icon}<Icon name={flag.icon} />{/if}
        <span>{flag.label}</span>
      </span>
    {/each}
  </div>
{/if}
