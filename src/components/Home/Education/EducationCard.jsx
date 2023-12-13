import React from "react";

const EducationCard = ({ singleData }) => {
  const { institution, degree, startDate, endDate, CGPA, institutionImg } =
    singleData;
  return (
    <div className="card w-full md:w-3/4 lg:w-3/4 mx-auto bg-[#192a56] text-slate-200 shadow-lg">
      <figure>
        <img
          src={institutionImg}
          alt="Institution Image"
          className="w-full md:w-9/12 lg:w-9/12 md:rounded-full lg:rounded-full  rounded-lg"
        />
      </figure>
      <div className="card-body ">
        <h1 className="card-title font-bold text-xl lg:text-2xl">
          {institution}
        </h1>
        <h2 className="font-semibold text-md lg:text-lg">Degree : {degree}</h2>
        <h3 className="text-md lg:text-lg">Start Date : {startDate}</h3>
        <h3 className="text-md lg:text-lg">End Date : {endDate}</h3>
        <p className="text-md lg:text-lg">Total CGPA : {CGPA}</p>
      </div>
    </div>
  );
};

export default EducationCard;
