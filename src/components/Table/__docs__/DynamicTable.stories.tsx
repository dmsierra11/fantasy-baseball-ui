import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import type { StatsType } from '../../../types';
import { DynamicTable } from '../DynamicTable';

const meta: Meta<typeof DynamicTable> = {
  title: 'DynamicTable',
  component: DynamicTable,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DynamicTable>;

const samplePlayers: StatsType[] = [
  {
    name: 'Aaron Nola',
    team: 'PHI',
    G: 10,
    AB: 5,
    R: 5,
    H: 5,
    '2B': 5,
    '3B': 5,
    HR: 5,
    RBI: 5,
    BB: 5,
    SO: 5,
    SB: 5,
    CS: 5,
    AVG: 5,
    OBP: 5,
    SLG: 5,
    OPS: 5,
  },
  {
    name: ' Jimmy Garoppolo',
    team: 'BAL',
    G: 10,
    AB: 5,
    R: 5,
    H: 5,
    '2B': 5,
    '3B': 5,
    HR: 5,
    RBI: 5,
    BB: 5,
    SO: 5,
    SB: 5,
    CS: 5,
    AVG: 5,
    OBP: 5,
    SLG: 5,
    OPS: 5,
  },
];

// Conditions Test
export const Default: Story = {
  args: {
    players: samplePlayers,
  },
};

// export const WithSectionTitle: Story = {
//   args: {
//     players: samplePlayers,
//     sectionTitle: 'Player Stats',
//   },
// };
