import {
  Avatar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import type { TeamStandingsType } from '../../types';
import { SectionCard } from '../SectionCard';

interface PositionsTableProps {
  division?: string;
  teams: TeamStandingsType[];
}

const PositionsTable: React.FC<PositionsTableProps> = ({ division, teams }) => {
  return (
    <SectionCard sectionTitle={division}>
      <TableContainer>
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>W</TableCell>
              <TableCell>L</TableCell>
              <TableCell>%</TableCell>
              <TableCell>GB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.name} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center">
                    <Avatar
                      src={team.logoUrl}
                      alt={team.name}
                      className="w-6 h-6 mr-2"
                    />
                    <Typography variant="body1">{team.name}</Typography>
                  </div>
                </TableCell>
                <TableCell>{team.wins}</TableCell>
                <TableCell>{team.losses}</TableCell>
                <TableCell>{team.percentage}</TableCell>
                <TableCell>{team.gamesBehind}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionCard>
  );
};

interface StandingsProps {
  title?: string;
  leagueTables: PositionsTableProps[];
  stackDirection?: 'row' | 'column';
}

const Standings: React.FC<StandingsProps> = ({
  title,
  leagueTables,
  stackDirection,
}) => {
  return (
    <SectionCard sectionTitle={title}>
      <Stack spacing={2} direction={stackDirection}>
        {leagueTables.map((table) => (
          <PositionsTable
            key={table.division}
            division={table.division}
            teams={table.teams}
          />
        ))}
      </Stack>
    </SectionCard>
  );
};

export { Standings };
