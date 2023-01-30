import React from "react";
import { useState, useEffect } from "react";

function StopWatch() {
  let [actived, setActived] = useState(false);
  let [ms, setMs] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  const active = () => {
    if (ms >= 1000) {
      setMs((ms = 0));
      if (seconds >= 60) {
        setSeconds((seconds = 0));
        if (minutes >= 60) {
          setMinutes((minutes = 0));
          setHours(hours + 1);
        } else {
          setMinutes(minutes + 1);
        }
      } else {
        setSeconds((seconds += 1));
      }
    } else {
      setMs(ms + 1);
    }
  };
  const stop = () => {
    setActived((actived = false));
    setTimeout(() => {
      setSeconds((seconds = 0));
      setMinutes((minutes = 0));
      setHours((hours = 0));
      setMs((ms = 0));
    }, 500);
  };
  if (actived) {
    setTimeout(active, 1);
  }

  return (
    <div className="stopwatch">
      <h1>Cronometro</h1>
      <div className="stopwatch_content">
        <div className="stopWatch_clock">
          <span className="hours">H {hours < 10 ? "0" + hours : hours}</span>
          <span className="minutes">
            M {minutes < 10 ? "0" + minutes : minutes}
          </span>
          <span className="seconds">
            S {seconds < 10 ? "0" + seconds : seconds}
          </span>
          <span className="miliseconds">MS {ms < 1000 ? "0" + ms : ms}</span>
        </div>
        <p></p>
        <div className="stopwatch_buttons">
          <button onClick={() => setActived((actived = true))}>Começar</button>
          <button onClick={() => setActived((actived = false))}>Parar</button>
          <button onClick={() => stop()}>Zerar</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
