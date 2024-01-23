<script lang="ts">
  import PageHeader from '$components/PageHeader.svelte'
</script>

<div class="hero">
  <PageHeader />
  <div class="hero-center">
    <h1>
      Learn faster and better
      <br />
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
    Get your first session free of charge. Contact us to get started.
  </span>
</div>
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
  <div />
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

  .hero {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background-image: url("/herobg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

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
  }

  .benefits {
    width: 100vw;
    height: 90vh;
    background-color: var(--color1_2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding-top: 2rem;
  }

  .benefits > div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 45%;
  }

  .benefits h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .benefits span {
    font-size: 1.25rem;
  }

  .benefits > div:first-child img {
    width: 75%;
    margin-top: 2rem;
    border-radius: 2rem;
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
