import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./styles-navbar.css";
import logo from "../../assets/Boutique-removebg-preview.png";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useContext } from "react";
import languages from "../../assets/languages";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { language, setLanguage } = useContext(LanguageContext);
  const { navbar } = language;

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
            {navbar.home}
          </NavLink>
          <NavLink to="/services">{navbar.services}</NavLink>
          <NavLink to="/about-us">{navbar.aboutUs}</NavLink>
          <NavLink to="/contact">{navbar.contactUs}</NavLink>
          <button
            onClick={() =>
              language.langId === 1
                ? setLanguage(languages.Croatian)
                : setLanguage(languages.English)
            }
          >
            Change Language
          </button>
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
