<script context="module" lang="ts">
  import NumberInput from "./NumberInput.svelte";
  import type { Meta } from "@storybook/svelte";

  import '@lernib/sass-styling/global';

  export const meta: Meta<NumberInput> = {
    title: 'Widgets/NumberInput',
    component: NumberInput
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary">
  <NumberInput />
</Template>

<Story template="primary" name="Primary" />
