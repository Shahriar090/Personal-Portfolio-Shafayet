import React from "react";
import Container from "../../utils/container";

const RenderProject = ({ sinPro }) => {
  const { title, year, descriptions, tools, companyAffiliation } = sinPro;
  return (
    <Container>
      <div className="proj-card-wrapper">
        <div className="proj-card-body">
          <h1 className="text-2xl font-medium capitalize">{title}</h1>
          <h2 className="font-medium">About This Project</h2>
          <p className=" pt-3 ">
            <ul className="px-5">
              {descriptions.map((singleItem, index) => (
                <li className="list-disc font-sans py-1" key={index}>
                  {singleItem.text}
                </li>
              ))}
            </ul>
          </p>
          <h2 className="font-medium">Used Tools</h2>
          <ul className="px-5 text-lg">
            {tools.map((tool, index) => (
              <li className="list-disc font-sans" key={index}>
                {tool}
              </li>
            ))}
          </ul>
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
