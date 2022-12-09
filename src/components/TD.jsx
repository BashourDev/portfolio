import React from "react";

const TD = ({ children, customStyle }) => {
  return (
    <td
      className={`border-t-2 px-6 align-middle border-l-2 border-r-2 border-b-2 text-xs md:text-sm p-4 border-solid border-blueGray-100 ${customStyle}`}
    >
      {children}
    </td>
  );
};

export default TD;
