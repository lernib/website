<script lang="ts">
  import type { PageServerData } from "./$types";
  import { TIMEZONES } from "$lib/config";
  import { goto, invalidateAll } from "$app/navigation";
  import EditableText from "$components/widgets/form/EditableText.svelte";
  import EditableOption from "$components/widgets/form/EditableOption.svelte";
  import EditableButton from "$components/widgets/form/EditableButton.svelte";
  import { createNotification } from "$lib/notify";

  export let data: PageServerData;

  const TIMEZONE_OPTS = Object.entries(TIMEZONES)

  let edit = false;
  let edit_student_name: string = data.student.student_name;
  let edit_client_name: string = data.student.client_name;
  let selected: string = data.student.timezone;

  async function sendRequestToUpdate() {
    console.log(await fetch(`/dashboard/students/${data.student.userid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        student_name: edit_student_name,
        client_name: edit_client_name,
        timezone: selected
      })
    }).then(res => res.status))

    edit = false;
    invalidateAll()
  }

  async function deleteStudent() {
    if (await fetch(`/dashboard/students/${data.student.userid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.status) == 200) {
      goto('./')
    } else {
      createNotification('Failed to delete student', '#faa');
    }
  }

  function setView() {
    edit = false;
  }

  function setEdit() {
    edit = true;
  }
</script>

<svelte:head>
  <title>{data.student.student_name} | Lernib</title>
</svelte:head>

<main>
  <h1>
    {data.student.student_name}
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
  <EditableButton edit={!edit} click={deleteStudent}>
    Delete
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
