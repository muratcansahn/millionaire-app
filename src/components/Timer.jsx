import { useState, useEffect } from "react";
const Timer = ({ setStop, questionNumber }) => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      time === 0 && setStop(true);
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setTime(30);
  }, [questionNumber]);

  return time;
};

export default Timer;
