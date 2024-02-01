<script lang="ts">
  import { getSignoutUrl } from "$lib/config";

  export const prerender = true;

  const sidebarOptions = [
    {
      inner: "Students",
      href: "/dashboard/students"
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
</div>

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
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-width: 15rem;
    background-color: color.invert(config.$color1);
    color: config.$color1;

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
      margin-top: 2.5rem;
    }
  }
</style>
