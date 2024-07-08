import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { TeamStandings } from '../../types';

interface StandingsProps {
  division?: string;
  teams: TeamStandings[];
}

const StandingsComponent: React.FC<StandingsProps> = ({ division, teams }) => {
  return (
    <Paper className="p-4">
      {division && (
        <Typography variant="h6" className="mb-4">
          {division}
        </Typography>
      )}
      <TableContainer component={Paper}>
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
    </Paper>
  );
};

export { StandingsComponent };
