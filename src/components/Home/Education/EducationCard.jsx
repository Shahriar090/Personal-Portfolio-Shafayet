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
    <div className="card w-full  mx-auto bg-[rgb(17,17,34)] text-slate-200 shadow-2xl">
      <div className="card-body gap-3">
        <Link to={viewInstitution}>
          {" "}
          <h1 className="card-title font-bold text-xl lg:text-2xl">
            {institution}
          </h1>
        </Link>
        <Link to={viewDetails}>
          <h2 className="font-semibold text-md lg:text-lg">
            Degree : {degree}
          </h2>
        </Link>
        <h3 className="text-md lg:text-lg">Start Date : {startDate}</h3>
        <h3 className="text-md lg:text-lg">End Date : {endDate}</h3>
        <p className="text-md lg:text-lg">Total CGPA : {CGPA}</p>

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
