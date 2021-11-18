import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Memo from "./components/Memo";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";

const App = () => {
  //ContextAPI

  return (
    <div className="h-screen w-screen items-center">
      {/* Navigation bar here */}
      <Navbar />

      {/* Routes */}

      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
};

export default App;
