<script lang="ts">
  import PageNotify from '$components/widgets/PageNotify.svelte';
  import type { LayoutData } from './$types'
  import { authStore, notifyStore } from '$lib/stores'
  import '@lernib/sass-styling/global';

  export let data: LayoutData
  authStore.set(data.ident)
</script>

<div id="sk-core">
  <slot />
  <div id="sk-pagenotifs">
    {#each $notifyStore as notify}
      <PageNotify {...notify} />
    {/each}
  </div>
</div>

<style lang="scss">
  #sk-core {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  #sk-pagenotifs {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    pointer-events: none;
  }
</style>
