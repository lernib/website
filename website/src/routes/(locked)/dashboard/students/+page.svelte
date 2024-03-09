<script lang="ts">
  import type { PageServerData } from "./$types";
  import { Modal } from "@lernib/svelte-components";
  import EditableText from "$components/widgets/form/EditableText.svelte";
  import EditableOption from "$components/widgets/form/EditableOption.svelte";
  import EditableButton from "$components/widgets/form/EditableButton.svelte";
  import StudentSummary from "$components/widgets/StudentSummary.svelte";
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
        student_name: student_name,
        client_name: client_name,
        timezone
      })
    }).then(res => res.status))

    showAddModal = false;
    invalidateAll()
  }
</script>

<svelte:head>
  <title>Students | Lernib</title>
</svelte:head>

<main>
  <button class="add-student" on:click={() => {
    showAddModal = true
  }}>
    Add Student
  </button>

  {#each data.students as student}
    <StudentSummary data={student} />
  {/each}
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
    flex-direction: column;
    justify-content: start;
    align-items: start;
    row-gap: 1rem;
  }

  button.add-student {
    padding: 1rem 0.5rem;
    align-self: stretch;
  }
</style>
