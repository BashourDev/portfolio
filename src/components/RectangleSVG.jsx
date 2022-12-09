import React from "react";

const RectangleSVG = ({ customStyle }) => {
  return (
    <svg
      className={customStyle}
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="55"
        height="55"
        stroke="#C4C4C4"
        strokeWidth="3"
      />
    </svg>
  );
};

export default RectangleSVG;
