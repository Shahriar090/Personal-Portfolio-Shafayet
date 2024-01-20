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
    <div className="card w-full mx-auto shadow-sm  text-slate-100  transform transition-transform hover:scale-105 duration-300">
      <div className="card-body gap-4 p-3">
        <Link to={viewInstitution}>
          <h1>{institution}</h1>
        </Link>
        <Link to={viewDetails}>
          <h2>Degree : {degree}</h2>
        </Link>
        <h3>Start Date : {startDate}</h3>
        <h3>End Date : {endDate}</h3>
        <p>Total CGPA : {CGPA}</p>

        <picture>
          <img
            src={institutionImg}
            alt="Institution Image"
            className="w-full h-[300px] bg-white rounded-lg opacity-90 "
          />
        </picture>
      </div>
    </div>
  );
};

export default EducationCard;
