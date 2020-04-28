import React, { useState } from "react";
import StarGame from "./StarGame";

function StarMatch() {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <StarGame key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
}

export default StarMatch;
