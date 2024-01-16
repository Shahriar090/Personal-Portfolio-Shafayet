import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import NavSm from "./NavSm";
import "./NavStyles/nav.css";
import ActiveLink from "./ActiveLink/ActiveLink";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>

      <li>
        <ActiveLink to="/projects">Projects</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/achievements">Academic Achievements</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact</ActiveLink>
      </li>
    </>
  );
  return (
    <nav className="relative">
      <div className="nav-large hidden lg:block w-full  h-auto max-w-screen-2xl mx-auto px-20 py-3 text-slate-200 bg-[rgb(17,17,34)] fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="nav-contents flex items-center justify-between">
          <div className="logo ">
            <Link to="/" className="text-2xl font-serif">
              Shafayet Hossain
            </Link>
          </div>

          <div id="nav-options" className="nav-options ">
            <ul
              id="nav-options-container"
              className="flex gap-4 text-lg text-slate-300 uppercase"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>

      {/* navbar for small device */}
      <NavSm></NavSm>
    </nav>
  );
};

export default Navbar;
