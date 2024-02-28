function ClockIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={`${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.333 9A8.333 8.333 0 11.667 9a8.333 8.333 0 0116.666 0zM9 4a.833.833 0 00-.833.833v5c0 .46.373.834.833.834h4.167a.833.833 0 100-1.667H9.833V4.833A.833.833 0 009 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default ClockIcon;
