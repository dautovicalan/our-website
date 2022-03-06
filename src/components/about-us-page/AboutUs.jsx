import React from "react";
import styles from "./styles-aboutus.module.css";
import reactLogo from "./assets/react-logo.png";
import reactSpringLogo from "./assets/react-spring.png";
import jsLogo from "./assets/js-logo.png";
import twLogo from "./assets/tailwind-logo.png";
import muiLogo from "./assets/mui-logo.png";
import cssLogo from "./assets/css3-logo.png";
import bootstraplogo from "./assets/bootstrap-logo.png";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import selectLanguage from "../../functions/SelectLanguage";

const language = {
  english: {
    firstTitle: "Who is behind Web Botique Solutions?",
    firstSection: `We are one young team that turns all your dreams into reality.
      Behind the scenes, we create Web solutions that will improve your business and raise it to an even higher level.
      We specialize in the most modern services on the Internet.
      `,
    secondSection: `Individuality, creativity, meticulousness… are just some of the virtues that adorn our team.
      Our clients are our partners, whom we follow on the way to achieving all your goals.
      From the first Contact with us you get a detailed elaboration of the whole project.`,
    thirdSection: `We are your strong partner on the road to the digital world.`,
  },
  croatian: {
    firstTitle: "Tko stoji iza Web Botique Solutions?",
    firstSection: `Mi smo jedan mladi tim koji sve vase snove pretvara u stvarnost.
      Iza kulisa stvaramo Web rješenja koja će unaprijediti vase poslovanje i dignuti ga na još veći nivo.
      Specijalizirani smo na najmodernije usluge na internetu.
      `,
    secondSection: `Individualnost, kreativnost, pedantnost… samo su jedne od vrlina koje krase nas tim.
      Naši klijenti su naši partneri , koje pratimo na putu ka ostavrivanju svih vaših ciljeva.
      Od prvog Kontakta s nama dobijate detaljnu razradu cijelog projekta.`,
    thirdSection: `Mi smo vaš snažni partner na putu u digitalni svijet.`,
  },
};

const AboutUs = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);

  return (
    <div className={styles.main_container}>
      <animated.h1
        style={
          ({
            fontFamily: '"Rajdhani", sans-serif',
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            justifyContent: "center",
          },
          props)
        }
      >
        {selectedLang.firstTitle}
      </animated.h1>
      <animated.div style={props} className={styles.text_container_first}>
        <p>{selectedLang.firstSection}</p>
        <p>{selectedLang.secondSection}</p>
      </animated.div>
      <animated.div style={props} className={styles.text_container_second}>
        <p>{selectedLang.thirdSection}</p>
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
      </animated.div>
    </div>
  );
};

export default AboutUs;
