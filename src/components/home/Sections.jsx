import React from "react";
import styles from "./styles-sections.module.css";
import background_picture from "../../assets/background-pic.jpg";
import earth_picture from "../../assets/earth.jpg";
import video from "../../assets/new-video.mp4";
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
        <h2>"Zitat ide ovdije"</h2>
      </div>
      <div className={styles.about_us_container}>
        <div className={styles.about_us_info}>
          <p>
            {home.singleParagraph}
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
          <h1>Design</h1>
        </div>
        <div className={styles.box}>
          <h1>Content</h1>
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
          <h1>Design</h1>
        </div>
        <div className={styles.box}>
          <h1>Content</h1>
        </div>
      </div>
      <div className={styles.earth_container}>
        <h1>"Svijet pokrecemo s vama"</h1>
        <img src={earth_picture} alt="Slikica" />
      </div>
    </div>
  );
};

export default Sections;
