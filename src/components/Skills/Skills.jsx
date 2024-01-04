import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    fetch("skillsData.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills data:", error));
  }, []);

  if (!skills || !skills["programming Languages"]) {
    return null;
  }

  return (
    <div className="bg-[rgb(17,17,34)] text-slate-300 px-5 md:px-8 lg:px-20">
      <section>
        <SectionTitle heading={"Skills"}></SectionTitle>
      </section>

      <section>
        <div className="category-container">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center uppercase">
            Programming Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {skills["programming Languages"].map((skill) => (
              <SkillCard key={skill.id} skill={skill}></SkillCard>
            ))}
          </div>
        </div>

        {Object.keys(skills)
          .filter((category) => category !== "programming Languages")
          .map((category) => (
            <div
              key={category}
              className={`category-container ${showAllSkills ? "" : "hidden"}`}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold py-10 text-center  uppercase">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
                {skills[category].map((skill) => (
                  <SkillCard key={skill.id} skill={skill}></SkillCard>
                ))}
              </div>
            </div>
          ))}
        <div className="text-center py-6">
          <button
            onClick={() => setShowAllSkills((prev) => !prev)}
            className="btn btn-outline text-slate-300 hover:bg-[#F8B90C] "
          >
            {showAllSkills ? "Show Less" : "Show All Skills"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Skills;
