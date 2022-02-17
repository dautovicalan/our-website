import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./styles-navbar.css";
import logo from "../../assets/Boutique-removebg-preview.png";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useContext } from "react";
import languages from "../../assets/languages";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";

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

    return () => {
      window.addEventListener("resize", changeWidth);
    };
  }, []);

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
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
          >
            {navbar.home}
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
          >
            {navbar.services}
          </NavLink>
          <NavLink
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
            to="/about-us"
          >
            {navbar.aboutUs}
          </NavLink>
          <NavLink
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
            to="/contact"
          >
            {navbar.contactUs}
          </NavLink>
          <Button
            variant="outlined"
            startIcon={<LanguageIcon />}
            onClick={() =>
              language.langId === 1
                ? setLanguage(languages.Croatian)
                : setLanguage(languages.English)
            }
            style={showNav || screenWidth > 760 ? { marginBottom: "1em" } : {}}
          >
            Change Language
          </Button>
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
