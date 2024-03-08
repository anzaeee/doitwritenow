<script lang="ts">
  export let link: string;
</script>

<div>
  {#if link}
    <a href={link}>
      <slot />
    </a>
  {:else}
    <button>
      <slot />
    </button>
  {/if}
</div>
