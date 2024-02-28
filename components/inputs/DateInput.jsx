"use client";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function DateInput({ date, setDate, minDate, maxDate, disabled }) {
  return (
    <div className="field !py-[2px]">
      <DatePicker
        showIcon
        disabled={disabled}
        dateFormat="dd MMM, yyyy"
        minDate={minDate}
        maxDate={maxDate}
        selected={date ? new Date(date) : new Date()}
        onChange={(date) => setDate(date)}
        className="form-input w-full"
      />
    </div>
  );
}

export default DateInput;
