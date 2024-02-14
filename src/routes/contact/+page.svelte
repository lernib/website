<script lang="ts">
  import PageHero from '$components/section/Hero.svelte'
  import { goto } from '$app/navigation'
  import { API_DOMAIN } from '$lib/config';
  import type { EventHandler } from 'svelte/elements';
  import Footer from '$components/section/Footer.svelte';

  const onFormSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async e => {
    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const email = formData.get('email');
    const content = formData.get('content');

    if (name && email && content) {
      console.log(await fetch(
        new URL('/contact', API_DOMAIN),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            content
          })
        }
      ).then(res => res.status));

      goto('/');
    }
  };
</script>

<svelte:head>
  <title>Contact | Lernib</title>
</svelte:head>

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

<div class="form-area">
  <img
    src="/portrait-woman-video-call-with-laptop-headphones-while-working-from-home-concept.jpg"
    alt="Woman video calling from home"
  />
  <form on:submit|preventDefault={onFormSubmit}>
    <h2>Send us a message</h2>
    <input type="text" name="name" placeholder="Name" />
    <input type="text" name="email" placeholder="Email" />
    <textarea name="content" placeholder="Your message" rows=10 cols=50 />
    <button type="submit">Submit</button>
  </form>
</div>
<Footer />

<style lang="scss">
  @use '/src/lib/config';

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

  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    input, textarea {
      width: 100%;
      resize: none;
      margin-bottom: 0.5rem;
      padding: 0.25rem;
    }

    button {
      width: 100%;
      padding: 1rem 0;
    }
  }

  .form-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background-color: config.$color2_light;
    width: fit-content;
    margin: 2rem 0;

    img {
      width: 50vw;
      align-self: stretch;
      margin-right: 2rem;
    }
  }
</style>