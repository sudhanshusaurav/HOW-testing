import { useFormikContext } from "formik";
import CreatableSelect from "react-select/creatable";

function CreatableSelectInput({ options, isMulti, value, onChange }) {
  return (
    <div>
      <CreatableSelect
        isClearable
        isMulti={isMulti}
        options={options}
        value={value}
        onChange={onChange}
        placeholder="Select OR Enter"
      />
    </div>
  );
}

export default CreatableSelectInput;
