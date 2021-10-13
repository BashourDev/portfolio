import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ children, customStyle, onClick, icon }) => {
  return (
    <>
      <button
        className={`w-3/4 outline-none border-8 rounded-full text-indigo-600 border-indigo-500 mt-5 hover:text-white hover:bg-indigo-500 ${customStyle}`}
        onClick={onClick}
      >
        <FontAwesomeIcon
          color="indigo-600"
          width={100}
          height={100}
          icon={icon}
          className="mr-2"
        />
        {children}
      </button>
    </>
  );
};

export default Button;
