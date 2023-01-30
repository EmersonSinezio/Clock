import { useState, useEffect } from "react";

function Timer() {
  let [numberOne, setNumberOne] = useState(0);
  let [numberTwo, setNumberTwo] = useState(0);
  let [actived, setActived] = useState(false);
  const start = () => {
    setActived((actived = true));
  };
  const stop = () => {
    setActived((actived = false));
  };
  // NumberOne Minutes
  //NumberTwo Seconds

  const numbers = (e) => {
    let element = e.target;
    element.id == "numberOne"
      ? setNumberOne((numberOne = element.value))
      : element.value <= 60
      ? setNumberTwo((numberTwo = element.value))
      : setNumberTwo((numberTwo = 59))((element.value = 59));
  };
  useEffect(() => {
    const timerStart = () => {
      if (actived == true) {
        if (numberTwo == 0) {
          if (numberOne == 0) {
            setActived((actived = false));
            setNumberOne((numberOne = 0));
            setNumberTwo((numberTwo = 0));
            alert("Acabou");
          } else {
            setNumberOne(numberOne - 1);
            setNumberTwo((numberTwo = 59));
          }
        } else {
          setNumberTwo((numberTwo -= 1));
        }
      }
    };
    if (actived == true) {
      setInterval(timerStart, 1000);
    }
  }, [actived]);
  return (
    <div className="timer_container">
      <div className="timer_result">
        <h1>
          {numberOne < 10
            ? numberOne == 0
              ? "0" + "0"
              : "0" + numberOne
            : numberOne}
          :
        </h1>
        <h1>
          {numberTwo < 10
            ? numberTwo == 0
              ? "0" + "0"
              : "0" + numberTwo
            : numberTwo}
        </h1>
      </div>
      <form className="timer_form">
        <div>
          <span>Minutes</span>
          <input
            type="text"
            placeholder="00"
            id="numberOne"
            onBlur={(e) => numbers(e)}
            max="60"
          />
        </div>
        <div>
          <span>Seconds</span>
          <input
            type="text"
            placeholder="00"
            id="numberTwo"
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
