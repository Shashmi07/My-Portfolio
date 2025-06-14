import logo from "../assets/TTVLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
      {/* Logo + Site Name */}
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 object-contain" src={logo} alt="logo" />
        
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
