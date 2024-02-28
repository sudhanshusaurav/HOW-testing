function LuggageIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 33 32"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.66 7V4h1a1 1 0 000-2h-12a1 1 0 100 2h1v3a4.06 4.06 0 00-4 4.06v11.87a4.06 4.06 0 002 3.49v1.08a2.5 2.5 0 005 0V27h4v.5a2.5 2.5 0 105 0v-1.08a4.06 4.06 0 002-3.49V11.07a4.06 4.06 0 00-4-4.07zm-2-3v3h-6V4h6zm-7 23.5a.5.5 0 01-1 0V27h1v.5zm9-.5v.5a.5.5 0 01-1 0V27h1zm2-4.07A2.07 2.07 0 0121.59 25h-9.86a2.07 2.07 0 01-2.07-2.07V11.07A2.07 2.07 0 0111.73 9h9.86a2.07 2.07 0 012.07 2.07v11.86z"
      ></path>
      <path
        fill="currentColor"
        d="M12.66 11a1 1 0 00-1 1v10a1 1 0 102 0V12a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v10a1 1 0 102 0V12a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v10a1 1 0 102 0V12a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
}

export default LuggageIcon;
