import React, { useEffect } from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import CreativeMobileImage from "../img/creative-mobile-home.png";
import CreativePharmacyImage from "../img/creative-pharmacy-home.png";
import Covid19 from "../img/covid-19-final.png";
import ECommerce from "../img/e-commerce-final.png";
import Conference from "../img/conference-final.png";
import DMS from "../img/dms-final.png";
import AIM from "../img/aim-final.png";
import Dentist from "../img/dentist-final.png";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto space-y-10 md:space-y-20 pb-20">
      <div className="text-3xl font-titillium font-semibold  pt-10 flex flex-col justify-center items-center md:justify-start md:items-start">
        <h2 className="font-extralight text-gray-700">Projects</h2>
      </div>

      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center md:items-start  my-8 px-3 md:px-0"
      >
        <Card
          image={Dentist}
          title="Dentist Finder"
          description="Finding nearby dentists or dental laboratories based on the user's geolocation operating in
Lebanon and Syria.
It is also a platform for dentists and dental laboratories to showcase their work and advertise
for themselves."
          direction={"right"}
          tools={["Laravel", "React"]}
        />
      </div>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center md:items-end  my-8 px-3 md:px-0"
      >
        <Card
          image={AIM}
          title="A.I.M Official Website"
          description="Designed, developed, and maintained the website.
A.I.M is an architecture firm based in Dubai."
          direction={"left"}
          tools={["Laravel", "React"]}
        />
      </div>

      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center md:items-start  my-8 px-3 md:px-0"
      >
        <Card
          image={ECommerce}
          title="E-Commerce"
          description="Is an E-Commerce website developed for a business in Dubai.
           Users can easily view or search products and
           keep track of their orders based on the order status.
           Advanced search engine integration.
           Search based on Filters.
           Multible currency support.
           Multi-level categorization support.
           Powerfull admin panel.
           and much more."
          direction={"right"}
          tools={["Laravel", "React"]}
        />
      </div>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center md:items-end  my-8 px-3 md:px-0"
      >
        <Card
          image={Covid19}
          title="Covid-19 Tracking System"
          description="Is a tracking system developed for the Syrian Ministry of Health. 
           Hospitals are able to manage their Covid-19 patients.
           Admins are able to keep track of hospitals status and forward patients to the nearest hospital which has available rooms.
           Statistical analysis about hospitals current status.
           Two Machine learning models integration to help hospitals identify critically ill patients (still in development).
           and more."
          direction={"left"}
          tools={["Laravel", "React"]}
        />
      </div>
      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center md:items-start  my-8 px-3 md:px-0"
      >
        <Card
          image={DMS}
          title="Archive Management System"
          description="Document Management System developed for Al-Hawash Private University. 
           An online system to store, search, and Track your files.
           Multi-level categorization support.
           Multi-level authorization support.
           Tracking files based on their status.
           Assign users to groups.
           and much more."
          direction={"right"}
          tools={["Laravel", "React"]}
        />
      </div>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center md:items-end  my-8 px-3 md:px-0"
      >
        <Card
          image={Conference}
          title="Invitation Management System"
          description="Invitation Management System developed for the first international medical conference at Al-Hawash Private University. 
           An online system for managing invitations for conferences.
           Users are able to submit their invitations and learn indepth details about the conference.
           Admins can view or search invitations and respond to users.
           and much more."
          direction={"left"}
          tools={["Laravel", "React"]}
        />
      </div>
      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center md:items-start  my-8 px-3 md:px-0"
      >
        <Card
          image={CreativeMobileImage}
          title="Creative Mobile MS"
          projectCreator="co-creator"
          description="management system for Mobile and Electronics stores. 
           keep track of the imports, sales and inventory.
           supplier and customer profiles.
           supports serialized products. 
           specified info about mobile and electronic devices maintenance.
           tracking store expenses.
           authentication and authorization system.
           and much more."
          direction={"right"}
          tools={["Java", "JavaFx"]}
        />
      </div>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center md:items-end  my-8 px-3 md:px-0"
      >
        <Card
          image={CreativePharmacyImage}
          title="Creative Pharmacy MS"
          projectCreator="co-creator"
          description="management system for Pharmacies. 
           keep track of the imports, sales and inventory.
           supplier and customer profiles.
           supports selling drugs by pills and bottles.
           keep track of expired batches.
           tracking store expenses.
           authentication and authorization system.
           and much more."
          direction={"left"}
          tools={["Java", "JavaFx"]}
        />
      </div>
    </div>
  );
};

export default Projects;
