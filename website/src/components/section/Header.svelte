<script lang="ts">
  import Dropdown from "$components/section/Dropdown.svelte";
  import { getSigninUrl, getSignoutUrl, localWebresAsset } from "$lib/config"
  import { dev } from "$app/environment"
  import { authStore } from "$lib/stores"

  const LINKS = [
    ["/contact", "Contact"],
    ["/pricing", "Pricing"],
    ["/about", "About"],
    ...dev ? [["/blog", "Blog"]] : []
  ]
</script>

<div class="header">
  <a href="/">
    <img class="header-img"
      src={localWebresAsset("/logo128.png")}
      alt="logo"
    />
  </a>
  <nav class="nomobile">
    {#each LINKS as [url, text]}
      <a href={url} class="nomobile">{text}</a>
    {/each}
  </nav>
  {#if !$authStore}
    <a href={getSigninUrl()} class="signin-button rightbound">
      Sign In
    </a>
  {:else}
    <Dropdown>
      <img
        src={localWebresAsset("/avatar.svg")}
        alt="Avatar"
        class="avatar rightbound"
        slot="focus"
      />
      <a href="/dashboard" class="signedin-button">
        Dashboard
      </a>
      <a href={getSignoutUrl()} class="signedin-button">
        Sign Out
      </a>
    </Dropdown>
  {/if}
</div>

<style lang="scss">
  @use "@lernib/sass-styling/config";

  .header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: calc(100vw - 5rem);
    padding: 0.5rem 2.5rem;
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
    column-gap: 1.5rem;
    font-weight: bold;
    margin-left: 3rem;

    a {
      padding: 0.5em 1em;
//      border: 3px solid config.$color2;
//      border-radius: 9999px;
    }
  }

  .signin-button {
    background-color: config.$color2;
    color: config.$color1;
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
    white-space: nowrap;
  }

  .signedin-button {
    color: black;
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
    white-space: nowrap;
  }

  .avatar {
    height: 3rem;
  }

  .rightbound {
    margin-left: auto;
  }
</style>