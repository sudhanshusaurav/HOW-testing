import Select from "react-select";

function SelectInput({ options, value, isMulti, onChange, isDisabled }) {
  return (
    <Select
      className="grow items-stretch rounded-md"
      isDisabled={isDisabled}
      isMulti={isMulti}
      value={value}
      onChange={onChange}
      options={[{ label: "", value: "" }, ...options]}
    />
  );
}

export default SelectInput;
