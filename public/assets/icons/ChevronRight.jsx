import React from "react";

function ChevronRightIcon({ className, ...props }) {
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
        d="M9.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ChevronRightIcon;
