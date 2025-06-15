import logo from "../assets/TTVLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
      {/* Logo + Site Name */}
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 object-contain" src={logo} alt="logo" />
        
      </div>
     <div className="max-w-6xl mx-auto flex justify-between items-center py-4">
 
  <ul className="flex space-x-8 text-base font-medium text-white">
    <li>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-cyan-400 transition-colors duration-300  text-xl font-semibold"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-cyan-400 transition-colors duration-300 text-xl font-semibold"
      >
        About Me
      </Link>
    </li>
    <li>
      <Link
        to="project"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-cyan-400 transition-colors duration-300 text-xl font-semibold"
      >
        Projects
      </Link>
    </li>
    <li>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-cyan-400 transition-colors duration-300 text-xl font-semibold"
      >
        Contact Me
      </Link>
    </li>
  </ul>
</div>


      {/* Social Icons */}
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shashmi-amadi-8b0584306/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Shashmi07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
