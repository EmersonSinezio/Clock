import React from "react";
import { Link } from "react-router-dom";
import { CiDark, CiBrightnessUp } from "react-icons/ci";
function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <div className="header">
      <ul className={`menu ${isDarkMode ? "menu-light" : "menu-dark"}`}>
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
      <div onClick={toggleDarkMode} className="icon_header">
        {isDarkMode ? <CiBrightnessUp /> : <CiDark />}
      </div>
    </div>
  );
}

export default Header;
