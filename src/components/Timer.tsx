import React, { useEffect, useRef, Dispatch, SetStateAction } from "react";
import { getFormattedTime } from "../utils";
import beepbeep from "../assets/sounds/beepbeep.mp3";

type TimerProps = {
  setStartTime: React.MutableRefObject<Function>;
  startCount: React.MutableRefObject<Function>;
  resetCount: React.MutableRefObject<Function>;
  stopTimer: React.MutableRefObject<Function>;
  setTimerDisable: Dispatch<SetStateAction<boolean>>;
};

export const Timer: React.FC<TimerProps> = ({
  startCount,
  resetCount,
  stopTimer,
  setStartTime,
  setTimerDisable,
}) => {
  const timerStartTime = useRef(0);
  const interval = useRef(0);
  const audio = useRef(new Audio());

  useEffect(() => {
    startCount.current = startCountDown;
    resetCount.current = resetCountDown;
    stopTimer.current = stopCountDown;
    setStartTime.current = _setStartTime;
  }, [
    resetCount,
    resetCountDown,
    setStartTime,
    startCount,
    startCountDown,
    stopCountDown,
    stopTimer,
  ]);

  function _setStartTime(time: number = 0): void {
    timerStartTime.current = time;
    const p = document.getElementById("time")! as HTMLParagraphElement;
    p.innerText = String(getFormattedTime(time));
  }

  function startCountDown(): void {
    audio.current = new Audio();
    var currentTime = timerStartTime.current;
    if (currentTime <= 0) {
      return;
    }
    setTimerDisable(true);
    const p = document.getElementById("time")! as HTMLParagraphElement;
    const intervalTime = 10;
    interval.current = window.setInterval(() => {
      currentTime -= intervalTime;
      if (currentTime <= 0) {
        p.innerText = String(getFormattedTime(0));
        window.clearInterval(interval.current);
        setTimerDisable(false);

        audio.current.src = beepbeep;
        audio.current.play();
      } else {
        p.innerText = String(getFormattedTime(currentTime));
      }
    }, intervalTime);
  }

  function resetCountDown(): void {
    setTimerDisable(false);

    window.clearInterval(interval.current);
  }

  function stopCountDown(): void {
    setTimerDisable(false);
    window.clearInterval(interval.current);
  }

  return (
    <div>
      <p id="time" className=" text-white text-7xl sm:text-9xl my-10">
        00:00.00
      </p>
    </div>
  );
};

export default Timer;
