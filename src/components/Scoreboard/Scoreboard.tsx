import React from 'react';
import type { Scoreboard } from '../../types';
import './Scoreboard.css'; // Import the custom CSS

interface ScoreboardProps extends Scoreboard {
  gameStatus: string;
  gameUrl: string;
}

const ScoreboardComponent: React.FC<ScoreboardProps> = ({ homeTeam, awayTeam, gameStatus, gameUrl }) => {
  return (
    <div className="scoreboard-card-wrapper">
      <a href={gameUrl} className="scoreboard-link-wrapper">
        <div className="scoreboard-content-wrapper">
          <div className="game-status-wrapper">
            <span className="game-status-label">{gameStatus}</span>
          </div>
          <div className="matchup-wrapper">
            <div key={homeTeam.shortName} className="team-row-wrapper">
              <div className="team-logo-name-wrapper">
                  <img src={homeTeam.logoUrl} alt={homeTeam.shortName} className="team-logo" />
                  <div className="team-name ml-2 mr-2">{homeTeam.shortName}</div>
                </div>
                <div className="team-record mr-2">{homeTeam.record}</div>
                <div className="team-score">{homeTeam.score}</div>
            </div>
            <div key={awayTeam.shortName} className="team-row-wrapper">
              <div className="team-logo-name-wrapper">
                  <img src={awayTeam.logoUrl} alt={awayTeam.shortName} className="team-logo" />
                  <div className="team-name ml-2 mr-2">{awayTeam.shortName}</div>
                </div>
                <div className="team-record mr-2">{awayTeam.record}</div>
                <div className="team-score">{awayTeam.score}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export { ScoreboardComponent };




