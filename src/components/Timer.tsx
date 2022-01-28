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

  useEffect(() => {
    startCount.current = startCountDown;
    resetCount.current = resetCountDown;
    stopTimer.current = stopCountDown;
    setStartTime.current = _setStartTime;
  }, []);

  function _setStartTime(time: number = 0): void {
    timerStartTime.current = time;
    const p = document.getElementById("time")! as HTMLParagraphElement;
    p.innerText = String(getFormattedTime(time));
  }

  function startCountDown(): void {
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
        const audio = new Audio();
        audio.autoplay = true;
        audio.src =
          "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
        audio.src = beepbeep;
        audio.play();
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
