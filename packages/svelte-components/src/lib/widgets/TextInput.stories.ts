import type { Meta, StoryObj } from '@storybook/svelte';
import TextInput from './TextInput.svelte';

const meta: Meta<typeof TextInput> = {
  component: TextInput
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({
    Component: TextInput
  })
}
