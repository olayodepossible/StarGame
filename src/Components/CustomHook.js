import { useState, useEffect } from "react";
import utils from "./Utils";

export const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [correctQuess, setCorrectGuess] = useState(0);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timeId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => clearTimeout(timeId);
    }
  });

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (num) => !newCandidateNums.includes(num)
      );

      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setCorrectGuess(correctQuess + 1);
    }
  };

  return {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    correctQuess,
    setGameState,
  };
};
