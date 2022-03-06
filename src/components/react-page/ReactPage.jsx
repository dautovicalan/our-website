import React from "react";
import style from "./styles-reactpage.module.css";
import { IKImage } from "imagekitio-react";
import { useSpring, animated } from "react-spring";
import selectLanguage from "../../functions/SelectLanguage";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const language = {
  english: {
    text: "Using ready-made designs and functions often leads to poor publicity on the Internet and at the same time to the loss of money. We at WebBoutique create and design differently. Each of our software solutions is tailored to you and your needs. They are individually programmed with the help of the latest development technology. In addition to Web solutions, we at Web Botique also develop modern Mobile applications. We live in an era where we want to have Information and other services anytime, anywhere. We have made sure that all our software is adapted to all devices and formats. Our team uses the most modern development technology that enables us the best results on the market. React is one of our most widely used programs for creating complex software solutions. It is used to create interactive user interfaces and reduces memory consumption and increases software performance. It is also very important for one-way data connection, which means increasing the flexibility and efficiency of the application.",
  },
  croatian: {
    text: "Korištenje gotovih dizajna i funkcija često dovodi do lošeg publiciteta na Internetu, a ujedno i do gubitka novca. Mi u Web Boutiqueu stvaramo i dizajniramo drugačije. Svako naše softversko rješenje je prilagođeno Vama i Vašim potrebama. Individualno se programiraju uz pomoć najnovije razvojne tehnologije. Osim web rješenja, mi u Web Botiqueu razvijamo i moderne mobilne aplikacije. Živimo u eri u kojoj želimo imati informacije i druge usluge bilo kada i bilo gdje. Pobrinuli smo se da sav naš softver bude prilagođen svim uređajima i formatima. Naš tim koristi najsuvremeniju razvojnu tehnologiju koja nam omogućuje najbolje rezultate na tržištu. React je jedan od naših najčešće korištenih programa za izradu složenih softverskih rješenja. Koristi se za stvaranje interaktivnih korisničkih sučelja i smanjuje potrošnju memorije i povećava performanse softvera. Također je vrlo važno za jednosmjernu podatkovnu vezu, što znači povećanje fleksibilnosti i učinkovitosti aplikacije.",
  },
};

const ReactPage = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });
  return (
    <animated.div style={props} className={style.main_container}>
      <div className={style.text_container}>
        <p>{selectedLang.text}</p>
        <div className={style.picture_container}>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
      </div>
    </animated.div>
  );
};

export default ReactPage;
