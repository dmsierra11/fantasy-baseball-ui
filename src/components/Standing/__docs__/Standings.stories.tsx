import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Standings } from '../Standings';

const meta: Meta<typeof Standings> = {
  title: 'Standings',
  component: Standings,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Standings>;

// Conditions Test
export const Default: Story = {
  args: {},
};
