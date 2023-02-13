import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const { isMobile, setIsMobile } = useState(false);

  return (
    <>
      <div className="nav-mobile-btn">X</div>
      <div id="navbar" className="">
        <div className="logo-contrainer">
          <Image
            src="/coast_lumber_logo.png"
            className="small-logo"
            alt="logo"
            width={150}
            height={100}
          />
        </div>
        <ul className="navigation-links">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="#">SERVICES</Link>
          </li>
          <li>
            <Link href="#">CONTACT</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
