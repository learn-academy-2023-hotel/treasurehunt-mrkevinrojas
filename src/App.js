import React, { useState } from "react";
import Square from "./components/Square";
import WinLose from "./components/countDownLose";
import "./App.css";

const App = () => {

  const [counter, setCounter] = useState(5)
  const [winLose, setWinLose] = useState(false)
  const [emoji, setEmoji] = useState(null)

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
    setBoard(["?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ], setBombLocation(Math.floor(Math.random() * board.length)),setTreasureLocation(Math.floor(Math.random() * board.length)), setCounter(5), setEmoji(null), setWinLose(false))}

  


  const handleSquareClick = (clickedSquareIndex) => {
    // alert(clickedSquareIndex)

    let updatedBoard = [...board];
    // set condition for if treaure location is the same as clicked square's index show a treasure

    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎";
      setEmoji("💎")
      setWinLose(true)
      

    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣";
      setEmoji("💣")
      setWinLose(true)
      

    } else {
      // use index to update the current square's values with emoji
      updatedBoard[clickedSquareIndex] = "🏝️";
      // update state with the new board
      setCounter(counter - 1)
      if (counter <= 1){
        setWinLose(true)
      }
    }


    setBoard(updatedBoard);


  };

  return (
    <>
      {winLose && (<WinLose counter={counter} emoji={emoji} onNewGame={resetGame}/>)}
      
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

      <br/>

      <div className="counter">
          counter: {counter}
      </div>

      <br/>

      <div className="play-again">
        <button 
          className="play-again-button"
          onClick={resetGame} 
        >
          Click to Play again
        </button>
      </div>

    </>
  );
};

export default App;
