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
    <div className="card card-side shadow-xl  w-full mx-auto  bg-[rgb(17,17,34)] text-slate-300 mt-5 flex flex-col md:flex-row lg:flex-row">
      <Link
        className="w-full md:w-3/6 lg:w-2/5 my-auto"
        to={organizationDetails}
      >
        <picture>
          <img
            src={organizationImg}
            alt="Image"
            className="w-3/4 md:w-3/6 lg:w-3/6 bg-white opacity-90 rounded-lg mx-auto"
          />
        </picture>
      </Link>

      <div className="card-body gap-4 w-full md:w-3/6 lg:w-3/6">
        <h1 className="card-title font-bold text-xl md:text-2xl  lg:text-2xl font-sans">
          Designation : {post}
        </h1>
        <h2 className="font-semibold text-lg md:text-xl lg:text-xl font-sans">
          Organization : {organization}
        </h2>
        <div className="sub-container text-md md:text-md lg:text-lg flex flex-col gap-3">
          <h3 className="text-lg font-semibold font-sans">
            Job Location : {location}
          </h3>

          <h3 className="text-lg font-semibold font-sans">
            Start Date : {startDate}
          </h3>
          <h3 className="text-lg font-semibold font-sans">
            End Date : {endDate}
          </h3>
        </div>
        {/* responsibilities */}
        <div className="collapse bg-[rgb(27,27,55)]">
          <input type="checkbox" />
          <div className="collapse-title text-lg md:text-xl lg:text-xl font-md">
            See Responsibilities
          </div>
          <div className="collapse-content text-lg">
            <ul className="px-5">
              {responsibilities.map((responsibility, index) => (
                <li className="list-disc font-sans" key={index}>
                  {responsibility.text}
                </li>
              ))}
            </ul>

            <h1 className="pt-2  text-md md:text-lg lg:text-lg font-sans">
              <span className="font-semibold">Courses</span> :{" "}
              {courses ? courses : "Not Available"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderExperience;
