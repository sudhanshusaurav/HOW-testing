import React from "react";

function TravelerIcon({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            fill="none"
            viewBox="0 0 33 32"
        >
            <path
                fill={fill || "#000"}
                d="M16.5 8a2.675 2.675 0 01-2.666-2.667c0-1.466 1.2-2.666 2.667-2.666 1.466 0 2.666 1.2 2.666 2.666C19.167 6.8 17.967 8 16.501 8zm6.667-5.333h2.667V3.2c-.133 2.933-1.067 5.2-3.067 6.8-.666.533-1.466.933-2.266 1.2v18.133h-2.667v-8h-2.667v8h-2.666V13.467c-.4.133-.667.266-.8.4C10.5 14.8 9.847 16 9.834 18v.667H7.167V18c0-2.667.947-4.787 2.814-6.387 1.466-1.2 3.853-2.28 6.52-2.28 2.666 0 3.573-.613 4.64-1.413 1.333-1.067 2.026-2.587 2.026-4.587v-.666zM5.834 21.333h4v8h-4v-8z"
            ></path>
        </svg>
    );
}

export default TravelerIcon;