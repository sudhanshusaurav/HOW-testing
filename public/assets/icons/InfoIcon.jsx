
function InfoIcon({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                fill={fill || "#212529"}
                fillOpacity="0.32"
                fillRule="evenodd"
                d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-9-4a1 1 0 11-2 0 1 1 0 012 0zm-2 4a1 1 0 012 0v5a1 1 0 11-2 0v-5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default InfoIcon;
