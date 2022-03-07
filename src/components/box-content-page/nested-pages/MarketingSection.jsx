import React, { useContext } from "react";
import style from "./styles-marketing.module.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupsIcon from "@mui/icons-material/Groups";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../../context/LanguageContext";
import selectLanguage from "../../../functions/SelectLanguage";

const language = {
  english: {
    firstSection:
      "Web Boutique helps you improve Marketing. Today, that expression has become a philosophy unto itself. We have the answer to every challenge. With you, we are designing a new marketing strategy, regardless of the industry.",
    secondSection:
      "Does your target audience take advantage of social media? No problem. We help Corporate to present you on social media in a special way. In addition to paying great attention to existing followers, we also pay special attention to our special campaigns to win the heart.",
    thirdSection:
      "We also do analyzes that help bring your clients' wishes closer to your way of doing business. At the same time, our analyzes are based on the latest market trends that we want to implement in your way of working, and in this way we reach new users of your services.",
  },
  croatian: {
    firstSection:
      "Web Boutique Vam pomaže u unaprijeđenju marketinga. Danas je taj izraz postao filozofija za sebe. Mi imamo odgovor za svaki izazov. S Vama koncipiramo novu marketinšku strategiju bez obzira o kojoj se branši radi.",
    secondSection:
      "Vaša Target skupina najviše koristi Socijalne mreže? Nema problema. Mi Vam pomažemo Vas Corporate na društvenim mrežama prezentirati na jedan poseban način. Osim što pridodajemo ogromnu pažnju postojećim Folowerima , mi također našim specijalnim kampanjama osvajača srca novih.",
    thirdSection:
      "Mi radimo i analize koje pomažu da želje Vaših klijenata približimo Vašem načinu poslovanja. Ujedno naše se analize baziraju i na najnovije trendove na tržištu koje želimo implementirati u Vaš način rada te na taj način dolazimo i do novih korisnika Vaših usluga",
  },
  german: {
    firstSection:
      "Web Boutique hilft Ihnen, das Marketing zu verbessern. Heute ist dieser Ausdruck zu einer eigenen Philosophie geworden. Wir haben die Antwort auf jede Herausforderung. Wir gestalten mit Ihnen branchenunabhängig eine neue Marketingstrategie.",
    secondSection:
      "Nutzt Ihre Zielgruppe Social Media? Kein Problem. Wir helfen Corporate dabei, Sie in den sozialen Medien besonders zu präsentieren. Neben der großen Aufmerksamkeit für bestehende Follower legen wir auch besonderes Augenmerk auf unsere speziellen Kampagnen, um das Herz zu gewinnen.",
    thirdSection:
      "Wir führen auch Analysen durch, die helfen, die Wünsche Ihrer Kunden näher an Ihre Arbeitsweise heranzuführen. Gleichzeitig basieren unsere Analysen auf aktuellen Markttrends, die wir in Ihre Arbeitsweise umsetzen wollen, und erreichen so neue Nutzer Ihrer Dienste.",
  },
};

const MarketingSection = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);

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
