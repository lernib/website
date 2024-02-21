<script lang="ts">
  export let edit = false;
  export let value: string;
</script>


{#if edit}
  <input
    type="text"
    bind:value={value}
  />
{:else}
  <span>
    {value}
  </span>
{/if}
