<script lang="ts">
  /** One of the nine hand-drawn trek icons. Pair it with a word. */
  import icons from './icons.json';
  import type { IconName } from './icon-names';

  let { name, size = 24 }: { name: IconName; size?: number } = $props();
</script>

<svg class="kv-icon" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d={icons[name]} /></svg>
