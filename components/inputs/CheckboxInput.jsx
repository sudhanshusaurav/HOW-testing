import CheckIcon from "@/public/assets/icons/CheckIcon";

function CheckboxInput({ id, checked, setChecked, children }) {
  return (
    <label htmlFor={id} className="flex items-center gap-4">
      <input
        type="checkbox"
        name=""
        id={id}
        checked={checked}
        onChange={setChecked}
        hidden
      />
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          checked ? "bg-primary text-white" : "border border-primary"
        }`}
      >
        {checked && <CheckIcon />}
      </div>
      <div>{children}</div>
    </label>
  );
}

export default CheckboxInput;
