import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

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
    "?"
  ])

  const handleSquareClick = (clickedSquareIndex) => {
   // alert(clickedSquareIndex)
   let updatedcurrentBoard = [...board]
   // use index to update the current square's values with emoji
   updatedcurrentBoard[clickedSquareIndex] = "🎄"
   // update state with the new board
   setBoard(updatedcurrentBoard)

  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board" > 
      {/* Map over array and return a square for each element */}
      { board.map((value, index) => {
        return <Square 
        value={value} 
        index={index}
        handleSquareClick={handleSquareClick}/>

      })}
      </div>
  
    </>
  )
}

export default App
