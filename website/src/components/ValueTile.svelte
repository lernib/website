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
  @use "@lernib/sass-styling/config";

  div {
    width: calc(100% - 4rem);
    align-self: stretch;
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

    @include config.for-size(tablet-landscape-up) {
      height: calc(100% - 4rem);
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: auto;
    padding-top: 2rem;
  }
</style>
