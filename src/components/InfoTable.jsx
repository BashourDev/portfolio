import React from "react";
import TH from "./TH";
import TD from "./TD";

const InfoTable = () => {
  return (
    <table className="table-auto w-3/4 ml-28 items-center bg-transparent border-collapse">
      <tbody>
        <tr>
          <TH>name</TH>
          <TD>Bashour Atrini</TD>
        </tr>
        <tr>
          <TH>age</TH>
          <TD>23</TD>
        </tr>
        <tr>
          <TH>location</TH>
          <TD>Hims, Syria</TD>
        </tr>
        <tr>
          <TH>occupation</TH>
          <TD>Full-stack developer</TD>
        </tr>
        <tr>
          <TH>education</TH>
          <TD>
            bachelor of Informatics Engineering at Al-Hawash Private University
          </TD>
        </tr>
        <tr>
          <TH>skills</TH>
          <TD>
            java and javafx for desktop applications.
            <br />
            javascript and react.js for front-end web applications.
            <br />
            react native for android and ios applications.
            <br />
            php and laravel for back-end web applications.
            <br />
            basic knowlage with python and django framework.
          </TD>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoTable;
