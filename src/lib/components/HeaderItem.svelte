<script lang="ts">
  export let link: string;
  export let active = $page.url.pathname === link;
  import { page } from "$app/stores";
</script>

<div>
  {#if link}
    <a
      class="main btn btn-ghost btn-sm hover:text-primary font-medium"
      class:btn-active={active}
      class:text-primary={!active}
      class:text-neutral-700={active}
      class:font-bold={active}
      href={link}
    >
      <slot />
    </a>
  {:else}
    <button>
      <slot />
    </button>
  {/if}
</div>
