import React from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import TopGames from "../../components/topGames/TopGames";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TopGames />
    </div>
  );
};

export default Home;
