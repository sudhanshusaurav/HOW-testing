
function TagIcon({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="none"
            viewBox="0 0 19 19"
        >
            <path
                fill={fill || "#1666D9"}
                fillRule="evenodd"
                d="M3.755 2.718a1 1 0 00-1.037 1.038l.226 5.883a1 1 0 00.292.669l6.177 6.177a1 1 0 001.415 0l5.657-5.657a1 1 0 000-1.414l-6.178-6.177a1 1 0 00-.669-.292l-5.883-.227zM.72 3.833A3 3 0 013.832.72l5.883.226a3 3 0 012.006.877L17.9 8a3 3 0 010 4.243l-5.657 5.656a3 3 0 01-4.243 0l-6.177-6.177a3 3 0 01-.877-2.006L.72 3.833z"
                clipRule="evenodd"
            ></path>
            <path
                fill={fill || "#1666D9"}
                d="M8.243 5.414a2 2 0 11-2.829 2.829 2 2 0 012.829-2.829z"
            ></path>
        </svg>
    );
}

export default TagIcon;
