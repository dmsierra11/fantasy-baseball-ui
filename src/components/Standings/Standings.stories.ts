import type { Meta, StoryObj } from '@storybook/react';
import { Standings } from './Standings';

const meta: Meta<typeof Standings> = {
    title: 'Sports/Standings',
    component: Standings,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
