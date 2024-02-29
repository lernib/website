<script lang="ts">
  import { page } from "$app/stores";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet">
</svelte:head>

<span class="emoji">😣</span>
<h1>
  Sorry about that!
</h1>
<p>
  {$page.status} {$page.error?.message}
</p>

<style lang="scss">
  @use '@lernib/sass-styling/config';

  :global(.sk-core) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: config.$color1;
  }

  .emoji {
    font-family: "Noto Color Emoji", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    font-style: italic;
  }
</style>
