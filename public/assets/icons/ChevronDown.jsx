import React from "react";

function ChevronDownIcon({ className, ...props }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        className={className}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 9l-7 6-7-6"
        ></path>
      </svg>
    </div>
  );
}

export default ChevronDownIcon;
