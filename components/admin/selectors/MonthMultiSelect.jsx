import { months } from "@/utils/common";
import Select from "react-select";

function MonthMultiSelect({ isMulti, onChange, value, onBlur }) {
  return (
    <Select
      isMulti={isMulti}
      value={value?.map((val) => ({
        label: months[val],
        value: val,
      }))}
      onChange={onChange}
      // onChange={(value) =>
      //   setFieldValue(
      //     fieldName,
      //     value.map((v) => v.value)
      //   )
      // }
      onBlur={onBlur}
      options={months?.map((month, index) => ({
        label: month,
        value: index,
      }))}
    />
  );
}

export default MonthMultiSelect;
