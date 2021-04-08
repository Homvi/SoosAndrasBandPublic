import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link href="#" to="introduction" smooth={true} duration={500}>
        <div className="menu-pont">Bemutatkozás</div>
      </Link>
      <Link to="musicians" smooth={true} duration={500}>
        <div className="menu-pont">Zenekari tagok</div>
      </Link>
      <Link to="footer" smooth={true} duration={500}>
        <div id="contact" className="menu-pont">
          Kapcsolat
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
