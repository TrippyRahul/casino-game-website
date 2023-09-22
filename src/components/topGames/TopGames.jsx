import React from "react";
import "./topGames.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

const topGamesData = [
  {
    id: 1,
    name: "keno-game",
    img: "/keno-game.png",
    alt: "Keno-game",
    src: "/games/kenoGame/index.html",
  },
  {
    id: 2,
    name: "slot-game",
    img: "/slot-game.png",
    alt: "slot-game",
    src: "/games/slot/dist/index.html",
  },
  {
    id: 3,
    name: "deno-game",
    img: "/deno-game.png",
    alt: "deno-game",
    src: "/games/slot/dist/index.html",
  },
];

const TopGames = () => {
  const { isUserLogged } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = (game) => {
    if (!isUserLogged) {
      alert("Please Login First");
    } else {
      navigate(`/game/${game.name}`, { state: { ...game } });
    }
  };
  return (
    <>
      <div className="top-games">
        <div className="container">
          <div className="titles">
            <h2>Our Top Online Slot Games</h2>
            <p>
              Get a Vegas experience with our top slots. They’re just like the
              real machines.
            </p>
          </div>

          <div className="content">
            <div className="cards">
              {topGamesData.map((game, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => handleNavigate(game)}
                >
                  <div className="img">
                    <img src={game.img} alt={game.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopGames;
