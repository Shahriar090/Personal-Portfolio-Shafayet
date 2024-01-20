import React from "react";
import Container from "../../utils/container";

const RenderProject = ({ sinPro }) => {
  const { title, year, descriptions, tools, companyAffiliation } = sinPro;
  return (
    <Container>
      <div className="card card-side flex-col md:flex-row lg:flex-row  text-slate-100 shadow-md">
        <div className="card-body p-0 md:p-8 lg:p-8  gap-5">
          <h1>{title}</h1>
          <h2>
            About This Project
            <p className=" pt-3 ">
              <ul className="px-5">
                {descriptions.map((singleItem, index) => (
                  <li className="list-disc font-sans" key={index}>
                    {singleItem.text}
                  </li>
                ))}
              </ul>
            </p>
          </h2>
          <h2 className=" flex flex-col gap-2">
            Used Tools
            <ul className="px-5 text-lg">
              {tools.map((tool, index) => (
                <li className="list-disc font-sans" key={index}>
                  {tool}
                </li>
              ))}
            </ul>
          </h2>
          <h3>
            Company Affiliation :{" "}
            {companyAffiliation ? companyAffiliation : "N/A"}
          </h3>
          <h3>Year : {year}</h3>

          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
        </div>
        {/* <figure className="px-8">
        <img src="" alt="Will be added" />
      </figure> */}
      </div>
    </Container>
  );
};

export default RenderProject;
