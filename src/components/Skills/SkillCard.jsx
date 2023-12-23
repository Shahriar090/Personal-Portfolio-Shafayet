import React from "react";

const SkillCard = ({ skill }) => {
  const { id, image, title, description } = skill;
  return (
    <div className="card w-full shadow-md  rounded-md  mx-auto pt-10 flex flex-col items-center">
      <picture className="w-3/5">
        <img
          src={image}
          alt="Skills"
          className="w-full mx-auto rounded-md bg-white"
        />
      </picture>

      <div className="card-body text-center justify-center items-center">
        <h2 className="card-title justify-center text-xl md:text-2xl lg:text-2xl">
          {title}
        </h2>
        {/* <p className="text-md">{description}</p> */}
      </div>
    </div>
  );
};

export default SkillCard;
