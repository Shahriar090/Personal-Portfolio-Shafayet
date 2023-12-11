import React from "react";
import kthImg from "../../../assets/Education/KTH_Royal.png";
import loraineImg from "../../../assets/Education/Loraine-University.png";
import nsuImg from "../../../assets/Education/North_South.png";

const Education = () => {
  return (
    <div className="bg-base-200">
      <section className="pt-8 lg:pt-20">
        <h1 className="text-3xl font-semibold text-center uppercase">
          Education
          <span className="divider w-2/4 mx-auto"></span>
          <span className="divider w-2/4 mx-auto"></span>
        </h1>
      </section>

      <section className="educational-details px-3 lg:px-4 pt-10">
        <div className="university-container ">
          {/* Kth university */}
          <div className="kth flex flex-col lg:flex-row items-center  justify-between border-b-2">
            <div className="img w-full lg:w-4/12">
              <picture>
                <img src={kthImg} alt="KTH Royal" className="w-full lg:w-3/5" />
              </picture>
            </div>
            <div className="texts w-full lg:w-3/6">
              <h1 className="text-xl lg:text-3xl py-3 ">
                <span className="font-bold">Institution</span> : KTH Royal
                Institute of Technology, Sweden{" "}
              </h1>
              <h2 className="text-xl lg:text-2xl">
                MS in Global Energy Market Optimization
              </h2>
              <h3 className="py-3">
                <span className="font-bold">Start Date</span> : August, 2023
              </h3>
              <h3>
                <span className="font-bold">End Date</span> : Will Be Added Soon
              </h3>
            </div>
          </div>
          {/* loraine University */}
          <div className="loraine flex flex-col lg:flex-row items-center  justify-between border-b-2 mt-5">
            <div className="img w-full lg:w-4/12">
              <picture>
                <img
                  src={loraineImg}
                  alt="University Of Loraine"
                  className="w-full lg:w-3/5"
                />
              </picture>
            </div>
            <div className="texts w-full lg:w-3/6">
              <h1 className="text-xl lg:text-3xl py-3 ">
                <span className="font-bold">Institution</span> : University of
                Lorraine, France
              </h1>
              <h2 className="text-xl lg:text-2xl">
                MS in Decentralised Smart Energy Systems
              </h2>
              <h3 className="py-3">
                <span className="font-bold">Start Date</span> : August 2022
              </h3>
              <h3>
                <span className="font-bold">End Date</span> : July 2023
              </h3>
              <p className="pt-3">
                <span className="font-bold">CGPA</span> : 4/4 (17/20)
              </p>
            </div>
          </div>
          {/* North South University*/}
          <div className="nsu flex flex-col lg:flex-row items-center  justify-between border-b-2 mt-5">
            <div className="w-full lg:w-4/12">
              <picture>
                <img
                  src={nsuImg}
                  alt="North South University"
                  className="w-full lg:w-3/5"
                />
              </picture>
            </div>
            <div className="texts w-full lg:w-3/6">
              <h1 className="text-xl lg:text-3xl py-3 ">
                <span className="font-bold">Institution</span> : North South
                University, Bangladesh
              </h1>
              <h2 className="text-xl lg:text-2xl">
                BS in Electrical and Electronic Engineering
              </h2>
              <h3 className="py-3">
                <span className="font-bold">Start Date</span> : 2014
              </h3>
              <h3>
                <span className="font-bold">End Date</span> : 2018
              </h3>
              <p className="pt-3">
                <span className="font-bold">CGPA</span> : 3.56/4.00 (90%)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
