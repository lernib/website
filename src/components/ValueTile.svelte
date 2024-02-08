<script lang="ts">
  export let title: string;
  export let idx: number;
</script>

<div class={`childn-${idx}`}>
  <slot />
  <h2>
    {title}
  </h2>
</div>

<style lang="scss">
  @use "/src/lib/config";

  div {
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    border-radius: 2rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;

    &.childn-1 {
      background-color: config.$color2_light;
    }

    &.childn-2 {
      background-color: config.$color4_light;
    }

    &.childn-3 {
      background-color: config.$color5_light;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: auto;
  }
</style>
