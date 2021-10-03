import React from "react";

const InputField = ({
  type = "text",
  placeholder = "enter text",
  customStyle,
  innerRef,
  ...otherProps
}) => {
  return (
    <input
      ref={innerRef}
      type={type}
      placeholder={placeholder}
      className={`lg:w-2/4 sm:w-3/4 h-10 xl:w-1/3 border-2 rounded-md p-4 bg-gray-200 mx-3 my-4 focus:border-blue-600 focus:outline-none ${customStyle}`}
      {...otherProps}
    />
  );
};

export default InputField;
