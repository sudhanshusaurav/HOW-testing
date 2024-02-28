import InputLabel from "../inputs/InputLabel";
import IconEdit from "../Icon/IconEdit";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const EditorInput = dynamic(() => import("@/components/inputs/EditorInput"), {
  ssr: false,
});

function ReadableInputEditor({
  label,
  value,
  onChange,
  required,
  onBlur,
  disabled,
  apiResponse,
  saveBtn,
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
      {editable && !disabled && (
        <EditorInput
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          saveBtn={saveBtn}
        />
      )}
      {!editable && (
        <div
          onClick={() => setEditable(disabled ? false : true)}
          className="text-p-sm text-gray-500"
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      )}
    </div>
  );
}

export default ReadableInputEditor;
