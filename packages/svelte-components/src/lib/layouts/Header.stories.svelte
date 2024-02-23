<script context="module" lang="ts">
  import Header from './Header.svelte';

  import '@lernib/sass-styling/global';

  export const meta = {
    title: 'Layouts/Header',
    component: Header,
    parameters: {
      layout: 'fullscreen'
    }
  }
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary">
  <Header />
</Template>

<Story template="primary" name="Primary" />
