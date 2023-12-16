import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skillsData.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="bg-[#0c2461] text-slate-200 px-8 md:px-8 lg:px-20">
      <section className="py-10 lg:py-20">
        <SectionTitle heading={"Skills"}></SectionTitle>
      </section>

      <section>
        {Object.keys(skills).map((category) => (
          <div key={category} className="category-container">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold py-12 text-center underline uppercase ">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills[category].map((skill) => (
                <SkillCard key={skill.id} skill={skill}></SkillCard>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
