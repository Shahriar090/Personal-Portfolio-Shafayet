import React from "react";

const RenderProject = ({ sinPro }) => {
  const { title, year, descriptions, tools, companyAffiliation } = sinPro;
  return (
    <div className="card card-side flex-col md:flex-row lg:flex-row bg-[rgb(17,17,34)] text-slate-300 px-5 md:px-8 lg:px-20 py-10 shadow-md shadow-slate-400">
      <div className="card-body p-0 md:p-8 lg:p-8  gap-5">
        <h1 className="card-title font-bold text-xl md:text-2xl  lg:text-3xl font-sans uppercase">
          {title}
        </h1>
        <h3>
          <span className="font-semibold  text-lg md:text-xl  lg:text-2xl  underline underline-offset-2">
            About This Project
          </span>
          <p className="text-lg md:text-xl lg:text-xl pt-3 ">
            <ul className="px-5">
              {descriptions.map((singleItem, index) => (
                <li className="list-disc font-sans" key={index}>
                  {singleItem.text}
                </li>
              ))}
            </ul>
          </p>
        </h3>
        <h3 className=" flex flex-col gap-2">
          <span className="font-semibold  text-lg md:text-xl  lg:text-2xl  underline underline-offset-2">
            Used Tools
          </span>
          <ul className="px-5 text-lg md:text-xl lg:text-xl">
            {tools.map((tool, index) => (
              <li className="list-disc font-sans" key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </h3>
        <h3 className="font-semibold  text-lg  font-sans">
          Company Affiliation :{" "}
          {companyAffiliation ? companyAffiliation : "N/A"}
        </h3>
        <h3 className="font-semibold  text-lg  font-sans">Year : {year}</h3>

        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
      {/* <figure className="px-8">
        <img src="" alt="Will be added" />
      </figure> */}
    </div>
  );
};

export default RenderProject;
