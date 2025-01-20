import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(10); // 12 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // Call the provided function when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [timeLeft, onTimeUp]);

  // Format the time as mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Conditionally render the timer
  if (timeLeft <= 0) {
    return null; // Remove the timer from the DOM
  }

  return (
    <div>
      <p>Time left: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default Timer;