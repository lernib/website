<script lang="ts">
  import PageHero from '$components/PageHero.svelte'
</script>

<svelte:head>
  <title>About | Lernib</title>
</svelte:head>

<PageHero half>
  <div class="hero-center">
    <h1>
      About Us
    </h1>
    <h2>
      Dedicated support to help you unlock your potential.
    </h2>
  </div>
</PageHero>
<!-- <div class="approach">
  <h1>
    Our Approach
  </h1>
</div> -->
<div class="stories">
  <div class="our-start">
    <h2>How it started</h2>
    <p>
      Lernib was inspired by challenges - academic and others - that we saw students
      facing around us. We realized that it wasn't just the material that made
      learning difficult. Sometimes it was loneliness and exhaustion. Other times,
      it was needing a teammate to help plan a big project. And, sometimes, it was
      getting back to basics with study skills and time management.
    </p>
    <p>
      We wanted to provide truly personalized support that went beyond tutoring. Lernib
      was born.
    </p>
  </div>
  <div class="our-mission">
    <h2>Our Mission</h2>

    <p>
      We believe that everyone learns better when they have personalized
      support that meets their individual needs.
    </p>

    <p>
      We understand that no two students are alike, and we embrace diverse
      learning styles.
    </p>

    <p>
      Whether you need help with study skills or just someone to bounce ideas
      off of, we're here to help.
    </p>
  </div>
</div>
<div class="values">
  <h1>
    Our Values
  </h1>
</div>

<style lang="scss">
  @use '/src/lib/config';

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

  .stories {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    column-gap: 2rem;

    > div {
      width: calc(40% - 4rem);
      padding: 2rem;
      border-radius: 2rem;

      h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }

      > p {
        text-indent: 2ch;

        &:not(:first-child) {
          margin-top: 0.5rem;
        }
      }
    }
  }

  .our-start {
    background-color: config.$color2_light;
    color: black;
  }

  .our-mission {
    background-color: config.$color2;
    color: config.$color1;
  }

  .values {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 900;
    }
  }

  // .approach {
  //   width: 100vw;
  //   height: 90vh;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: start;
  //   padding-top: 5rem;

  //   > h1 {
  //     font-size: 2.5rem;
  //     font-weight: 900;
  //   }
  // }
</style>
