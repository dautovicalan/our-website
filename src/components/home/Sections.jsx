import React, { Suspense } from "react";
import styles from "./styles-sections.module.css";
import background_picture from "../../assets/third-pic.jpg";
// import video from "../../assets/again-video.mp4";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useNavigate } from "react-router-dom";

const Video = React.lazy(() => import("../../assets/again-video.mp4"));

const Sections = () => {
  const { language } = useContext(LanguageContext);
  const { home } = language;

  const navigator = useNavigate();
  const handleClick = () => navigator("/services");

  return (
    <div className={styles.main_container}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.background_image_container}>
          <video autoPlay muted={true} loop>
            <source src={Video} type="video/mp4" />
          </video>
          <h2>{home.quote}</h2>
          <h2 className={styles.second_header}>~ Vincent Van Gogh</h2>
        </div>
      </Suspense>
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
          <img src={background_picture} alt="Background" />
        </div>
      </div>
      <div className={styles.paragraphed_container}>
        <h1 data-aos="fade-right">
          <span style={{ color: "rgb(13,25,80)" }}>
            {home.homeHeaderFirstPart}
          </span>{" "}
          <span style={{ color: "var(--pink-color)" }}>
            {home.homeHeaderSecondPart}
          </span>
        </h1>
        <div className={styles.paragraph_items}>
          <p>{home.firstText}</p>
          <p>{home.secondText}</p>
        </div>
      </div>
      <div className={styles.boxes_container} data-aos="fade-up-right">
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.one}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.second}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.thrid}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.fourth}</h1>
        </div>
      </div>
      <div className={styles.boxes_container} data-aos="fade-up-right">
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.fifth}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.sixth}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.seventh}</h1>
        </div>
        <div className={styles.box} onClick={handleClick}>
          <h1>{home.boxes.eigth}</h1>
        </div>
      </div>
    </div>
  );
};

export default Sections;
