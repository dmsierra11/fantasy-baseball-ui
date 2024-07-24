import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { BoxscoreType } from '../../types';

type LineScoreProps = BoxscoreType;

const LineScore: React.FC<LineScoreProps> = ({
  awayTeam,
  homeTeam,
}: LineScoreProps) => {
  const { lineScore: awayLineScore } = awayTeam;
  const { lineScore: homeLineScore } = homeTeam;
  const totalRunsAway = awayLineScore.teamScore.reduce(
    (acc, curr) => acc + (curr.runs ?? 0),
    0,
  );
  const totalRunsHome = homeLineScore.teamScore.reduce(
    (acc, curr) => acc + (curr.runs ?? 0),
    0,
  );
  const totalHitsAway = awayLineScore.teamScore.reduce(
    (acc, curr) => acc + (curr.hits ?? 0),
    0,
  );
  const totalHitsHome = homeLineScore.teamScore.reduce(
    (acc, curr) => acc + (curr.hits ?? 0),
    0,
  );
  const totalErrorsAway = awayLineScore.teamScore.reduce(
    (acc, curr) => acc + (curr.errors ?? 0),
    0,
  );
  const totalErrorsHome = homeLineScore.teamScore.reduce(
    (acc, curr) => acc + (curr.errors ?? 0),
    0,
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {awayLineScore.teamScore.map((_, index) => (
              <TableCell align="right">{index + 1}</TableCell>
            ))}
            <TableCell align="right">R</TableCell>
            <TableCell align="right">H</TableCell>
            <TableCell align="right">E</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={`away`}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {awayTeam.name}
            </TableCell>
            {awayLineScore.teamScore.map((lineScore) => (
              <TableCell align="right">{lineScore.runs}</TableCell>
            ))}
            <TableCell align="right">{totalRunsAway}</TableCell>
            <TableCell align="right">{totalHitsAway}</TableCell>
            <TableCell align="right">{totalErrorsAway}</TableCell>
          </TableRow>
          <TableRow
            key={`home`}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {homeTeam.name}
            </TableCell>
            {homeLineScore.teamScore.map((lineScore) => {
              return <TableCell align="right">{lineScore.runs}</TableCell>;
            })}
            {awayLineScore.teamScore.length >
              homeLineScore.teamScore.length && (
              <TableCell align="right"></TableCell>
            )}
            <TableCell align="right">{totalRunsHome}</TableCell>
            <TableCell align="right">{totalHitsHome}</TableCell>
            <TableCell align="right">{totalErrorsHome}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { LineScore };
