import React from "react";

function MapMarkerIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 10 14"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 6.666a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zM5 .333A4.667 4.667 0 00.335 5c0 3.5 4.667 8.666 4.667 8.666S9.667 8.5 9.667 5A4.667 4.667 0 005.001.333z"
      ></path>
    </svg>
  );
}

export default MapMarkerIcon;
