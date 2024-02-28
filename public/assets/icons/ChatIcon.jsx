function ChatIcon({ fill }) {
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
        d="M2 5a3 3 0 013-3h14a3 3 0 013 3v10.515A2.485 2.485 0 0119.515 18a.485.485 0 00-.47.606l.062.238c.642 2.496-2.271 4.367-4.275 2.746l-4.16-3.367a1 1 0 00-.63-.223H5a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v10a1 1 0 001 1h5.042a3 3 0 011.887.668l4.161 3.367c.506.41 1.242-.063 1.08-.693l-.062-.238A2.485 2.485 0 0119.515 16a.485.485 0 00.485-.485V5a1 1 0 00-1-1H5z"
        clipRule="evenodd"
      ></path>
      <path
        className={fill}
        fill="#717171"
        d="M6 7a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM6 11a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
}

export default ChatIcon;
