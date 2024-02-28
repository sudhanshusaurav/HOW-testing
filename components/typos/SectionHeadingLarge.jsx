function SectionHeadingLarge({ baseText, heading, className, headingClass }) {
  return (
    <div className={`flex flex-col gap-[0.125rem] ${className}`}>
      <p className="text-gray-light font-dancing text-[1rem] font-medium lg:text-p-md">
        {baseText}
      </p>
      <h1
        className={`font-comfortaa text-h5-sm font-bold leading-6 lg:text-h2 ${headingClass}`}
      >
        {heading}
      </h1>
    </div>
  );
}

export default SectionHeadingLarge;
