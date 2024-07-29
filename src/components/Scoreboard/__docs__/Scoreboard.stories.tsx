import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import type { TeamScoreType, TeamType } from '../../../types';
import { Scoreboard } from '../Scoreboard';

const meta: Meta<typeof Scoreboard> = {
  title: 'Scoreboard',
  component: Scoreboard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Scoreboard>;

const Team1: TeamType = {
  logo: 'https://www.mlbstatic.com/team-logos/team-cap-on-light/147.svg',
  name: 'New York Yankees',
  short_name: 'NYY',
};

const Team2: TeamType = {
  logo: 'https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg',
  name: 'Baltimore Orioles',
  short_name: 'BAL',
};

const homeTeam: TeamScoreType = {
  ...Team1,
  record: `51-26`,
  score: 11,
};
const awayTeam: TeamScoreType = {
  ...Team2,
  record: `50-27`,
  score: 9,
};

// Conditions Test
export const Default: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    home_team: {
      logo: homeTeam.logo,
      name: homeTeam.name,
      short_name: homeTeam.short_name,
      record: homeTeam.record,
    },
    away_team: {
      logo: awayTeam.logo,
      name: awayTeam.name,
      short_name: awayTeam.short_name,
      record: awayTeam.record,
    },
  },
};

export const Finished: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    home_team: {
      logo: homeTeam.logo,
      name: homeTeam.name,
      short_name: homeTeam.short_name,
      score: homeTeam.score,
    },
    away_team: {
      logo: awayTeam.logo,
      name: awayTeam.name,
      short_name: awayTeam.short_name,
      score: awayTeam.score,
    },
    status: 'Juego 1',
  },
};

export const Postponed: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    home_team: {
      logo: homeTeam.logo,
      name: homeTeam.name,
      short_name: homeTeam.short_name,
      record: homeTeam.record,
      score: homeTeam.score,
    },
    away_team: {
      logo: awayTeam.logo,
      name: awayTeam.name,
      short_name: awayTeam.short_name,
      record: awayTeam.record,
      score: awayTeam.score,
    },
    status: 'postponed',
  },
};

export const InProgress: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    home_team: {
      logo: homeTeam.logo,
      name: homeTeam.name,
      short_name: homeTeam.short_name,
      record: homeTeam.record,
      score: homeTeam.score,
    },
    away_team: {
      logo: awayTeam.logo,
      name: awayTeam.name,
      short_name: awayTeam.short_name,
      record: awayTeam.record,
      score: awayTeam.score,
    },
    status: 'started',
    progress: 2,
  },
};

export const WithGameDetails: Story = {
  args: {
    ...InProgress.args,
    gameDetailsPath: '/game/123',
  },
};
