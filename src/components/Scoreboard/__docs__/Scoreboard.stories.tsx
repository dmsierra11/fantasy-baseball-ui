import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Scoreboard, Team } from '../Scoreboard';

const meta: Meta<typeof Scoreboard> = {
  title: 'Scoreboard',
  component: Scoreboard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Scoreboard>;

const sampleTeams: Team[] = [
  {
    shortName: 'NYY',
    record: '51-26',
    score: 100,
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
  },
  {
    shortName: 'BAL',
    record: '49-27',
    score: 90,
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
  },
];

// Conditions Test
export const Default: Story = {
  args: {
    teams: sampleTeams,
    gameStatus: 'In Progress',
    gameUrl: 'https://www.mlb.com/games/2024/03/01/cws-nyy-103',
  },
};
