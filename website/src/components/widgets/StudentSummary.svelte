<script lang="ts">
  import { TIMEZONES } from '$lib/config';
  import * as tst from '@lernib/ts-types';
  import * as z from 'zod';

  type StudentData = z.infer<typeof tst.Db.Students.Item>;

  export let data: StudentData;
</script>

<div class="element">
  <div class="element-top">
    <a href={`/dashboard/students/${data.userid}`}>
      {data.student_name}
    </a>
    <span class="timezone">
      {TIMEZONES[data.timezone]}
    </span>
  </div>
  <span>
    {data.client_name}
  </span>
</div>

<style lang="scss">
  @use '@lernib/sass-styling/config';
  @use 'sass:color';

  .element {
    padding: 0.75rem 1.5rem;;
    background-color: color.adjust(config.$color1, $lightness: -10%);
    border-radius: 0.75rem;
    align-self: stretch;

    a {
      font-size: 1.5rem;
      font-weight: bold;
      display: block;
    }
  }

  .element-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .timezone {
    font-weight: light;
    font-style: italic;
  }
</style>
