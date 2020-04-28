import React from "react";
import utils from "./Utils";

function DisplayStar(props) {
  return (
    <React.Fragment>
      {utils.range(1, props.displayStars).map((starId) => (
        <div key={starId} className="star" />
      ))}
    </React.Fragment>
  );
}

export default DisplayStar;
