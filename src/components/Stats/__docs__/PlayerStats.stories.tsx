import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import type { PlayerStatsType } from '../../../types';
import { PlayerStats } from '../PlayerStats';

const meta: Meta<typeof PlayerStats> = {
  title: 'PlayerStats',
  component: PlayerStats,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PlayerStats>;

const samplePlayers: PlayerStatsType[] = [
  {
    name: 'Aaron Nola',
    team: 'PHI',
    categories: ['G', 'AB', 'R', 'H', 'RA'],
    stats: {
      G: 10,
      AB: 5,
      R: 5,
      H: 1,
      RA:10,
    },
  },
  {
    name: ' Jimmy Garoppolo',
    team: 'BAL',
    categories: ['G', 'AB', 'R', 'H', 'RA'],
    stats: {
      G: 10,
      AB: 5,
      R: 5,
      H: 1,
      RA:10,
    },
  },
];

// Conditions Test
export const Default: Story = {
  args: {
    players: samplePlayers,
    categories: ['G', 'AB', 'R', 'H', 'RA'],
  },
};

export const WithSectionTitle: Story = {
  args: {
    players: samplePlayers,
    sectionTitle: 'Player Stats',
    categories: ['G', 'AB', 'R', 'H', 'RA'],
  },
};
