function Switch({ checked, onChange, label }) {
  return (
    <label className="relative h-6 w-12">
      <input
        type="checkbox"
        className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
        id="custom_switch_checkbox4"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {checked && (
        <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[0.5rem] text-white">
          {label}
        </span>
      )}

      <span
        htmlFor="custom_switch_checkbox4"
        className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-secondary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"
      ></span>
    </label>
  );
}

export default Switch;
