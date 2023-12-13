import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h1 className="border-y-2 py-2 md:py-3 lg:py-5 uppercase text-xl md:text-2xl lg:text-4xl font-bold w-3/6 lg:w-3/12 mx-auto text-center text-slate-200">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
