import React from "react";

const calculateCircumference = (radius) => 2 * Math.PI * radius;

const CircleProgressBar = ({ timeRemaining, circleWidth, hidden }) => {
  const radius = 85;
  const totalTimeInSeconds = Math.floor(timeRemaining / 1000); // Convert to seconds
  const totalTimeDuration = 60 * 60; // Maximum value (60 minutes) in seconds
  const circumference = calculateCircumference(radius);
  const dashOffset =
    circumference - (totalTimeInSeconds / totalTimeDuration) * circumference;
  const { cx, cy } = { cx: circleWidth / 2, cy: circleWidth / 2 };

  const circleStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
  };

  return (
    <div
      style={{ position: "relative" }}
      className={`${hidden ? "hidden" : "circle_container"}`}
    >
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={cx}
          cy={cy}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={cx}
          cy={cy}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <div style={circleStyle}>
        <h3>{formatTime(timeRemaining)}</h3>
      </div>
    </div>
  );
};

const formatTime = (milliseconds) => {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};

export default CircleProgressBar;
