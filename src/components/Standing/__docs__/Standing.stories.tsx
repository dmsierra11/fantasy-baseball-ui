import type { Meta, StoryObj } from '@storybook/react';
import { Standing } from '../Standing';
import '../../../index.css';

const meta: Meta<typeof Standing> = {
  title: 'Standing',
  component: Standing,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Standing>;

// Conditions Test
export const Default: Story = {
  args: {},
};
