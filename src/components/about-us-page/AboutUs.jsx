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
    firstSection: `Mi smo jedan mladi tim koji sve Vaše snove pretvara u stvarnost.
      Iza kulisa stvaramo Web rješenja koja će unaprijediti Vaše poslovanje i dignuti ga na još veći nivo.
      Specijalizirani smo na najmodernije usluge na internetu.
      `,
    secondSection: `Individualnost, kreativnost, pedantnost… samo su jedne od vrlina koje krase nas tim.
      Naši klijenti su naši partneri , koje pratimo na putu ka ostavrivanju svih Vaših ciljeva.
      Od prvog kontakta s nama dobijate detaljnu razradu cijelog projekta.`,
    thirdSection: `Mi smo Vaš snažni partner na putu u digitalni svijet.`,
  },
  german: {
    firstTitle: "Wer steckt hinter Web Botique Solutions?",
    firstSection: `Wir sind ein junges Team, das alle Ihre Träume wahr werden lässt. Hinter den Kulissen erstellen wir Weblösungen, die Ihr Geschäft verbessern und auf ein noch höheres Niveau heben. Wir sind spezialisiert auf die modernsten Dienste im Internet.
      `,
    secondSection: `Individualität, Kreativität, Akribie… sind nur einige der Tugenden, die unser Team auszeichnen. Unsere Kunden sind unsere Partner, denen wir auf dem Weg zur Erreichung alle Ihrer Ziele folgen. Ab dem ersten Kontakt mit uns erhalten Sie eine detaillierte Ausarbeitung des gesamten Projekts.`,
    thirdSection: `Wir sind Ihr starker Partner auf dem Weg in die digitale Welt.`,
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
            <img src={reactLogo} alt="React JS Framework Logo" />
          </div>
          <div>
            <img src={reactSpringLogo} alt="React Logo" />
          </div>
          <div>
            <img src={jsLogo} alt="JavaScript Programming Language Logo" />
          </div>
          <div>
            <img src={twLogo} alt="Tailwind Libary Logo" />
          </div>
          <div>
            <img src={muiLogo} alt="MUI Components Logo" />
          </div>
          <div>
            <img src={bootstraplogo} alt="Bootstrap Libary Logo" />
          </div>
          <div>
            <img src={cssLogo} alt="CSS Styles Logo" />
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default AboutUs;
