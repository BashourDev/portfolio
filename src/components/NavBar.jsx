import React from "react";
import { NavHashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <div
        className={`w-full h-14 flex justify-center md:justify-start px-12 md:px-32 text-xl space-x-10 text-gray-900 font-titillium font-semibold`}
      >
        <NavHashLink
          to="#"
          className="py-5 hover:text-indigo-800 border-b-2 hover:border-indigo-500 "
          smooth
        >
          About
        </NavHashLink>
        <NavHashLink
          to="#projects"
          className="py-5 hover:text-indigo-800 border-b-2 hover:border-indigo-500"
          smooth
        >
          Projects
        </NavHashLink>
        <NavHashLink
          to="#contact"
          className="py-5 hover:text-indigo-800 border-b-2 hover:border-indigo-500"
          smooth
        >
          Contact
        </NavHashLink>
      </div>
      {/* <svg
        class="absolute t-0 z-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000b29"
          fill-opacity="0.5"
          d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,112C672,96,768,160,864,154.7C960,149,1056,75,1152,90.7C1248,107,1344,213,1392,266.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg> */}
    </>
  );
};

export default NavBar;
