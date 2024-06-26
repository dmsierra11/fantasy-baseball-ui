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

const sampleTeams = [
  {
    name: 'NYY',
    wins: 51,
    losses: 26,
    percentage: '.662',
    gamesBehind: '-',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
  },
  {
    name: 'BAL',
    wins: 49,
    losses: 25,
    percentage: '.662',
    gamesBehind: '0.5',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
  },
  {
    name: 'BOS',
    wins: 40,
    losses: 35,
    percentage: '.533',
    gamesBehind: '10.0',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/111/spots/72',
  },
  {
    name: 'TB',
    wins: 37,
    losses: 39,
    percentage: '.487',
    gamesBehind: '13.5',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/139/spots/72',
  },
  {
    name: 'TOR',
    wins: 35,
    losses: 39,
    percentage: '.473',
    gamesBehind: '14.5',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/141/spots/72',
  },
];

// Conditions Test
export const Default: Story = {
  args: {
    division: 'AL East',
    teams: sampleTeams,
  },
};

export const NoDivision: Story = {
  args: {
    teams: sampleTeams,
  },
};
