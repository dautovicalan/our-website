import React from "react";
import styles from "./styles-seosection.module.css";
import { IKImage } from "imagekitio-react";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import selectLanguage from "../../../functions/SelectLanguage";

const language = {
  english: {
    textOne: "One of our tasks is to keep your site at the top",
    textTwo:
      "One of our tasks is to keep your site at the top. Fast loading, superior infrastructure, Content. These are all predispositions that we fulfill so that your page is always FIRST",
    listTitle: "SEO Package",
    listOne: "Keyword research",
    listTwo: "Content",
    listThree: "Tracking setup",
    listFour: "Day manager",
    listFive: "Webmaster",
    listSix: "Search engine",
    listSeven: "Updated",
    listEight: "Tracking, Monitoring",
    listNine: "Reporting",
    listTen: "Web Updates",
    listEleven: "Dashboards",
  },
  croatian: {
    textOne: "Jedan od naših zadataka je zadržati Vašu stranicu na vrhu",
    textTwo:
      "Brzo učitavanje, vrhunska infrastruktura, sadržaj. Sve su to predispozicije koje ispunjavamo kako bi Vaša stranica uvijek bila PRVA",
    listTitle: "SEO Paket",
    listOne: "Istraživanje ključnih riječi",
    listTwo: "Sadržaj",
    listThree: "Postavljanje praćenja",
    listFour: "Dnevni upravitelj",
    listFive: "Webmaster",
    listSix: "Pretraživač",
    listSeven: "Ažurirano",
    listEight: "Praćenje",
    listNine: "Izvještavanje",
    listTen: "Web ažuriranja",
    listEleven: "Nadzorne ploče",
  },
  german: {
    textOne: "Eine unserer Aufgaben ist es, Ihre Seite an der Spitze zu halten",
    textTwo:
      "Eine unserer Aufgaben ist es, Ihre Seite an der Spitze zu halten. Schnelles Laden, überlegene Infrastruktur, Inhalt. Das sind alles Voraussetzungen, die wir erfüllen, damit Ihre Seite immer ERSTE ist",
    listTitle: "SEO-Paket",
    listOne: "Stichwortforschung",
    listTwo: "Content",
    listThree: "Tracking-Setup",
    listFour: "Tagesmanager",
    listFive: "Webmaster",
    listSix: "Suchmaschine",
    listSeven: "Aktualisiert",
    listEight: "Verfolgung, Überwachung",
    listNine: "Berichterstattung",
    listTen: "Web-Updates",
    listEleven: "Dashboards",
  },
};

const SeoSection = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  return (
    <div className={styles.main_container}>
      <IKImage
        urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
        path="network-g060846f23_640_N5lBHd98v.png"
      />
      <div>
        <p>{selectedLang.textOne}</p>
        <p>{selectedLang.textTwo}</p>
      </div>
      <div className={styles.list_section}>
        <h1>{selectedLang.listTitle}</h1>
        <ul>
          <li>{selectedLang.listOne}</li>
          <li>{selectedLang.listTwo}</li>
          <li>{selectedLang.listThree}</li>
          <li>{selectedLang.listFour}</li>
          <li>{selectedLang.listFive}</li>
          <li>{selectedLang.listSix}</li>
          <li>{selectedLang.listSeven}</li>
          <li>{selectedLang.listEight}</li>
          <li>{selectedLang.listNine}</li>
          <li>{selectedLang.listTen}</li>
          <li>{selectedLang.listEleven}</li>
        </ul>
      </div>
    </div>
  );
};

export default SeoSection;
