function ToggleInput({ fieldKey, checked, onToggle }) {
  return (
    <div>
      <label
        htmlFor={fieldKey}
        className={`relative block h-6 w-12 rounded-full border-2 ${
          checked ? "border-primary" : "border-gray-400"
        }`}
      >
        <span
          className={`absolute top-1/2 h-[18px] w-5 -translate-y-1/2 rounded-full transition-all duration-200 ${
            checked
              ? "left-[unset] right-[1px] bg-primary"
              : "left-[1px] right-[unset] bg-gray-400"
          }`}
        ></span>
        <input
          type="checkbox"
          name=""
          id={fieldKey}
          checked={checked}
          hidden
          onChange={onToggle}
        />
      </label>
    </div>
  );
}

export default ToggleInput;
