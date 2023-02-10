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
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
