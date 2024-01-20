import React, { useEffect, useState } from "react";

import EducationCard from "./EducationCard";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Container from "../../../utils/container";

const Education = () => {
  const [eduDatas, setEduDatas] = useState([]);
  useEffect(() => {
    fetch("educationData.json")
      .then((res) => res.json())
      .then((data) => setEduDatas(data));
  }, []);
  return (
    <div className="education-container">
      <Container>
        <section>
          <SectionTitle heading={"Education"}></SectionTitle>
        </section>

        <section className="educational-detail">
          <div className="education-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-6">
            {eduDatas.map((singleData) => (
              <EducationCard
                key={singleData.id}
                singleData={singleData}
              ></EducationCard>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Education;
