# Fantasy Baseball UI Library

A React component library for creating fantasy baseball user interfaces. This library includes components for displaying scoreboards, team standings, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Scoreboard](#scoreboard)
  - [Standings](#standings)
- [Development](#development)
- [Building and Publishing](#building-and-publishing)
- [License](#license)

## Installation

To install the library, use npm or yarn:
```bash
npm install fantasy-baseball-ui
```
or
```bash
yarn add fantasy-baseball-ui
```

## Usage

Import the components you need from the library and use them in your React application:

```typescript
import React from 'react';
import { ScoreboardComponent, StandingsComponent } from 'fantasy-baseball-ui';

const App: React.FC = () => {
  const homeTeam = {
    shortName: 'NYY',
    record: '51-26',
    score: 100,
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
  };

  const awayTeam = {
    shortName: 'BAL',
    record: '49-27',
    score: 90,
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
  };

  const teams = [
    {
      name: 'NYY',
      shortName: 'NYY',
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
      losses: 27,
      percentage: '.645',
      gamesBehind: '1.5',
      logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
    },
  ];

  return (
    <div>
      <ScoreboardComponent
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatus="In Progress"
        gameUrl="https://www.mlb.com/games/2024/03/01/cws-nyy-103"
      />
      <StandingsComponent division="AL East" teams={teams} />
    </div>
  );
};

export default App;
```

## Components

### Scoreboard

The `ScoreboardComponent` displays the scores and details of teams in a game.

#### Props

- `homeTeam`: An object representing the home team.
- `awayTeam`: An object representing the away team.
- `gameStatus`: The current status of the game.
- `gameUrl`: The URL to the game details.

#### Example

```typescript
import { ScoreboardComponent } from 'fantasy-baseball-ui';
const homeTeam = {
    shortName: 'NYY',
    record: '51-26',
    score: 100,
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
    },
    const awayTeam = {
    shortName: 'BAL',
    record: '49-27',
    score: 90,
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
};
<ScoreboardComponent homeTeam={homeTeam} awayTeam={awayTeam} gameStatus="In Progress" gameUrl="https://www.mlb.com/games/2024/03/01/cws-nyy-103" />;
```

### Standings

The `StandingsComponent` shows the standings of teams in a division.

#### Props

- `division`: (Optional) The name of the division.
- `teams`: An array of team objects.

#### Example

```typescript
import { StandingsComponent } from 'fantasy-baseball-ui';
const teams = [{
    name: 'NYY',
    wins: 51,
    losses: 26,
    percentage: '.662',
    gamesBehind: '-',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/147/spots/72',
},
{
    name: 'BAL',
    wins: 49,
    losses: 25,
    percentage: '.662',
    gamesBehind: '0.5',
    logoUrl: 'https://midfield.mlbstatic.com/v1/team/110/spots/72',
}];
<StandingsComponent division="AL East" teams={teams} />;
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