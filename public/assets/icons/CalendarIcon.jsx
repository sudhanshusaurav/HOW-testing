import React from "react";

function CalendarIcon({ fill, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "18"}
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        className={fill}
        fill={fill || "#000"}
        d="M15 14a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path
        className={fill}
        fill={fill || "#000"}
        fillRule="evenodd"
        d="M4 1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h1V1zM2 15V8h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CalendarIcon;
