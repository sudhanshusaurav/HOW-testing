function HamburgerIcon({ fill }) {
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
        fill="#fff"
        d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 17a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
}

export default HamburgerIcon;
