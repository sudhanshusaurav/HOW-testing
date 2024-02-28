
function PlayIcon({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 17 17"
        >
            <path
                fill={fill || "#fff"}
                fillRule="evenodd"
                d="M5.967 13.517l6.7-4.685a.655.655 0 000-1.09l-6.7-4.686a.656.656 0 00-1.02.546v9.37c0 .523.584.835 1.02.545z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default PlayIcon;
