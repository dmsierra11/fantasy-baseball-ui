import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import type { Team, TeamScore } from '../../../types';
import { ScoreboardComponent } from '../Scoreboard';

const meta: Meta<typeof ScoreboardComponent> = {
  title: 'Scoreboard',
  component: ScoreboardComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ScoreboardComponent>;

const Team1: Team = {
  logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
  name: 'New York Yankees',
  shortName: 'NYY',
};

const Team2: Team = {
  logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
  name: 'Baltimore Orioles',
  shortName: 'BAL',
};

const homeTeam: TeamScore = {
  ...Team1,
  record: `51-26`,
  score: 11,
};
const awayTeam: TeamScore = {
  ...Team2,
  record: `50-27`,
  score: 9,
};

// Conditions Test
export const Default: Story = {
  args: {
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
    status: 'In Progress',
    gameUrl: 'https://www.mlb.com/games/2024/03/01/cws-nyy-103',
  },
};

export const NotStarted: Story = {
  args: {
    date: 'May-01',
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
    gameUrl: 'https://www.mlb.com/games/2024/03/01/cws-nyy-103',
  },
};
