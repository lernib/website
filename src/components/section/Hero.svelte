<script lang="ts">
  import PageHeader from '$components/PageHeader.svelte'

  export let half = false;
</script>

<div class="hero" style="{half ? '--height: 50vh' : '--height: 100vh'}">
  <PageHeader />
  <slot />
</div>


<style lang="scss">
  @use "/src/lib/config.scss";

  .hero {
    width: 100vw;
    height: fit-content;
    max-width: 100vw;
    max-height: fit-content;
    background-image: url("/herobg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @include config.for-size(tablet-portrait-up) {
      min-height: var(--height);
    }
  }
</style>
