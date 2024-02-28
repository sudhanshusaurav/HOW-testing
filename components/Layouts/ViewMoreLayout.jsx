"use client";

import { useEffect, useRef, useState } from "react";

function ViewMoreLayout({ initialHeight, children }) {
  const contentRef = useRef(null);

  const [showBtn, setShowBtn] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const height = isExpanded ? "none" : `${initialHeight}px`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (!contentRef?.current) {
      return false;
    }

    setShowBtn(contentRef.current.clientHeight > 300);
  }, []);

  return (
    <div className="rounded-[0.625rem] bg-white lg:rounded-[1.25rem]">
      <div
        className="transition-all duration-200 ease-out"
        style={{ overflow: "hidden", maxHeight: height }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
      {showBtn && (
        <div
          className={`p-4 pb-0 text-center lg:p-[1.875rem] lg:text-right ${
            isExpanded ? "pt-0" : "pt-2 lg:pt-5"
          }`}
        >
          <button
            onClick={toggleExpand}
            className="text-p-sm font-medium text-secondary lg:text-h6 lg:font-normal"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewMoreLayout;
