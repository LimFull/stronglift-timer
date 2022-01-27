import React, { useState, useEffect } from "react";
import { getFormattedTime } from "../utils";

type TimerProps = {
  startTime: number;
  startCount: React.MutableRefObject<any>;
};

export const Timer: React.FC<TimerProps> = ({ startTime = 0, startCount }) => {
  const [time, setTime] = useState(getFormattedTime(0));

  useEffect(() => {
    startCount.current = startCountDown;
  }, []);

  useEffect(() => {
    console.log("시간 바뀜");
    setTime(getFormattedTime(startTime));
    return () => {};
  }, [startTime]);

  function startCountDown(): void {
    console.log("startCountDown called");
  }

  return (
    <div>
      <p className="text-lg text-white">{time}</p>
    </div>
  );
};

export default Timer;
