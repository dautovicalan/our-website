import React from "react";
import styles from "./styles-sections.module.css";
import background_picture from "../../assets/third-pic.jpg";
import earth_picture from "../../assets/earth.jpg";
import video from "../../assets/again-video.mp4";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";

const Sections = () => {
  const { language } = useContext(LanguageContext);
  const { home } = language;
  return (
    <div className={styles.main_container}>
      <div className={styles.background_image_container}>
        <video autoPlay muted={true} loop>
          <source src={video} type="video/mp4" />
        </video>
        <h2>"Ich träume vom meinem Bild und dann male ich meinen Traum"</h2>
        <h2 className={styles.second_header}>~ Vincent Van Gogh</h2>
      </div>
      <div className={styles.about_us_container}>
        <div className={styles.about_us_info}>
          <p>
            <span style={{ color: "rgb(13,25,80)" }}>
              {home.singleParagraphFirstPart}
            </span>{" "}
            <span style={{ color: "var(--pink-color)" }}>
              {home.singleParagraphSecondPart}
            </span>
          </p>
          <img src={background_picture} alt="Some picture" />
        </div>
      </div>
      <div className={styles.paragraphed_container}>
        <h1>Text naslov</h1>
        <div className={styles.paragraph_items}>
          <p>{home.firstText}</p>
          <p>{home.secondText}</p>
        </div>
      </div>
      <div className={styles.boxes_container}>
        <div className={styles.box}>
          <h1>Analiza</h1>
        </div>
        <div className={styles.box}>
          <h1>Konzept</h1>
        </div>
        <div className={styles.box}>
          <h1>Consulting</h1>
        </div>
        <div className={styles.box}>
          <h1>Design</h1>
        </div>
      </div>
      <div className={styles.boxes_container}>
        <div className={styles.box}>
          <h1>Content</h1>
        </div>
        <div className={styles.box}>
          <h1>Code</h1>
        </div>
        <div className={styles.box}>
          <h1>Project</h1>
        </div>
        <div className={styles.box}>
          <h1>Launch</h1>
        </div>
      </div>
    </div>
  );
};

export default Sections;
