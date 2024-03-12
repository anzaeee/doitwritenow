<script lang="ts">
  export let link: string;
  import { page } from "$app/stores";

  $: active = $page.url.pathname === link;
</script>

<div>
  {#if link}
    <a
      class="btn-primary hover:text-slate-50 hover:rounded-md hover:bg-neutral-700 hover:pd-10 font-medium text-md"
      class:btn-active={active}
      class:text-primary={!active}
      class:text-neutral-700={active}
      class:underline={active}
      class:font-extrabold={active}
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
