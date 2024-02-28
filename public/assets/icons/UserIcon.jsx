function UserIcon({ className, ...props }) {
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
        d="M4.477 15.21C5.79 13.378 8.119 12 12 12s6.209 1.378 7.523 3.21c1.27 1.77 1.473 3.8 1.477 4.924.004 1.129-.943 1.866-1.913 1.866H4.913c-.97 0-1.917-.737-1.913-1.866.004-1.123.206-3.153 1.477-4.924zM5.002 20h13.996c-.02-.952-.225-2.405-1.1-3.624C17.023 15.156 15.355 14 12 14c-3.355 0-5.024 1.156-5.898 2.376-.875 1.219-1.08 2.672-1.1 3.624zM12 8a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default UserIcon;
