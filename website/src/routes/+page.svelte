<script lang="ts">
  import { localWebresAsset } from '$lib/config';
  import PageHero from '$components/section/Hero.svelte'
  import Benefit from '$components/Benefit.svelte'
  import SuccessTile from '$components/SuccessTile.svelte'
  import Footer from '$components/section/Footer.svelte'
  import Subject from '$components/Subject.svelte'
</script>

<svelte:head>
  <title>Homepage | Lernib</title>
</svelte:head>

<PageHero noImage>
  <div class="hero-center">
    <div class="hero-center-col">
      <h1>
        <!-- Learn <span class="title-span n1">faster</span> and
        <br class="nomobile tablet-portrait n2" />
        <span class="title-span n2">better</span>
        <br class="nomobile notablet-portrait" />
        through personalized
        <br />
        tutoring -->
        Helping you reach
        <br />
        your learning goals
        <br />
        - one step at a time.
      </h1>
      <h2>
        <!-- Connect with excellent tutors on our platform. Learn the way
        <br />
        you want, wherever and however you like. Our students
        <br />
        consistently ace their exams! -->
        Going for your goals can be overwhelming. We
        <br />
        help you get it done one step at a time, with
        <br />
        dedicated tutoring support built just for you.
      </h2>
      <a href="/about">Get Started Today</a>
    </div>
    <div class="hero-image" />
  </div>
  <!-- <span class="hero-promo">
    Get your first session free of charge.
    <br class="mobile" />
    <a href="/contact" class="promo-link">
      Contact us
    </a>
    to get started.
  </span> -->
</PageHero>
<div class="benefits">
  <div>
    <Benefit
      src={localWebresAsset("/icons/natural.svg")}
      title="Natural"
    >
      We teach like a caring parent,
      <br />
      and never like a monotone
      <br />
      lecture hall professor.
    </Benefit>
    <Benefit
      src={localWebresAsset("/icons/efficient.svg")}
      title="Efficient"
    >
      We use simple examples and
      <br />
      real-life scenarios to teach
      <br />
      things in a fraction of the time.
    </Benefit>
    <Benefit
      src={localWebresAsset("/icons/flexible.svg")}
      title="Flexible"
    >
      Our tutoring sessions have no
      <br />
      default structure. What's on
      <br />
      your mind?
    </Benefit>
    <Benefit
      src={localWebresAsset("/icons/direct.svg")}
      title="Direct"
    >
      We don't waste time, or push
      <br />
      you to spend more than you
      <br />
      actually should
    </Benefit>
    <Benefit
      src={localWebresAsset("/icons/inspiring.svg")}
      title="Inspiring"
    >
      Do you have any long-term
      <br />
      goals? We give you advice on
      <br />
      how to achieve them.
    </Benefit>
    <Benefit
      src={localWebresAsset("/icons/accomodating.svg")}
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
  <div class="col">
    <h2>
      Excellent tutorship
      <br />
      in all of the following
      <br />
      classes
    </h2>
    <p>
      I specialize in cases where students have unique or
      <br />
      unusual requirements. To ensure you get the right
      <br />
      support, I start by understanding your needs, then I
      <br />
      come up with a personalized a learning plan for you,
      <br />
      to help you reach your goals with confidence.
    </p>
  </div>
  <div class="col col-subjects">
    <Subject src={localWebresAsset("/icons/accomodating.svg")} title="Computer Science">
      We teach like a caring parent,
      <br />
      and never like a monotone
      <br />
      lecture hall professor.
    </Subject>
    <Subject src={localWebresAsset("/icons/accomodating.svg")} title="SAT tutoring">
      We teach like a caring parent,
      <br />
      and never like a monotone
      <br />
      lecture hall professor.
    </Subject>
    <Subject src={localWebresAsset("/icons/accomodating.svg")} title="Study skills support">
      We teach like a caring parent,
      <br />
      and never like a monotone
      <br />
      lecture hall professor.
    </Subject>
  </div>
</div>
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
<Footer />

<style lang="scss">
  @use "@lernib/sass-styling/config";
  @use "sass:color";

  .hero-center {
    background-color: color.adjust(config.$color1, $lightness: -5%);
    flex-grow: 1;
    align-self: stretch;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;

    margin-top: 2.5rem;
    padding: 4rem;
    padding-bottom: 7rem;

    @include config.for-size(tablet-landscape-up) {
      justify-content: center;
      margin-top: 0;
    }

    .hero-center-col {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;

      > h1 {
        font-size: 2.5rem;
        text-align: start;
        font-family: "Filson Pro", sans-serif;

        @include config.for-size(tablet-portrait-up) {
          font-size: 4rem;
        }
      }
      
      > h2 {
        font-size: 1.25rem;
        text-align: start;
        margin: 0 2rem;
        margin-top: 1.5rem;

        @include config.for-size(tablet-portrait-up) {
          font-size: 1.5rem;
          margin: 0;
          margin-top: 1.5rem;
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
  }

  .hero-image {
    flex-grow: 1;
  }

  /* .hero-promo {
    width: 100%;
    padding: 1em 0;
    background-color: config.$color4;
    text-align: center;
    margin-top: 3rem;

    @include config.for-size(mobile-only) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    @include config.for-size(tablet-landscape-up) {
      margin-top: 0;
    }

    > a {
      display: inline;
    }
  } */

  .benefits {
    width: fit-content;
    background-color: config.$color1_2;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 0 3rem;
    padding-top: 2rem;
    column-gap: 4rem;

    position: relative;
    top: -25px;
    border: 1px solid black;
    z-index: 1;

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

    padding-bottom: 2rem;
  }

  .subjects {
    align-self: stretch;

    background-color: color.adjust(config.$color1, $lightness: -70%);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding: 5rem 3rem 3rem;
    column-gap: 8rem;

    position: relative;
    top: -50px;
    
    h2 {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }

    > .col {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }

    > .col-subjects {
      row-gap: 2rem;
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
      grid-template-rows: repeat(3, 1fr);

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

  // .promo-link {
  //   color: blue;
  // }

  @mixin title-span($col) {
    border: 3px dashed $col;
    border-radius: 1rem;
    color: $col;
    background-color: color.adjust($col, $lightness: 30%);
    padding: 3px 9px;
    display: inline-block;
    background-position: 0px 0px, 200px 100px, 0px 100px, 200px 0px;
  }

  // .title-span.n1 {
  //   @include title-span(config.$color3);
  // }

  // .title-span.n2 {
  //   @include title-span(config.$color5);
  //   margin-top: 1rem;

  //   @include config.for-size(tablet-landscape-up) {
  //     margin-top: 0;
  //   }
  // }
</style>
