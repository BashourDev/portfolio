import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Button from "./Button";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";

const Bio = () => {
  const [isContactHidden, setIsContactHidden] = useState(false);
  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setIsContactHidden(true);
    }, 6500);
  }, []);
  return (
    <div className="flex flex-col items-start font-robot px-0 md:pl-36">
      <h3 className="text-5xl font-bold my-6">
        <TypewriterComponent
          options={{ cursor: "", delay: 25 }}
          onInit={(typewriter) => {
            typewriter.pauseFor(500).typeString("Bashour Atrini").start();
          }}
        />
      </h3>
      <p>
        <TypewriterComponent
          options={{ cursor: "", delay: 25 }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1200)
              .typeString(
                "A multi-skilled software engineer with 2+ years of experience in software design, development, and integration, with an extensive track record of developing and maintaining high-quality software solutions."
              )
              .start();
          }}
        />
      </p>
      {isContactHidden && (
        <NavHashLink
          data-aos="fade-in"
          to="#contact"
          className="w-64 mt-1 lg:mt-5"
          smooth
        >
          <Button icon={faTelegramPlane}>Contact Me</Button>
        </NavHashLink>
      )}
    </div>
  );
};

export default Bio;
