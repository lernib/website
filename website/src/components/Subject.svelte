<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div class="component">
  <div class="top">
    <img {src} alt="Benefit Icon" />
    <h1>{title}</h1>
  </div>
  <slot />
</div>

<style lang="scss">
  @use "@lernib/sass-styling/config";

  .component {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    @include config.for-size(tablet-portrait) {
      justify-content: start;
      align-items: start;
    }

    @include config.for-size(tablet-landscape-up) {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;

    column-gap: 2rem;
  }
</style>