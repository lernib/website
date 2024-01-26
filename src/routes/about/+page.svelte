<script lang="ts">
  import PageHero from '$components/PageHero.svelte'
</script>


<PageHero half>
  <div class="hero-center">
    <h1>
      About Us
    </h1>
    <h2>
      Risus nec tincidunt leo aliquam diam. Aliquet eleifend mus
      <br />
      egestas lacus ultricies pellentesque dignissim id faucibus.
    </h2>
  </div>
</PageHero>
<div class="approach">
  <h1>
    Our Approach
  </h1>
</div>

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
      font-family: "Filson Pro";
    }
    
    > h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 1.5rem;
    }
  }

  .approach {
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding-top: 5rem;

    > h1 {
      font-size: 2.5rem;
      font-weight: 900;
    }
  }
</style>
