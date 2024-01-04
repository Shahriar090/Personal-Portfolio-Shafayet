import React, { useEffect, useState } from "react";

import EducationCard from "./EducationCard";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Education = () => {
  const [eduDatas, setEduDatas] = useState([]);
  useEffect(() => {
    fetch("educationData.json")
      .then((res) => res.json())
      .then((data) => setEduDatas(data));
  }, []);
  return (
    <div className="education-container bg-[rgb(17,17,34)] text-slate-300 px-5 md:px-8 lg:px-20 py-10">
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
    </div>
  );
};

export default Education;
