const current = [0, 0];

function PlayerComponent({
  currentScore,
  winner0,
  winner1,
  players,
  playerIndex,
  score0,
  score1,
}) {
  const index = players[playerIndex];
  const player0 = players[0];
  const player1 = players[1];

  const current0 = index === player0 ? (current[0] = currentScore) : 0;
  const current1 = index === player1 ? (current[1] = currentScore) : 0;

  return (
    <div>
      <div
        className={`player-${player0}-panel ${
          index === player0 ? "active" : null
        } ${winner0 ? "winner" : null}`}
      >
        <div className="player-name" id="name-0">
          {winner0 ? "Winner!" : "Player 0"}
        </div>
        <div className="player-score" id="score-0">
          {score0}
        </div>
        <div className="player-current-box">
          <div className="player-current-label">Current</div>
          <div className="player-current-score" id="current-0">
            {current0}
          </div>
        </div>
      </div>

      <div
        className={`player-${player1}-panel ${
          index === player1 ? "active" : null
        } ${winner1 ? "winner" : null}`}
      >
        <div className="player-name" id="name-1">
          {winner1 ? "Winner!" : "Player 1"}
        </div>
        <div className="player-score" id="score-1">
          {score1}
        </div>
        <div className="player-current-box">
          <div className="player-current-label">Current</div>
          <div className="player-current-score" id="current-1">
            {current1}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerComponent;
