<script lang="ts">
  import type { PageServerData } from "./$types";
  import { TIMEZONES } from "$lib/config";

  export let data: PageServerData;
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
