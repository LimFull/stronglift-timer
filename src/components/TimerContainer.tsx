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
  const setStartTime = useRef((num: number) => {});
  const [timerDisable, setTimerDisable] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [deafultTime, setDefaultTime] = useState(0);
  const [isRun, setIsRun] = useState(false);
  const [timeList, setTimeList] = useState(new Array<String>());

  const addTimeList = (newTime: string): void => {
    const _timeList = new Array<String>().concat(timeList);
    _timeList.push(newTime);
    setTimeList(_timeList);
  };

  const resetTimeList = (): void => {
    setTimeList(new Array<String>());
  };

  return (
    <div className="flex flex-col w-full App h-screen min-h-screen bg-[#282c34] text-white text-[calc(10px+2vmin)] overflow-hidden	">
      <div className="flex w-full h-[14%] " />
      <Timer
        setStartTime={setStartTime}
        startCount={startCount}
        resetCount={resetCount}
        stopTimer={stopTimer}
        setTimerDisable={setTimerDisable}
        onEnd={(startTime: string) => {
          setIsStop(true);
          setIsRun(false);

          addTimeList(startTime);
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
          name="??????"
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
            name="??????"
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
            name="?????????"
            className={`w-28 h-28 m-5 rounded-full bg-orange-500 ${buttonColor}`}
          />
        )}
      </div>
      <div className="flex-col w-full h-[300px] ">
        <SetList times={timeList} />
        <div className="w-full h-full">
          <Button
            onClick={() => {
              resetTimeList();
            }}
            className={`w-[85%] h-1/5 mt-6 rounded-lg ${buttonColor}`}
            name="?????????"
            fontSize="text-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerContainer;
