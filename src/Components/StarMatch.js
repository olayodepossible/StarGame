import React, { useState } from "react";
import utils from "./Utils";
import PlayPad from "./PlayPad";
import DisplayStar from "./DisplayStar";
import PlayAgain from "./PlayAgain";

function StarMatch() {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const wrongCandidateNum = utils.sum(candidateNums) > stars;

  const gameIsDone = availableNums.length === 0;

  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
  };

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }

    if (candidateNums.includes(number)) {
      return wrongCandidateNum ? "wrong" : "candidate";
    }

    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == "used") {
      return;
    }

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((currNum) => currNum !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (num) => !newCandidateNums.includes(num)
      );

      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
            <PlayAgain startAgain={resetGame} />
          ) : (
            <DisplayStar displayStars={stars} />
          )}
        </div>

        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayPad
              key={number}
              keyPad={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

export default StarMatch;
