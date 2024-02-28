function TripIcon({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className={fill}
        fill="#717171"
        fillRule="evenodd"
        d="M7 2a3 3 0 00-3 3v16a1 1 0 102 0v-7.17c.313.11.65.17 1 .17h10.92c1.676 0 2.609-1.94 1.561-3.25L17.281 8l2.2-2.75C20.53 3.94 19.596 2 17.92 2H7zm-1 9a1 1 0 001 1h10.92l-2.201-2.75a2 2 0 010-2.5l2.2-2.75H7a1 1 0 00-1 1v6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default TripIcon;
