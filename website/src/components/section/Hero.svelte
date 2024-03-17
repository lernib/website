<script lang="ts">
  import PageHeader from '$components/section/Header.svelte';

  export let half = false;
  export let noImage = false;
</script>

<div class="hero {noImage || 'with-image'}" style="{half ? '--height: 50vh' : '--height: fit-content'}">
  <PageHeader />
  <slot />
</div>


<style lang="scss">
  @use "@lernib/sass-styling/config";

  .hero {
    width: 100vw;
    height: fit-content;
    max-width: 100vw;
    max-height: fit-content;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @include config.for-size(phone-only) {
      min-height: var(--height);
    }

    @include config.for-size(tablet-portrait-up) {
      min-height: var(--height);
    }

    &.with-image {
      background-image: url('/herobg.jpg');
    }
  }
</style>
