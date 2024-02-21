<script lang="ts">
  import Calendar from "$components/widgets/Calendar.svelte";
</script>

<svelte:head>
  <title>Calendar | Lernib</title>
</svelte:head>

<main>
  <Calendar />
</main>

<style lang="scss">
  main {
    align-self: stretch;
    flex-grow: 1;
    padding: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    column-gap: 1rem;
  }
</style>
