import { useEffect, useState } from "react";
import IconEdit from "../Icon/IconEdit";
import InputLabel from "../inputs/InputLabel";

function ReadableInputSelect({
  label,
  value,
  required,
  error,
  disabled,
  apiResponse,
  selectInput,
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
      <div className="group flex items-center justify-between">
        <InputLabel required={required}>{label}</InputLabel>
        {!disabled && (
          <button
            title="Edit"
            type="button"
            className="invisible text-p-xs text-secondary group-hover:visible"
            onClick={() => setEditable(true)}
          >
            <IconEdit />
          </button>
        )}
      </div>

      {editable && (
        <>
          {selectInput}
          <p className="text-p-xs text-red-500">{error}</p>
        </>
      )}
      {!editable && (
        <p
          onClick={() => setEditable(disabled ? false : true)}
          className="text-p-sm"
        >
          {value}
        </p>
      )}
    </div>
  );
}

export default ReadableInputSelect;
