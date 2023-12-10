import React from "react";
import bannerImg from "../../../assets/shafayet.jpg";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Banner = () => {
  return (
    <div className="hero w-full h-auto bg-gradient-to-tr from-green-950 to-green-900">
      <div className="hero-content relative flex-col lg:flex-row-reverse gap-8">
        <div className="banner-img w-full h-auto">
          <picture>
            <img src={bannerImg} className="w-full rounded-lg " />
          </picture>
        </div>
        <div className="banner-texts w-full h-auto">
          <h1 className="text-5xl font-bold text-slate-300">
            Hello, I am Mohammad Shafayet Hossain
          </h1>
          <p className="py-6 text-slate-200 text-xl">
            Eramsus Mundus Master’s graduate possessing high enthusiasm in
            renewable energy with strong background in modern power systems,
            power electronics, design and optimization of microgrids, energy
            storage and global energy market modelling.
          </p>
          <button className="btn btn-outline  text-slate-200 border-0 border-y-2 hover:bg-green-900 ">
            View Resume
          </button>
        </div>
        <div className="social-icons absolute bottom-5 right-4 lg:left-4 text-slate-300 flex gap-3 text-xl lg:text-2xl">
          <SocialIcons></SocialIcons>
        </div>
      </div>
    </div>
  );
};

export default Banner;
