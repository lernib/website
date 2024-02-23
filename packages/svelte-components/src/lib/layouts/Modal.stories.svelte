<script context="module" lang="ts">
  import Modal from './Modal.svelte';

  import '@lernib/sass-styling/global';

  export const meta = {
    title: 'Layouts/Modal',
    component: Modal
  }
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template id="primary" let:args>
  <Modal {...args} />
</Template>

<Template id="with-content" let:args>
  <Modal {...args}>
    <p>Hello!</p>
  </Modal>
</Template>

<Story template="primary" name="Primary" args={{
  show: true
}} />

<Story template="with-content" name="With Content" args={{
  show: true
}} />
