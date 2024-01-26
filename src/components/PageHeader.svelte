<script lang="ts">
  const LINKS = [
    ["/contact", "Contact"],
    ["/pricing", "Pricing"],
    ["/about", "About"]
  ]
</script>

<div class="header">
  <a href="/">
    <img class="header-img"
      src="/logo128.png"
      alt="logo"
    />
  </a>
  <nav>
    {#each LINKS as [url, text]}
      <a href={url}>{text}</a>
    {/each}
  </nav>
  <button>
    Get Started
  </button>
</div>

<style lang="scss">
  @use "/src/lib/config.scss";

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 3rem);
    padding: 1.5rem;
    background-color: config.$color1;
  }

  .header-img {
    height: 1.25rem;
  }

  .header > nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: center;
    column-gap: 2rem;

    a {
      padding: 0.5em 1em;
      border: 3px solid config.$color2;
      border-radius: 9999px;
      font-weight: bold;
    }
  }

  button {
    background-color: config.$color2;
    color: config.$color1;
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
  }
</style>