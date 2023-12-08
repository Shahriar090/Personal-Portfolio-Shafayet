import { Link, NavLink } from "react-router-dom";
import { MdClose, MdMenuOpen } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li></li>
      <li>
        <Link>Portfolio</Link>
      </li>
      <li>
        <Link>Testimonials</Link>
      </li>
      <li>
        <Link>Awards And Certifications</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-green-900">
      <div className="navbar-start">
        {/* drawer */}
        <div className="drawer lg:hidden z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-outline border-0 text-4xl drawer-button text-slate-200"
            >
              <MdMenuOpen></MdMenuOpen>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-6 w-80 min-h-full bg-green-950  uppercase text-2xl text-slate-200 ">
              {/* Sidebar content here */}
              {navOptions}
            </ul>
          </div>
        </div>
        <div className="title w-full">
          <Link className="text-2xl text-slate-200">My Portfolio</Link>
        </div>
      </div>
      <div id="nav-lg-options" className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl uppercase text-slate-200">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-9/12 max-w-xs"
        />
      </div>
    </nav>
  );
};

export default Navbar;
