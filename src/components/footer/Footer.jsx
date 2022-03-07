import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./styles-footer.module.css";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useContext } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
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

const Footer = () => {
  const { languageId, setLanguageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);

  const [age, setAge] = React.useState("EN");

  const handleChange = (event) => {
    setAge(event.target.value);
    switch (event.target.value) {
      case "EN":
        setLanguageId(0);
        break;
      case "HR":
        setLanguageId(1);
        break;
      case "DE":
        setLanguageId(2);
        break;
      default:
        setLanguageId(0);
        break;
    }
    window.scrollTo(0, 0);
  };

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
          <NavLink to="/application-development">{selectedLang.appDev}</NavLink>
          <NavLink to="/expertise">{selectedLang.addOns}</NavLink>
          <NavLink to="/about-us">{selectedLang.aboutUs}</NavLink>
          <NavLink to="/contact">{selectedLang.contactUs}</NavLink>
          <NavLink to="/impressum">Impressum</NavLink>
        </div>
        <div>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Language"
              onChange={handleChange}
              defaultValue="EN"
            >
              <MenuItem value={"EN"}>EN</MenuItem>
              <MenuItem value={"HR"}>HR</MenuItem>
              <MenuItem value={"DE"}>DE</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.copyright_container}>
          <p>&copy; 2022 Web Boutique</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
