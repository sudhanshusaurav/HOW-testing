import { useSelector } from "react-redux";
import IconEdit from "../Icon/IconEdit";
import StateSelectInput from "../admin/selectors/StateSelectInput";
import InputLabel from "../inputs/InputLabel";
import { useEffect, useState } from "react";

function ReadableStateSelect({
  value,
  onChange,
  onBlur,
  required,
  isMulti,
  error,
  disabled,
  apiResponse,
}) {
  const [editable, setEditable] = useState(false);
  const states = useSelector((state) => state.states.states);

  useEffect(() => {
    if (isMulti && value.length === 0) {
      setEditable(true);
    } else if (!isMulti && !value) {
      setEditable(true);
    }
  }, [value]);

  useEffect(() => {
    if (apiResponse === "success") {
      if (isMulti && value.length > 0) {
        setEditable(false);
      } else if (!isMulti && value) {
        setEditable(false);
      }
    }
  }, [apiResponse]);

  return (
    <div>
      <div className="group flex items-center gap-8">
        <InputLabel required={required}>
          {editable ? "Select State" : "State"}
        </InputLabel>
        {(editable || !disabled) && (
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
          <StateSelectInput
            isMulti={isMulti}
            states={states}
            isDisabled={disabled}
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
          {isMulti
            ? value.map((v, index) => (
                <span key={v}>
                  {index !== 0 ? ", " : ""}
                  {states.find((state) => state._id === v)?.name}
                </span>
              ))
            : states.find((state) => state._id === value)?.name}
        </p>
      )}
    </div>
  );
}

export default ReadableStateSelect;
