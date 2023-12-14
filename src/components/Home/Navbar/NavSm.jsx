import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink/ActiveLink";
import "./NavStyles/nav.css";

const NavSm = () => {
  const navOptions = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <Link>Projects</Link>
      </li>
      <li>
        <Link>Portfolio</Link>
      </li>
      <li>
        <ActiveLink to="/contact">Contact</ActiveLink>
      </li>
    </>
  );
  return (
    <nav className="relative">
      <div className="navbar-small w-full h-auto fixed top-0 right-0 left-0 z-50 lg:hidden text-slate-200 bg-[#0c2461]  px-4 py-2">
        <div className="nav-contents flex gap-14 justify-center items-center">
          <div className="drawer z-50 w-3/12 ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-outline border-0 drawer-button"
              >
                <RiMenuLine className="text-3xl text-white"></RiMenuLine>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-60 min-h-full bg-[#0c2461] text-slate-200 text-2xl">
                {/* Sidebar content here */}
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="logo w-full flex items-center justify-start">
            <Link className="text-xl font-bold">Shafayet Hossain</Link>
          </div>
        </div>
        <div className="search w-full mx-auto py-1 relative">
          <input
            type="text"
            placeholder="Search Here..."
            className="input input-bordered w-full  border-2  border-gray-300  px-9 h-9 rounded-full"
          />
          <div className="nav-search-icon absolute top-3 left-4">
            <IoIosSearch className="text-lg text-slate-500"></IoIosSearch>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
