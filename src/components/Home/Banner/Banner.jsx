import React from "react";
import bannerImg from "../../../assets/shafayet.jpg";

import { Link } from "react-router-dom";
import SocialIcons from "./Social-Links/SocialIcons";
import Button from "../../../ui/Button";
import Container from "../../../utils/container";

const Banner = () => {
  return (
    <div className="hero relative w-full h-auto md:h-[500px]">
      <Container>
        <div className="hero-items w-full flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8  items-center justify-center">
          <div className="hero-image w-full max-w-[100%] overflow-hidden">
            <picture>
              <img
                src={bannerImg}
                alt="Image Of Shafayet"
                className="w-full rounded-lg lg:w-3/5 lg:rounded-full lg:hover:rounded-lg transition-all duration-300 hover:scale-125 mx-auto"
              />
            </picture>
          </div>
          <div className="hero-texts w-full flex flex-col gap-5 md:gap-6  text-slate-100">
            <h1 className="text-2xl lg:text-4xl font-medium tracking-wide">
              <span> Hello</span>
              <p>I am Mohammad Shafayet Hossain</p>
            </h1>
            <p className="font-medium">
              I am an Eramsus Mundus Master’s graduate possessing high
              enthusiasm in renewable energy with strong background in modern
              power systems, power electronics, design and optimization of
              microgrids, energy storage and global energy market modelling.
            </p>
            <div className="resume-and-contact flex flex-col lg:flex-row gap-4">
              <Link
                to="https://drive.google.com/file/d/1JJlc6Btxrhn-WiQkim2jVOK6T8jmw0SB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View Resume</Button>
              </Link>
              <Link to="/contact">
                <Button>Contact Now</Button>
              </Link>
            </div>
            {/* social links */}
            <div className="social-links absolute left-2 bottom-0 md:top-[50%]">
              <SocialIcons></SocialIcons>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
