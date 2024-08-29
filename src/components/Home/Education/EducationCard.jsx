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
    <Link to={viewInstitution}>
      <div className="card w-full h-full max-w-lg mx-auto shadow-lg hover:shadow-slate-300 text-slate-100">
        <div className="card-body gap-4">
          <picture>
            <img
              src={institutionImg}
              alt="Institution Image"
              className="w-full h-full lg:h-[250px] object-fill bg-white rounded-lg opacity-90 "
            />
          </picture>
          <h1
            className="text-2xl font-medium capitalize line-clamp-1"
            title={institution}
          >
            {institution}
          </h1>
          <h2 className="font-medium line-clamp-2" title={degree}>
            Degree : {degree}
          </h2>
          <h3>Start Date : {startDate}</h3>
          <h3>End Date : {endDate}</h3>
          <p>Total CGPA : {CGPA}</p>
        </div>
      </div>
    </Link>
  );
};

export default EducationCard;
