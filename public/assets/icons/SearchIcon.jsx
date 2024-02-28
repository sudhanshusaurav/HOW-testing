function SearchIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 3a7 7 0 104.192 12.606l4.101 4.101a1 1 0 001.414-1.414l-4.1-4.1A7 7 0 0010 3zm-5 7a5 5 0 1110 0 5 5 0 01-10 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SearchIcon;
