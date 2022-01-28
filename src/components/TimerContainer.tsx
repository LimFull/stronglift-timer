import React, { useRef, useState } from "react";
import { Button } from "./Button";
import TimeButton from "./TimeButton";
import Timer from "./Timer";
import "../App.css";

export const TimerContainer: React.FC = () => {
  const startCount = useRef(() => {});
  const resetCount = useRef(() => {});
  const stopTimer = useRef(() => {});
  const setStartTime = useRef((num: number) => {
    console.log("default");
  });
  const [timerDisable, setTimerDisable] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [deafultTime, setDefaultTime] = useState(0);
  const [isRun, setIsRun] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Timer
          setStartTime={setStartTime}
          startCount={startCount}
          resetCount={resetCount}
          stopTimer={stopTimer}
          setTimerDisable={setTimerDisable}
        />
        <div className="flex flex-row	w-full justify-center ">
          <TimeButton
            time={90000}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
          <TimeButton
            time={180000}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
          <TimeButton
            time={300000}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
        </div>
        <div className="flex flex-row w-full justify-center">
          <Button
            onClick={() => {
              startCount.current();
              setIsRun(true);
            }}
            name="시작"
            className="w-28 h-28 bg-orange-500 m-5 rounded-full	"
            disable={timerDisable}
          />
          {!isStop ? (
            <Button
              onClick={() => {
                stopTimer.current();
                setIsStop(true);
                setIsRun(false);
              }}
              name="정지"
              className="w-28 h-28 bg-orange-500 m-5 rounded-full	"
              disable={!isRun}
            />
          ) : (
            <Button
              onClick={() => {
                resetCount.current();
                setIsStop(false);
                setStartTime.current(deafultTime);
              }}
              name="재설정"
              className="w-28 h-28 bg-orange-500 m-5 rounded-full	"
            />
          )}
        </div>
      </header>
    </div>
  );
};
