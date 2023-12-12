import React from "react";
import { NavLink } from "react-router-dom";
import "../NavStyles/nav.css";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
