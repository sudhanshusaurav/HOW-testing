import React from "react";

function CheckIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      fill="none"
      viewBox="0 0 12 10"
      {...props}
      className={className}
    >
      <path
        fill="currentColor"
        d="M12 1.667l-8 8L.333 6l.94-.94L4 7.78 11.06.727l.94.94z"
      ></path>
    </svg>
  );
}

export default CheckIcon;
