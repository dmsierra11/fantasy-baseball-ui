import Stack from '@mui/material/Stack';
import React from 'react';
import type { MatchType } from '../../types';

import { Scoreboard } from '../Scoreboard';
import { SectionCard } from '../SectionCard';

interface GamesListProps {
  games: MatchType[];
  sectionTitle?: string;
  component?: 'div' | 'paper';
}

const GamesList: React.FC<GamesListProps> = ({
  games,
  sectionTitle,
  component,
}) => {
  return (
    <SectionCard sectionTitle={sectionTitle} component={component}>
      <Stack direction="row" spacing={2} sx={{ overflowX: 'auto' }}>
        {games.map((game, index) => (
          <>
            <Scoreboard key={index} {...game} />
          </>
        ))}
      </Stack>
    </SectionCard>
  );
};

export { GamesList };
