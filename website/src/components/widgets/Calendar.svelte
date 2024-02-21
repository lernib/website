<script lang="ts">
  const WEEKDAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]
</script>

<table
  cellspacing=0
  cellpadding=0
>
  <tr>
    <th />
    {#each WEEKDAYS as WD}
      <th>
        {WD}
      </th>
    {/each}
  </tr>
  {#each { length: 24 } as _, i}
    <tr>
      <td class="time-label">
        <span>
          {((i + 11) % 12 + 1)} {i > 12 ? 'PM' : 'AM'}
        </span>
      </td>
      {#each { length: 7 } as _, i}
        <td />
      {/each}
    </tr>
  {/each}
</table>

<style lang="scss">
  @use 'sass:color';
  @use '/src/lib/config';

  th {
    padding: 1rem 2rem;
    font-weight: bold;
  }

  tr:first-child {
    background-color: color.adjust(config.$color1, $lightness: -10%)
  }

  tr:nth-child(2n) {
    background-color: color.adjust(config.$color1, $lightness: 30%)
  }

  .time-label {
    text-align: right;
    vertical-align: top;
    padding: 0.5rem 0;
  }

  tr:nth-child(n + 2) {
    &:not(:last-child) td {
      border-bottom: 2px solid #d8d8d8;
    }
  
    & td:nth-child(n + 2) {
      height: 10rem;
      width: 8rem;

      &:not(:last-child) {
        border-right: 2px solid #ccc;
      }
    }
  
  }
</style>
