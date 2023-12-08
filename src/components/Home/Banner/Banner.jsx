import React from "react";
import bannerImg from "../../../assets/shafayet.jpg";

const Banner = () => {
  return (
    <div className="hero w-full h-auto bg-gradient-to-r from-green-950 to-green-900">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5 md:gap-10 lg:gap-20 xl:gap-24 2xl:gap-24">
        <div className="img w-full lg:w-3/4 2xl:w-3/4 h-auto">
          <picture>
            <img src={bannerImg} className="w-full h-auto rounded-lg " />
          </picture>
        </div>
        <div className="w-full lg:w-3/4 2xl:w-3/4 h-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-slate-200">
            Hello, I'm Mohammad Shafayet Hossain
          </h1>
          <p className="py-6 text-2xl lg:text-2xl text-slate-200">
            Eramsus Mundus Master’s graduate possessing high enthusiasm in
            renewable energy with strong background in modern power systems,
            power electronics, design and optimization of microgrids, energy
            storage and global energy market modelling.
          </p>
          <button className="btn btn-outline border-0 border-y-2 uppercase   hover:bg-green-900 text-slate-200">
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
