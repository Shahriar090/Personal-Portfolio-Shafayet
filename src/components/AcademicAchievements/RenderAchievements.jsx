import React from "react";

const RenderAchievements = ({ singleAchievement }) => {
  const { img, category, achievement, awardedBy, position, year } =
    singleAchievement;
  return (
    <div className="card w-full bg-[rgb(17,17,34)] text-slate-300  shadow-xl">
      <div className="card-body p-4 space-y-1">
        <p className="text-lg uppercase font-sans">{category}</p>
        <h2 className="card-title font-sans uppercase">{achievement}</h2>
        <h2 className="text-lg font-sans">
          Awarded By : {awardedBy ? awardedBy : "N/A"}
        </h2>
        <p className="font-sans text-md">
          Position : {position ? position : "N/A"}
        </p>
        <p className="font-sans text-md">Year : {year ? year : "N/A"}</p>
      </div>
      <picture>
        <img
          src={img}
          alt=""
          className="w-full h-[280px] rounded-md bg-white opacity-90"
        />
      </picture>
    </div>
  );
};

export default RenderAchievements;
