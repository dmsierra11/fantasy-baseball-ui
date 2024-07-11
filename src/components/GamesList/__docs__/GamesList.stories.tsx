import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';

import type { TeamScoreType, TeamType } from '../../../types';
import { GamesList } from '../GamesList';

const meta: Meta<typeof GamesList> = {
  title: 'GamesList',
  component: GamesList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof GamesList>;

const Team1: TeamType = {
  logoUrl: 'https://www.mlbstatic.com/team-logos/team-cap-on-light/147.svg',
  name: 'New York Yankees',
  shortName: 'NYY',
};

const Team2: TeamType = {
  logoUrl: 'https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg',
  name: 'Baltimore Orioles',
  shortName: 'BAL',
};

const homeTeam: TeamScoreType = {
  ...Team1,
  record: `51-26`,
};
const awayTeam: TeamScoreType = {
  ...Team2,
  record: `50-27`,
};

// Conditions Test
export const Default: Story = {
  args: {
    sectionTitle: 'Upcoming Games',
    games: [
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
      {
        date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
        homeTeam,
        awayTeam,
      },
    ],
  },
};

