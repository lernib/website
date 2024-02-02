<script lang="ts">
  export let edit = false;
  export let value: string;
  export let options: (string | [string, string])[]

  $: display = getDisplay(value)

  function getDisplay(value: string) {
    for (let opt of options) {
      if (opt == value) return opt;
      if (opt[0] == value) return opt[1];
    }

    console.error("Did not find displayable value")
  }
</script>

{#if edit}
  <select bind:value={value}>
    {#each options as opt}
      {#if typeof opt == "string"}
        <option value={opt}>
          {opt}
        </option>
      {:else}
        <option value={opt[0]}>
          {opt[1]}
        </option>
      {/if}
    {/each}
  </select>
{:else}
  {display}
{/if}