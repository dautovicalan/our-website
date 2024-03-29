import { IKImage } from "imagekitio-react";
import React, { useState } from "react";
import style from "./styles-softwaresolutions.module.css";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import selectLanguage from "../../../functions/SelectLanguage";

const language = {
  english: {
    title: "Software Solution",
    textOne: "Your page is your mirror",
    textTwo:
      "There are many ready-made solutions that at first glance seem quick and easy, but in fact they are everything but that.",
    textThree:
      "Wrong and bad remarks on the Internet can burn and damage any business",
    textFour: "Don't worry we're a team that makes a difference",
    textFive: "We create and create the most complex software solutions",
    textSix:
      "Unique codes that respond to contemporary challenges in the digital world",
  },
  croatian: {
    title: "Softverska rješenje",
    textOne: "Vaša stranica je Vaše ogledalo",
    textTwo:
      "Mnogo je gotovih rješenja koja se na prvi pogled čine brza i laka, a zapravo su sve samo ne to.",
    textThree:
      "Pogrešne i loše primjedbe na internetu mogu spaliti i oštetiti svaki posao",
    textFour: "Ne brinite, mi smo tim koji čini razliku",
    textFive: "Kreiramo i izrađujemo najsloženija softverska rješenja",
    textSix:
      "Jedinstveni kodovi koji odgovaraju na suvremene izazove u digitalnom svijetu",
  },
  german: {
    title: "Softwarelösung",
    textOne: "Ihre Seite ist Ihr Spiegel",
    textTwo:
      "Es gibt viele vorgefertigte Lösungen, die auf den ersten Blick schnell und einfach erscheinen, aber eigentlich alles andere als das sind.",
    textThree:
      "Falsche und schlechte Bemerkungen im Internet können jedem Unternehmen schaden und schaden",
    textFour: "Keine Sorge, wir sind ein Team, das den Unterschied macht",
    textFive: "Wir erstellen und erstellen die komplexesten Softwarelösungen",
    textSix:
      "Einzigartige Codes, die auf aktuelle Herausforderungen in der digitalen Welt reagieren",
  },
};

const SoftwareSolution = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  const [toggle, setToggle] = useState(false);

  const transition = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 1500,
    loop: true,
    onRest: () => setToggle(!toggle),
  });

  return (
    <div
      style={{
        paddingTop: "5em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5em",
      }}
    >
      <h1
        style={{
          fontFamily: '"Comfortaa", cursive',
          color: "var(--blue-color)",
        }}
      >
        {selectedLang.title}
      </h1>
      <div className={style.text_container} data-aos="fade-right">
        <div>
          <p>{selectedLang.textOne}</p>
          <p>{selectedLang.textTwo}</p>
          <p>{selectedLang.textThree}</p>
        </div>
        <div>
          <p>{selectedLang.textFour}</p>
          <p>{selectedLang.textFive}</p>
          <p>{selectedLang.textSix}</p>
        </div>
      </div>
      <div className={style.image_container} data-aos="fade-right">
        {transition(({ opacity }, item) =>
          item ? (
            <animated.h1
              style={{
                opacity: opacity.to({
                  range: [0.0, 1.0],
                  output: [0, 1],
                  fontFamily: '"Comfortaa", cursive',
                }),
              }}
            >
              Think different!
            </animated.h1>
          ) : (
            <animated.h1
              style={{
                opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
              }}
            >
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
                path="Boutique-removebg-preview_2f_1WgCxCHx.png"
                width="250"
              />
            </animated.h1>
          )
        )}

        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="background-g208a3d0a5_640_i-98E4pYY.jpg"
        />
      </div>
    </div>
  );
};

export default SoftwareSolution;
