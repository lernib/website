<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

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
          <a href={`/dashboard/students/${student.userid}`}>
            {student.student_name}
          </a>
        </td>
        <td>{student.client_name}</td>
      </tr>
    {/each}
  </table>
</main>

<style lang="scss">
  @use 'sass:color';
  @use '/src/lib/config';

  main {
    align-self: stretch;
    flex-grow: 1;
    padding: 2rem;
  }

  th {
    font-weight: bold;
  }

  tr:nth-child(2n) {
    background-color: color.adjust(config.$color1, $lightness: 30)
  }

  td {
    padding: 0.2em 0;
    padding-right: 4rem;
    padding-left: 1rem;
  }
</style>
