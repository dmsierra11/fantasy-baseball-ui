import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import type { TeamStandingsType } from '../../../types';
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

const sampleTeams: TeamStandingsType[] = [
  {
    name: 'NYY',
    short_name: 'NYM',
    wins: 51,
    losses: 26,
    win_percentage: '.662',
    games_behind: '-',
    logo: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
  },
  {
    name: 'BAL',
    short_name: 'BAL',
    wins: 49,
    losses: 25,
    win_percentage: '.662',
    games_behind: '0.5',
    logo: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
  },
  {
    name: 'BOS',
    short_name: 'BOS',
    wins: 40,
    losses: 35,
    win_percentage: '.533',
    games_behind: '10.0',
    logo: 'https://midfield.mlbstatic.com/v1/team/111/spots/72',
  },
  {
    name: 'TB',
    short_name: 'TB',
    wins: 37,
    losses: 39,
    win_percentage: '.487',
    games_behind: '13.5',
    logo: 'https://midfield.mlbstatic.com/v1/team/139/spots/72',
  },
  {
    name: 'TOR',
    short_name: 'TOR',
    wins: 35,
    losses: 39,
    win_percentage: '.473',
    games_behind: '14.5',
    logo: 'https://midfield.mlbstatic.com/v1/team/141/spots/72',
  },
];

// Conditions Test
export const Default: Story = {
  args: {
    title: 'Standings',
    leagueTables: [
      {
        division: 'AL East',
        teams: sampleTeams,
      },
    ],
  },
};

export const MultipleDivisionsHorizontal: Story = {
  args: {
    title: 'Standings',
    leagueTables: [
      {
        division: 'AL East',
        teams: sampleTeams,
      },
      {
        division: 'AL West',
        teams: sampleTeams,
      },
    ],
    stackDirection: 'row',
  },
};

export const MultipleDivisionsVertical: Story = {
  args: {
    title: 'Standings',
    leagueTables: [
      {
        division: 'AL East',
        teams: sampleTeams,
      },
      {
        division: 'AL West',
        teams: sampleTeams,
      },
    ],
    stackDirection: 'column',
  },
};
