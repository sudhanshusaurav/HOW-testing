function CrossIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      version="1.1"
      viewBox="0 0 15 15"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0113 1a1 1 0 011 1 .9.9 0 01-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0114 13a1 1 0 01-1 1 .92.92 0 01-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 012 14a1 1 0 01-1-1 .9.9 0 01.27-.66L6.16 7.5 1.27 2.61A.9.9 0 011 2a1 1 0 011-1c.24.003.47.1.64.27z"
      ></path>
    </svg>
  );
}

export default CrossIcon;
