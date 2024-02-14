<script lang="ts">
  import Footer from '$components/section/Footer.svelte';
import PageHero from '$components/section/Hero.svelte'
</script>

<svelte:head>
  <title>Pricing | Lernib</title>
</svelte:head>

<PageHero half>
  <div class="hero-center">
    <h1>
      Plans &amp; Pricing
    </h1>
    <h2>
      Pick the best plan for your needs. Upgrade at any time. No
      <br />
      hidden charges, no questions, no hassle.
    </h2>
  </div>
</PageHero>
<Footer />

<style lang="scss">
  .hero-center {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    > h1 {
      font-size: 5rem;
      text-align: center;
      font-family: "Filson Pro", sans-serif;
    }
    
    > h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 1.5rem;
    }
  }
</style>