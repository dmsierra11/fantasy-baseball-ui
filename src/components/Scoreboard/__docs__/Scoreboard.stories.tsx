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
    homeTeam: {
      logoUrl: homeTeam.logoUrl,
      name: homeTeam.name,
      shortName: homeTeam.shortName,
      record: homeTeam.record,
    },
    awayTeam: {
      logoUrl: awayTeam.logoUrl,
      name: awayTeam.name,
      shortName: awayTeam.shortName,
      record: awayTeam.record,
    },
  },
};

export const Finished: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    homeTeam: {
      logoUrl: homeTeam.logoUrl,
      name: homeTeam.name,
      shortName: homeTeam.shortName,
      record: homeTeam.record,
      score: homeTeam.score,
    },
    awayTeam: {
      logoUrl: awayTeam.logoUrl,
      name: awayTeam.name,
      shortName: awayTeam.shortName,
      record: awayTeam.record,
      score: awayTeam.score,
    },
    status: 'final',
  },
};

export const Postponed: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    homeTeam: {
      logoUrl: homeTeam.logoUrl,
      name: homeTeam.name,
      shortName: homeTeam.shortName,
      record: homeTeam.record,
      score: homeTeam.score,
    },
    awayTeam: {
      logoUrl: awayTeam.logoUrl,
      name: awayTeam.name,
      shortName: awayTeam.shortName,
      record: awayTeam.record,
      score: awayTeam.score,
    },
    status: 'postponed',
  },
};

export const InProgress: Story = {
  args: {
    date: 'Mon Jul 08 2024 18:01:30 GMT+0200',
    homeTeam: {
      logoUrl: homeTeam.logoUrl,
      name: homeTeam.name,
      shortName: homeTeam.shortName,
      record: homeTeam.record,
      score: homeTeam.score,
    },
    awayTeam: {
      logoUrl: awayTeam.logoUrl,
      name: awayTeam.name,
      shortName: awayTeam.shortName,
      record: awayTeam.record,
      score: awayTeam.score,
    },
    status: 'started',
    progress: 2,
  },
};
