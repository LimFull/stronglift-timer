import React from "react";
import { ButtonProps, TimeProps } from "../types/button";
import { getStringTime } from "../utils";

export const TimeButton: React.FC<TimeProps & ButtonProps> = ({
  time,
  onClick,
  disable,
}) => {
  return (
    <button
      className="border-solid border-2 border-white-600 rounded-lg w-1/5 mx-2"
      disabled={disable ? true : false}
      onClick={() => {
        onClick(time);
      }}
    >
      {getStringTime(time)}
    </button>
  );
};

export default TimeButton;
