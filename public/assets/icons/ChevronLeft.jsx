import React from "react";

function ChevronLeftIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.293 11.293a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L10.414 12l4.293-4.293a1 1 0 00-1.414-1.414l-5 5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ChevronLeftIcon;
