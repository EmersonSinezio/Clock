import React, { useState, useEffect } from "react";
import { BiPlayCircle, BiStopCircle, BiReset } from "react-icons/bi";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecs = milliseconds % 1000;

    const padTime = (time) => (time < 10 ? "0" + time : time);

    return `${padTime(minutes)} : ${padTime(seconds)}.${padTime(millisecs)}`;
  };

  return (
    <div className="stopwatch_container">
      <div className={`timer ${isRunning ? "pulse" : ""}`}>
        <h1 id="timer">{formatTime(time)}</h1>
      </div>
      <div className="buttons">
        <div onClick={handleStartStop}>
          {isRunning ? <BiStopCircle /> : <BiPlayCircle />}
        </div>
        <div onClick={handleReset} id="reset" disabled={time === 0}>
          <BiReset />
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
