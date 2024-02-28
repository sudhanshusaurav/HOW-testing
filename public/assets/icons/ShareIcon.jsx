function ShareIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 19 18"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 3a3 3 0 013-3h1a1 1 0 010 2H3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 112 0v1a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2a1 1 0 110-2h7.071a1 1 0 011 1v7.071a1 1 0 11-2 0V3.343l-7.364 7.364a1 1 0 01-1.414-1.414L14.586 2H10z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ShareIcon;
