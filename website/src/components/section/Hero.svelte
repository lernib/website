<script lang="ts">
  import PageHeader from '$components/section/Header.svelte';

  export let mode: 'half' | 'full' | 'fit' = 'fit';
  export let noImage = false;

  const height = {
    half: '50vh',
    full: '100vh',
    fit: 'fit-content'
  }[mode];
</script>

<div class="hero {noImage || 'with-image'}" style="--height: {height}">
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
