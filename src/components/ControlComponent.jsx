import React, { useEffect, useState } from "react";
import dice1 from "../images/dice-1.png";
import dice2 from "../images/dice-2.png";
import dice3 from "../images/dice-3.png";
import dice4 from "../images/dice-4.png";
import dice5 from "../images/dice-5.png";
import dice6 from "../images/dice-6.png";

function ControlComponent({
  currentScore,
  setCurrentScore,
  winner0,
  winner1,
  setWinner0,
  setWinner1,
  players,
  playerIndex,
  setPlayerIndex,
  score0,
  setScore0,
  score1,
  setScore1,
}) {
  const [targetScore, setTargetScore] = useState(100);
  const [dice, setDice] = useState(0);
  const [secondDice, setSecondDice] = useState(0);

  const TARGET_SCORE = targetScore;
  const index = players[playerIndex];
  const player0 = players[0];
  const player1 = players[1];

  useEffect(() => {
    if (score0 >= TARGET_SCORE && score0 > score1) {
      setWinner0(true);
      setDice(0);
      setSecondDice(0);
      setPlayerIndex(null);
    }

    if (score1 >= TARGET_SCORE && score1 > score0) {
      setWinner1(true);
      setDice(0);
      setSecondDice(0);
      setPlayerIndex(null);
    }
  }, [
    score0,
    score1,
    setWinner1,
    setWinner0,
    setDice,
    setSecondDice,
    setPlayerIndex,
    TARGET_SCORE,
  ]);

  const onHold = () => {
    if (currentScore > 0) {
      if (index === player0) {
        setScore0(score0 + currentScore);
      }

      if (index === player1) {
        setScore1(score1 + currentScore);
      }
    }
    setCurrentScore(0);
    setDice(0);
    setSecondDice(0);
    nextPlayer();
  };

  const onNewGame = () => {
    setPlayerIndex(0);
    setDice(0);
    setSecondDice(0);
    setCurrentScore(0);
    setScore0(0);
    setScore1(0);
    setWinner0(false);
    setWinner1(false);
  };

  const onRollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;

    setDice(num);
    setSecondDice(num2);

    if (num !== 1 && num2 !== 1) {
      setCurrentScore(currentScore + (num + num2));
    } else {
      setCurrentScore(0);
      nextPlayer();
    }
  };

  const nextPlayer = () => {
    setPlayerIndex((i) => (i + 1) % players.length);
  };

  // Dice Image
  const displayDice = (dice) => {
    switch (dice) {
      case 1:
        return <img src={dice1} alt="Dice" className="dice" id="dice-1" />;

      case 2:
        return <img src={dice2} alt="Dice" className="dice" id="dice-1" />;

      case 3:
        return <img src={dice3} alt="Dice" className="dice" id="dice-1" />;

      case 4:
        return <img src={dice4} alt="Dice" className="dice" id="dice-1" />;

      case 5:
        return <img src={dice5} alt="Dice" className="dice" id="dice-1" />;

      case 6:
        return <img src={dice6} alt="Dice" className="dice" id="dice-1" />;

      default:
        return null;
    }
  };

  const displaySecondDice = (secondDice) => {
    switch (secondDice) {
      case 1:
        return <img src={dice1} alt="Dice" className="dice" id="dice-2" />;

      case 2:
        return <img src={dice2} alt="Dice" className="dice" id="dice-2" />;

      case 3:
        return <img src={dice3} alt="Dice" className="dice" id="dice-2" />;

      case 4:
        return <img src={dice4} alt="Dice" className="dice" id="dice-2" />;

      case 5:
        return <img src={dice5} alt="Dice" className="dice" id="dice-2" />;

      case 6:
        return <img src={dice6} alt="Dice" className="dice" id="dice-2" />;

      default:
        return null;
    }
  };
  return (
    <div>
      <button className="btn-new" onClick={onNewGame}>
        <i className="ion-ios-plus-outline"></i>New game
      </button>
      <button
        className="btn-roll"
        onClick={onRollDice}
        disabled={winner0 || winner1 ? true : false}
      >
        <i className="ion-ios-loop"></i>Roll dice
      </button>
      <button
        className="btn-hold"
        onClick={onHold}
        disabled={winner0 || winner1 ? true : false}
      >
        <i className="ion-ios-download-outline"></i>Hold
      </button>

      <input
        type="text"
        placeholder="Target score"
        className="final-score"
        onChange={(e) => setTargetScore(e.target.value)}
      />

      {displayDice(dice)}
      {displaySecondDice(secondDice)}
    </div>
  );
}

export default ControlComponent;
