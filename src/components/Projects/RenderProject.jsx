import React from "react";

const RenderProject = ({ sinPro }) => {
  const { title, year, description, tools } = sinPro;
  return (
    <div className="card card-side flex-col md:flex-row lg:flex-row bg-[rgb(17,17,34)] text-slate-300 px-5 md:px-8 lg:px-20 py-10 shadow-xl">
      <div className="card-body gap-4">
        <h2 className="card-title ont-bold text-xl md:text-2xl  lg:text-2xl font-sans">
          {title}
        </h2>
        <h3>
          <span className="font-semibold text-xl font-sans">Description</span>:
          <p className="text-lg font-sans">{description}</p>
        </h3>
        <h3 className="text-lg font-semibold font-sans">
          Tools Used : {tools}
        </h3>
        <h3 className="text-lg font-semibold font-sans">Year : {year}</h3>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
      <figure className="px-8">
        <img src="" alt="Will be added" />
      </figure>
    </div>
  );
};

export default RenderProject;
