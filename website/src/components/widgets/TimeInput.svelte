<script lang="ts">
  import NumberInput from "./NumberInput.svelte";

  export let elClass: string = '';
  export let value: string = "00:00";

  let hour = parseInt(value.split(':')[0]);
  let minute = parseInt(value.split(':')[1]);

  $: value = buildValue(hour, minute);

  function buildValue(hour: number, minute: number): string {
    return `${
      hour.toString().padStart(2, '0')
    }:${
      minute.toString().padStart(2, '0')
    }`
  }
</script>

<div class="widgetR {elClass}">
  <NumberInput
    elClass="timeNum5fab469e-7167-4680-aeda-741ff118f5c3"
    maxlength={2}
    bind:value={hour}
  />
  <NumberInput
    elClass="timeNum5fab469e-7167-4680-aeda-741ff118f5c3"
    maxlength={2}
    bind:value={minute}
  />
</div>

<style lang="scss">
  .widgetR {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 1rem;
  }

  :global(.timeNum5fab469e-7167-4680-aeda-741ff118f5c3) {
    max-width: 2ch;
    display: inline-block;
    padding: 1em 0.75em;
    background-color: #ddd;
    border-radius: 0.5em;
    font-weight: bold;
    user-select: none;
    border: none;
    text-align: center;
    outline: none;
  }

  :global(.timeNum5fab469e-7167-4680-aeda-741ff118f5c3.invalid) {
    background-color: #faa;
  }
</style>
