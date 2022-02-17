import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./styles-footer.module.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_items}>
        <div className={styles.social_container}>
          <a href="https://www.facebook.com">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon fontSize="large" />
          </a>
        </div>
        <div className={styles.mini_navbar}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className={styles.copyright_container}>
          <p>&copy; 2022 Web Boutique</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
