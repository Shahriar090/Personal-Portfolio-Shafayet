import React from "react";
import { Link } from "react-router-dom";

const EducationCard = ({ singleData }) => {
  const {
    institution,
    degree,
    startDate,
    endDate,
    CGPA,
    institutionImg,
    viewDetails,
    viewInstitution,
  } = singleData;
  return (
    <div className="card w-full mx-auto shadow-purple-700 bg-[rgb(17,17,34)] text-slate-300 shadow-sm transform transition-transform hover:scale-105 duration-300">
      <div className="card-body gap-3">
        <Link to={viewInstitution}>
          {" "}
          <h1 className="card-title font-bold text-lg md:text-xl  lg:text-xl">
            {institution}
          </h1>
        </Link>
        <Link to={viewDetails}>
          <h2 className="font-semibold text-md md:text-lg lg:text-lg">
            Degree : {degree}
          </h2>
        </Link>
        <h3 className="text-md md:text-md lg:text-lg">
          Start Date : {startDate}
        </h3>
        <h3 className="text-md md:text-md lg:text-lg">End Date : {endDate}</h3>
        <p className="text-md md:text-md lg:text-lg">Total CGPA : {CGPA}</p>

        <picture>
          <img
            src={institutionImg}
            alt="Institution Image"
            className="w-full bg-white rounded-xl opacity-90"
          />
        </picture>
      </div>
    </div>
  );
};

export default EducationCard;
