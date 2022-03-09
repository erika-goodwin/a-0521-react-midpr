import React from "react";
import { Routes, Route } from "react-router-dom";
import Memo from "./components/memo/Memo";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";
import "./css/app.scss";

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
