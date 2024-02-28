function EnvalopeIcon({ className, ...props }) {
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
        d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5zm-.174 2.015C4.882 6.005 4.94 6 5 6h14c.06 0 .118.005.174.015L12 10.798 4.826 6.015zM4 7.87V17a1 1 0 001 1h14a1 1 0 001-1V7.869l-7.445 4.963a1 1 0 01-1.11 0L4 7.87z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default EnvalopeIcon;
