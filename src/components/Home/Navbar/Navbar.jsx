import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import NavSm from "./NavSm";
import "./NavStyles/nav.css";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="nav-large hidden lg:block w-full max-w-screen-xl mx-auto h-auto p-4 bg-gray-300 fixed top-0 left-0 right-0 z-50">
        <div className="nav-contents flex justify-between px-4">
          <div className="logo">
            <Link className="text-xl">My Portfolio</Link>
          </div>
          <div className="search w-80 relative">
            <input
              type="text"
              placeholder="Search Here..."
              className="input input-bordered w-full border-2 border-gray-300 rounded-lg px-9 h-9"
            />
            <div className="nav-search-icon absolute top-2 left-4">
              <IoIosSearch className="text-lg text-slate-500"></IoIosSearch>
            </div>
          </div>
          <div className="nav-options">
            <ul className="flex gap-5 text-lg">
              <li>
                <NavLink className="active">Home</NavLink>
              </li>
              <li>
                <NavLink>Projects</NavLink>
              </li>
              <li>
                <NavLink>Portfolio</NavLink>
              </li>
              <li>
                <NavLink>Contact</NavLink>
              </li>
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
