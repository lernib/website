<script lang="ts">
  import { page } from '$app/stores'
</script>

<div>
  <span>
    OOPS!
  </span>
  <h1>
    {$page.error?.message}
  </h1>
</div>

<style lang="scss">
  div {
    flex-grow: 1;
    align-self: stretch;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 5rem;
      margin-bottom: 2rem;
      font-family: 'Filson Pro';
    }

    > h1 {
      font-family: sans-serif;
      font-size: 1.5rem;
      font-weight: 100;
    }
  }
</style>
