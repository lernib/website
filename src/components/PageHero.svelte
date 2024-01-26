<script lang="ts">
  import PageHeader from '$components/PageHeader.svelte'

  export let half = false;
</script>

<div class="hero" style="max-height: {half ? '50vh' : '100vh'}">
  <PageHeader />
  <slot />
</div>


<style lang="scss">
  .hero {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background-image: url("/herobg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
</style>
