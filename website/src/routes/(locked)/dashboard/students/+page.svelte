<script lang="ts">
  import type { PageServerData } from "./$types";
  import { Modal } from "@lernib/svelte-components";
  import EditableText from "$components/widgets/form/EditableText.svelte";
  import EditableOption from "$components/widgets/form/EditableOption.svelte";
  import EditableButton from "$components/widgets/form/EditableButton.svelte";
  import { TIMEZONES } from "$lib/config";
  import { invalidateAll } from "$app/navigation";

  let showAddModal = false;

  let student_name: string = '';
  let client_name: string = '';
  let timezone: string = '';

  export let data: PageServerData;

  async function insertStudent() {
    console.log(await fetch(`/dashboard/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentName: student_name,
        clientName: client_name,
        timezone
      })
    }).then(res => res.status))

    showAddModal = true;
    showAddModal = false;
    invalidateAll()
  }
</script>

<svelte:head>
  <title>Students | Lernib</title>
</svelte:head>

<main>
  <table
    cellspacing=0
  >
    <tr>
      <th>Student</th>
      <th>Client</th>
    </tr>
    {#each data.students as student}
      <tr>
        <td>
          <a href={`/dashboard/students/${student.id}`}>
            {student.studentName}
          </a>
        </td>
        <td>{student.clientName}</td>
      </tr>
    {/each}
  </table>

  <button on:click={() => {
    showAddModal = false
    showAddModal = true
  }}>
    Add Student
  </button>
</main>

{#if showAddModal}
  <Modal bind:show={showAddModal}>
    <table
      cellspacing=0
    >
      <tr>
        <td>
          Client Name
        </td>
        <td>
          <EditableText edit bind:value={client_name} />
        </td>
      </tr>
      <tr>
        <td>
          Student Name
        </td>
        <td>
          <EditableText edit bind:value={student_name} />
        </td>
      </tr>
      <tr>
        <td>
          Timezone
        </td>
        <td>
          <EditableOption edit bind:value={timezone} options={Object.entries(TIMEZONES)} />
        </td>
      </tr>
    </table>
    <EditableButton edit click={insertStudent}>
      Insert
    </EditableButton>
  </Modal>
{/if}

<style lang="scss">
  @use 'sass:color';
  @use '@lernib/sass-styling/config';

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

  th {
    font-weight: bold;
  }

  tr:nth-child(2n) {
    background-color: color.adjust(config.$color1, $lightness: 30%)
  }

  td {
    padding: 0.2em 0;
    padding-right: 4rem;
    padding-left: 1rem;
  }
</style>
