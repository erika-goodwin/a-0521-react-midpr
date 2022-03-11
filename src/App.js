import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Memo from "./components/memo/Memo";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/weather/WeatherApp";
import "./css/app.scss";

export const OpenModalContext = React.createContext(null);

const App = () => {
  const [openMemoModal, setOpenMemoModal] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userLoggedin, setUseruserLoggedin] = useState(false);
  const contextValue = {
    openMemoModal,
    setOpenMemoModal,
    selectedData,
    setSelectedData,
    showAuthModal,
    setShowAuthModal,
    userLoggedin,
    setUseruserLoggedin,
  };

  return (
    <OpenModalContext.Provider
      value={contextValue}
      className="h-screen w-screen items-center"
    >
      {/* Navigation bar here */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </OpenModalContext.Provider>
  );
};

export default App;
