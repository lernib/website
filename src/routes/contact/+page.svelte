<script lang="ts">
  import PageHero from '$components/PageHero.svelte'
</script>


<PageHero half>
  <div class="hero-center">
    <h1>
      Contact Us
    </h1>
    <h2>
      We understand that learning something new isn't easy, and you
      <br />
      want a tutor who is just right. We offer the first session free of
      <br />
      charge - just send us a message and we will reach out to you.
    </h2>
  </div>
</PageHero>

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