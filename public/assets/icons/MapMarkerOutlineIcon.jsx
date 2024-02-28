function MapMarkerOutlineIcon({ className, ...props }) {
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
        d="M12 4a5 5 0 00-5 5c0 2.788 1.612 6.867 5 10.555 3.388-3.688 5-7.767 5-10.555a5 5 0 00-5-5zM5 9a7 7 0 0114 0c0 3.652-2.164 8.579-6.293 12.707a1 1 0 01-1.414 0C7.164 17.58 5 12.652 5 9z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default MapMarkerOutlineIcon;
