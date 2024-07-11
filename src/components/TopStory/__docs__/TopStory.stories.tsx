import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { TopStory } from '../TopStory';

const meta: Meta<typeof TopStory> = {
  title: 'TopStory',
  component: TopStory,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TopStory>;

// Conditions Test
export const Default: Story = {
  args: {
    imageUrl:
      'https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w2208/mlb/wcjnkef8uossisdctcwd.jpg',
    imageAlt: '',
    headline: 'Pittsburgh Penguins vs Baltimore Orioles',
    description:
      'Among the 32 first-time All-Stars are some of MLB’s most exciting young stars, including Bucs fireballer Paul Skenes, Reds sensation Elly De La Cruz & K.C.’s Bobby Witt Jr. -- who will try his hand at the Derby.',
    link: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
  },
};
