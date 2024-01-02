import React, { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import RenderExperience from "./RenderExperience";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch("experienceData.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <div className="experience-container bg-[rgb(17,17,34)]  px-5 md:px-8 lg:px-20 ">
      <section>
        <SectionTitle heading={"Experience"}></SectionTitle>
      </section>

      <section>
        <div className="experience-container"></div>
        {experiences.map((experience) => (
          <RenderExperience
            key={experience.id}
            experience={experience}
          ></RenderExperience>
        ))}
      </section>
    </div>
  );
};

export default Experience;
