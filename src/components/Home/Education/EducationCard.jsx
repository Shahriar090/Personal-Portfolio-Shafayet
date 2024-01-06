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
    <div className="card w-full mx-auto shadow-xl bg-[rgb(17,17,34)] text-slate-300  transform transition-transform hover:scale-105 duration-300">
      <div className="card-body gap-4">
        <Link to={viewInstitution}>
          <h1 className="card-title font-bold uppercase text-xl md:text-2xl  lg:text-2xl font-sans">
            {institution}
          </h1>
        </Link>
        <Link to={viewDetails}>
          <h2 className="font-semibold text-xl  font-sans">
            Degree : {degree}
          </h2>
        </Link>
        <h3 className="text-lg font-semibold font-sans">
          Start Date : {startDate}
        </h3>
        <h3 className="text-lg font-semibold font-sans">
          End Date : {endDate}
        </h3>
        <p className="text-lg font-semibold font-sans">Total CGPA : {CGPA}</p>

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
