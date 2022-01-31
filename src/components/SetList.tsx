import React from "react";

type SetListProps = {
  times: string[];
};

export const SetList: React.FC<SetListProps> = ({ times = [] }) => {
  const horizontalBar = () => <div className="w-full h-[1px] bg-slate-400" />;

  return (
    <div className="flex flex-col w-full flex-1   overflow-y-scroll">
      {times.map((time, i) => {
        return (
          <div className="flex flex-col w-full h-[calc(45px+2vmin)]  text-[calc(20px+2vmin)]">
            <div className="flex flex-row, justify-between">
              <text className="ml-3">세트 {i + 1}</text>
              <text className="mr-3">{time}</text>
            </div>

            {horizontalBar()}
          </div>
        );
      })}
    </div>
  );
};

export default SetList;
