<script lang="ts">
  import { onMount } from 'svelte';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import listPlugin from '@fullcalendar/list';
  import type { PageServerData } from './$types';
  import { DateTime } from 'luxon';
  import { invalidateAll } from '$app/navigation';
  import Modal from '$components/layouts/Modal.svelte';
  import DateInput from "svelty-picker";
  import EditableButton from "$components/widgets/form/EditableButton.svelte";

  let calendarEl: HTMLDivElement;

  export let data: PageServerData
  let showAddEventModal = false;

  let dateInput: string;
  let timeInput: string;

  function add_event_modal() {
    showAddEventModal = true;
  }

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
        right: 'dayGridMonth,timeGridWeek,listWeek addEvent'
      },
      customButtons: {
        addEvent: {
          text: 'Add Event',
          click: add_event_modal
        }
      },
      views: {
        timeGridWeek: {
          nowIndicator: true,
          allDaySlot: false
        }
      },
      events: data.events.map((item) => ({
        ...item,
        id: `${item.eventid}`
      }))
    });

    calendar.render();
  });

  async function insertEvent() {
    let start = DateTime.fromFormat(`${dateInput} ${timeInput}`, 'yyyy-MM-dd HH:mm');
    let end = start.plus({ hours: 1 })

    console.log(await fetch(`/dashboard/calendar`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        start,
        end
      })
    }).then(res => res.status))

    showAddEventModal = true;
    showAddEventModal = false;
    invalidateAll();
  }
</script>

<svelte:head>
  <title>Calendar | Lernib</title>
</svelte:head>

<main>
  <div class="calendar" bind:this={calendarEl} />
</main>

{#if showAddEventModal}
  <Modal bind:show={showAddEventModal}>
    <div>
      <div class="labeled-input">
        Date
        <DateInput mode="date" startDate={new Date(Date.now())} bind:value={dateInput} />
      </div>
      <div class="labeled-input">
        Time
        <DateInput mode="time" format="hh:ii" minuteIncrement={5} bind:value={timeInput} />
      </div>
      <EditableButton edit click={insertEvent}>
        Insert
      </EditableButton>
    </div>
  </Modal>
{/if}

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

  .labeled-input {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 2rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  :global(.TimeInputda40b68c-73b4-404d-a729-f97af47f90fb input) {
    font-size: 1.25rem;
  }
</style>
