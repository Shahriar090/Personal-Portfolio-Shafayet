import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import RenderAchievements from "./RenderAchievements";
import Container from "../../utils/container";

const AcademicAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    fetch("achievements.json")
      .then((res) => res.json())
      .then((data) => setAchievements(data));
  }, []);
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default AcademicAchievements;
