
function HeartIcon({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="none"
            viewBox="0 0 22 20"
        >
            <path
                fill={fill || "#1666D9"}
                fillRule="evenodd"
                d="M9.293 3.562c-.51-.51-1.403-1.024-3.05-.612-1.652.413-2.87 1.644-3.276 3.162-.397 1.49-.037 3.381 1.742 5.16l5.588 5.587a.997.997 0 001.412 0l5.584-5.587c1.779-1.778 2.138-3.67 1.741-5.16-.405-1.518-1.623-2.749-3.276-3.162-1.647-.412-2.54.101-3.05.612a3.24 3.24 0 00-.745 1.19l-.003.01a1 1 0 01-1.919 0l-.003-.01a3.038 3.038 0 00-.15-.356 3.238 3.238 0 00-.595-.834zM11 2.468c.09-.107.188-.215.293-.32.99-.99 2.597-1.727 4.95-1.139 2.347.587 4.128 2.356 4.724 4.588.602 2.26-.038 4.868-2.26 7.09-2.335 2.335-4.33 4.33-5.584 5.586a2.997 2.997 0 01-4.24 0l-5.588-5.586c-2.222-2.222-2.863-4.83-2.26-7.09.595-2.232 2.377-4 4.723-4.587 2.353-.589 3.96.148 4.95 1.138.105.105.203.213.292.32z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default HeartIcon;
