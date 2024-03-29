import React from "react";
import {ButtonProps} from "../types/button";

export const Button: React.FC<ButtonProps> = ({
                                                  onClick,
                                                  className,
                                                  name,
                                                  disable = false,
                                                  fontSize = "",
                                                  style = {},
                                              }) => {
    return (
        <button
            onClick={() => {
                onClick();
            }}
            className={className}
            disabled={disable ? true : false}
            style={style}
        >
      <span
          className={`flex justify-center item-center text-lg font-bold ${fontSize}`}
      >
        {name ? name : ""}
      </span>
        </button>
    );
};
