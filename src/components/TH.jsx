import React from "react";

const TH = ({ children }) => {
  return (
    <th className="px-6 bg-indigo-600 text-gray-50 align-middle border border-solid border-blueGray-100 py-3 text-xs md:text-sm uppercase border-l-2 border-r-2 font-semibold text-left">
      {children}
    </th>
  );
};

export default TH;
