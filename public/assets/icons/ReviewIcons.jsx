function ReviewIcon({ fill, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "28"}
      height={height || "28"}
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill={fill || "#000"}
        d="M24.667.667H3.333A2.675 2.675 0 00.667 3.334v24L6 22h18.667c1.466 0 2.666-1.2 2.666-2.666v-16c0-1.467-1.2-2.667-2.666-2.667zm-8.574 12.76L14 18l-2.093-4.573-4.574-2.093 4.574-2.094L14 4.667l2.093 4.573 4.574 2.094-4.574 2.093z"
      ></path>
    </svg>
  );
}

export default ReviewIcon;
