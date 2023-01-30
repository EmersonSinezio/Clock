import React from "react";
import { useState } from "react";
function Clock() {
  let [hour, setHour] = useState(0);
  let [min, setMin] = useState(0);
  let [second, setSecond] = useState(0);

  setTimeout(() => {
    setHour((hour = new Date().getHours()));
    setMin((min = new Date().getMinutes()));
    setSecond((second = new Date().getSeconds()));
  }, 1000);
  return (
    <div className="clock_Container">
      <div className="Hours">
        <h1>Horas</h1>
        <span>{hour < 10 ? "0" + hour : hour}</span>
      </div>
      <div className="Min">
        <h1>Minutos</h1>
        <span>{min < 10 ? "0" + min : min}</span>
      </div>
      <div className="Seconds">
        <h1>Segundos</h1>
        <span>{second < 10 ? "0" + second : second}</span>
      </div>
    </div>
  );
}

export default Clock;
