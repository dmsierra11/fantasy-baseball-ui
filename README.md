# Fantasy Baseball UI

Fantasy Baseball UI is a React-based user interface for displaying various components related to fantasy baseball, such as top stories, scoreboards, standings, and player stats. This project leverages modern web technologies like TypeScript, Tailwind CSS, and Vite for a seamless development experience.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
- [Usage](#usage)
- [Building and Publishing](#building-and-publishing)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/fantasy-baseball-ui.git
cd fantasy-baseball-ui
npm install
```

## Components

The project includes several reusable components, each with its own stories for Storybook:

- **TopStory**: Displays a top story with an image, headline, and description.

- **Scoreboard**: Shows the scoreboard for a match, including team logos, names, records, and scores.

- **Standings**: Displays the standings of teams in a division.

- **LatestNews**: Lists the latest news items with images and links.

- **PlayerStats**: Shows the statistics of players.

- **PlayerStats**: Shows the statistics of players.

## Usage

To use the components from the Fantasy Baseball UI library in your project, follow these steps:

1. **Install the library**: If you haven't already, install the library using npm or yarn.

    ```bash
    npm install fantasy-baseball-ui
    ```

2. **Use the components**: Use the imported components in your JSX.

    ```typescript
    import React from 'react';
    import { TopStory, Scoreboard, Standings, LatestNews, PlayerStats } from 'fantasy-baseball-ui';

    const App: React.FC = () => {
      return (
        <div>
          <TopStory
            imageUrl="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0301%2Fr%2Fpittsburgh-penguins-vs-baltimore-orioles_1200_675_x_450.jpg"
            imageAlt="Pittsburgh Penguins vs Baltimore Orioles"
            headline="Pittsburgh Penguins vs Baltimore Orioles"
            description="Pittsburgh Penguins vs Baltimore Orioles"
            link="https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates"
          />
          <Scoreboard
            date="May-01"
            homeTeam={{
              logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
              name: 'New York Yankees',
              shortName: 'NYY',
              record: '51-26',
              score: 11,
            }}
            awayTeam={{
              logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
              name: 'Baltimore Orioles',
              shortName: 'BAL',
              record: '50-27',
              score: 9,
            }}
            status="In Progress"
            gameUrl="https://www.mlb.com/games/2024/03/01/cws-nyy-103"
          />
          <Standings
            division="AL East"
            teams={[
              {
                name: 'NYY',
                shortName: 'NYM',
                wins: 51,
                losses: 26,
                percentage: '.662',
                gamesBehind: '-',
                logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
              },
              {
                name: 'BAL',
                shortName: 'BAL',
                wins: 49,
                losses: 25,
                percentage: '.662',
                gamesBehind: '0.5',
                logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
              },
              // Add more teams as needed
            ]}
          />
          <LatestNews
            sectionTitle="Latest News"
            newsItems={[
              {
                id: '1',
                href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
                imgSrc: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0301%2Fr%2Fpittsburgh-penguins-vs-baltimore-orioles_1200_675_x_450.jpg',
                imgAlt: '',
                text: 'Pittsburgh Penguins vs Baltimore Orioles',
              },
              {
                id: '2',
                href: 'https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates',
                imgSrc: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0301%2Fr%2Fpittsburgh-penguins-vs-baltimore-orioles_1200_675_x_450.jpg',
                imgAlt: '',
                text: 'Pittsburgh Penguins vs Baltimore Orioles',
              },
            ]}
          />
          <PlayerStats
            players={[
              {
                name: 'Aaron Nola',
                team: 'PHI',
                stats: {
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
              },
              {
                name: 'Jimmy Garoppolo',
                team: 'BAL',
                stats: {
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
              },
            ]}
          />
        </div>
      );
    };

    export default App;
    ```

## Development

To develop and test the components, use Storybook. Start the Storybook server with:

```bash
npm run storybook
```
or
```bash
yarn storybook
```

## Building and Publishing

To build the library, run:

```bash
npm run build
```

or

```bash
yarn build
```

This will generate the distribution files in the `dist` directory.

To publish a new version of the library:

1. Update the version number in `package.json`.
2. Build the package.
3. Publish to npm.

```bash
npm version patch # or minor/major
npm run build
npm publish
```

## License

This project is licensed under the MIT License.