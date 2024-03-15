<script lang="ts">
  export let elClass = '';
  export let value: number = 0;
  export let min: number = -Infinity;
  export let max: number = Infinity;
  export let maxlength: number = Infinity;

  let textValue: string = value.toString();
  let valid = true;

  $: valid = checkValidity(textValue)

  function checkValidity(txt: string): boolean {
    if (txt.match(/^[0-9]+$/)) {
      const num = parseInt(txt);

      if (num >= min && num <= max) {
        value = num;
        return true;
      }

      return false;
    } else {
      return false;
    }
  }
</script>

<input
  type="text"
  class="{elClass || "default"} {valid || "invalid"}"
  bind:value={textValue}
  {maxlength}
/>

<style lang="scss">
  input.default.invalid {
    background-color: #faa;
  }
</style>
