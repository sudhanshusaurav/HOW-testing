import React from "react";

function SuitcaseIcon({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            fill="none"
            viewBox="0 0 27 24"
        >
            <path
                fill={fill || "#fff"}
                d="M10.833 17.333V16h-9.32l-.014 5.333A2.657 2.657 0 004.166 24h18.667a2.657 2.657 0 002.666-2.667V16h-9.333v1.333h-5.333zm13.333-12h-5.347V2.667L16.153 0h-5.334L8.153 2.667v2.666h-5.32A2.675 2.675 0 00.166 8v4a2.657 2.657 0 002.667 2.667h8V12h5.333v2.667h8c1.467 0 2.667-1.2 2.667-2.667V8c0-1.467-1.2-2.667-2.667-2.667zm-8 0h-5.333V2.667h5.333v2.666z"
            ></path>
        </svg>
    );
}

export default SuitcaseIcon;
