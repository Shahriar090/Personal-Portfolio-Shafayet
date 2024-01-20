import React from "react";
import { Link } from "react-router-dom";

const RenderExperience = ({ experience }) => {
  const {
    post,
    organization,
    organizationImg,
    location,
    startDate,
    endDate,
    courses,
    responsibilities,
    organizationDetails,
  } = experience;

  return (
    <div className="card card-side shadow-xl  w-full mx-auto text-slate-100 mt-5 flex flex-col md:flex-row lg:flex-row">
      <Link
        className="w-full md:w-3/6 lg:w-2/5 my-auto"
        to={organizationDetails}
      >
        <picture>
          <img
            src={organizationImg}
            alt="Image"
            className="w-3/4 md:w-3/6 lg:w-3/6  bg-white opacity-90 rounded-lg mx-auto"
          />
        </picture>
      </Link>

      <div className="card-body gap-4 w-full md:w-3/6 lg:w-3/6">
        <h1>Designation : {post}</h1>
        <h2>Organization : {organization}</h2>
        <div className="sub-container  flex flex-col gap-3">
          <h3>Job Location : {location}</h3>

          <h3>Start Date : {startDate}</h3>
          <h3>End Date : {endDate}</h3>
        </div>
        {/* responsibilities */}
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-lg md:text-xl lg:text-xl bg-[#2F4D6B]">
            See Responsibilities
          </div>
          <div className="collapse-content text-lg ">
            <ul className="px-5">
              {responsibilities.map((responsibility, index) => (
                <li className="list-disc font-sans" key={index}>
                  {responsibility.text}
                </li>
              ))}
            </ul>

            <p className="pt-2  ">
              <span className="font-semibold">Courses</span> :{" "}
              {courses ? courses : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderExperience;
