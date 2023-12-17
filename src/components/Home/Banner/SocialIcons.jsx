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
      <Link to="https://scholar.google.com/citations?user=_fLniNkAAAAJ&hl=en&oi=ao&fbclid=IwAR3t5Nvunh2naiYeG9S2JoCICJrLHNFI9wfSh_D7giNjXb06ZG3G9KOKROg">
        <SiGooglescholar></SiGooglescholar>
      </Link>
      <Link to="https://www.linkedin.com/in/shafayethossain957/">
        <FaLinkedin></FaLinkedin>
      </Link>
      <Link to="Mohammad_Hossain260">
        <FaResearchgate></FaResearchgate>
      </Link>
      <Link to="tel:+33-745639099">
        <FaWhatsappSquare></FaWhatsappSquare>
      </Link>
    </>
  );
};

export default SocialIcons;
