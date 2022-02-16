import React from "react";
import styles from "./styles-sections.module.css";

const Sections = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.services}>
        <div className={styles.item}>
          <h2>Beratung</h2>
          <img
            src="https://previews.123rf.com/images/fariza892/fariza8921411/fariza892141100035/33764977-illustration-of-a-cartoon-pencil-writing.jpg"
            alt="Some picture"
          />
          <ul>
            <li>Konzeption</li>
            <li>Struktur und Inhalten</li>
            <li>Strategie</li>
          </ul>
        </div>
        <div className={styles.item}>
          <h2>Beratung</h2>
          <img
            src="https://previews.123rf.com/images/fariza892/fariza8921411/fariza892141100035/33764977-illustration-of-a-cartoon-pencil-writing.jpg"
            alt="Some picture"
          />
          <ul>
            <li>Konzeption</li>
            <li>Struktur und Inhalten</li>
            <li>Strategie</li>
          </ul>
        </div>
        <div className={styles.item}>
          <h2>Beratung</h2>
          <img
            src="https://previews.123rf.com/images/fariza892/fariza8921411/fariza892141100035/33764977-illustration-of-a-cartoon-pencil-writing.jpg"
            alt="Some picture"
          />
          <ul>
            <li>Konzeption</li>
            <li>Struktur und Inhalten</li>
            <li>Strategie</li>
          </ul>
        </div>
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default Sections;
