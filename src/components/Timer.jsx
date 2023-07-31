import React, { useEffect, useState } from "react";
import CircleProgressBar from "./CircleProgressBar";
import {
  AiOutlineCloseCircle,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiRestartLine } from "react-icons/ri";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60 * 1000); // Tempo inicial em milissegundos
  const [pauseTimeRemaining, setPauseTimeRemaining] = useState(5 * 60 * 1000); // Tempo de descanso em milissegundos
  const [showConfig, setShowConfig] = useState(false);
  const [timerChange, setTimeChange] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isTimerRunning, setIsTimerRunning] = useState(false); // Estado para controlar se o timer está em execução
  const circleWidth = 200; // Largura e altura da progress bar

  const handlePlayClick = () => {
    setShowPlayButton(false);
    if (!timerChange) {
      setIsTimerRunning(true); // Start the main timer
    } else {
      setIsTimerRunning(true); // Start the pause/break timer
    }
  };

  const handlePauseClick = () => {
    setShowConfig(false); // Close the configurations menu
    setIsTimerRunning(false); // Pause both timers
    setShowPlayButton(true);
  };

  const handleTimerChange = () => {
    setIsTimerRunning(false); // Pause both timers
    setShowPlayButton(true);
    setTimeChange((prevState) => !prevState); // Toggle between main timer and pause/break timer
  };

  const handleResetClick = () => {
    setIsTimerRunning(false); // Pause both timers
    setShowPlayButton(true);
    setTimeRemaining(25 * 60 * 1000); // Reset the main timer to the initial value
    setPauseTimeRemaining(5 * 60 * 1000); // Reset the pause/break timer to the initial value
    setTimeChange(false); // Set the main timer as active (not the pause/break timer)
  };

  const handleTimerChangeInput = (event) => {
    setTimeRemaining(Number(event.target.value) * 60 * 1000); // Convert minutes to milliseconds
  };

  const handleBreakChangeInput = (event) => {
    setPauseTimeRemaining(Number(event.target.value) * 60 * 1000); // Convert minutes to milliseconds
  };

  useEffect(() => {
    let interval;
    if (isTimerRunning && !timerChange) {
      interval = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1000); // Subtract 1 second (in milliseconds)
        } else {
          // When the time ends, switch to the pause/break timer
          setIsTimerRunning(false);
          setTimeRemaining(pauseTimeRemaining);
          setTimeChange(true);
          setShowPlayButton(true);
        }
      }, 1000); // Change this to 1000 milliseconds
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining, pauseTimeRemaining, timerChange]);

  // New useEffect hook for the pause/break timer
  useEffect(() => {
    let interval;
    if (isTimerRunning && timerChange) {
      interval = setInterval(() => {
        if (pauseTimeRemaining > 0) {
          setPauseTimeRemaining((prevTime) => prevTime - 1000); // Subtract 1 second (in milliseconds)
        } else {
          // When the pause/break time ends, reset and start the main timer again
          setIsTimerRunning(false);
          setTimeRemaining(25 * 60 * 1000);
          setTimeChange(false);
          setShowPlayButton(true);
        }
      }, 1000); // Change this to 1000 milliseconds
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, pauseTimeRemaining, timerChange]);

  return (
    <div className="timer_container">
      <CircleProgressBar
        timeRemaining={timerChange ? pauseTimeRemaining : timeRemaining}
        circleWidth={circleWidth}
        hidden={showConfig}
      />

      <div className="btn">
        <div id={`${!timerChange ? "full" : ""}`} onClick={handleTimerChange} />
        <div id={`${timerChange ? "full" : ""}`} onClick={handleTimerChange} />
      </div>
      {/* botoes */}
      <div className="icons">
        <div
          onClick={() => setShowConfig(!showConfig)}
          className="icons config"
        >
          {!showConfig ? <FiSettings className="icon" /> : null}
        </div>
        {showPlayButton ? (
          <div onClick={handlePlayClick} className="icons play">
            <AiOutlinePlayCircle className="icon" />
          </div>
        ) : (
          <div onClick={handlePauseClick}>
            <AiOutlinePauseCircle className="icon" />
          </div>
        )}
        <div onClick={handleResetClick} className="icons reset">
          <RiRestartLine className="icon" />
        </div>
      </div>

      {/* Menu de Configurações */}
      {showConfig && (
        <div className="configs">
          {/* ... (previous code remains unchanged) */}
          <h3>Timer</h3>
          <span id="time">{Math.floor(timeRemaining / 1000 / 60)}</span>
          <span>Minutos</span>
          <div className="timerBase">
            <input
              type="range"
              min="1"
              max="60"
              value={Math.floor(timeRemaining / 1000 / 60)}
              onChange={handleTimerChangeInput} // Use the new handler for Timer input
            />
          </div>
          <h3>Break</h3>
          <span id="time">{Math.floor(pauseTimeRemaining / 1000 / 60)}</span>
          <span>minutos</span>
          <div className="timerPause">
            <input
              type="range"
              min="1"
              max="60"
              value={Math.floor(pauseTimeRemaining / 1000 / 60)}
              onChange={handleBreakChangeInput} // Use the new handler for Break input
            />
          </div>
          <div
            onClick={() => setShowConfig(!showConfig)}
            className="icons close"
          >
            <AiOutlineCloseCircle id="icon" className="icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
