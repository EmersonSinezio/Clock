import { useState, useEffect } from "react";

function Timer() {
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [actived, setActived] = useState(false)
  const start = () => {
   setActived( actived = true)
  };
  const stop = () => {
   setActived( actived = false) 
  };
  // minutes Minutes
  //seconds setSeconds
  const numbers = (e) => {
    let element = e.target;
    element.id == "minutes"
      ? setMinutes((minutes = element.value))
      : element.value <= 60
      ? setSeconds((seconds = element.value))
      : setSeconds((seconds = 59))((element.value = 59));
  };
    const timerStart = () => {
      if(actived == true){
        if(seconds > 0){
          setSeconds(seconds -= 1)
        }else{
          if(minutes > 0){
            setMinutes(minutes -= 1)
            setSeconds(seconds = 59)
          }else{
            stop()
          }
        }
      }
    };
    if (actived != false) {
      setInterval(timerStart, 1000);
    }
  
  return (
    <div className="timer_container">
      <div className="timer_result">
        <h1>
          {minutes < 10
            ? minutes == 0
              ? "0" + "0"
              : "0" + minutes
            : minutes}
          :
        </h1>
        <h1>
          {seconds < 10
            ? seconds == 0
              ? "0" + "0"
              : "0" + seconds
            : seconds}
        </h1>
      </div>
      <form className="timer_form">
        <div>
          <span>Minutes</span>
          <input
            type="text"
            placeholder="00"
            id="minutes"
            onBlur={(e) => numbers(e)}
            max="60"
          />
        </div>
        <div>
          <span>Seconds</span>
          <input
            type="text"
            placeholder="00"
            id="seconds"
            onBlur={(e) => numbers(e)}
            max="60"
          />
        </div>
      </form>
      <div className="buttons">
        <button onClick={() => start()}>Start</button>
        <button onClick={() => stop()}>Stop</button>
      </div>
    </div>
  );
}
export default Timer;
