"use client";

import { formatNumberToTwoDigit } from "@/utils/common";
import { useState } from "react";

function NumberCounterInput({ updateCount, count }) {
  const decreaseCounter = () => {
    if (parseInt(count) === 0) return;
    updateCount(parseInt(count) - 1);
  };

  const increaseCounter = () => {
    if (parseInt(count) === 99) return;
    updateCount(parseInt(count) + 1);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={decreaseCounter}
        className="rounded-l-lg border border-gray-300 p-2 px-4"
      >
        -
      </button>
      <div className="border border-gray-300 p-2 px-4">
        {formatNumberToTwoDigit(count ? count : 0)}
      </div>
      <button
        type="button"
        onClick={increaseCounter}
        className="rounded-r-lg border border-gray-300 p-2 px-4"
      >
        +
      </button>
    </div>
  );
}

export default NumberCounterInput;
