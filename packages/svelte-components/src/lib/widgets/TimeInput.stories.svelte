<script context="module" lang="ts">
  import TimeInput from "./TimeInput.svelte";
  import type { Meta } from "@storybook/svelte";

  import '@lernib/sass-styling/global';

  export const meta: Meta<TimeInput> = {
    title: 'Widgets/TimeInput',
    component: TimeInput
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary">
  <TimeInput />
</Template>

<Story template="primary" name="Primary" />
