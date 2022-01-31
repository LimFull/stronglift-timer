import React, { useRef, useState } from "react";
import { Button } from "./Button";
import TimeButton from "./TimeButton";
import Timer from "./Timer";
import "../App.css";
import SetList from "./SetList";

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
  // const [timeList, setTimeList] = useState([]);
  return (
    <div className="App">
      <div className="flex flex-col w-full h-screen min-h-screen bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <div className="flex w-full h-[20%] " />
        <Timer
          setStartTime={setStartTime}
          startCount={startCount}
          resetCount={resetCount}
          stopTimer={stopTimer}
          setTimerDisable={setTimerDisable}
          onEnd={() => {
            setIsStop(true);
            setIsRun(false);
          }}
        />
        <div className="flex flex-row	w-full justify-center ">
          <TimeButton
            disable={timerDisable}
            time={times[0]}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
          <TimeButton
            disable={timerDisable}
            time={times[1]}
            onClick={(num: number) => {
              setStartTime.current(num);
              setDefaultTime(num);
            }}
          />
          <TimeButton
            disable={timerDisable}
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
              setIsStop(false);
              setIsRun(true);
            }}
            name="시작"
            className={`w-28 h-28 m-5 rounded-full  ${buttonColor}`}
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
              className={`w-28 h-28 m-5 rounded-full  ${buttonColor}`}
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
        <SetList times={[]} />
      </div>
    </div>
  );
};

export default TimerContainer;
