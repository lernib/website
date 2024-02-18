<script lang="ts">
  import PageHero from '$components/section/Hero.svelte'
  import { goto } from '$app/navigation'
  import { notifyStore } from '$lib/stores';
  import { API_DOMAIN, localWebresAsset } from '$lib/config';
  import type { EventHandler } from 'svelte/elements';
  import Footer from '$components/section/Footer.svelte';

  const onFormSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async e => {
    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const email = formData.get('email');
    const content = formData.get('content');

    if (name && email && content) {
      await fetch(
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
      ).then(res => {
        if (!res.ok) {
          throw new Error("Failed to send contact")
        } else {
          notifyStore.update((notifs) => [...notifs, {
            message: 'Message sent!',
            color: '#afa'
          }])
          goto('/');
        }
      }).catch((e) => {
        notifyStore.update((notifs) => [...notifs, {
          message: 'Could not send',
          color: '#faa'
        }])
      });
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
    src={localWebresAsset("/portrait-woman-video-call-with-laptop-headphones-while-working-from-home-concept.jpg")}
    alt="Woman video calling from home"
  />
  <form on:submit|preventDefault={onFormSubmit}>
    <h2>Send us a message</h2>
    <input required type="text" name="name" placeholder="Name" />
    <input required type="email" name="email" placeholder="Email" />
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
    align-self: stretch;

    @include config.for-size(tablet-landscape-up) {
      align-self: normal;
    }

    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-align: center;
      width: 100%;

      @include config.for-size(tablet-landscape-up) {
        text-align: start;
      }
    }

    input, textarea {
      align-self: stretch;
      resize: none;
      margin-bottom: 0.5rem;
      padding: 0.75rem;
      background: none;
      border: 2px solid #999;
      border-radius: 1rem;
      outline: none;

      &:invalid {
        background-color: #faa;
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      margin-top: 1rem;
    }
  }

  .form-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    border-radius: 1.5rem;
    align-self: stretch;

    @include config.for-size(tablet-portrait-up) {
      margin: 2rem 5rem;
    }

    @include config.for-size(tablet-landscape-up) {
      align-items: start;
      flex-direction: row;
      margin: 2rem 0;
    }

    img {
      align-self: stretch;
      border-radius: 2rem;

      @include config.for-size(tablet-portrait-up) {
        border-radius: 0;
      }

      @include config.for-size(tablet-landscape-up) {
        margin-right: 2rem;
        width: 50vw;
      }
    }
  }
</style>