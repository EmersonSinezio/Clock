import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StopWatch from "./StopWatch";
import Header from "./Header";
import Timer from "./Timer";

function Container() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Efeito para aplicar o tema dark no body quando o estado isDarkMode mudar
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="container">
      <Router>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Container;
