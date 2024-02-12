<script lang="ts">
  import PageHero from '$components/PageHero.svelte'
  import Benefit from '$components/Benefit.svelte'
  import SuccessTile from '$components/SuccessTile.svelte'
</script>

<svelte:head>
  <title>Homepage | Lernib</title>
</svelte:head>

<PageHero>
  <div class="hero-center">
    <h1>
      Learn faster and
      <br class="nomobile tablet-portrait" />
      better
      <br class="nomobile notablet-portrait" />
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
    <a href="/about">Learn More</a>
  </div>
  <span class="hero-promo">
    Get your first session free of charge.&MediumSpace;
    <br class="mobile" />
    <a href="/contact" class="promo-link">
      Contact us
    </a>
    &ThinSpace;to get started.
  </span>
</PageHero>
<div class="benefits">
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
<!-- <div class="subjects">
  <h1>
    Find excellent tutors
    <br />
    in any of the following categories
  </h1>
</div> -->
<!-- <div class="our-aim">
  <div class="aim-panel">
    <h1>
      Our aim is to help students
      <br />
      discover the joy of creative learning
      <br />
      to unlock their true potential
    </h1>
  </div>
</div> -->
<div class="success">
  <h1>Success stories from past students</h1>
  <div class="tiles">
    <SuccessTile first>
      <span>
        Lernib has successfully
        <br />
        tutored many
        <br />
        students to achieve
        <br />
        their goals and unlock
        <br />
        their full potential.
      </span>
    </SuccessTile>
    <SuccessTile name="Logan Horton">
      Logan was hesitant to work with a tutor but
      after meeting Carlos he was more optimistic
      and willing to work with someone. I really
      appreciate Carlos taking time to get to know
      Logan and sharing his own experiences in
      learning.
    </SuccessTile>
    <SuccessTile name="Skylar Peng">
      Carlos is a very professional tutor.
      He trained my six-year-old daughter,
      basic skills of coding and helped her
      become interested in codine through coding games.
    </SuccessTile>
  </div>
</div>

<style lang="scss">
  @use "/src/lib/config";

  :global(.sk-core) {
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

    @include config.for-size(tablet-landscape-up) {
      justify-content: center;
      margin-top: 0;
    }
    
    > h1 {
      font-size: 2.5rem;
      text-align: center;
      font-family: "Filson Pro", sans-serif;

      @include config.for-size(tablet-portrait-up) {
        font-size: 4rem;
      }

      @include config.for-size(tablet-landscape-up) {
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

    @include config.for-size(tablet-landscape-up) {
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

    @include config.for-size(tablet-portrait) {
      flex-direction: row;
      align-items: start;
    }

    @include config.for-size(tablet-landscape-up) {
      height: 90vh;
      flex-direction: row;
    }

    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;

      @include config.for-size(tablet-portrait-up) {
        display: grid;
        align-self: stretch;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        row-gap: 2rem;
      }

      @include config.for-size(tablet-landscape-up) {
        width: fit-content;
        column-gap: 10rem;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  // .our-aim {
  //   width: 100%;
  //   padding: 2rem 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .aim-panel {
  //   width: 75%;
  //   padding: 2rem 0;
  //   background: config.$color1_2;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   border-radius: 2rem;
  // }

  // .aim-panel > h1 {
  //   text-align: center;
  //   font-weight: bold;
  //   font-size: 1.5rem;
  // }

  .success {
    width: 100%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
    h1 {
      text-align: center;
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 3rem;
    }

    .tiles {
      width: fit-content;
      display: grid;
      margin: 0 3rem;
      gap: 1rem;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);

      @include config.for-size(tablet-portrait) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }

      @include config.for-size(tablet-landscape-up) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
      }
    }
  }

  .promo-link {
    color: blue;
  }
</style>
