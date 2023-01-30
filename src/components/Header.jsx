import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Clock</h1>
      <ul className="menu">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/stopwatch" className="link">
          <li>Cronometro</li>
        </Link>
        <Link to="timer" className="link">
          <li>Timer</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
