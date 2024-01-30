<script lang="ts">
  export let name: string = "";
  export let first = false;
</script>

<div>
  <slot />
  <span>
    {#if !first}
      {name}
    {/if}
  </span>
</div>

<style lang="scss">
  @use "/src/lib/config";

  div {
    max-width: 350px;
    aspect-ratio: 1 / 1;
    border-radius: 2rem;
    font-size: 1.5rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: config.$color3;
    color: config.$color1;

    &:nth-child(n+2) {
      color: black;
    }

    &:nth-child(2) {
      background-color: config.$color2_light;
    }

    &:nth-child(3) {
      background-color: config.$color5_light;
    }

    &:not(:first-child) {
      font-size: 1.25rem;
      justify-content: start;
      align-items: start;

      span {
        margin-top: auto;
        font-weight: bold;
      }
    }
  }
</style>
