<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div>
  <img {src} alt="Benefit Icon" />
  <h1>{title}</h1>
  <slot />
</div>

<style lang="scss">
  @use "@lernib/sass-styling/config";

  div {
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
    font-size: 2rem;
    font-weight: bold;
  }
</style>