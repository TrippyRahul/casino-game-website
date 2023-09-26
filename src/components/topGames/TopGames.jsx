import React from "react";
import "./topGames.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

const topGamesData = [
  {
    id: 1,
    name: "keno-game",
    img: "/keno-game.png",
    src: "/games/kenoGame/index.html",
  },
  {
    id: 2,
    name: "slot-game",
    img: "/slot-game.png",
    src: "/games/slotGame/index.html",
  },

  {
    id: 4,
    name: "mega-fortune",
    img: "/mega-fortune.png",
    src: "/games/megaFortune/index.html",
  },
  {
    id: 5,
    name: "buffalo-king",
    img: "/buffalo-king.png",
    src: "/games/buffaloKing/index.html",
  },
  {
    id: 6,
    name: "regal-riches",
    img: "/regal-riches.png",
    src: "/games/regalRiches/index.html",
  },
  {
    id: 7,
    name: "golden-dragon",
    img: "/golden-dragon.png",
    src: "/games/goldenDragon/index.html",
  },
  {
    id: 8,
    name: "planet-invaders",
    img: "/planet-invaders.png",
    src: "/games/planetInvaders/index.html",
  },
  {
    id: 9,
    name: "fruit-slots",
    img: "/fruits-slots.png",
    src: "/games/fruitSlots/index.html",
  },
  {
    id: 10,
    name: "cleopatra",
    img: "/cleopatra.png",
    src: "/games/cleopatra/index.html",
  },
  {
    id: 11,
    name: "blood-eternals",
    img: "/blood-eternals.png",
    src: "/games/bloodEternals/index.html",
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
                    <img src={game.img} alt={game.name} />
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
