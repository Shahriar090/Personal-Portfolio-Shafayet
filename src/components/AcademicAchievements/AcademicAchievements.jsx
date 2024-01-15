import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import RenderAchievements from "./RenderAchievements";

const AcademicAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    fetch("achievements.json")
      .then((res) => res.json())
      .then((data) => setAchievements(data));
  }, []);
  return (
    <div className="bg-[rgb(17,17,34)] text-slate-300 px-5 md:px-8 lg:px-20 py-10">
      <section>
        <SectionTitle heading={"Academic Achievements"}></SectionTitle>
      </section>
      {/* main section */}
      <section>
        <div className="main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((singleAchievement) => (
            <RenderAchievements
              key={singleAchievement.id}
              singleAchievement={singleAchievement}
            ></RenderAchievements>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AcademicAchievements;
