import React from "react";
import Image from "next/image";
import Employees from "../components/Employees";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef();
  const pageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 100,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      id="about-page-wrapper"
      ref={ref}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="global-container">
        <div className="intro">
          <h1 className="heading reg-text center-text bold">
            Sawdust and Success: Our Team
          </h1>
          <div className="flex flex-wrap">
            <div className="flex-column about-text-container">
              <h2 className="reg-text">Homestead</h2>
              <p className="about-text">
                As a family of 6 builders, we started Coast Lumber with the goal
                of providing high-quality building materials and exceptional
                service. Our hard work and dedication have paid off, and
                we&apos;re proud to say that we&apos;ve created a successful
                family business. We&apos;re passionate about what we do and are
                committed to maintaining our reputation for quality and
                reliability. Every project we work on is a testament to our love
                for the trade and our commitment to excellence.
              </p>
            </div>
            <div className="image-container">
              <Image
                src="/assets/lumber_yard.jpg"
                width={1000}
                height={800}
                alt="Lumber yard"
              />
            </div>
          </div>
        </div>
      </div>
      <Employees />
    </motion.div>
  );
};

export default About;
