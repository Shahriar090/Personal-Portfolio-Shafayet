import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavSm = () => {
  const navOptions = (
    <>
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
    </>
  );
  return (
    <nav className="relative">
      <div className="navbar-small w-full h-auto fixed top-0 right-0 left-0 z-50 lg:hidden text-slate-200 bg-[#130f40]  px-4 py-2">
        <div className="nav-contents flex gap-20 items-center">
          <div className="drawer z-50 w-3/12">
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
              <ul className="menu p-4 w-60 min-h-full bg-[#192a56] text-slate-200 text-2xl">
                {/* Sidebar content here */}
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="logo w-full flex justify-start items-center">
            <Link className="text-xl inline-block font-bold">My Portfolio</Link>
          </div>
        </div>
        <div className="search w-full relative">
          <input
            type="text"
            placeholder="Search Here..."
            className="input input-bordered w-full  border-2  border-gray-300 rounded-lg px-9 h-9"
          />
          <div className="nav-search-icon absolute top-2 left-4">
            <IoIosSearch className="text-lg text-slate-500"></IoIosSearch>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;
