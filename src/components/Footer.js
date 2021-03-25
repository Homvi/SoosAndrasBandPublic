import React from "react";
import NKAlogo from "../img/NKAlogo.png";
import halmosBelaProgramLogo from "../img/halmos-bela-program-logo.png";
import "./Footer.scss"

const Footer = () => {
  return <div id="footer">
    <img src={halmosBelaProgramLogo} alt=""/><img src={NKAlogo} alt="NKA"/>
  </div>;
};

export default Footer;
