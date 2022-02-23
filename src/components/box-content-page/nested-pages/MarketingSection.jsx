import React, { useContext } from "react";
import style from "./styles-marketing.module.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupsIcon from "@mui/icons-material/Groups";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useSpring, animated } from "react-spring";
import LanguageContext from "../../../context/LanguageContext";

const language = {
  english: {
    marketing: {
      firstSection:
        "Webboutique helps you improve Marketing. Today, that expression has become a philosophy unto itself. We have the answer to every challenge. With you, we are designing a new marketing strategy, regardless of the industry.",
      secondSection:
        "Does your target audience take advantage of social media? No problem. We help Corporate to present you on social media in a special way. In addition to paying great attention to existing followers, we also pay special attention to our special campaigns to win the heart.",
      thirdSection:
        "We also do analyzes that help bring your clients' wishes closer to your way of doing business. At the same time, our analyzes are based on the latest market trends that we want to implement in your way of working, and in this way we reach new users of your services.",
    },
  },
  croatian: {
    marketing: {
      firstSection:
        "Webboutique vam pomaze u unaprijedenju Marketinga. Danas je taj izraz postao filozofija za sebe. Mi imamo odgovor za svaki izazov. S vAma koncipiramo novu marketinšku strategiju bez obzira o kojoj se branši radi.",
      secondSection:
        "Vasa Target skupina najviše koristi Socijalne mreze? Nema problema. Mi vam pomažemo vas Corporate na društvenim mrežama prezentirati na jedan poseban način. Osim sto pridodajemo ogromnu pažnju postojećim Folowerima , mi također našim specijalnim kampanjama osvajača srca novih.",
      thirdSection:
        "Mi radimo i analize koje pomažu da želje vaših klijenata približimo vašem načinu poslovanja. Ujedno naše se analize baziraju i na najnovije trendove na tržištu koje želimo implementirati u vas način rada te na taj način dolazimo i do novih korisnika vaših usluga",
    },
  },
};

const MarketingSection = () => {
  const { languageId, setLanguageId } = useContext(LanguageContext);
  let selectedLang = languageId === 0 && language.english.marketing;

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });
  return (
    <animated.div className={style.main_container} style={props}>
      <h1>Marketing</h1>
      <div className={style.main_container_item}>
        <div>
          <TimelineIcon />
        </div>
        <p>{selectedLang.firstSection}</p>
      </div>
      <div className={style.main_container_item}>
        <div>
          <GroupsIcon />
        </div>
        <p>{selectedLang.secondSection}</p>
      </div>
      <div className={style.main_container_item}>
        <div>
          <FactCheckIcon />
        </div>
        <p>{selectedLang.thirdSection}</p>
      </div>
    </animated.div>
  );
};

export default MarketingSection;
