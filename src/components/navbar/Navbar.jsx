import React from "react";
import { useState, useEffect } from "react";
import "./styles-navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => setshowNav((prevVal) => !prevVal);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    //If you remove component, we do not want to keep addevent listener in memory
    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);
  //https://www.webdesign-muenchen.de/
  return (
    <nav>
      <div className="picture">
        <img src={logo} alt="Logo Picture" />
      </div>
      {(showNav || screenWidth > 760) && (
        <div className="contents">
          <a href="">Agentur</a>
          <a href="">Leistungen</a>
          <a href="">Cases</a>
          <a href="">Jobs</a>
          <a href="">Kontakt</a>
        </div>
      )}
      <div className="menu">
        <svg viewBox="0 0 100 80" width="40" height="40" onClick={toggleNav}>
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
