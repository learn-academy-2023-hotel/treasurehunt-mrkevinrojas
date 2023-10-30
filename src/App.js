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
  ], setBombLocation(Math.floor(Math.random() * board.length)),setTreasureLocation(Math.floor(Math.random() * board.length)), setCount(5))

  }

  const[count, setCount] = useState(5)

  const handleSquareClick = (clickedSquareIndex) => {
    // alert(clickedSquareIndex)

    let updatedBoard = [...board];
    // set condition for if treaure location is the same as clicked square's index show a treasure

    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎"
      alert("winner winner chicken dinner")
      (setCount(5), setBoard(["?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
    ]), setBombLocation(Math.floor(Math.random() * board.length)), setTreasureLocation(Math.floor(Math.random() * board.length)))
    
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣"
      alert("you're not worth a dime")
      
      (setCount(5), setBoard(["?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
    ]), setBombLocation(Math.floor(Math.random() * board.length)), setTreasureLocation(Math.floor(Math.random() * board.length)))
    

    } else {
      // use index to update the current square's values with emoji
      updatedBoard[clickedSquareIndex] = "🎄";
      setCount(count-1)
      
      if (count === 0){
        alert("out of turns")
        (setCount(5), setBoard(["?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
      ]), setBombLocation(Math.floor(Math.random() * board.length)), setTreasureLocation(Math.floor(Math.random() * board.length)))   
      }

      // update state with the new board
    }
    setBoard(updatedBoard);
  }

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
      <div > Turns left: {count}  </div>
      <button onClick={resetGame}>Click to Play again</button>
    </>
  );
};

export default App
