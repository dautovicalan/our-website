import React, { useState } from "react";
import style from "./styles-supportsection.module.css";
import { Collapse } from "react-bootstrap";
import { LanguageContext } from "../../../context/LanguageContext";
import { useContext } from "react";
import selectLanguage from "../../../functions/SelectLanguage";

const language = {
  english: {
    listTitleOne: "Hosting",
    listOne: "Fast loading time",
    listTwo: "SEO Advantages",
    listThree: "Protection",
    listTitleTwo: "Support",
    listFour: "Control",
    listFive: "Updates",
    listSix: "Support 24/7",
    questionOne: "What does 24/7 support mean?",
    answerOne:
      "With us, 24’7 Support means that we are a name for you every day. Our control of the System allows us to eliminate all technical difficulties in a timely manner.",
    questionTwo: "What after the end?",
    answerTwo:
      "We are still here for you. We continue to maintain your site and constantly enrich it with new Updates and Features.",
    questionThree: "Do we use ready-made design?",
    answerThree:
      "NO. We program all our Web pages and Web solutions according to your wishes. Each of our Projects has a unique Code.",
    questionFour: "I want my site to be among the first on google, but how?",
    answerFour:
      "Do not worry. SEO is just one of our specialties. For the first place on Google, certain predispositions are needed, which we integrate during the project and later launch into the digital world.",
    questionFive: "What is react?",
    answerFive:
      "React is one of the programs we use to create complex software solutions. We use it to build interactive user interfaces and enable one-way data connection. Most complex Web sites like Facebook use React.",
  },
  croatian: {
    listTitleOne: "Usluge poslužitelja",
    listOne: "Brzo vrijeme učitavanja",
    listTwo: "SEO prednosti",
    listThree: "Zaštita",
    listTitleTwo: "Podrška",
    listFour: "Kontrola",
    listFive: "Nadopune",
    listSix: "Podrška 24/7",
    questionOne: "Što znači podrška 24/7?",
    answerOne:
      "S nama podrška 24’7 znači da smo svaki dan ime za Vas. Naša kontrola sustava omogućuje nam da na vrijeme otklonimo sve tehničke poteškoće.",
    questionTwo: "Što nakon kraja?",
    answerTwo:
      "Još uvijek smo tu za Vas. Nastavljamo održavati Vašu stranicu i stalno je obogaćivati novim ažuriranjima i značajkama.",
    questionThree: "Koristimo li gotov dizajn?",
    answerThree:
      "NE. Sve naše web stranice i web rješenja programiramo prema Vašim željama. Svaki naš projekt ima jedinstveni kod.",
    questionFour:
      "Želim da moja stranica bude među prvima na Googleu, ali kako?",
    answerFour:
      "Ne brinite se. SEO je samo jedna od naših specijalnosti. Za prvo mjesto na Googleu potrebne su određene predispozicije koje integriramo tijekom projekta i kasnije lansiramo u digitalni svijet.",
    questionFive: "Što je react?",
    answerFive:
      "React je jedan od programa koje koristimo za izradu složenih softverskih rješenja. Koristimo ga za izgradnju interaktivnih korisničkih sučelja i omogućavanje jednosmjerne podatkovne veze. Većina složenih web stranica poput Facebooka koristi React.",
  },
  german: {
    listTitleOne: "Hosting",
    listOne: "Schnelle Ladezeit",
    listTwo: "SEO-Vorteile",
    listThree: "Schutz",
    listTitleTwo: "Unterstützung",
    listFour: "Kontrolle",
    listFive: "Aktualisierung",
    listSix: "Unterstützung rund um die Uhr",
    questionOne: "Was bedeutet 24/7-Support?",
    answerOne:
      "24’7 Support bedeutet bei uns, dass wir jeden Tag für Sie ein Begriff sind. Unsere Kontrolle über das System ermöglicht es uns, alle technischen Schwierigkeiten rechtzeitig zu beseitigen.",
    questionTwo: "Was nach dem Ende?",
    answerTwo:
      "Wir sind weiterhin für Sie da. Wir pflegen Ihre Website weiterhin und bereichern sie ständig mit neuen Updates und Funktionen.",
    questionThree: "Verwenden wir fertiges Design?",
    answerThree:
      "NEIN. Alle unsere Webseiten und Weblösungen programmieren wir nach Ihren Wünschen. Jedes unserer Projekte hat einen einzigartigen Code.",
    questionFour:
      "Ich möchte, dass meine Website zu den ersten bei Google gehört, aber wie?",
    answerFour:
      "Mach dir keine Sorgen. SEO ist nur eine unserer Spezialitäten. Für den ersten Platz bei Google braucht es gewisse Voraussetzungen, die wir während des Projekts integrieren und später in die digitale Welt lancieren.",
    questionFive: "Was ist react?",
    answerFive:
      "React ist eines der Programme, mit denen wir komplexe Softwarelösungen erstellen. Wir verwenden es, um interaktive Benutzeroberflächen zu erstellen und eine Einweg-Datenverbindung zu ermöglichen. Die meisten komplexen Websites wie Facebook verwenden React.",
  },
};

const SupportSection = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  return (
    <div>
      <div className={style.column_container}>
        <div>
          <h1>{selectedLang.listTitleOne}</h1>
          <ul>
            <li>{selectedLang.listOne}</li>
            <li>{selectedLang.listTwo}</li>
            <li>{selectedLang.listThree}</li>
          </ul>
        </div>
        <div>
          <h1>{selectedLang.listTitleTwo}</h1>
          <ul>
            <li>{selectedLang.listFour}</li>
            <li>{selectedLang.listFive}</li>
            <li>{selectedLang.listSix}</li>
          </ul>
        </div>
      </div>
      <div className={style.expand_container}>
        <div>
          <h2 onClick={() => setOpenOne((prevVal) => !prevVal)}>
            {selectedLang.questionOne}
          </h2>
          <Collapse in={openOne}>
            <div id="example-collapse-text">{selectedLang.answerOne}</div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenTwo((prevVal) => !prevVal)}>
            {selectedLang.questionTwo}
          </h2>
          <Collapse in={openTwo}>
            <div id="example-collapse-text">{selectedLang.answerTwo}</div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenThree((prevVal) => !prevVal)}>
            {selectedLang.questionThree}
          </h2>
          <Collapse in={openThree}>
            <div id="example-collapse-text">{selectedLang.answerThree}</div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenFour((prevVal) => !prevVal)}>
            {selectedLang.questionFour}
          </h2>
          <Collapse in={openFour}>
            <div id="example-collapse-text">{selectedLang.answerFour}</div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenFive((prevVal) => !prevVal)}>
            {selectedLang.questionFive}
          </h2>
          <Collapse in={openFive}>
            <div id="example-collapse-text">{selectedLang.answerFive}</div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
