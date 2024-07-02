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
    imageUrl: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
    imageAlt: '',
    headline: 'Pittsburgh Penguins vs Baltimore Orioles',
    description: 'Pittsburgh Penguins vs Baltimore Orioles',
    link: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
  },
};
