import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import NavSm from "./NavSm";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-large hidden lg:block w-full h-auto p-4 bg-white shadow-xl">
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
            <ul className="flex gap-4 text-lg">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Projects</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Contact</Link>
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
