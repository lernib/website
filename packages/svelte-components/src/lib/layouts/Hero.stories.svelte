<script context="module" lang="ts">
  import Hero from './Hero.svelte';
  import type { Meta } from '@storybook/svelte';

  import '@lernib/sass-styling/global';

  export const meta: Meta<Hero> = {
    title: 'Layouts/Hero',
    component: Hero,
    parameters: {
      layout: 'fullscreen'
    }
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary" let:args>
  <Hero {...args} />
</Template>

<Story template="primary" name="Primary" args={{
  half: false
}} />
