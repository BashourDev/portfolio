import React from "react";
import TH from "./TH";
import TD from "./TD";
import TypewriterComponent from "typewriter-effect";

const InfoTable = () => {
  return (
    <table className="table-auto lg:ml-28 flex flex-row items-center bg-transparent border-collaps font-robot font-light text-gray-900">
      <tbody>
        <tr>
          <TH>name</TH>
          <TD>
            <TypewriterComponent
              options={{ cursor: "", delay: 25 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(500).typeString("Bashour Atrini").start();
              }}
            />
          </TD>
        </tr>
        <tr>
          <TH>age</TH>
          <TD>
            <TypewriterComponent
              options={{ cursor: "", delay: 25 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1200).typeString("23").start();
              }}
            />
          </TD>
        </tr>
        <tr>
          <TH>location</TH>
          <TD>
            <TypewriterComponent
              options={{ cursor: "", delay: 25 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1400).typeString("Hims, Syria").start();
              }}
            />
          </TD>
        </tr>
        <tr>
          <TH>occupation</TH>
          <TD>
            <TypewriterComponent
              options={{ cursor: "", delay: 25 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Full-stack developer")
                  .start();
              }}
            />
          </TD>
        </tr>
        <tr>
          <TH>education</TH>
          <TD>
            <TypewriterComponent
              options={{ cursor: "", delay: 25 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3000)
                  .typeString(
                    " bachelor of Informatics Engineering at Al-Hawash Private University"
                  )
                  .start();
              }}
            />
          </TD>
        </tr>
        <tr>
          <TH>skills</TH>
          <TD>
            <TypewriterComponent
              options={{ cursor: "", delay: 25 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(5500)
                  .typeString(
                    "java and javafx for desktop applications. <br />javascript and react.js for front-end web applications. <br />react native for android and ios applications. <br/>php and laravel for back-end web applications. <br/>basic knowlage of python and django framework."
                  )
                  .start();
              }}
            />
          </TD>
          {/* <TD>
            java and javafx for desktop applications.
            <br />
            javascript and react.js for front-end web applications.
            <br />
            react native for android and ios applications.
            <br />
            php and laravel for back-end web applications.
            <br />
            basic knowlage with python and django framework.
          </TD> */}
        </tr>
      </tbody>
    </table>
  );
};

export default InfoTable;
