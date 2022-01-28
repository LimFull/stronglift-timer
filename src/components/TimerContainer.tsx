import React, { useRef, useState } from "react";
import { Button } from "./Button";
import TimeButton from "./TimeButton";
import Timer from "./Timer";
import "../App.css";

type TimerContainerProps = {
  readonly buttonColor?: string;
  readonly times: [number, number, number];
};

export const TimerContainer: React.FC<TimerContainerProps> = ({
  times,
  buttonColor,
}) => {
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
            time={times[0]}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
          <TimeButton
            time={times[1]}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
          <TimeButton
            time={times[2]}
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
            className={`w-28 h-28 m-5 rounded-full bg-orange-500 ${buttonColor}`}
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
              className={`w-28 h-28 m-5 rounded-full bg-orange-500 ${buttonColor}`}
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
              className={`w-28 h-28 m-5 rounded-full bg-orange-500 ${buttonColor}`}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default TimerContainer;
