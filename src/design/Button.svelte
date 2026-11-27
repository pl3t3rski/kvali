<script lang="ts">
  /**
   * A button drawn by the pen: a painted patch for the main action, a frame for the rest,
   * an underline for the quietest. With `href` it is a link that looks the same.
   */
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte';
  import type { IconName } from './icon-names';
  import { pen } from './sketch';

  let {
    variant = 'secondary',
    size = 'md',
    icon,
    href,
    onclick,
    children,
    ...rest
  }: {
    variant?: 'primary' | 'secondary' | 'quiet';
    size?: 'md' | 'lg';
    icon?: IconName;
    href?: string;
    onclick?: () => void;
    children: Snippet;
    [attribute: string]: unknown;
  } = $props();

  const classes = $derived(`kv-btn kv-btn-${variant} kv-btn-${size}`);
</script>

{#if href}
  <a {href} class={classes} use:pen={{ kind: 'button', variant }} {...rest}>
    {#if icon}<Icon name={icon} size={22} />{/if}
    <span>{@render children()}</span>
  </a>
{:else}
  <button type="button" class={classes} {onclick} use:pen={{ kind: 'button', variant }} {...rest}>
    {#if icon}<Icon name={icon} size={22} />{/if}
    <span>{@render children()}</span>
  </button>
{/if}
