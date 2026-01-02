import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center bg-gradient-to-r from-black to-gray-900 text-white p-4 z-50">
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer font-bold text-3xl hover:text-blue-400 transition-colors duration-300"
          onClick={() => setNavOpen(false)}
        >
          Junaied
        </Link>
      </div>

      <div className="hidden md:flex gap-9">
        {["about", "skill", "portfolio", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-blue-500 font-bold"
            className="cursor-pointer hover:text-blue-500 capitalize"
          >
            {section}
          </Link>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-2xl focus:outline-none"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {navOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-6 gap-6 md:hidden z-40">
          {["about", "skill", "portfolio", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-blue-500 font-bold"
              className="cursor-pointer text-lg hover:text-blue-500 capitalize"
              onClick={() => setNavOpen(false)}
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
