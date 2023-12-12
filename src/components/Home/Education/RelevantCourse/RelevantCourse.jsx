import React from "react";

const RelevantCourse = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="list-disc grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-xl  lg:text-2xl mt-10 lg:mt-20">
        <li>Electricity conversion & distribution</li>
        <li> Energy Management strategy of Microgrids</li>
        <li>
          {" "}
          Artificial Intelligence for Optimal <br /> operation of power systems
        </li>
        <li>Distributed Control in Microgrids</li>
        <li>Energy storages (Li & Redox flow batteries)</li>
        <li> Fuel cell & electrolyzers</li>
        <li>Renewable Energy Technologies</li>
        <li>Global Energy Market Modelling</li>
      </ul>
    </div>
  );
};

export default RelevantCourse;
