import { useEffect, useState } from "react";
import IconEdit from "../Icon/IconEdit";
import InputLabel from "../inputs/InputLabel";
import CountrySelectInput from "../admin/selectors/CountrySelectInput";
import { useSelector } from "react-redux";

function ReadableCountrySelect({
  value,
  onChange,
  required,
  error,
  disabled,
  apiResponse,
  onBlur,
}) {
  const [editable, setEditable] = useState(false);
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    if (!value) setEditable(true);
  }, [value]);

  useEffect(() => {
    if (apiResponse === "success" && value) setEditable(false);
  }, [apiResponse]);

  return (
    <div>
      <div className="group flex items-center gap-8">
        <InputLabel required={required}>
          {editable ? "Select Country" : "Country"}
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
          <CountrySelectInput
            countries={countries}
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
          {countries.find((country) => country._id === value)?.name}
        </p>
      )}
    </div>
  );
}

export default ReadableCountrySelect;
