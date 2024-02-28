function ClockOutlineIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 25 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.335 21.333a9.333 9.333 0 100-18.666 9.333 9.333 0 000 18.666zm0 2.334C18.778 23.667 24 18.443 24 12S18.778.333 12.335.333C5.89.333.668 5.557.668 12s5.223 11.667 11.667 11.667z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M12.335 6.167c-.645 0-1.167.522-1.167 1.166v5.834c0 .644.522 1.166 1.167 1.166H17a1.167 1.167 0 000-2.333h-3.5V7.333c0-.644-.522-1.166-1.166-1.166z"
      ></path>
    </svg>
  );
}

export default ClockOutlineIcon;
