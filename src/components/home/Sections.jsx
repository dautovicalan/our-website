import React from "react";
import styles from "./styles-sections.module.css";
import video from "../../assets/again-video.mp4";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useNavigate } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import selectLanguage from "../../functions/SelectLanguage";

const language = {
  english: {
    quote: "I dream of painting and then I paint my dream.",
    homeHeaderFirstPart: "With you from",
    homeHeaderSecondPart: "start to finish",
    firstText: `From the very beginning, we work out your wishes and ideas with you down to the smallest detail.
      Our work begins with a detailed analysis of the project before us. Together we create the concept, structure and the first Web solutions.
      We put your Corporate Identity first, and as such we improve and enhance it.
      The individual design we provide gives your fat endless freedom.
      `,
    secondText: `After a detailed process of selecting your desired page, we start with technical testing of other parameters that are extremely important to the page.
      When the whole mosaic is assembled, your page will be available on all devices and in different formats.
      No worries and after launching the site into the digital world we remain your main partner for all questions.
      `,
    singleParagraphFirstPart: `The most modern and professional Web design`,
    singleParagraphSecondPart: `for your journey into the digital world`,
    boxes: {
      one: "Analysis",
      second: "Concept",
      thrid: "Consult",
      fourth: "Design",
      fifth: "Content",
      sixth: "Code",
      seventh: "Project",
      eigth: "Launch",
    },
  },
  croatian: {
    quote: "I dream of painting and then I paint my dream.",
    firstText: `Od samog početka s Vama razrađujemo Vaše želje i ideje do najsitnijih detalja.
      Naš rad počinje sa detaljnom Analizom projekta koji je pred nama. Skupa svama stvaramo konzept ,Strukturu te prva Web rješenja. 
      Vaš Corporate Identity stavljamo na prvo mjesto , te ga kao takvog unaprijeđujemo i poboljšavamo.
      Individualan dizajn koji pružamo daje Vašoj mašti beskonačnu slobodu.
      `,
    secondText: `Nakon detaljnog procesa odabira Vaše željene stranice , krećemo sa tehničkim testiranjima ostalih parametara koji su iznimno važni za stranicu.
      Kad cijeli mozaik bude složen, Vaša stranica će biti dostupna na svim uređajima i u različitim formatima .
      Bez brige i nakon lansiranja stranice u digitalni svijet mi ostajemo Vas glavni partner za sva pitanja.
      
      `,
    singleParagraph: `Najmodernija i najprofesionalnija izrada Web-stranica za vas put u digitalni svijet`,
    boxes: {
      one: "Analiza",
      second: "Koncept",
      thrid: "Savjeti",
      fourth: "Dizajn",
      fifth: "Sadržaj",
      sixth: "Code",
      seventh: "Projekt",
      eigth: "Lansiraj",
    },
  },
  german: {
    quote: "I dream of painting and then I paint my dream.",
    homeHeaderFirstPart: "Mit Ihnen von",
    homeHeaderSecondPart: "Anfang bis Ende",
    firstText: `Von Anfang an erarbeiten wir mit Ihnen Ihre Wünsche und Vorstellungen bis ins kleinste Detail. Unsere Arbeit beginnt mit einer detaillierten Analyse des vor uns liegenden Projekts. Gemeinsam erstellen wir das Konzept, die Struktur und die ersten Weblösungen. Wir stellen Ihre Corporate Identity an die erste Stelle und verbessern und erweitern sie als solche. Die individuelle Gestaltung durch uns gibt Ihrem Fett grenzenlose Freiheit.
      `,
    secondText: `Nach einem ausführlichen Auswahlprozess Ihrer Wunschseite beginnen wir mit der technischen Prüfung weiterer Parameter, die für die Seite äußerst wichtig sind. Wenn das gesamte Mosaik zusammengesetzt ist, ist Ihre Seite auf allen Geräten und in verschiedenen Formaten verfügbar. Keine Sorge und auch nach dem Launch der Seite in die digitale Welt bleiben wir Ihr Hauptpartner für alle Fragen.
      `,
    singleParagraphFirstPart: `Das modernste und professionellste Webdesign`,
    singleParagraphSecondPart: `für Ihre Reise in die digitale Welt`,
    boxes: {
      one: "Analyse",
      second: "Konzept",
      thrid: "Consult",
      fourth: "Design",
      fifth: "Inhalt",
      sixth: "Code",
      seventh: "Projekt",
      eigth: "Launch",
    },
  },
};

const Sections = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);

  const navigator = useNavigate();
  const handleClick = () => navigator("/services");

  return (
    <div className={styles.main_container}>
      <div className={styles.background_image_container}>
        <video autoPlay muted={true} loop>
          <source src={video} type="video/mp4" />
        </video>
        <h2>{selectedLang.quote}</h2>
        <h2 className={styles.second_header}>~ Vincent Van Gogh</h2>
      </div>
      <div className={styles.about_us_container}>
        <div className={styles.about_us_info}>
          <p>
            <span style={{ color: "rgb(13,25,80)" }}>
              {selectedLang.singleParagraphFirstPart}
            </span>{" "}
            <span style={{ color: "var(--pink-color)" }}>
              {selectedLang.singleParagraphSecondPart}
            </span>
          </p>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
      </div>
      <div className={styles.paragraphed_container}>
        <h1 data-aos="fade-right">
          <span style={{ color: "rgb(13,25,80)" }}>
            {selectedLang.homeHeaderFirstPart}
          </span>{" "}
          <span style={{ color: "var(--pink-color)" }}>
            {selectedLang.homeHeaderSecondPart}
          </span>
        </h1>
        <div className={styles.paragraph_items}>
          <p>{selectedLang.firstText}</p>
          <p>{selectedLang.secondText}</p>
        </div>
      </div>
      <div className={styles.boxes_container} data-aos="fade-up-right">
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.one}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.second}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.thrid}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.fourth}</h1>
        </div>
      </div>
      <div className={styles.boxes_container} data-aos="fade-up-right">
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.fifth}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.sixth}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.seventh}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{selectedLang.boxes.eigth}</h1>
        </div>
      </div>
    </div>
  );
};

export default Sections;
