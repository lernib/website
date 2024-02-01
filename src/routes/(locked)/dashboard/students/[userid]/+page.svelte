<script lang="ts">
  import type { PageServerData } from "./$types";
  import { TIMEZONES } from "$lib/config";

  export let data: PageServerData;

  async function sendRequestToUpdate() {
    console.log(await fetch(`/dashboard/students/${data.student.userid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...data.student,
        timezone: "-5"
      })
    }).then(res => res.status))
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
        {data.student.client_name}
      </td>
    </tr>
    <tr>
      <td>
        Student Name
      </td>
      <td>
        {data.student.student_name}
      </td>
    </tr>
    <tr>
      <td>
        Timezone
      </td>
      <td>
        {TIMEZONES[data.student.timezone]}
      </td>
    </tr>
  </table>
  <button on:click={sendRequestToUpdate}>
    Update with EST
  </button>
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
