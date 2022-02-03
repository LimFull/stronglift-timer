import React, { useRef, Dispatch, SetStateAction, useCallback } from "react";
import { getFormattedTime } from "../utils";
import beepbeep from "../assets/sounds/beepbeep.mp3";
import useEffectOnlyOnce from "../utils/useEffectOnlyOnce";
import ilsan from "../assets/videos/일산으로.mp4";

type TimerProps = {
  setStartTime: React.MutableRefObject<Function>;
  startCount: React.MutableRefObject<Function>;
  resetCount: React.MutableRefObject<Function>;
  stopTimer: React.MutableRefObject<Function>;
  setTimerDisable: Dispatch<SetStateAction<boolean>>;
  onEnd?: Function;
};

export const Timer: React.FC<TimerProps> = ({
  startCount,
  resetCount,
  stopTimer,
  setStartTime,
  setTimerDisable,
  onEnd,
}) => {
  const defaultStartTime = useRef(0);
  const timerStartTime = useRef(0);
  const interval = useRef(0);
  const audio = useRef(new Audio());
  const currentTime = useRef(0);

  const startCountDown = useCallback((): void => {
    audio.current = new Audio();
    currentTime.current = timerStartTime.current;
    if (currentTime.current <= 0) {
      return;
    }
    setTimerDisable(true);
    const p = document.getElementById("time")! as HTMLParagraphElement;
    const intervalTime = 10;
    interval.current = window.setInterval(() => {
      currentTime.current -= intervalTime;
      if (currentTime.current <= 0) {
        p.innerText = String(getFormattedTime(0));
        window.clearInterval(interval.current);
        setTimerDisable(false);
        onEnd && onEnd(defaultStartTime.current);

        audio.current.src = beepbeep;
        audio.current.play();
      } else {
        p.innerText = String(getFormattedTime(currentTime.current));
      }
    }, intervalTime);
  }, [setTimerDisable, onEnd]);

  const resetCountDown = useCallback((): void => {
    setTimerDisable(false);
    timerStartTime.current = defaultStartTime.current;
    window.clearInterval(interval.current);
  }, [setTimerDisable]);

  const stopCountDown = useCallback((): void => {
    timerStartTime.current = currentTime.current;
    setTimerDisable(false);
    window.clearInterval(interval.current);
  }, [setTimerDisable]);

  const _setStartTime = useCallback((time: number = 0): void => {
    defaultStartTime.current = time;
    timerStartTime.current = time;
    const p = document.getElementById("time")! as HTMLParagraphElement;
    p.innerText = String(getFormattedTime(time));
  }, []);

  useEffectOnlyOnce(() => {
    startCount.current = startCountDown;
    resetCount.current = resetCountDown;
    stopTimer.current = stopCountDown;
    setStartTime.current = _setStartTime;
    const video = document.getElementById("video")! as HTMLVideoElement;
    video.play();
    // const container = document.getElementById(
    //   "videoContainer"
    // )! as HTMLDivElement;
    // container.innerHTML=""
  });

  return (
    <div>
      {/* <div id="videoContainer"></div> */}
      <video id="video" playsInline controls>
        <source src={ilsan} type="video/mp4"></source>
      </video>
      <p id="time" className=" text-white text-7xl sm:text-9xl my-10">
        00:00.00
      </p>
    </div>
  );
};

export default Timer;
