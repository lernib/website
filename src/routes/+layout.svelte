<script lang="ts">
  import PageNotify from '$components/widgets/PageNotify.svelte';
  import type { LayoutData } from './$types'
  import { authStore } from '$lib/stores'
  import "$lib/global.scss"

  export let data: LayoutData
  authStore.set(data.ident)
</script>

<slot />
<div id="sk-pagenotifs">
  <PageNotify message="Hello!" />
</div>

<style lang="scss">
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
