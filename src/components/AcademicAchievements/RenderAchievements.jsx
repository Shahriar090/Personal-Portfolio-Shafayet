import React from "react";

const RenderAchievements = ({ singleAchievement }) => {
  const { img, category, achievement, awardedBy, position, year } =
    singleAchievement;
  return (
    <div className="card w-full  text-slate-100  shadow-md">
      <div className="card-body p-4 space-y-1">
        <p>{category}</p>
        <h1>{achievement}</h1>
        <h2>Awarded By : {awardedBy ? awardedBy : "N/A"}</h2>
        <p>Year : {year ? year : "N/A"}</p>
      </div>
      <picture className="p-4">
        <img
          src={img}
          alt=""
          className="w-full h-[300px] rounded-lg bg-white opacity-90"
        />
      </picture>
    </div>
  );
};

export default RenderAchievements;
