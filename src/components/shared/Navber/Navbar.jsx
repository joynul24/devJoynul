import { Link, NavLink } from "react-router-dom";
import {} from "./Navber.css"

const Navbar = () => {
    const hoverClass = "transition-transform duration-300 hover:-translate-y-1";
  const links = (
    <>
      <li className={hoverClass}>
        <NavLink to="/">About</NavLink>
      </li>
      <li className={hoverClass}>
        <NavLink to="s">Skills</NavLink>
      </li>
      <li className={hoverClass}>
        <NavLink to="s">Projects</NavLink>
      </li>
      <li className={hoverClass}>
        <NavLink to="s">Contact</NavLink>
      </li>
      {/* Resume button for small devices */}
      <li className="block lg:hidden mt-2">
        <button className="btn text-white border-0 hover:scale-108 transition bg-[#FFAF22]">Resume</button>
      </li>
    </>
  );

  return (
    <div className="navbar text-white bg-[#333646] shadow-sm max-w-6xl mx-auto fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        {/* Logo */}
        <Link
          to="/"
          className="roboto text-[#FFAF22] md:text-xl lg:text-2xl font-bold hover:scale-105 transition"
        >
          &lt;Joynul/&gt;
        </Link>
      </div>

      {/* Center menu for large devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex font-medium text-sm gap-6 px-1 inter">{links}</ul>
      </div>

      {/* Right side - dropdown on small, resume on large */}
      <div className="navbar-end">
        {/* Dropdown for mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu inter text-black menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 right-0"
          >
            {links}
          </ul>
        </div>

        {/* Resume button for large devices */}
        <div className="hidden lg:block">
          <button className="roboto btn text-white border-0 bg-[#FFAF22] hover:scale-108 transition">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
