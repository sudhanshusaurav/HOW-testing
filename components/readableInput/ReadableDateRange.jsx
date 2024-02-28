import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import IconEdit from "../Icon/IconEdit";
import InputLabel from "../inputs/InputLabel";

function ReadableDateRange({
  required,
  disabled,
  value,
  apiResponse,
  onChange,
  onBlur,
  error,
}) {
  const [editable, setEditable] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (!value) setEditable(true);
  }, [value]);

  useEffect(() => {
    if (apiResponse === "success" && value) setEditable(false);
  }, [apiResponse]);

  return (
    <div>
      <div className="group flex items-center gap-8">
        <InputLabel required={required}>From - To</InputLabel>
        {!disabled && (
          <button
            title="Edit"
            type="button"
            className="invisible text-p-xs text-secondary group-hover:visible"
            onClick={() => setEditable(true)}
          >
            {!editable && <IconEdit />}
          </button>
        )}
      </div>
      {editable && (
        <>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            className="form-input"
          />
          <p className="text-p-xs text-red-500">{error}</p>
        </>
      )}
      {!editable && (
        <p
          onClick={() => setEditable(disabled ? false : true)}
          className="text-p-sm text-gray-500"
        >
          {value}
        </p>
      )}
    </div>
  );
}

export default ReadableDateRange;
