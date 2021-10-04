import React from "react";
import InfoTable from "./InfoTable";

const Header = () => {
  return (
    <>
      <div className="text-3xl pl-40 pt-10 flex flex-col border-t-2 border-indigo-400">
        <h2>Home</h2>
      </div>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 overflow-y-auto">
        <div className="flex flex-col justify-center items-start w-1/2  h-full p-10 text-xl text-gray-900 col-span-1">
          <InfoTable />
        </div>
        {/* <div className="rounded-full bg-blue-900 w-2/5 h-full absolute -top-32 -right-40" /> */}
        <div className="relative right-10 flex flex-col justify-center items-center col-span-1 w-3/4">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className=""
          >
            <g transform="translate(419.55816265412295 258.85214421870864)">
              <path
                d="M145.8 -124.3C203.5 -88.2 274.7 -44.1 283 8.2C291.2 60.6 236.5 121.2 178.8 173.2C121.2 225.2 60.6 268.6 -13.9 282.5C-88.4 296.4 -176.8 280.8 -208 228.8C-239.3 176.8 -213.4 88.4 -202.4 11C-191.5 -66.5 -195.4 -132.9 -164.2 -169.1C-132.9 -205.3 -66.5 -211.1 -11.2 -199.9C44.1 -188.7 88.2 -160.5 145.8 -124.3"
                fill="#6600FF"
              ></path>
            </g>
          </svg>
          <img
            src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
            alt="avatar"
            className="absolute h-96 w-96"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
