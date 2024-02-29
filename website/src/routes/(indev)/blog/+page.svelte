<script lang="ts">
  import Hero from '$components/section/Hero.svelte'
  import Footer from '$components/section/Footer.svelte'
</script>

<Hero noImage>
  <div class="hero-section">
    <h1>
      Unlocking Potential: Your
      <br class="nomobile" />
      Path to Academic
      <br class="nomobile" />
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
  @use '@lernib/sass-styling/config';

  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    h1 {
      font-size: 2.5rem;
      font-weight: 900;
      text-align: center;

      @include config.for-size(tablet-portrait-up) {
        font-size: 3rem;
      }

      @include config.for-size(tablet-landscape-up) {
        font-size: 5rem;
      }
    }

    p {
      font-size: 1.5rem;
      margin-top: 2em;
      text-align: center;
    }
  }
</style>
