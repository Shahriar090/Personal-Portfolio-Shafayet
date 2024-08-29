import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <h1 className="uppercase font-semibold text-3xl  text-center text-slate-100">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
