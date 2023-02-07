import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo-contrainer">
        <Image
          src="/coast_lumber_logo.png"
          className="logo"
          alt="logo"
          width={150}
          height={100}
        />
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
