import React from "react";

function DisplayScore(props) {
  return (
    <div className="body">
      <div className="left">Time Remaining: {props.secondsLeft}</div>
      <div className="right">Your score is : {props.correctQuess}</div>
    </div>
  );
}

export default DisplayScore;
