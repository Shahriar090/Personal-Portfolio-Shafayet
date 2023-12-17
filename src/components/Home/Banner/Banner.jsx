import React from "react";
import bannerImg from "../../../assets/shafayet.jpg";

import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero w-full h-auto bg-[#0c2461] px-8 md:px-8 lg:px-20">
      <div className="hero-items relative w-full flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8  items-center justify-center">
        <div className="hero-image w-full">
          <picture>
            <img src={bannerImg} alt="Image Of Shafayet" className="w-full" />
          </picture>
        </div>
        <div className="hero-texts w-full  text-slate-300">
          <h1 className="text-3xl lg:text-5xl">
            Hello, I am Mohammad Shafayet Hossain
          </h1>
          <p className="py-5 text-lg md:text-xl lg:text-xl">
            I am an Eramsus Mundus Master’s graduate possessing high enthusiasm
            in renewable energy with strong background in modern power systems,
            power electronics, design and optimization of microgrids, energy
            storage and global energy market modelling.
          </p>
          <a
            href="https://drive.google.com/file/d/1JJlc6Btxrhn-WiQkim2jVOK6T8jmw0SB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-sm btn-outline text-slate-300 hover:bg-white hover:text-black">
              View Resume
            </button>
          </a>
        </div>
        <div className="social absolute bottom-2 right-2 flex gap-2  text-lg lg:text-2xl text-slate-300">
          <SocialIcons></SocialIcons>
        </div>
      </div>
    </div>
  );
};

export default Banner;
