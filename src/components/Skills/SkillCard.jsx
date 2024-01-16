import React from "react";

const SkillCard = ({ skill }) => {
  const { id, image, title, description } = skill;
  return (
    <div className="card w-full rounded-md  mx-auto pt-10 flex flex-col items-center shadow-md shadow-slate-400">
      <picture className="w-3/5">
        <img
          src={image}
          alt="Skills"
          className="w-full mx-auto rounded-md bg-white"
        />
      </picture>

      <div className="card-body text-center justify-center items-center">
        <h2>{title}</h2>
        {/* <p className="text-md">{description}</p> */}
      </div>
    </div>
  );
};

export default SkillCard;
