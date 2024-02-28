import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IconEdit from "../Icon/IconEdit";
import InputLabel from "../inputs/InputLabel";
import CategorySelectInput from "../admin/selectors/CategorySelectInput";

function ReadableCategorySelect({
  value,
  onChange,
  onBlur,
  creatable,
  required,
  isMulti,
  error,
  disabled,
  apiResponse,
}) {
  const [editable, setEditable] = useState(false);
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    if (value.length === 0) setEditable(true);
  }, [value]);

  useEffect(() => {
    if (apiResponse === "success" && value.length > 0) setEditable(false);
  }, [apiResponse]);

  return (
    <div>
      <div className="group flex items-center gap-8">
        <InputLabel required={required}>
          {editable ? "Select Category" : "Category"}
        </InputLabel>
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
          <CategorySelectInput
            creatable={true}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <p className="text-p-xs text-red-500">{error}</p>
        </>
      )}
      {!editable && (
        <p
          onClick={() => setEditable(disabled ? false : true)}
          className="text-p-sm text-gray-500"
        >
          {value.map((v) => (
            <span key={v}>
              {categories.find((category) => category._id === v)?.name}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default ReadableCategorySelect;
