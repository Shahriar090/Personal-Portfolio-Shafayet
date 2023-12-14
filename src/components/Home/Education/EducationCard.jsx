import React from "react";

const EducationCard = ({ singleData }) => {
  const { institution, degree, startDate, endDate, CGPA, institutionImg } =
    singleData;
  return (
    <div className="card w-full  mx-auto bg-[#0c2461] text-slate-200 shadow-xl">
      <div className="card-body flex flex-col gap-3">
        <h1 className="card-title font-bold text-xl lg:text-2xl">
          {institution}
        </h1>
        <h2 className="font-semibold text-md lg:text-lg">Degree : {degree}</h2>
        <h3 className="text-md lg:text-lg">Start Date : {startDate}</h3>
        <h3 className="text-md lg:text-lg">End Date : {endDate}</h3>
        <p className="text-md lg:text-lg">Total CGPA : {CGPA}</p>
        <figure>
          <img
            src={institutionImg}
            alt="Institution Image"
            className="w-full rounded-lg"
          />
        </figure>
      </div>
    </div>
  );
};

export default EducationCard;
