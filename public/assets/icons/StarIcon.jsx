function StarIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 18"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.952.691c-.3-.921-1.603-.921-1.902 0L7.53 5.365a1 1 0 01-.95.69H1.665c-.969 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 01.363 1.118L3.9 16.545c-.3.921.755 1.688 1.538 1.118l3.976-2.888a1 1 0 011.176 0l3.976 2.888c.783.57 1.838-.197 1.538-1.118l-1.518-4.674a1 1 0 01.363-1.118l3.976-2.888c.784-.57.38-1.81-.588-1.81h-4.914a1 1 0 01-.951-.69L10.952.69z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default StarIcon;
