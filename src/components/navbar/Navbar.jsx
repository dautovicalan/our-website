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
import { useTransition, animated } from "react-spring";
import Hamburger from "hamburger-react";
import HomeIcon from "@mui/icons-material/Home";
import { fontSize } from "@mui/system";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { language, setLanguage } = useContext(LanguageContext);
  const { navbar } = language;

  const toggleNav = () => setshowNav((prevVal) => !prevVal);
  const navigator = useNavigate();

  const transition = useTransition(showNav, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });

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
      {screenWidth > 760 && (
        <div className="contents">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/"
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
          >
            <HomeIcon style={{ fontSize: "1.5em" }} />
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
      {transition(
        (style, item) =>
          item &&
          screenWidth < 760 && (
            <animated.div style={style} className="contents">
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
                style={
                  showNav || screenWidth > 760 ? { marginBottom: "1em" } : {}
                }
              >
                Change Language
              </Button>
            </animated.div>
          )
      )}
      <div className="menu">
        <Hamburger toggled={showNav} toggle={setshowNav} />
      </div>
    </nav>
  );
};

export default Navbar;
