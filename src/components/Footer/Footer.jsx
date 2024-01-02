import React from "react";
import SocialIcons from "../Home/Banner/Social-Links/SocialIcons";

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(17,17,34)] border-t-2 border-black text-slate-300 p-8 flex items-center  flex-col md:flex-row lg:flex-row gap-4 justify-between">
      <div className="socials flex gap-4 text-slate-400 text-md md:text-lg lg:text-xl">
        <SocialIcons></SocialIcons>
      </div>
      <div className="copyright">
        <p className="text-sm md:text-md lg:text-md">
          {" "}
          © 2023 - All right reserved | Shafayet Hossain
        </p>
      </div>
    </footer>
  );
};

export default Footer;
