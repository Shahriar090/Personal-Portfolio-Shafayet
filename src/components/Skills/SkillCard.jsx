import React from "react";

const SkillCard = ({ skill }) => {
  const { id, image, title, description } = skill;
  return (
    <div className="card w-full max-w-xs rounded-md shadow-lg hover:shadow-slate-300 transition-all duration-300  mx-auto pt-10 flex flex-col items-center">
      <picture>
        <img
          src={image}
          alt="Skills"
          className="w-full object-fill h-[200px] mx-auto rounded-md bg-white"
        />
      </picture>

      <div className="card-body text-center justify-center items-center gap-1">
        <h2 className="uppercase font-medium text-lg">{title}</h2>
        <p className="text-sm line-clamp-3 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
