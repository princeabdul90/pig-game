import "./App.css";
import { useState } from "react";
import ControlComponent from "./components/ControlComponent";
import PlayerComponent from "./components/PlayerComponent";

const players = [0, 1];

function App() {
  const [playerIndex, setPlayerIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [winner0, setWinner0] = useState(false);
  const [winner1, setWinner1] = useState(false);
  const [score0, setScore0] = useState(0);
  const [score1, setScore1] = useState(0);

  return (
    <div className="wrapper clearfix">
      <PlayerComponent
        currentScore={currentScore}
        winner0={winner0}
        winner1={winner1}
        players={players}
        playerIndex={playerIndex}
        score0={score0}
        score1={score1}
      />
      <ControlComponent
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        winner0={winner0}
        winner1={winner1}
        setWinner0={setWinner0}
        setWinner1={setWinner1}
        players={players}
        playerIndex={playerIndex}
        setPlayerIndex={setPlayerIndex}
        score0={score0}
        setScore0={setScore0}
        score1={score1}
        setScore1={setScore1}
      />
    </div>
  );
}

export default App;

