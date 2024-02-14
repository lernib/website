<script lang="ts">
  import Footer from '$components/section/Footer.svelte';
  import PageHero from '$components/section/Hero.svelte'
  import Price from '$components/Price.svelte';
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
<main>
  <Price price={20} name="Group">
    Group tutoring is in the works. When done, it will
    <br />
    be a more affordable but less personalized alternative
    to dedicated tutoring.
  </Price>
  <Price price={35} name="1-on-1">
    Private tutoring is ready to go! We offer 1-on-1 tutoring
    <br />
    for various subjects, from computer science to SAT testing.
    <br />
    The first session is on us. Contact us to get started!
  </Price>
</main>
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

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 5rem 0;
    column-gap: 4rem;
  }
</style>