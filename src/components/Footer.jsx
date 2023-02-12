import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            <li>
              <Link className="external" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="external" href="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="external" href="#">
                SERVICES
              </Link>
            </li>
            <li>
              <Link className="external" href="#">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright © 2023 Coast Lumber</p>
    </div>
  );
};

export default Footer;
