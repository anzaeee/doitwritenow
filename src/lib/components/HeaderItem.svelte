<script lang="ts">
  export let link: string;
  export let target: string | undefined = undefined;
  export let rel: string | undefined = undefined;
  import { page } from "$app/stores";

  $: active = $page.url.pathname === link;
  $: isExternal = link && (link.startsWith('http') || target === '_blank');
</script>

<div>
  {#if link}
    <a
      class="btn-primary hover:text-slate-50 hover:rounded-md hover:bg-neutral-700 hover:pd-10 font-medium text-md"
      class:btn-active={active && !isExternal}
      class:text-primary={!active || isExternal}
      class:text-neutral-700={active && !isExternal}
      class:underline={active && !isExternal}
      class:font-extrabold={active && !isExternal}
      href={link}
      {target}
      {rel}
    >
      <slot />
    </a>
  {:else}
    <button>
      <slot />
    </button>
  {/if}
</div>
