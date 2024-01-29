<script lang="ts">
  import PageHero from '$components/PageHero.svelte'
  import Benefit from './Benefit.svelte'
</script>

<PageHero>
  <div class="hero-center">
    <h1>
      Learn faster and better
      <br class="nomobile" />
      through personalized
      <br />
      tutoring
    </h1>
    <h2>
      Connect with excellent tutors on our platform. Learn the way
      <br />
      you want, wherever and however you like. Our students
      <br />
      consistently ace their exams!
    </h2>
    <a href="/get-started">Get Started</a>
  </div>
  <span class="hero-promo">
    Get your first session free of charge.
    <br class="mobile" />
    Contact us to get started.
  </span>
</PageHero>
<div class="benefits">
  <div>
    <h1>
      Benefits of
      <br />
      learning with us
    </h1>
    <span>
      We specialize in cases where students have unique
      or unusual requirements. To ensure you get the right
      support, we start by understanding your needs. Then
      we search our roster of 40,000+ experts to find a
      tutor who "gets" you, who can personalize a learning
      plan for you, and who can help you reach your goal
      with confidence.
    </span>
    <img src="/positive-mixed-race-male-female-look-joyfully-each-other-work-research.jpg"
      alt="Happy tutor and student" />
  </div>
  <div>
    <Benefit
      src="/icons/natural.svg"
      title="Natural"
    >
      We teach like a caring parent,
      <br />
      and never like a monotone
      <br />
      lecture hall professor.
    </Benefit>
    <Benefit
      src="/icons/efficient.svg"
      title="Efficient"
    >
      We use simple examples and
      <br />
      real-life scenarios to teach
      <br />
      things in a fraction of the time.
    </Benefit>
    <Benefit
      src="/icons/flexible.svg"
      title="Flexible"
    >
      Our tutoring sessions have no
      <br />
      default structure. What's on
      <br />
      your mind?
    </Benefit>
    <Benefit
      src="/icons/direct.svg"
      title="Direct"
    >
      We don't waste time, or push
      <br />
      you to spend more than you
      <br />
      actually should
    </Benefit>
    <Benefit
      src="/icons/inspiring.svg"
      title="Inspiring"
    >
      Do you have any long-term
      <br />
      goals? We give you advice on
      <br />
      how to achieve them.
    </Benefit>
    <Benefit
      src="/icons/accomodating.svg"
      title="Accomodating"
    >
      We work well with various
      <br />
      learning differences, from
      <br />
      ADHD to Dyslexia.
    </Benefit>
  </div>
</div>
<div class="subjects">
  <h1>
    Find excellent tutors
    <br />
    in any of the following categories
  </h1>
</div>
<div class="our-aim">
  <div class="aim-panel">
    <h1>
      Our aim is to help students
      <br />
      discover the joy of creative learning
      <br />
      to unlock their true potential
    </h1>
  </div>
</div>
<div class="success">
  <h1>Success stories from past students</h1>
</div>

<style lang="scss">
  @use "/src/lib/config";

  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .hero-center {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: start;
    margin-top: 2.5rem;

    @include config.for-size(tablet-portrait-up) {
      justify-content: center;
      margin-top: 0;
    }
    
    > h1 {
      font-size: 2.5rem;
      text-align: center;
      font-family: "Filson Pro", sans-serif;

      @include config.for-size(tablet-portrait-up) {
        font-size: 5rem;
      }
    }
    
    > h2 {
      font-size: 1.25rem;
      text-align: center;
      margin: 0 2rem;
      margin-top: 1.5rem;

      @include config.for-size(tablet-portrait-up) {
        font-size: 1.5rem;
      }
    }
    
    > a {
      background-color: config.$color2;
      color: config.$color1;
      font-weight: bold;
      padding: 1rem 1.5rem;
      border-radius: 9999px;
      margin-top: 2rem;
      font-size: 1.1rem;
    }
  }

  .hero-promo {
    width: 100%;
    padding: 1em 0;
    background-color: config.$color4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 3rem;

    @include config.for-size(tablet-portrait-up) {
      margin-top: 0;
    }
  }

  .benefits {
    width: 100vw;
    background-color: config.$color1_2;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 2rem;
    column-gap: 4rem;

    height: fit-content;
    flex-direction: column;
    align-items: center;

    @include config.for-size(tablet-portrait-up) {
      height: 90vh;
      flex-direction: row;
      align-items: start;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 0 2.5rem;

      align-items: center;

      @include config.for-size(tablet-portrait-up) {
        align-items: start;
        width: 45%;
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;

      @include config.for-size(tablet-portrait-up) {
        text-align: start;
        font-size: 2.5rem;
      }
    }

    span {
      margin-top: 1.5em;
      text-align: center;

      @include config.for-size(tablet-portrait-up) {
        font-size: 1.25rem;
        text-align: start;
        margin-top: 0;
      }
    }

    > div:first-child img {
      margin-top: 2rem;
      border-radius: 2rem;
      width: 100%;

      @include config.for-size(tablet-portrait-up) {
        width: 75%;
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      @include config.for-size(tablet-portrait-up) {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        align-self: stretch;
      }
    }
  }

  .subjects {
    width: 100%;
    padding: 2rem 0;
    background-color: config.$color1_2;
  }

  .subjects h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  .our-aim {
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .aim-panel {
    width: 75%;
    padding: 2rem 0;
    background: config.$color1_2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
  }

  .aim-panel > h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .success {
    width: 100%;
    padding: 2rem 0;
  }

  .success h1 {
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
  }
</style>
