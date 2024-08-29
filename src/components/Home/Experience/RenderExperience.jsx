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
    <div className="exp-section-wrapper">
      <Link
        className="w-full md:w-3/6 lg:w-2/5 my-auto"
        to={organizationDetails}
      >
        <picture>
          <img src={organizationImg} alt="Image" className="org-img" />
        </picture>
      </Link>

      <div className="card-container">
        <h1>Designation : {post}</h1>
        <h2>Organization : {organization}</h2>
        <div className="sub-container  flex flex-col gap-3">
          <h3>Job Location : {location}</h3>

          <h3>Start Date : {startDate}</h3>
          <h3>End Date : {endDate}</h3>
        </div>
        {/* responsibilities */}
        <div>
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
                  <li className="list-disc font-sans mb-4" key={index}>
                    {responsibility.text}
                  </li>
                ))}
              </ul>

              <p className="pt-2 ">
                <span className="font-semibold">Courses</span> :{" "}
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
