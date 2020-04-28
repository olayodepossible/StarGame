import React from "react";
import utils from "./Utils";
import PlayPad from "./PlayPad";
import DisplayStar from "./DisplayStar";
import PlayAgain from "./PlayAgain";
import { useGameState } from "./CustomHook";
import DisplayScore from "./DisplayScore";

function StarGame(props) {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    correctQuess,
    setGameState,
  } = useGameState();

  const wrongCandidateNum = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

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
    if (gameStatus !== "active" || currentStatus === "used") {
      return; // it will no longer clickable
    }

    // to set the game state
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((currNum) => currNum !== number);
    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain
              startAgain={props.startNewGame}
              gameStatus={gameStatus}
            />
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
      <DisplayScore correctQuess={correctQuess} secondsLeft={secondsLeft} />
    </div>
  );
}

export default StarGame;
