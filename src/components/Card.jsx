import React from "react";
import Button from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, image }) => {
  return (
    <div className="w-3/4 md:w-96 pb-5 shadow-lg focus:translate-y-4 rounded-3xl overflow-hidden">
      <div className="relative flex flex-col justify-center items-center w-full h-72 max-h-72">
        <svg
          id="visual"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-full h-72 bg-cover bg-no-repeat"
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
      <p className="text-2xl py-5 px-2 text-gray-900 font-titillium font-semibold">
        {title}
      </p>
      <p className="text-gray-500 px-2 font-robot font-light">{description}</p>
      <div className="flex flex-col justify-center items-center font-robot font-light">
        <Button children="github" customStyle="w-1/2" icon={faGithub} />
      </div>
    </div>
  );
};

export default Card;
