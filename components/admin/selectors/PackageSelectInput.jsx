// import { GetAllPackages } from "@/app/api/package/route";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useFormikContext } from "formik";
import SelectInput from "@/components/inputs/SelectInput";

function PackageSelectInput({ isMulti, onChange, value }) {
  const { values, setFieldValue } = useFormikContext();
  const [packages, setPackages] = useState([]);

  // useEffect(() => {
  //   GetAllPackages()
  //     .then((res) => {
  //       setPackages(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <SelectInput
      isMulti={isMulti}
      onChange={onChange}
      options={packages?.map((pkg) => ({
        label: pkg.title,
        value: pkg._id,
      }))}
    />
  );
}

export default PackageSelectInput;
