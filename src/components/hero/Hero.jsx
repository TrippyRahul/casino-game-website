import React, { useState } from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h2>Vegas</h2>
          <h1>
            The World of <br />
            Competitive Esport
          </h1>
          <p>Unlocking Adventtures in Every Click</p>
        </div>
        <div className="right">
          <div className="right__left">
            <div className="item">
              <img src="/hero_l_1.png" alt="game1" />
            </div>
            <div className="item">
              <img src="/hero_l_2.png" alt="game2" />
            </div>
          </div>
          <div className="right__right">
            <div className="item">
              <img src="/hero_r_1.png" alt="game3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
