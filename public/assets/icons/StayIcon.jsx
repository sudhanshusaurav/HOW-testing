function StayIcon({ className, ...props }) {
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
        d="M28.33 26.667V4a1.333 1.333 0 00-1.334-1.333H13.663A1.333 1.333 0 0012.329 4v22.667h-4v-5.334h1.334A1.334 1.334 0 0010.996 20v-6.667A1.333 1.333 0 009.663 12H4.329a1.333 1.333 0 00-1.333 1.333V20a1.333 1.333 0 001.333 1.333h1.334v5.334H4.329a1.334 1.334 0 000 2.666h24a1.333 1.333 0 000-2.666zm-22.667-12h2.666v4H5.663v-4zm13.333 12v-4a1.334 1.334 0 012.667 0v4h-2.667zm5.333 0v-4a4 4 0 10-8 0v4h-1.333V5.333h10.667v21.334h-1.334z"
      ></path>
      <path
        fill="currentColor"
        d="M18.997 8H16.33v2.667h2.667V8zM24.33 8h-2.666v2.667h2.667V8zM18.997 13.333H16.33V16h2.667v-2.667zM24.33 13.333h-2.666V16h2.667v-2.667z"
      ></path>
    </svg>
  );
}

export default StayIcon;
