import React from "react";
import style from "./styles-consultingsection.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import selectLanguage from "../../../functions/SelectLanguage";

const language = {
  english: {
    pageTitle: "Consulting",
    headerOne: "Implementation",
    textOne: "Individual software solutions",
    headerTwo: "Plan",
    textTwo: "A strategy for more successful business",
    headerThree: "Launch",
    textThree: "Launching first place on the internet",
  },
  croatian: {
    pageTitle: "Savjetovanje",
    headerOne: "IMPLEMENTACIJA",
    textOne: "Individualna softverska rješenja",
    headerTwo: "Plan",
    textTwo: "Strategija za uspješnije poslovanje",
    headerThree: "Lansiranje",
    textThree: "Lansiranje prvog mjesta na internetu",
  },
};

const ConsultingSection = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  return (
    <div className={style.main_container}>
      <h1>{selectedLang.pageTitle}</h1>
      <div className={style.circlesbox}>
        <div className={style.circle} data-aos="fade-right">
          <h1>{selectedLang.headerOne}</h1>
          <p>{selectedLang.textOne}</p>
        </div>
        <div className={style.line}></div>
        <div className={style.circle} data-aos="fade-right">
          <h1>{selectedLang.headerTwo}</h1>
          <p>{selectedLang.textTwo}</p>
        </div>
        <div className={style.line}></div>
        <div className={style.circle} data-aos="fade-right">
          <h1>{selectedLang.headerThree}</h1>
          <p>{selectedLang.textThree}</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultingSection;
