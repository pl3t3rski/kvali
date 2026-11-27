<script lang="ts">
  /** A filter you switch on and off. Selected, it gets a butter highlight and a heavier frame. */
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte';
  import type { IconName } from './icon-names';
  import { pen } from './sketch';

  let { selected = false, icon, onclick, children }: { selected?: boolean; icon?: IconName; onclick?: () => void; children: Snippet } = $props();
</script>

<button type="button" class="kv-chip" aria-pressed={selected} {onclick} use:pen={{ kind: 'chip', selected }}>
  {#if icon}<Icon name={icon} size={20} />{/if}
  <span>{@render children()}</span>
</button>
