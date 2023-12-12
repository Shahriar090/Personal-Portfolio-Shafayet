import React, { useEffect, useState } from "react";

import RelevantCourse from "./RelevantCourse/RelevantCourse";
import EducationCard from "./EducationCard";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Education = () => {
  const [eduDatas, setEduDatas] = useState([]);
  useEffect(() => {
    fetch("/public/educationData.json")
      .then((res) => res.json())
      .then((data) => setEduDatas(data));
  }, []);
  return (
    <div className="bg-[#142757] text-slate-200">
      <section className="py-10 lg:py-20">
        <SectionTitle heading={"Education"}></SectionTitle>
      </section>

      <section className="educational-detail">
        <div className="education-data grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-0">
          {eduDatas.map((singleData) => (
            <EducationCard
              key={singleData.id}
              singleData={singleData}
            ></EducationCard>
          ))}
        </div>
      </section>

      <section className="py-10 lg:py-20">
        <SectionTitle heading={"Relevant Course Works"}></SectionTitle>
        <div className="courses">{/* <RelevantCourse></RelevantCourse> */}</div>
      </section>
    </div>
  );
};

export default Education;
