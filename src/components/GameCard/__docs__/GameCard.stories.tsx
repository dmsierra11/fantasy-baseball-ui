import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { GameCard } from '../GameCard';

const meta: Meta<typeof GameCard> = {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {
    date: '2024-05-01',
    time: '12:00',
    awayTeam: {
      name: 'Team 1',
      logoUrl: 'https://via.placeholder.com/150',
      record: '1-0',
    },
    homeTeam: {
      name: 'Team 2',
      logoUrl: 'https://via.placeholder.com/150',
      record: '0-1',
    },
  },
};

export const Score: Story = {
  args: {
    date: '2024-05-01',
    time: '12:00',
    awayTeam: {
      name: 'Team 1',
      logoUrl: 'https://via.placeholder.com/150',
      record: '1-0',
      score: 1,
    },
    homeTeam: {
      name: 'Team 2',
      logoUrl: 'https://via.placeholder.com/150',
      record: '0-1',
      score: 0,
    },
  },
};
