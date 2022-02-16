import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./styles-navbar.css";
import logo from "../../assets/Boutique-removebg-preview.png";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => setshowNav((prevVal) => !prevVal);
  const navigator = useNavigate();

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
        <img src={logo} alt="Logo Picture" onClick={() => navigator("/")} />
      </div>
      {(showNav || screenWidth > 760) && (
        <div className="contents">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
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
