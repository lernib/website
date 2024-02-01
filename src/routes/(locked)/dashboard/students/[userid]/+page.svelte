<script lang="ts">
  import type { PageServerData } from "./$types";
  import { TIMEZONES } from "$lib/config";
  import { invalidateAll } from "$app/navigation";

  export let data: PageServerData;

  const TIMEZONE_OPTS = [
    ["-5", "EST"],
    ["-6", "CST"],
    ["-7", "MST"],
    ["-8", "PST"],
    ["NA", "Unknown"]
  ]

  let edit = false;
  let edit_student_name: string = data.student.student_name;
  let edit_client_name: string = data.student.client_name;
  let selected: string = data.student.timezone;

  async function sendRequestToUpdate() {
    console.log(await fetch(`/dashboard/students/${data.student.userid}`, {
      method: "POST",
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

  function setView() {
    edit = false;
  }

  function setEdit() {
    edit = true;
  }
</script>

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
        {#if edit}
          <input
            type="text"
            bind:value={edit_client_name}
          />
        {:else}
          {data.student.client_name}
        {/if}
      </td>
    </tr>
    <tr>
      <td>
        Student Name
      </td>
      <td>
        {#if edit}
          <input
            type="text"
            bind:value={edit_student_name}
          />
        {:else}
          {data.student.student_name}
        {/if}
      </td>
    </tr>
    <tr>
      <td>
        Timezone
      </td>
      <td>
        {#if edit}
          <select bind:value={selected}>
            {#each TIMEZONE_OPTS as [val, txt]}
              <option value={val}>
                {txt}
              </option>
            {/each}
          </select>
        {:else}
          {TIMEZONES[data.student.timezone]}
        {/if}
      </td>
    </tr>
  </table>
  {#if edit}
    <button on:click={setView}>
      Cancel
    </button>
    <button on:click={sendRequestToUpdate}>
      Update
    </button>
  {:else}
    <button on:click={setEdit}>
      Edit
    </button>
  {/if}
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

  button {
    padding: 0.5rem;
    margin-top: 1rem;
  }
</style>
