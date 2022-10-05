import React from 'react'
import { useState } from 'react';
import Square from './squaree'

const I = "";
const X = "X";
const O = "O";

const helper = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const Board2 = () => {
  const [square, setSquare] = useState(Array(9).fill(I));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });
  const [drawCount, setDrawCount] = useState(0);
  const [step , setStep ] = useState(player);

  function isGameOver() {
    if (!gameFinished) {  
      for (let i = 0; i < 8; i++) {
        if (
          square[helper[i][0]] === X &&
          square[helper[i][1]] === X &&
          square[helper[i][2]] === X
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });  //wrap them up in an object and use the spread notation
          console.log("X WON");
          return;
        }
      };

      for (let i = 0; i < 8; i++) {
        if (
          square[helper[i][0]] === O &&
          square[helper[i][1]] === O &&
          square[helper[i][2]] === O
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, O: winCount.O + 1 }); //spread operator help to pass value easily
          console.log("O WON");
          return;
        }
      };

      if (!square.includes(I)) {
        setDraw(true);
        setDrawCount(drawCount + 1);
        setGameFinished(true);
        console.log("DRAW");
      }
    }
  };

  function restartGame() {
    setSquare(Array(9).fill(I));
    setGameFinished(false);
    setDraw(false);
  };

  function clearHistory() {
    setwinCount({ X: 0, O: 0 });
    restartGame();
  };

  isGameOver();

  function handleClick(id) {
    setSquare(
      square.map((item, index) => {
        if (index === id) {
          if (player) {
            return X;
          } else {
            return O;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }
  return (
    <div>
      <span className="win-history">
        X's WINS: {winCount.X}
        <br />
        O's WINS: {winCount.O}
        <br/>
        Draw Game:{drawCount}
      </span>

      <Square clickedArray={square} handleClick={handleClick} />
    </div>
  );
}



export default Board2
