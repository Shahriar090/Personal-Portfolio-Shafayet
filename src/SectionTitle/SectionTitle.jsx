import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <h1 className="border-b-2 border-slate-400 rounded-full py-2 md:py-3 lg:py-3 uppercase font-bold text-lg md:text-2xl lg:text-3xl w-full  md:w-3/6 lg:w-3/12 mx-auto text-center text-slate-300">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
