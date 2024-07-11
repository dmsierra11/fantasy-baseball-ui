import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import React from 'react';
import type { MatchType } from '../../types';

import { Scoreboard } from '../Scoreboard';

interface GamesListProps {
  games: MatchType[];
  sectionTitle?: string;
}

const GamesList: React.FC<GamesListProps> = ({
  games,
  sectionTitle,
}) => {
  return (
    <Paper className="p-4">
      {sectionTitle && (
        <Typography variant="h5" mb={2}>
          {sectionTitle}
        </Typography>
      )}
      <Stack direction="row" spacing={2} sx={{ overflowX: 'auto' }}>
        {games.map((game, index) => (
          <>
            <Scoreboard key={index} {...game} />
          </>
        ))}
      </Stack>
    </Paper>
  );
};

export { GamesList };
