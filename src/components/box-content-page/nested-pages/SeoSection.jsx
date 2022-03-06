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
      "Jedan od naših zadataka je zadržati Vašu stranicu na vrhu. Brzo učitavanje, vrhunska infrastruktura, sadržaj. Sve su to predispozicije koje ispunjavamo kako bi Vaša stranica uvijek bila PRVA",
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
