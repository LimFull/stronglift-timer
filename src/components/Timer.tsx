import React, { useState, useEffect } from "react";
import { getFormattedTime } from "../utils";

type TimerProps = {
  startTime: number;
};

export const Timer: React.FC<TimerProps> = ({ startTime = 0 }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(getFormattedTime(startTime));
    return () => {};
  }, []);

  return (
    <div>
      <p className="text-lg text-white">{time}</p>
    </div>
  );
};

export default Timer;
