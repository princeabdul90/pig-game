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

/*
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
