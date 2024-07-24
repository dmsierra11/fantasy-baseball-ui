import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { LineScore } from '../LineScore';

const meta: Meta<typeof LineScore> = {
  title: 'LineScore',
  component: LineScore,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LineScore>;

export const Default: Story = {
  args: {
    awayTeam: {
      name: 'Away Team',
      lineScore: {
        teamScore: [
          {
            runs: 3,
            hits: 8,
            errors: 1,
          },
          {
            runs: 1,
            hits: 2,
            errors: 3,
          },
          {
            runs: 0,
            hits: 0,
            errors: 0,
          },
          {
            runs: 0,
            hits: 0,
            errors: 0,
          },
        ],
      },
    },
    homeTeam: {
      name: 'Home Team',
      lineScore: {
        teamScore: [
          {
            runs: 8,
            hits: 8,
            errors: 1,
          },
          {
            runs: 1,
            hits: 2,
            errors: 3,
          },
          {
            runs: 0,
            hits: 0,
            errors: 0,
          },
        ],
      },
    },
  },
};
