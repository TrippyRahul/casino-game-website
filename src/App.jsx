import { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Game from "./pages/game/Game";
import { useAuth } from "./utils/AuthContext";
import LoginPopup from "./components/loginPopup/LoginPopup";
import TestGamePage from "./pages/TestGamePage/TestGamePage";
import Protected from "./components/protected/Protected";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Protected Component={Home} />} />
        <Route
          exact
          path="/game/:gameId"
          element={<Protected Component={Game} />}
        />
        <Route
          exact
          path="/game/testPage"
          element={<Protected Component={TestGamePage} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
