import React from 'react';
import './Scoreboard.css'; // Import the custom CSS

export interface Team {
  shortName: string;
  logoUrl: string;
  record: string;
  score: number;
}

interface ScoreboardProps {
  teams: Team[];
  gameStatus: string;
  gameUrl: string;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ teams, gameStatus, gameUrl }) => {
  return (
    <div className="scoreboard-card-wrapper">
      <a href={gameUrl} className="scoreboard-link-wrapper">
        <div className="scoreboard-content-wrapper">
          <div className="game-status-wrapper">
            <span className="game-status-label">{gameStatus}</span>
          </div>
          <div className="matchup-wrapper">
            {teams.map((team) => (
              <div key={team.shortName} className="team-row-wrapper">
                <div className="team-logo-name-wrapper">
                  <img src={team.logoUrl} alt={team.shortName} className="team-logo" />
                  <div className="team-name ml-2 mr-2">{team.shortName}</div>
                </div>
                <div className="team-record mr-2">{team.record}</div>
                <div className="team-score">{team.score}</div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export { Scoreboard };



