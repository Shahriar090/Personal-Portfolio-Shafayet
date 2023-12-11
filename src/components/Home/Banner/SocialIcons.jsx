import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <>
      <Link to="https://www.facebook.com/shawonshafayet">
        <FaFacebookSquare></FaFacebookSquare>
      </Link>

      <Link to="https://www.linkedin.com/in/shafayethossain957/">
        <FaLinkedin></FaLinkedin>
      </Link>

      <Link>
        <FaWhatsappSquare></FaWhatsappSquare>
      </Link>

      <Link>
        <FaGithubSquare></FaGithubSquare>
      </Link>
    </>
  );
};

export default SocialIcons;
