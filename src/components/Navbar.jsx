import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo-contrainer">
        <img src="/coast_lumber_logo.png" className="logo" />
      </div>
      <ul className="navigation-links">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">CONTACT</a>
      </ul>
    </div>
  );
};

export default Navbar;
