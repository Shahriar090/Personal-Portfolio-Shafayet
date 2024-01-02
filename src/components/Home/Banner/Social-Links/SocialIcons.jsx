import React from "react";
import { FaLinkedin, FaWhatsappSquare, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import "./social-links.css";

const SocialIcons = () => {
  return (
    <div className="social-links-container">
      <ul className="flex  gap-3 text-xl text-slate-300 ">
        {/* Google scholar */}
        <li className="border-2 border-slate-300  p-2 rounded-full hover:text-[#F8B90C]">
          <a href="https://scholar.google.com/citations?user=_fLniNkAAAAJ&hl=en&oi=ao&fbclid=IwAR3t5Nvunh2naiYeG9S2JoCICJrLHNFI9wfSh_D7giNjXb06ZG3G9KOKROg">
            <SiGooglescholar className="rounded-lg"></SiGooglescholar>
          </a>
        </li>
        {/* Linkedin */}
        <li className="border-2 border-slate-300  p-2 rounded-full hover:text-[#F8B90C]">
          <a href="https://www.linkedin.com/in/shafayethossain957/">
            <FaLinkedin className="rounded-lg"></FaLinkedin>
          </a>
        </li>
        {/* Research Gate */}
        <li className="border-2 border-slate-300  p-2 rounded-full hover:text-[#F8B90C]">
          <a href="https://www.researchgate.net/profile/Mohammad-Hossain-146?fbclid=IwAR24FE6lKYT9jhN6ZHZDWbOOyrZ0om4baYlBqTfBG53vV9rBoAuy4b-omc4">
            <FaResearchgate className="rounded-lg"></FaResearchgate>
          </a>
        </li>
        {/* Whatsapp */}
        <li className="border-2 border-slate-300  p-2 rounded-full hover:text-[#F8B90C]">
          <a href="tel:+33-745639099">
            <FaWhatsappSquare className="rounded-lg"></FaWhatsappSquare>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
