import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./styles-footer.module.css";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { navbar } = language;

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
          <NavLink to="/">{navbar.home}</NavLink>
          <NavLink to="/services">{navbar.services}</NavLink>
          <NavLink to="/about-us">{navbar.aboutUs}</NavLink>
          <NavLink to="/contact">{navbar.contactUs}</NavLink>
        </div>
        <div className={styles.copyright_container}>
          <p>&copy; 2022 Web Boutique</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
