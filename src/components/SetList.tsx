import React from "react";

type SetListProps = {
  times: String[];
};

export const SetList: React.FC<SetListProps> = ({
  times = ["sdsd", "sdsd"],
}) => {
  const horizontalBar = () => <div className="w-full h-[1px] bg-slate-400" />;
  console.log("times props", times);
  return (
    <div className="flex flex-col w-full h-[25vh] flex-1 overflow-y-scroll">
      {times.map((time, i) => {
        return (
          <div key={i} className="flex flex-col w-full h-[calc(50px+2vmin)]  text-[calc(20px+2vmin)]">
            <div className="flex flex-row, justify-between m-1">
              <div className="ml-3">세트 {i + 1}</div>
              <div className="mr-3">{time}</div>
            </div>

            {horizontalBar()}
          </div>
        );
      })}
    </div>
  );
};

export default SetList;
