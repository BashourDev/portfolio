import React, { useEffect } from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className="text-3xl font-titillium font-semibold md:pl-40 pb-20 pt-10 flex flex-col justify-center items-center md:justify-start md:items-start border-t-2 border-indigo-400">
        <h2 className="font-extralight text-gray-700">Projects</h2>
      </div>
      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center md:items-start md:pl-96 my-8"
      >
        <Card
          image="https://www.freeiconspng.com/thumbs/laptop-png/mac-laptop-png-13.png"
          title="Creative Mobile MS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti
      incidunt? Maiores, suscipit excepturi delectus itaque distinctio
      dignissimos dolore mollitia similique in earum voluptatibus placeat, quis
      totam laborum fugiat non!"
        />
      </div>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center md:items-end md:pr-96 my-8"
      >
        <Card
          image="https://www.freeiconspng.com/thumbs/laptop-png/mac-laptop-png-13.png"
          title="Creative Pharmacy MS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti
      incidunt? Maiores, suscipit excepturi delectus itaque distinctio
      dignissimos dolore mollitia similique in earum voluptatibus placeat, quis
      totam laborum fugiat non!"
        />
      </div>
    </>
  );
};

export default Projects;
