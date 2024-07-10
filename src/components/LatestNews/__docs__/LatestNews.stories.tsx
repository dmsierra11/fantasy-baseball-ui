import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { LatestNewsComponent } from '../LatestNews';

const meta: Meta<typeof LatestNewsComponent> = {
  title: 'LatestNews',
  component: LatestNewsComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LatestNewsComponent>;

// Conditions Test
export const Default: Story = {
  args: {
    sectionTitle: 'Latest News',
    newsItems: [
      {
        id: '1',
        href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
        imgSrc:
          'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0301%2Fr%2Fpittsburgh-penguins-vs-baltimore-orioles_1200_675_x_450.jpg',
        imgAlt: '',
        text: 'Pittsburgh Penguins vs Baltimore Orioles',
      },
      {
        id: '2',
        href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
        imgSrc:
          'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0301%2Fr%2Fpittsburgh-penguins-vs-baltimore-orioles_1200_675_x_450.jpg',
        imgAlt: '',
        text: 'Pittsburgh Penguins vs Baltimore Orioles',
      },
    ],
  },
};
