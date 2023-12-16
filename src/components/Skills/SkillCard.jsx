import React from "react";

const SkillCard = ({ skill }) => {
  const { id, image, title, description } = skill;
  return (
    <div className="card w-full   shadow-xl  mx-auto">
      <figure>
        <img src={image} alt="Skills" className="w-3/5 mx-auto rounded-lg" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{title}</h2>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
};

export default SkillCard;
