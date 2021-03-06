import React from "react"
import errorWindow from "images/ie-modal.png"

const Window = ({ position }) => {
  return (
    <div
      className="w-4/12 h-auto float-left absolute"
      style={{
        left: position.left,
        top: position.top - 75,
      }}
    >
      <img src={errorWindow} alt="Error Window" />
    </div>
  )
}

export default Window
