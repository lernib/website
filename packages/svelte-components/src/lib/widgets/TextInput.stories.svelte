<script context="module" lang="ts">
  import TextInput from './TextInput.svelte';

  import '@lernib/sass-styling/global';

  export const meta = {
    title: 'Layouts/TextInput',
    component: TextInput
  }
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary" let:args>
  <TextInput {...args} />
</Template>

<Story template="primary" name="Primary" />
