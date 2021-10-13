import React from "react";

const ExperienceCard = ({ image, title, bio, isHighlight }) => {
  return (
    <div
      className={`flex flex-col transform transition-transform ease-linear hover:scale-105 mt-5 font-robot w-2/4 md:w-3/12 lg:w-1/6 items-center rounded-3xl ${
        isHighlight
          ? "bg-indigo-600 text-indigo-50"
          : "bg-indigo-50 text-gray-800"
      }`}
    >
      <img src={image} alt="card" className="my-5 h-1/6 max-h-24" />
      <h3 className="text-lg text-center md:text-xl font-bold">{title}</h3>
      <p className="text-base text-center font-titillium md:text-lg my-5 px-12">
        {bio}
      </p>
    </div>
  );
};

export default ExperienceCard;
