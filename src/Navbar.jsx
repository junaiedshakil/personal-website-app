import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center bg-gradient-to-r from-black to-gray-900 text-white p-4 z-50">
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500 font-semibold text-3xl text-3xl font-bold hover:text-blue-400 transition-colors duration-300"
        >
          Junaied
        </Link>
      </div>
      <div className="hidden md:flex gap-9">
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-blue-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          About
        </Link>
        <Link
          to="skill"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-blue-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-blue-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-blue-500 font-bold"
          className="cursor-pointer hover:text-blue-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
