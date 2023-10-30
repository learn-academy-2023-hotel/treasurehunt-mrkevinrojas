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

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board" > 
      {/* Map over array and return a square for each element */}
      { board.map((value, index) => {
        return <Square value ={value} key={index}/>

      })}
      </div>
  
    </>
  )
}

export default App
