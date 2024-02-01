<script lang="ts">
  import { getSignoutUrl } from "$lib/config";
</script>

<a href={getSignoutUrl()}>
  Sign Out
</a>
