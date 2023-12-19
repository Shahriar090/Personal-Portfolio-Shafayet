import React from "react";
import bannerImg from "../../../assets/shafayet.jpg";

import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero relative w-full h-auto bg-[rgb(17,17,34)] px-8 md:px-8 lg:px-20">
      <div className="hero-items w-full flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8  items-center justify-center">
        <div className="hero-image w-full">
          <picture>
            <img src={bannerImg} alt="Image Of Shafayet" className="w-full" />
          </picture>
        </div>
        <div className="hero-texts w-full flex flex-col gap-4 md:gap-6 lg:gap-8 text-slate-300">
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            Hello, I am Mohammad Shafayet Hossain
          </h1>
          <p className="text-md md:text-xl lg:text-xl">
            I am an Eramsus Mundus Master’s graduate possessing high enthusiasm
            in renewable energy with strong background in modern power systems,
            power electronics, design and optimization of microgrids, energy
            storage and global energy market modelling.
          </p>
          <div className="resume">
            <Link
              to="https://drive.google.com/file/d/1JJlc6Btxrhn-WiQkim2jVOK6T8jmw0SB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-sm lg:btn-md border-0 border-x-2 rounded-full border-slate-300 btn-outline text-slate-300 hover:bg-[#F8B90C] ">
                View Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* social links */}
      <div className="social-links absolute bottom-0 right-1 md:right-2 lg:right-2 flex flex-col md:flex-row lg:flex-row gap-3 text-lg lg:text-2xl text-slate-300">
        <SocialIcons></SocialIcons>
      </div>
    </div>
  );
};

export default Banner;
