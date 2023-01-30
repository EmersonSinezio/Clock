import React from "react";
import Clock from "./Clock";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StopWatch from "./StopWatch";
import Header from "./Header";
import Timer from "./Timer";
function Container() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default Container;
