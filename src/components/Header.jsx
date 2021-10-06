import React, { useEffect } from "react";
import InfoTable from "./InfoTable";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <div className="text-3xl md:pl-40 pt-10 flex flex-col justify-center items-center md:justify-start md:items-start border-t-2 border-indigo-400">
        <h2>Home</h2>
      </div>
      <div className="h-full flex flex-col-reverse md:flex-col lg:flex-row md:justify-center md:items-center">
        <div
          data-aos="slide-right"
          className="flex flex-col justify-center items-center md:items-start w-full lg:w-1/2 h-full p-3 md:p-10 text-xl text-gray-900 "
        >
          <InfoTable />
        </div>
        {/* <div className="rounded-full bg-blue-900 w-2/5 h-full absolute -top-32 -right-40" /> */}
        <div
          data-aos="fade"
          className="relative md:right-10 flex justify-center items-center"
        >
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
            data-aos="slide-left"
            src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
            alt="avatar"
            className="absolute h-40 w-40 md:h-96 md:w-96 lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
