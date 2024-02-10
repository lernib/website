<script lang="ts">
  import { getSignoutUrl } from "$lib/config";

  const sidebarOptions = [
    {
      inner: "Students",
      href: "/dashboard/students"
    },
    {
      inner: "Calendar",
      href: "/dashboard/calendar"
    }
  ]
</script>

<div class="sidebar">
  <img
    src="/logo128_white.png"
    alt="Logo"
  />

  <nav>
    {#each sidebarOptions as opt}
      <a href={opt.href}>
        {opt.inner}
      </a>
    {/each}
  </nav>

  <a class="sign-out" href={getSignoutUrl()}>
    Sign Out
  </a>
</div>
<slot />

<style lang="scss">
  @use 'sass:color';
  @use '/src/lib/config';

  :global(.sk-core) {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
  }

  .sidebar {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 2.5rem;
    background-color: color.invert(config.$color1);
    color: config.$color1;
    max-height: calc(100vh - 5rem);

    > nav {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      row-gap: 1.5rem;
      margin-top: 5rem;

      > a {
        font-size: 1.5rem;
      }
    }

    > img {
      width: 10rem;
    }

    .sign-out {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      row-gap: 1.5rem;
      margin-top: auto;
      font-size: 1em;
    }
  }
</style>
