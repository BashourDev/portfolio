import React from "react";

const CircleSVG = ({ customStyle }) => {
  return (
    <svg
      className={customStyle}
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29" r="27.5" stroke="#C4C4C4" strokeWidth="3" />
    </svg>
  );
};

export default CircleSVG;
