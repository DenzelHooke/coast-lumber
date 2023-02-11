import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer">
      <div className="flex footer-inner-wrapper">
        <div className="contact-info">
          <div className="image-container">
            <Image
              src="/coast_lumber_logo.png"
              className="logo"
              alt="logo"
              width={120}
              height={100}
            />
          </div>
        </div>
        <div className="flex footer-navigation-wrapper">
          <ul className="flex ">
            <li className="external">
              <a href="/">HOME</a>
            </li>
            <li className="external">
              <a href="#">ABOUT</a>
            </li>
            <li className="external">
              <a href="#">SERVICES</a>
            </li>
            <li className="external">
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright © 2023 Coast Lumber</p>
    </div>
  );
};

export default Footer;
