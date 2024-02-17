<script lang="ts">
  import { onMount } from 'svelte';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import listPlugin from '@fullcalendar/list';

  let calendarEl: HTMLDivElement;

  onMount(async () => {
    let calendar = new Calendar(calendarEl, {
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        listPlugin
      ],
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      }
    });

    calendar.render();
  });
</script>

<svelte:head>
  <title>Calendar | Lernib</title>
</svelte:head>

<main>
  <div class="calendar" bind:this={calendarEl} />
</main>

<style lang="scss">
  :global(.sk-core) {
    width: 100vw;
    height: 100vh;
  }

  main {
    align-self: stretch;
    flex-grow: 1;
    padding: 2rem;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    column-gap: 1rem;

    > .calendar {
      align-self: stretch;
      flex-grow: 1;
    }
  }
</style>
