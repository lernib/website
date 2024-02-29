<script context="module" lang="ts">
  import CalendarInput from './CalendarInput.svelte';

  import '@lernib/sass-styling/global';

  export const meta = {
    title: 'Widgets/CalendarInput',
    component: CalendarInput,
    argTypes: {
      mode: {
        options: ['auto', 'date', 'datetime', 'time']
      }
    }
  }
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary" let:args>
  <CalendarInput {...args} />
</Template>

<Story template="primary" name="Primary" />
