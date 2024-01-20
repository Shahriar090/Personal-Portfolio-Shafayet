import React, { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import RenderExperience from "./RenderExperience";
import Container from "../../../utils/container";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch("experienceData.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <div className="experience-container">
      <Container>
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
      </Container>
    </div>
  );
};

export default Experience;
