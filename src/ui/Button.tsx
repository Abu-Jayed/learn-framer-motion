import { clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import cn from "../utils/cn";

const Button = ({ classname, outline, children }) => {
  return (
    <button
      className={cn(
        "bg-purple-500 px-3 py-2 rounded-md",
        { "border border-purple-500 bg-opacity-10": outline },
        classname
      )}
    >
      {children}
    </button>
  );
};

export default Button;
