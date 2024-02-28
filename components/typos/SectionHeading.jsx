function SectionHeading({ baseText, heading, className, headingClass }) {
  return (
    <div className={`flex flex-col gap-[0.125rem] ${className}`}>
      <p className="text-gray-light font-dancing text-[1rem] font-medium lg:text-p-md">
        {baseText}
      </p>
      <h2
        className={`font-comfortaa text-h5 font-bold leading-6 lg:text-3xl ${headingClass}`}
      >
        {heading}
      </h2>
    </div>
  );
}

export default SectionHeading;
