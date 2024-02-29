<script context="module" lang="ts">
  import Dropdown from './Dropdown.svelte';
  import type { Meta } from '@storybook/svelte';

  import '@lernib/sass-styling/global';

  export const meta: Meta<Dropdown> = {
    title: 'Layouts/Dropdown',
    component: Dropdown
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary" let:args>
  <Dropdown {...args}>
    <span slot="focus" class="hoverme">
      Hover me!
    </span>
  </Dropdown>
</Template>

<Template id="with-links" let:args>
  <Dropdown {...args}>
    <span slot="focus" class="hoverme">
      Hover me!
    </span>
    <a href="/homepage">Homepage</a>
    <a href="/signout">Sign out</a>
  </Dropdown>
</Template>

<Story template="primary" name="Primary" args={{
  force: true
}} />

<Story template="with-links" name="With Links" args={{
  force: true
}} />

<style lang="scss">
  @use '@lernib/sass-styling/config';

  .hoverme {
    display: block;
    padding: 1rem;
    background-color: config.$color2;
    color: config.$color1;
    border-radius: 1rem;
  }
</style>
