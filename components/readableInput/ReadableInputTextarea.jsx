import InputLabel from "../inputs/InputLabel";
import IconEdit from "../Icon/IconEdit";
import { useEffect, useState } from "react";

function ReadableInputTextarea({
  label,
  value,
  onChange,
  onBlur,
  required,
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
        {!editable && (
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
        <textarea
          type="text"
          name=""
          id=""
          rows="6"
          className="form-input"
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          value={value}
        />
      )}
      {!editable && (
        <p
          onClick={() => setEditable(true)}
          className="text-p-sm text-gray-500"
        >
          {value}
        </p>
      )}
    </div>
  );
}

export default ReadableInputTextarea;
