import React from "react";

const AppTable = ({ cols = [], children }) => {
  return (
    <div>
      <table className="table-auto w-full items-center bg-transparent border-collapse">
        <thead>
          <tr>
            {cols.map((col) => (
              <th
                key={col}
                className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-emerald-200">{children}</tbody>
      </table>
    </div>
  );
};

export default AppTable;
