import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div id="comment">Created with love by Denzel Hooke</div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
