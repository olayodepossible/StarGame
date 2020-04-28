import React from "react";

function PlayPad(props) {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.keyPad, props.status)}
    >
      {props.keyPad}
    </button>
  );
}

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

export default PlayPad;
