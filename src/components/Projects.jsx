import React, { useEffect } from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import CreativeMobileImage from "../img/creative-mobile-home.png";
import CreativePharmacyImage from "../img/creative-pharmacy-home.png";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <>
      <div className="text-3xl font-titillium font-semibold md:pl-40 pb-20 pt-10 flex flex-col justify-center items-center md:justify-start md:items-start">
        <h2 className="font-extralight text-gray-700">Projects</h2>
      </div>
      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center md:items-start md:pl-96 my-8"
      >
        <Card
          image={CreativeMobileImage}
          title="Creative Mobile MS"
          projectCreator="co-founder"
          description="management system for Mobile and Electronics stores. 
           keep track of the imports, sales and inventory.
           supplier and customer profiles.
           supports serialized products. 
           specified info about mobile and electronic devices maintenance.
           tracking store expenses.
           authentication and authorization system.
           and much more."
        />
      </div>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center md:items-end md:pr-96 my-8"
      >
        <Card
          image={CreativePharmacyImage}
          title="Creative Pharmacy MS"
          projectCreator="co-founder"
          description="management system for Pharmacies. 
           keep track of the imports, sales and inventory.
           supplier and customer profiles.
           supports selling drugs by pills and bottles.
           keep track of expired batches.
           tracking store expenses.
           authentication and authorization system.
           and much more."
        />
      </div>
    </>
  );
};

export default Projects;
