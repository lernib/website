<script lang="ts">
  import type { PageServerData } from "./$types";
  import { TIMEZONES } from "$lib/config";
  import { invalidateAll } from "$app/navigation";
  import EditableText from "$components/widgets/form/EditableText.svelte";
  import EditableOption from "$components/widgets/form/EditableOption.svelte";
  import EditableButton from "$components/widgets/form/EditableButton.svelte";

  export let data: PageServerData;

  const TIMEZONE_OPTS = Object.entries(TIMEZONES)

  let edit = false;
  let edit_student_name: string = data.student.studentName;
  let edit_client_name: string = data.student.clientName;
  let selected: string = data.student.timezone;

  async function sendRequestToUpdate() {
    console.log(await fetch(`/dashboard/students/${data.student.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentName: edit_student_name,
        clientName: edit_client_name,
        timezone: selected
      })
    }).then(res => res.status))

    edit = false;
    invalidateAll()
  }

  function setView() {
    edit = false;
  }

  function setEdit() {
    edit = true;
  }
</script>

<svelte:head>
  <title>{data.student.studentName} | Lernib</title>
</svelte:head>

<main>
  <h1>
    {data.student.studentName}
  </h1>
  <hr />

  <table
    cellspacing=0
  >
    <tr>
      <td>
        Client Name
      </td>
      <td>
        <EditableText {edit} bind:value={edit_client_name} />
      </td>
    </tr>
    <tr>
      <td>
        Student Name
      </td>
      <td>
        <EditableText {edit} bind:value={edit_student_name} />
      </td>
    </tr>
    <tr>
      <td>
        Timezone
      </td>
      <td>
        <EditableOption {edit} bind:value={selected} options={TIMEZONE_OPTS} />
      </td>
    </tr>
  </table>
  <EditableButton {edit} click={setView}>
    Cancel
  </EditableButton>
  <EditableButton {edit} click={sendRequestToUpdate}>
    Update
  </EditableButton>
  <EditableButton edit={!edit} click={setEdit}>
    Edit
  </EditableButton>
</main>

<style lang="scss">
  main {
    align-self: stretch;
    flex-grow: 1;
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  hr {
    margin-bottom: 2rem;
  }

  td:not(:last-child) {
    padding-right: 4rem;
  }
</style>
