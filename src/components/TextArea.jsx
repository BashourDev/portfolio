import React from "react";

const TextArea = ({
  placeholder = "enter text",
  customStyle,
  innerRef,
  ...otherProps
}) => {
  return (
    <textarea
      ref={innerRef}
      placeholder={placeholder}
      className={`resize-none w-3/4 lg:w-2/4 sm:w-3/4 h-32 xl:w-1/3 border-2 rounded-md p-4 bg-gray-200 mx-3 my-4 focus:border-blue-600 focus:outline-none ${customStyle}`}
      {...otherProps}
    />
  );
};

export default TextArea;
