import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [displayNav, setDisplayNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const _mobile_page_width = 660;
  let oldScrollVal;

  const navbarDisplay = () => {
    if (isMobile) {
      setDisplayNav(true);
      return;
    }
    console.log("MOBILE: ", isMobile, "\n");
    const newScrollVal = window.pageYOffset;

    if (newScrollVal > oldScrollVal) {
      console.log("scrolling down");
      setDisplayNav(false);
    } else {
      setDisplayNav(true);
      console.log("scrolling up");
    }
    oldScrollVal = newScrollVal;
  };

  const onResize = () => {
    checkIsMobile();
  };

  const checkIsMobile = () => {
    if (isMobile) {
      setDisplayNav(true);
      return;
    }
    const bodyScrollWidth = document.body.scrollWidth;
    if (bodyScrollWidth <= _mobile_page_width) {
      setIsMobile(true);
      console.log("Is mobile");
    } else {
      setIsMobile(false);
      console.log("Not Mobile");
    }
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", navbarDisplay);
  }, [isMobile]);

  const navbarVariant = {
    // initial: {
    //   y: 0,
    // },
    hide: {
      y: displayNav ? 0 : "-100%",
      transition: {
        type: "tween",
        // stiffness: 400,
        duration: 0.6,
      },
    },
  };

  const childVariant = {
    // initial: {
    //   scale: 1,
    // },
    hide: {
      scale: displayNav ? 1 : 0.8,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <div className="nav-mobile-btn">X</div>
      <motion.nav
        id="navbar"
        className=""
        variants={navbarVariant}
        initial="initial"
        animate="hide"
      >
        <motion.div className="logo-contrainer" variants={childVariant}>
          <Image
            src="/coast_lumber_logo.png"
            className="small-logo"
            alt="logo"
            width={150}
            height={100}
          />
        </motion.div>
        <motion.ul className="navigation-links" variants={childVariant}>
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
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
