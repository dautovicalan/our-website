import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
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

const language = {
  english: {
    navbar: {
      home: "Home",
      services: "Services",
      aboutUs: "About Us",
      addOns: "Expertise",
      contactUs: "Contact Us",
    },
  },
  croatian: {
    navbar: {
      home: "Glavni Izbornik",
      services: "Djelatnosti",
      aboutUs: "O nama",
      addOns: "Stručnost",
      contactUs: "Kontaktiraj nas",
    },
  },
};

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { languageId, setLanguageId } = useContext(LanguageContext);
  let selectedLang = languageId === 0 && language.english.navbar;

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
        <img
          src={logo}
          alt="Web Boutique Solutions Logo"
          onClick={() => navigator("/")}
        />
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
            {selectedLang.services}
          </NavLink>
          <NavLink
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
            to="/about-us"
          >
            {selectedLang.aboutUs}
          </NavLink>
          <NavLink
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
            to="/add-ons"
          >
            {selectedLang.addOns}
          </NavLink>
          <NavLink
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
            to="/contact"
          >
            {selectedLang.contactUs}
          </NavLink>
          <Button
            variant="outlined"
            startIcon={<LanguageIcon />}
            onClick={() =>
              language.langId === 0 ? setLanguageId(1) : setLanguageId(0)
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
                {selectedLang.home}
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => {
                  setshowNav((prevVal) => !prevVal);
                }}
              >
                {selectedLang.services}
              </NavLink>
              <NavLink
                onClick={() => {
                  setshowNav((prevVal) => !prevVal);
                }}
                to="/about-us"
              >
                {selectedLang.aboutUs}
              </NavLink>
              <NavLink
                onClick={() => {
                  setshowNav((prevVal) => !prevVal);
                }}
                to="/add-ons"
              >
                {selectedLang.addOns}
              </NavLink>
              <NavLink
                onClick={() => {
                  setshowNav((prevVal) => !prevVal);
                }}
                to="/contact"
              >
                {selectedLang.contactUs}
              </NavLink>
              <Button
                variant="outlined"
                startIcon={<LanguageIcon />}
                onClick={() =>
                  language.langId === 0 ? setLanguageId(1) : setLanguageId(0)
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
