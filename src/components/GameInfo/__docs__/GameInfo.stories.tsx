import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';

import { GameInfo } from '../GameInfo';

const meta: Meta<typeof GameInfo> = {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof GameInfo>;

// Conditions Test
export const Default: Story = {
  args: {
    sectionTitle: 'Pitchers',
    players: [
      {
        imgSrc: 'https://midfield.mlbstatic.com/v1/people/656427/spots/360',
        name: 'Dani Trout (W)',
        text1: 'RHP | #9',
        text2: '6-5 | 3.16 ERA | 6 k',
      },
      {
        imgSrc: 'https://midfield.mlbstatic.com/v1/people/605135/spots/360',
        name: 'John Doe (L)',
        text1: 'RHP | #9',
        text2: '1-5 | 7.12 ERA | 3 k',
      },
    ],
  },
};
