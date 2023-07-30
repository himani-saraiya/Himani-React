import React, { useState } from "react";

function DiceGame() {
  const [chances, setChances] = useState(8);
  const [target, setTarget] = useState(8);
  const [score, setScore] = useState(0);
  const [rollCount, setRollCount] = useState(0);
  const [dice, setDiceNum] = useState(0);

  const getDiceNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleDiceRoll = () => {
    const diceNumber = getDiceNumber();
    setDiceNum(diceNumber);
    setRollCount((prevRollCount) => prevRollCount + 1);

    if (rollCount + 1 > chances || diceNumber === target) {
      alert("Game over");
    } else {
      setScore((prevScore) => prevScore + diceNumber);
    }
  };

  return (
    <>
      <h1>Score: {score}</h1>
      <h4>Dice: {dice}</h4>
      <h3>Terms</h3>
      <input
        type="number"
        name="Terms"
        value={chances}
        placeholder="chances"
        onChange={(e) => setChances(Number(e.target.value))}
      />
      <input
        type="number"
        name="Target"
        value={target}
        placeholder="target"
        onChange={(e) => setTarget(Number(e.target.value))}
      />
      <h3>Chances: {chances - rollCount}</h3>
      <h3>Target: {target}</h3>
      <button
        type="button"
        onClick={handleDiceRoll}
        disabled={
          !(chances - rollCount > 0 && target > 0 && target < chances * 6)
        }
      >
        Roll
      </button>
    </>
  );
}

export default DiceGame;
