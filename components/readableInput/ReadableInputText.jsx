import InputLabel from "../inputs/InputLabel";
import IconEdit from "../Icon/IconEdit";
import { useEffect, useState } from "react";

function ReadableInputText({
  label,
  type,
  value,
  onChange,
  required,
  onBlur,
  error,
  placeholder,
  disabled,
  apiResponse,
}) {
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!value) setEditable(true);
  }, [value]);

  useEffect(() => {
    if (apiResponse === "success" && value) setEditable(false);
  }, [apiResponse]);

  return (
    <div>
      <div className="group flex items-center gap-8">
        <InputLabel required={required}>{label}</InputLabel>
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
          <input
            type={type || "text"}
            name=""
            id=""
            disabled={disabled}
            className={`form-input ${error ? "border-red-300" : ""}`}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
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

export default ReadableInputText;
