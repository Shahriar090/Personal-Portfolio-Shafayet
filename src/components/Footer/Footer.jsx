import React from "react";
import SocialIcons from "../Home/Banner/Social-Links/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full  text-slate-100 p-8 flex items-center  flex-col md:flex-row lg:flex-row gap-4 justify-between">
      <div className="socials flex gap-4 text-slate-400 text-md md:text-lg lg:text-xl">
        <SocialIcons></SocialIcons>
      </div>
      <div className="copyright">
        <p className="text-sm md:text-md lg:text-md">
          {" "}
          © {currentYear} - All rights reserved | Shafayet Hossain
        </p>
      </div>
    </footer>
  );
};

export default Footer;
