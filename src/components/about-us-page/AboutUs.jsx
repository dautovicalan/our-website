import React from "react";
import styles from "./styles-aboutus.module.css";
import reactLogo from "./assets/react-logo.png";
import reactSpringLogo from "./assets/react-spring.png";
import jsLogo from "./assets/js-logo.png";
import twLogo from "./assets/tailwind-logo.png";
import muiLogo from "./assets/mui-logo.png";
import cssLogo from "./assets/css3-logo.png";
import bootstraplogo from "./assets/bootstrap-logo.png";
import officePic from "../../assets/office-aboutus.jpg";
import startupPic from "../../assets/startup-aboutus.jpg";
import teleworkPic from "../../assets/telework-aboutus.jpg";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import { Carousel } from "react-bootstrap";

const AboutUs = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  const { language, setLanguage } = useContext(LanguageContext);
  const { aboutUs } = language;

  return (
    <div className={styles.main_container}>
      <animated.h1
        style={
          ({
            textAlign: "center",
            fontFamily: '"Rajdhani", sans-serif',
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            justifyContent: "center",
          },
          props)
        }
      >
        {aboutUs.firstTitle}
      </animated.h1>
      <div className={styles.text_container_first}>
        <p>{aboutUs.firstSection}</p>
        <p>{aboutUs.secondSection}</p>
      </div>
      <div className={styles.text_container_second}>
        <p>{aboutUs.thirdSection}</p>
        <Carousel style={{ margin: "auto" }}>
          <Carousel.Item>
            <img className="d-block w-100" src={officePic} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={startupPic}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={teleworkPic}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
          <div>
            <img src={bootstraplogo} alt="React Logo" />
          </div>
          <div>
            <img src={cssLogo} alt="React Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
