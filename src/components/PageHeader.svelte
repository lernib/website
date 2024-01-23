<script lang="ts">
  const LINKS = [
    ["/contact", "Contact"],
    ["/pricing", "Pricing"],
    ["/about", "About"]
  ]
</script>

<div class="header">
  <img class="header-img"
    src="/logo128.png"
    alt="logo"
  />
  <nav>
    {#each LINKS as [url, text]}
      <a href={url}>{text}</a>
    {/each}
  </nav>
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
    color: blue;
    column-gap: 2rem;
  }
</style>