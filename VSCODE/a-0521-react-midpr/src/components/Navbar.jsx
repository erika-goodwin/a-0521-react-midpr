import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Weather App</Link> | {}
      <Link to="/memo">Memo</Link>
    </nav>
  );
}
