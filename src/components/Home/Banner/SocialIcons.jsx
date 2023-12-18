import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaResearchgate,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <>
      <Link
        className="border-y-2 p-1 lg:p-2 rounded-full hover:text-[#F8B90C]"
        to="https://scholar.google.com/citations?user=_fLniNkAAAAJ&hl=en&oi=ao&fbclid=IwAR3t5Nvunh2naiYeG9S2JoCICJrLHNFI9wfSh_D7giNjXb06ZG3G9KOKROg"
      >
        <SiGooglescholar></SiGooglescholar>
      </Link>

      <Link
        className="border-y-2 p-1 lg:p-2 rounded-full hover:text-[#F8B90C]"
        to="https://www.linkedin.com/in/shafayethossain957/"
      >
        <FaLinkedin></FaLinkedin>
      </Link>

      <Link
        className="border-y-2 p-1 lg:p-2 rounded-full hover:text-[#F8B90C]"
        to="https://www.researchgate.net/profile/Mohammad-Hossain-146?fbclid=IwAR24FE6lKYT9jhN6ZHZDWbOOyrZ0om4baYlBqTfBG53vV9rBoAuy4b-omc4"
      >
        <FaResearchgate></FaResearchgate>
      </Link>

      <Link
        className="border-y-2 p-1 lg:p-2 rounded-full hover:text-[#F8B90C]"
        to="tel:+33-745639099"
      >
        <FaWhatsappSquare></FaWhatsappSquare>
      </Link>
    </>
  );
};

export default SocialIcons;
