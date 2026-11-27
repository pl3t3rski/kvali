<script lang="ts">
  /**
   * A row of flags: one fact each, as an icon and a word. Never the icon alone.
   * With `badges`, each flag sits in a fine drawn frame.
   */
  import type { TrekFlag } from '../lib/flags';
  import Icon from './Icon.svelte';
  import { pen } from './sketch';

  let { flags, badges = false }: { flags: TrekFlag[]; badges?: boolean } = $props();
</script>

{#if flags.length > 0 && badges}
  <div class="kv-badges">
    {#each flags as flag}
      <span class="kv-badge" class:kv-badge-warning={flag.tone === 'warning'} use:pen={{ kind: 'badge' }}>
        {#if flag.icon}<Icon name={flag.icon} size={22} />{/if}
        <span>{flag.label}</span>
      </span>
    {/each}
  </div>
{:else if flags.length > 0}
  <div class="kv-flags">
    {#each flags as flag}
      <span class="kv-flag" class:kv-flag-warning={flag.tone === 'warning'}>
        {#if flag.icon}<Icon name={flag.icon} />{/if}
        <span>{flag.label}</span>
      </span>
    {/each}
  </div>
{/if}
