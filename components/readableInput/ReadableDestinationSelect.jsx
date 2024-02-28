import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DestinationSelectInput from "../admin/selectors/DestinationSelectInput";
import IconEdit from "../Icon/IconEdit";
import InputLabel from "../inputs/InputLabel";

function ReadableDestinationSelect({
  country,
  state,
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
  const allDest = useSelector((state) => state.destinations.destinations);

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
          {editable ? "Select Destination" : "Destination"}
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
          <DestinationSelectInput
            isMulti={true}
            country={country}
            state={state}
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
          {isMulti
            ? value.map((v, index) => (
                <span key={v}>
                  {index !== 0 ? ", " : ""}
                  {allDest.find((dest) => dest._id === v)?.name}
                </span>
              ))
            : allDest.find((dest) => dest._id === value)?.name}
        </p>
      )}
    </div>
  );
}

export default ReadableDestinationSelect;
