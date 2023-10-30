import React from "react"

const Square = (props) => {
  //destructuring props
  //const { value } = props // same as props.value

  return (
    <>
      <div className="square">{props.value}</div>
    </>
  )
}
export default Square
