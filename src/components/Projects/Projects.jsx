import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import RenderProject from "./RenderProject";
import Container from "../../utils/container";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="projects-container ">
      {/* section title */}
      <Container>
        <section>
          <SectionTitle heading={"My Projects"}></SectionTitle>
        </section>
        {/* main content */}
        <section>
          <div className="projects space-y-5">
            {projects.map((sinPro) => (
              <RenderProject key={sinPro.id} sinPro={sinPro}></RenderProject>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Projects;
