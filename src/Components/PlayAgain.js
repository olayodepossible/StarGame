import React from "react";

function PlayAgain(props) {
  return (
    <div>
      <button onClick={props.startAgain}>Play Again</button>
    </div>
  );
}

export default PlayAgain;
