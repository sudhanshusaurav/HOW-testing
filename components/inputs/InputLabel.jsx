import React from "react";

function InputLabel({ id, children, className, required }) {
  return (
    <label htmlFor={id} className={`${className} font-medium`}>
      {children}
      <span className={`text-red-500 ${required ? "" : "hidden"}`}>*</span>
    </label>
  );
}

export default InputLabel;
