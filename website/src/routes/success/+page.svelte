<script lang="ts">
  import Hero from '$components/section/Hero.svelte'
  import Footer from '$components/section/Footer.svelte'
  import StorySummary from '$components/StorySummary.svelte'
  import { Story } from '$lib/types';
  import { DOMAIN } from '$lib/config';

  const stories = fetch(`${DOMAIN}/success.json`)
    .then(res => res.json())
    .then(json => Story.array().parse(json));
</script>

<svelte:head>
  <title>Success | Lernib</title>
</svelte:head>

<Hero noImage mode='full'>
  <div class="hero-section">
    <h1>
      Your success is my
      <br class="nomobile" />
      top priority
    </h1>
    <p>
      I've helped students reach their academic goals, create
      <br />
      their dream projects, and navigate their ambitions.
      <br />
      Join us!
    </p>
  </div>
</Hero>
<div class="success">
  {#await stories}
    Loading stories...
  {:then stories}
    {#each stories as story}
      <StorySummary {story} />
    {/each}
  {/await}
</div>
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
      font-family: "Filson Pro", sans-serif;
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

  .success {
    flex-grow: 1;
    align-self: stretch;
    justify-content: center;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 1rem;

    padding: 0 3rem;
  }
</style>
