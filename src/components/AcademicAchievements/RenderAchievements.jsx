import React from "react";

const RenderAchievements = ({ singleAchievement }) => {
  const { img, category, achievement, awardedBy, position, year } =
    singleAchievement;
  return (
    <div className="card w-full bg-[rgb(17,17,34)] text-slate-300  shadow-xl">
      <div className="card-body p-4 space-y-1">
        <p>{category}</p>
        <h1>{achievement}</h1>
        <h2>Awarded By : {awardedBy ? awardedBy : "N/A"}</h2>
        {/* <p className="font-sans text-lg">
          Position : {position ? position : "N/A"}
        </p> */}
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
