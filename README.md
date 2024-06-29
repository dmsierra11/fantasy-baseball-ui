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
import { Scoreboard, Standings } from 'fantasy-baseball-ui';
const App: React.FC = () => {
const teams = [{
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
}];
return (
    <div>
        <Scoreboard teams={teams} gameStatus="In Progress" gameUrl="https://www.mlb.com/games/2024/03/01/cws-nyy-103" />
        <Standings division="AL East" teams={teams} />
    </div>
)};
export default App;
```

## Components

### Scoreboard

The `Scoreboard` component displays the scores and details of teams in a game.

#### Props

- `teams`: An array of team objects.
- `gameStatus`: The current status of the game.
- `gameUrl`: The URL to the game details.

#### Example

```typescript
import { Scoreboard } from 'fantasy-baseball-ui';
const teams = [{
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
}];
<Scoreboard teams={teams} gameStatus="In Progress" gameUrl="https://www.mlb.com/games/2024/03/01/cws-nyy-103" />;
```

### Standings

The `Standings` component shows the standings of teams in a division.

#### Props

- `division`: (Optional) The name of the division.
- `teams`: An array of team objects.

#### Example

```typescript
import { Standings } from 'fantasy-baseball-ui';
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
<Standings division="AL East" teams={teams} />;
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