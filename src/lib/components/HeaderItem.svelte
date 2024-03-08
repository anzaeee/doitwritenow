<script lang="ts">
  export let link: string;
  import { page } from "$app/stores";

  $: active = $page.url.pathname === link;
</script>

<div>
  {#if link}
    <a
      class="main btn btn-ghost btn-sm hover:text-slate-50 hover:rounded-md hover:bg-neutral-700 font-medium"
      class:btn-active={active}
      class:text-primary={!active}
      class:text-neutral-700={active}
      class:underline={active}
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
