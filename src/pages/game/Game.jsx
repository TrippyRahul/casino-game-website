import React, { useEffect, useState } from "react";
import "./game.scss";
import { useLocation } from "react-router-dom";

const Game = () => {
  const [gameData, setGameData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const data = location.state;

    setGameData(data);
  }, [location]);

  console.log(gameData);

  return (
    <div className="game">
      <div className="container">
        {gameData ? <iframe src={gameData.src} className="frame" /> : "loading"}
      </div>
    </div>
  );
};

export default Game;
