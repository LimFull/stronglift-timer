import React from "react";
import { ButtonProps } from "../types/button";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  name,
  disable = false,
}) => {
  console.log("Button render", className, name);
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={className}
      disabled={disable ? true : false}
    >
      <span className="text-lg font-bold	">{name ? name : ""}</span>
    </button>
  );
};
