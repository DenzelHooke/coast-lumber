import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        {children}
        <Footer />
      </div>
      {/* Created with love by Denzel Hooke */}
    </>
  );
};

export default Layout;
