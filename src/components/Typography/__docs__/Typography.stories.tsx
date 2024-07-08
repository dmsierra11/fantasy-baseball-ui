import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Typography } from '../index';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Conditions Test
export const Default: Story = {
  args: {
    children: 'Hello World',
  },
};

export const Header1: Story = {
  args: {
    children: 'Hello World',
    variant: 'h1',
  },
};

export const Header2: Story = {
  args: {
    children: 'Hello World',
    variant: 'h2',
  },
};

export const Header3: Story = {
  args: {
    children: 'Hello World',
    variant: 'h3',
  },
};

export const Header4: Story = {
  args: {
    children: 'Hello World',
    variant: 'h4',
  },
};

export const Header5: Story = {
  args: {
    children: 'Hello World',
    variant: 'h5',
  },
};
