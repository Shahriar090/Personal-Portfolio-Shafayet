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
      <Link>
        <FaFacebookSquare></FaFacebookSquare>
      </Link>
      <Link>
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
