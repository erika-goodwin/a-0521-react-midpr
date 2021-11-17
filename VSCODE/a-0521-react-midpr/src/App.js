import React, { Component } from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Memo from "./components/Memo";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navigation bar here */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </div>
    );
  }
}

export default App;


