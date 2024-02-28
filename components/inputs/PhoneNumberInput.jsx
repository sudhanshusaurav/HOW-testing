"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneNumberInput({ value, setValue }) {
  return (
    <div>
      <PhoneInput
        country="in"
        value={value}
        countryCodeEditable={false}
        onChange={setValue}
        inputClass="!border-0 !bg-transparent !border-b !w-[200px] !rounded-none"
        buttonClass="!border-0 !bg-transparent !border-b "
      />
    </div>
  );
}

export default PhoneNumberInput;
