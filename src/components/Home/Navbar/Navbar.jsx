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
        <ActiveLink to="/contact">Contact</ActiveLink>
      </li>
    </>
  );
  return (
    <nav className="relative">
      <div className="nav-large hidden lg:block w-full  h-auto p-4 text-slate-200 bg-[#0c2461] fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="nav-contents flex justify-between px-4">
          <div className="logo">
            <Link className="text-xl">Shafayet Hossain</Link>
          </div>
          <div className="search w-80 relative">
            <input
              type="text"
              placeholder="Search Here..."
              className="input input-bordered w-full border-2 border-gray-300 rounded-full px-9 h-9 text-black"
            />
            <div className="nav-search-icon absolute top-2 left-4">
              <IoIosSearch className="text-lg text-black"></IoIosSearch>
            </div>
          </div>
          <div className="nav-options">
            <ul className="flex gap-5 text-lg">{navOptions}</ul>
          </div>
        </div>
      </div>

      {/* navbar for small device */}
      <NavSm></NavSm>
    </nav>
  );
};

export default Navbar;
