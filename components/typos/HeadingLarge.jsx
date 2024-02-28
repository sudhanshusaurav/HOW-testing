import React from "react";

function HeadingLarge({ className, children }) {
  return <h2 className={`text-3xl font-comfortaa ${className}`}>{children}</h2>;
}

export default HeadingLarge;
