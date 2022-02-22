import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./styles-footer.module.css";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useContext } from "react";

const language = {
  english: {
    navbar: {
      home: "Home",
      services: "Services",
      aboutUs: "About Us",
      addOns: "Add Ons",
      contactUs: "Contact Us",
    },
  },
  croatian: {
    navbar: {
      home: "Glavni Izbornik",
      services: "Djelatnosti",
      aboutUs: "O nama",
      contactUs: "Kontaktiraj nas",
    },
  },
};

const Footer = () => {
  const { languageId, setLanguageId } = useContext(LanguageContext);
  let selectedLang = languageId === 0 && language.english.navbar;

  return (
    <footer>
      <div className={styles.footer_items}>
        <div className={styles.social_container}>
          <a href="https://www.facebook.com/webboutiquesolutions">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/webboutiquesolutions/">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://twitter.com/WebBoutiqueSol">
            <TwitterIcon fontSize="large" />
          </a>
        </div>
        <div className={styles.mini_navbar}>
          <NavLink to="/">{selectedLang.home}</NavLink>
          <NavLink to="/services">{selectedLang.services}</NavLink>
          <NavLink to="/about-us">{selectedLang.aboutUs}</NavLink>
          <NavLink to="/contact">{selectedLang.contactUs}</NavLink>
        </div>
        <div className={styles.copyright_container}>
          <p>&copy; 2022 Web Boutique</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
