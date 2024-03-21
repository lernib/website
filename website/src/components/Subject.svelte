<script lang="ts">
  export let src: string;
  export let title: string;
</script>

<div class="component">
  <img {src} alt="Benefit Icon" />
  <h1>{title}</h1>
  <div class="desc">
    <slot />
  </div>
</div>

<style lang="scss">
  @use "@lernib/sass-styling/config";

  $head-text-size: 1.5rem;

  .component {
    display: grid;
    grid-template-areas:
      "img title"
      "x desc";
    grid-template-rows: 2.5rem 1fr;
    column-gap: 2rem;

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

  img {
    grid-area: img;
    background-color: config.$color1;
    padding: 0.5rem;

    $img-size: $head-text-size * 1.5;
    height: $img-size;
    width: $img-size;

    border-radius: 1rem;
  }

  h1 {
    font-size: $head-text-size;
    font-weight: bold;
    grid-area: title;
  }

  .desc {
    grid-area: desc;
  }
</style>