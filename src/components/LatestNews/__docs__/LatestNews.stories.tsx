import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { LatestNews } from '../LatestNews';

const meta: Meta<typeof LatestNews> = {
  title: 'LatestNews',
  component: LatestNews,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LatestNews>;

// Conditions Test
export const Default: Story = {
  args: {
    sectionTitle: 'Latest News',
    newsItems: [
      {
        id: '1',
        href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
        imgSrc: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
        imgAlt: '',
        text: 'Complete All-Star Game rosters include familiar faces, 32 first-timers',
      },
      {
        id: '2',
        href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
        imgSrc: 'https://midfield.mlbstatic.com/v1/team/140/spots/72',
        imgAlt: '',
        text: 'Team-by-team breakdown of the 2024 All-Stars',
      },
    ],
  },
};
