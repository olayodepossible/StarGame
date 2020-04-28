import React from "react";

function PlayAgain(props) {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
      >
        {props.gameStatus === "lost" ? "Game Over!" : "Weldone!"}
      </div>
      <button onClick={props.startAgain}>Play Again</button>
    </div>
  );
}

export default PlayAgain;
