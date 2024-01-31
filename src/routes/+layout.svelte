<script lang="ts">
  import type { LayoutData } from './$types'
  import { authStore } from '$lib/stores'
  import "$lib/global.scss"

  export let data: LayoutData
  authStore.set(data.userdata)
</script>


<slot />
