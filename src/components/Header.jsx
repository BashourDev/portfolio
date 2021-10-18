import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Bio from "./Bio";
import devDude from "../img/web-dude-white.webp";
import RectangleSVG from "./RectangleSVG";
import CircleSVG from "./CircleSVG";
import VictorSVG from "./VictorSVG";
import DotsSVG from "./DotsSVG";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <div className="relative">
        <motion.div
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          className="absolute top-20 right-2/3 opacity-50"
        >
          <RectangleSVG customStyle="" />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          className="absolute top-10 right-1/3 opacity-60"
        >
          <CircleSVG />
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          className="absolute bottom-24 left-20 opacity-60"
        >
          <CircleSVG customStyle="w-8 h-8" />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          className="absolute top-2/4 left-2/4 opacity-70"
        >
          <RectangleSVG customStyle="w-8 h-8" />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          className="absolute top-3/4 right-1/2 opacity-60"
        >
          <VictorSVG />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          className="absolute top-1/4 right-20 opacity-60"
        >
          <VictorSVG />
        </motion.div>
        <div className="text-3xl font-titillium font-semibold md:pl-40 pt-10 flex flex-col justify-center items-center md:justify-start md:items-start">
          <h2 className="font-extralight text-gray-700">Home</h2>
        </div>
        <div className="h-full flex flex-col-reverse md:flex-col lg:flex-row md:justify-center md:items-center">
          <div
            data-aos="slide-right"
            className="flex flex-col justify-start items-center md:items-start w-full lg:w-1/2 h-full p-3 md:p-10 text-xl text-gray-900 "
          >
            {/* <InfoTable /> */}
            <Bio />
          </div>
          {/* <div className="rounded-full bg-blue-900 w-2/5 h-full absolute -top-32 -right-40" /> */}
          <div
            data-aos="fade"
            className="relative md:r-10 flex justify-center items-center"
          >
            <DotsSVG customStyle="absolute bottom-2 right-0 mr-0 opacity-80" />
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
              src={devDude}
              alt="avatar"
              className="absolute h-40 w-40 md:h-96 md:w-96 lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
