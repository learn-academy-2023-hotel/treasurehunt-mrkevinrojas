import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
   
  const resetGame = () => {
    setBoard( ["?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ], setBombLocation(Math.floor(Math.random() * board.length)),setTreasureLocation(Math.floor(Math.random() * board.length)))
  }


  const handleSquareClick = (clickedSquareIndex) => {
    // alert(clickedSquareIndex)

    let updatedBoard = [...board];
    // set condition for if treaure location is the same as clicked square's index show a treasure

    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎";

    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣";

    } else {
      // use index to update the current square's values with emoji
      updatedBoard[clickedSquareIndex] = "🎄";
      // update state with the new board
    }

    setBoard(updatedBoard);


  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {/* Map over array and return a square for each element */}
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          )
        })}
      </div>
      <button onClick={resetGame}>Click to Play again</button>
    </>
  );
};

export default App;
