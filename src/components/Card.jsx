import React from "react";
import Button from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectCreator from "./ProjectCreator";

const Card = ({
  title,
  description,
  image,
  projectCreator,
  direction,
  tools = [],
}) => {
  return (
    <div
      className={`w-full md:w-4/5 pb-5 md:pb-0 shadow-lg focus:translate-y-4 rounded-3xl overflow-hidden flex flex-col ${
        direction === "right" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative flex flex-col justify-center items-center  h-72 max-h-72 max-w-sm min-w-max">
        <svg
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-full h-full bg-cover bg-no-repeat"
        >
          <defs>
            <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="161"
                result="effect1_foregroundBlur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <rect width="900" height="600" fill="#6600FF"></rect>
          <g filter="url(#blur1)">
            <circle cx="795" cy="501" fill="#4FACF7" r="357"></circle>
            <circle cx="631" cy="202" fill="#6600FF" r="357"></circle>
            <circle cx="157" cy="404" fill="#4FACF7" r="357"></circle>
            <circle cx="317" cy="107" fill="#4FACF7" r="357"></circle>
            <circle cx="404" cy="480" fill="#6600FF" r="357"></circle>
            <circle cx="639" cy="408" fill="#4FACF7" r="357"></circle>
          </g>
        </svg>
        <img src={image} alt="card" className="absolute " />
      </div>
      <div className="px-5">
        <p className="text-2xl py-5 px-2 text-gray-900 font-titillium font-semibold">
          {title}
        </p>
        {projectCreator && <ProjectCreator text={projectCreator} />}
        <p className="text-gray-700 px-2 font-robot font-light">
          {description}
        </p>
        {/* <div className="flex flex-col justify-center items-center font-robot font-light">
          <Button children="github" customStyle="w-1/2" icon={faGithub} />
        </div> */}
        <div className="flex gap-x-5 py-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className={
                "py-2 px-5 bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-full text-sm text-white"
              }
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
