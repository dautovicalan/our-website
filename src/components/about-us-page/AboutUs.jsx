import React from "react";
import styles from "./styles-aboutus.module.css";
import laptopPic from "../../assets/first-pic.jpg";
import reactLogo from "./assets/react-logo.png";
import reactSpringLogo from "./assets/react-spring.png";
import jsLogo from "./assets/js-logo.png";
import twLogo from "./assets/tailwind-logo.png";
import muiLogo from "./assets/mui-logo.png";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";

const AboutUs = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  const { language, setLanguage } = useContext(LanguageContext);
  const { aboutUs } = language;

  return (
    <div className={styles.main_container}>
      <animated.div style={props} className={styles.text_picture_container}>
        <h2>About Us</h2>
        <div className={styles.picture_container}>
          <img src={laptopPic} alt="About Us picture" />
        </div>
      </animated.div>
      <h1>{aboutUs.firstTitle}</h1>
      <div className={styles.text_container_first}>
        <p>{aboutUs.firstSection}</p>
        <p>{aboutUs.secondSection}</p>
      </div>
      <div className={styles.text_container_second}>
        <p>{aboutUs.thirdSection}</p>
        <div className={styles.list_icons}>
          <div>
            <img src={reactLogo} alt="React Logo" />
          </div>
          <div>
            <img src={reactSpringLogo} alt="React Logo" />
          </div>
          <div>
            <img src={jsLogo} alt="React Logo" />
          </div>
          <div>
            <img src={twLogo} alt="React Logo" />
          </div>
          <div>
            <img src={muiLogo} alt="React Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
