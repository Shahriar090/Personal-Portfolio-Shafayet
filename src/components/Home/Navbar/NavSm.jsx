import React from "react";

import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink/ActiveLink";
import "./NavStyles/nav.css";

const NavSm = () => {
  const navOptions = (
    <>
      <li className="">
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li className="">
        <ActiveLink to="/projects">Projects</ActiveLink>
      </li>
      <li className="">
        <ActiveLink to="/achievements">Academic Achievements</ActiveLink>
      </li>
      <li className="">
        <ActiveLink to="/contact">Contact</ActiveLink>
      </li>
    </>
  );
  return (
    <nav className="relative">
      <div className="navbar-small w-full h-auto fixed top-0 right-0 left-0 z-50 lg:hidden text-slate-100  bg-[#476987] px-4 py-2">
        <div className="nav-contents flex gap-14 justify-center items-center">
          <div className="drawer z-50 w-3/12 ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <RiMenuLine className="text-2xl text-slate-100"></RiMenuLine>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="flex flex-col items-center gap-6 pt-8 w-60 min-h-full  bg-gradient-custom text-white text-lg uppercase">
                {/* content here */}
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="logo w-full flex items-center justify-start">
            <Link to="/">
              <h1 className="text-xl tracking-wide font-semibold">
                {" "}
                Shafayet Hossain
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
