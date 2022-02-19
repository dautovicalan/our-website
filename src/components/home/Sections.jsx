import React from "react";
import styles from "./styles-sections.module.css";
import background_picture from "../../assets/background-pic.jpg";
import earth_picture from "../../assets/earth.jpg";
import video from "../../assets/new-video.mp4";

const Sections = () => {
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat voluptatem reiciendis. Cupiditate saepe modi reprehenderit
            sit a necessitatibus aliquid aspernatur culpa maiores assumenda,
            velit qui asperiores earum illum dolor!
          </p>
          <img src={background_picture} alt="Some picture" />
        </div>
      </div>
      <div className={styles.paragraphed_container}>
        <h1>Text naslov</h1>
        <div className={styles.paragraph_items}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nihil
            natus eum minus atque possimus ducimus minima, explicabo perferendis
            dicta quod impedit voluptatibus quae ad? Tempore atque obcaecati ad
            corrupti.
          </p>
          <p>
            Exercitationem reiciendis temporibus maxime, quas totam minus ea
            repudiandae aliquam perspiciatis dolores eveniet optio deleniti
            porro asperiores doloremque odio voluptatem eaque expedita facilis
            tempora provident? Impedit blanditiis autem laboriosam porro.
          </p>
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
