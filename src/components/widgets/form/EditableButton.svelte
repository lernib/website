<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  export let edit = false;
  export let click: MouseEventHandler<HTMLButtonElement>;
</script>

{#if edit}
  <button on:click={click}>
    <slot />
  </button>
{/if}


<style lang="scss">
  button {
    padding: 0.5rem;
    margin-top: 1rem;
  }
</style>
