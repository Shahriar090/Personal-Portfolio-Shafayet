import React from "react";
import { Link } from "react-router-dom";

const RenderExperience = ({ experience }) => {
  const {
    id,
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
    <div className="card card-side shadow-lg hover:shadow-slate-300 transition-all duration-300  w-full mx-auto text-slate-100 mt-5 flex flex-col md:flex-row lg:flex-row md:items-center">
      <div className="image flex-[2]">
        <Link className="" to={organizationDetails}>
          <picture>
            <img
              src={organizationImg}
              alt="Image"
              className="w-full md:w-[400px] h-[200px] object-fill bg-white opacity-90 rounded-lg mx-auto my-auto"
            />
          </picture>
        </Link>
      </div>

      <div className="card-body flex-[2]">
        <h1 className="text-2xl font-medium capitalize">
          Designation : {post}
        </h1>
        <h2 className="font-medium">Organization : {organization}</h2>
        <div className="sub-container  flex flex-col gap-2 font-medium">
          <h3>Job Location : {location}</h3>

          <h3>Start Date : {startDate}</h3>
          <h3>End Date : {endDate}</h3>
        </div>
        {/* responsibilities */}
        <div className="mt-2">
          <button
            className="btn-outline"
            onClick={() => document.getElementById(id).showModal()}
          >
            View Responsibilities
          </button>
          <dialog id={id} className="modal">
            <div className="modal-box bg-gradient-custom">
              <ul className="px-5">
                {responsibilities.map((responsibility, index) => (
                  <li className="list-disc font-medium mb-4" key={index}>
                    {responsibility.text}
                  </li>
                ))}
              </ul>

              <p className="pt-2 ">
                <span className="font-medium">Courses</span> :{" "}
                {courses ? courses : "Not Available"}
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn-outline">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default RenderExperience;
