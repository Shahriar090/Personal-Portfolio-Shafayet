import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import RenderProject from "./RenderProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="projects-container bg-[rgb(17,17,34)] text-slate-300 px-5 md:px-8 lg:px-20 py-10">
      {/* section title */}
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
    </div>
  );
};

export default Projects;
