import React from 'react';
import type { Match, TeamScore } from '../../types';
import './Scoreboard.css';

interface ScoreboardProps extends Match {
  gameUrl: string;
}

const TeamRow: React.FC<TeamScore> = ({
  shortName,
  logoUrl,
  record,
  score,
}) => {
  return (
    <div key={shortName} className="team-row-wrapper">
      <div className="team-logo-name-wrapper">
        <img src={logoUrl} alt={shortName} className="team-logo" />
        <div className="team-name ml-2 mr-2">{shortName}</div>
      </div>
      <div className="team-record mr-2">{record}</div>
      {score && <div className="team-score">{score}</div>}
    </div>
  );
};

const ScoreboardComponent: React.FC<ScoreboardProps> = ({
  date,
  homeTeam,
  awayTeam,
  status,
  gameUrl,
}) => {
  return (
    <div className="scoreboard-card-wrapper">
      <a href={gameUrl} className="scoreboard-link-wrapper">
        <div className="scoreboard-content-wrapper">
          <div className="game-status-wrapper">
            <span className="game-status-label">{status || date}</span>
          </div>
          <div className="matchup-wrapper">
            <TeamRow {...homeTeam} />
            <TeamRow {...awayTeam} />
          </div>
        </div>
      </a>
    </div>
  );
};

export { ScoreboardComponent };
