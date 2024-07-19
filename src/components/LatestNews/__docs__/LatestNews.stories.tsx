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
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
      {
        id: '2',
        href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
        imgSrc: 'https://midfield.mlbstatic.com/v1/team/140/spots/72',
        imgAlt: '',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      },
    ],
  },
};

export const WithDivider: Story = {
  args: {
    sectionTitle: 'Latest News',
    newsItems: [
      {
        id: '1',
        href: '/news/dragons-victory',
        imgSrc:
          'https://raw.githubusercontent.com/dmsierra11/softball-league-api/images/assets/images/dragons-victory.webp',
        title: 'Los Dragones ganan el campeonato regional',
        text: 'Los Dragones han ganado el campeonato regional después de una emocionante final contra los Tigres. El partido se celebró en el estadio de Montjuic.',
      },
      {
        id: '2',
        href: '/news/new-stadium-opening',
        imgSrc:
          'https://raw.githubusercontent.com/dmsierra11/softball-league-api/images/assets/images/new-stadium-opening.webp',
        title: 'Inauguración del nuevo estadio en Barcelona',
        text: 'El nuevo estadio en Barcelona será inaugurado el próximo mes. Este estadio moderno será la sede de varios eventos deportivos importantes.',
      },
      {
        id: '3',
        href: '/news/layetanos-debut',
        imgSrc:
          'https://raw.githubusercontent.com/dmsierra11/softball-league-api/images/assets/images/layetanos-debut.webp',
        title:
          'Los Layetanos hacen su debut en un el Summer Camp Barcelona 2024',
        text: 'Los Layetanos han sido seleccionados para su debut en un torneo de la Liga Unica. El encuentro será el próximo viernes en el estadio de Montjuic.',
      },
      {
        id: '4',
        href: '/news/summer-cup-2024',
        imgSrc:
          'https://raw.githubusercontent.com/dmsierra11/softball-league-api/images/assets/images/summer-cup-2024.webp',
        title: 'Empieza el Summer Camp 2024',
        text: 'El próximo viernes, el Summer Camp 2024 se abrirá para la primera vez en su historia. El torneo se llevará a cabo en la ciudad de Barcelona, Cataluña.',
      },
      {
        id: '5',
        href: '/news/summer-cup-2024-sign-up',
        imgSrc:
          'https://raw.githubusercontent.com/dmsierra11/softball-league-api/images/assets/images/summer-cup-2024-sign-up.webp',
        title:
          'Mas de 1000 personas han registrado su interés en el Summer Camp 2024',
        text: 'La organización ha registrado más de 1000 personas de todo el mundo para participar en el próximo Summer Cup 2024. El torneo se llevará a cabo en la ciudad de Barcelona, Cataluña.',
      },
    ],
  },
};
