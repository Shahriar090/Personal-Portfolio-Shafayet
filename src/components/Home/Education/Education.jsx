import React, { useEffect, useState } from "react";

import EducationCard from "./EducationCard";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import SocialIcons from "../Banner/SocialIcons";

const Education = () => {
  const [eduDatas, setEduDatas] = useState([]);
  useEffect(() => {
    fetch("educationData.json")
      .then((res) => res.json())
      .then((data) => setEduDatas(data));
  }, []);
  return (
    <div className="education-container w-full h-auto bg-[rgb(17,17,34)] text-slate-200 px-8 md:px-8 lg:px-20">
      <section className="py-14 md:py-16 lg:py-20">
        <SectionTitle heading={"Education"}></SectionTitle>
      </section>

      <section className="educational-detail">
        <div className="education-data grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
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
