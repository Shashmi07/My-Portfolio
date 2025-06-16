// src/components/Navbar.jsx

import logo from "../assets/TTVLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img className="w-12 h-12 object-contain" src={logo} alt="logo" />
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-base font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 text-lg"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 text-lg"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 text-lg"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/shashmi-amadi-8b0584306/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Shashmi07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>
          <FaSquareXTwitter className="hover:text-cyan-400 cursor-pointer" />
          <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
