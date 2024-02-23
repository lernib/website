<script lang="ts">
  import Hero from '$components/section/Hero.svelte'
  import Footer from '$components/section/Footer.svelte'
</script>

<Hero noImage>
  <div class="hero-section">
    <h1>
      Unlocking Potential: Your
      <br />
      Path to Academic
      <br />
      Excellence Starts Here
    </h1>
    <p>
      Quis auctor gravida curabitur at. Tellus nibh adipiscing rhoncus
      <br />
      est nam quam. Egestas leo odio lorem enim tellus imperdiet.
    </p>
  </div>
</Hero>
<Footer />

<style lang="scss">
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    h1 {
      font-size: 5rem;
      font-weight: 900;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      margin-top: 2em;
      text-align: center;
    }
  }
</style>
