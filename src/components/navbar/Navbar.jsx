import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./styles-navbar.css";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useContext } from "react";
import { useTransition, animated } from "react-spring";
import Hamburger from "hamburger-react";
import HomeIcon from "@mui/icons-material/Home";
import { IKImage } from "imagekitio-react";
import selectLanguage from "../../functions/SelectLanguage";

const language = {
  english: {
    home: "Home",
    services: "Services",
    aboutUs: "About Us",
    addOns: "Expertise",
    appDev: "Application Development",
    contactUs: "Contact Us",
  },
  croatian: {
    home: "Glavni Izbornik",
    services: "Djelatnosti",
    aboutUs: "O nama",
    addOns: "Stručnost",
    appDev: "Razvoj Aplikacija",
    contactUs: "Kontaktiraj nas",
  },
  german: {
    home: "Home",
    services: "Dienstleistungen",
    aboutUs: "Über uns",
    addOns: "Expertise",
    appDev: "Anwendungsentwicklung",
    contactUs: "Kontaktiere uns",
  },
};

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);

  const navigator = useNavigate();
  const transition = useTransition(showNav, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -100, y: 800, opacity: 0 },
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
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="Boutique-removebg-preview_2f_1WgCxCHx.png"
          width="400"
          onClick={() => navigator("/")}
        />
      </div>
      {screenWidth > 1205 && (
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
            to="/application-development"
          >
            {selectedLang.appDev}
          </NavLink>
          <NavLink
            onClick={() => {
              setshowNav((prevVal) => !prevVal);
            }}
            to="/expertise"
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
        </div>
      )}
      {transition(
        (style, item) =>
          item &&
          screenWidth < 1205 && (
            <animated.div
              style={{ ...style, paddingBottom: "1.2em" }}
              className="contents"
            >
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
                to="/application-development"
              >
                {selectedLang.appDev}
              </NavLink>
              <NavLink
                onClick={() => {
                  setshowNav((prevVal) => !prevVal);
                }}
                to="/expertise"
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
