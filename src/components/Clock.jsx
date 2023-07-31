import React, { useState, useEffect } from "react";
import DigitalClock from "./DigitalClock";
function App() {
  const [hourRotation, setHourRotation] = useState(0);
  const [minRotation, setMinRotation] = useState(0);
  const [secRotation, setSecRotation] = useState(0);
  const [isAnalogClockVisible, setIsAnalogClockVisible] = useState(true);

  const getTime = () => {
    const time = new Date();

    const getHourRot = (360 / 12) * time.getHours();
    const getMinRot = (360 / 60) * time.getMinutes();
    const getSecRot = (360 / 60) * time.getSeconds();

    setHourRotation(getHourRot);
    setMinRotation(getMinRot);
    setSecRotation(getSecRot);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleClockType = () => {
    setIsAnalogClockVisible((prev) => !prev);
  };

  return (
    <div className="clock_container">
      {isAnalogClockVisible ? (
        <div className="clock">
          <div
            className="hour"
            style={{ transform: `rotate(${hourRotation}deg)` }}
          ></div>
          <div
            className="min"
            style={{ transform: `rotate(${minRotation}deg)` }}
          ></div>
          <div
            className="sec"
            style={{ transform: `rotate(${secRotation}deg)` }}
          ></div>
          {[...Array(12)].map((_, index) => (
            <span key={index} style={{ transform: `rotate(${index * 30}deg)` }}>
              {index === 0 ? 12 : index}
            </span>
          ))}
        </div>
      ) : null}
      {!isAnalogClockVisible && <DigitalClock />}
      <div className="toggle-buttons">
        <div
          className={`toggle-bar ${isAnalogClockVisible ? "left" : "right"}`}
          onClick={toggleClockType}
        >
          <div className="toggle-button"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
