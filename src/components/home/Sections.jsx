import React from "react";
import styles from "./styles-sections.module.css";
import background_picture from "../../assets/background-pic.jpg";

const Sections = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.background_image_container}>
        <img width="100%" height="900px" src={background_picture} alt="" />
      </div>
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
      <div className={styles.about_us_container}>
        <h1>Neki naslov za sekciju</h1>
        <div className={styles.about_us_info}>
          <p className={styles.first_info_item}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat voluptatem reiciendis. Cupiditate saepe modi reprehenderit
            sit a necessitatibus aliquid aspernatur culpa maiores assumenda,
            velit qui asperiores earum illum dolor!
          </p>
          <form action="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni
            cumque nam aperiam delectus magnam explicabo tempore doloribus,
            illo, quia, voluptatum autem ea animi nesciunt consequuntur
            necessitatibus quasi adipisci eos?
          </form>
        </div>
      </div>
      <div className={styles.about_us_container}>
        <h1>Neki naslov</h1>
        <div className={styles.about_us_info}>
          <p className={styles.first_info_item}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat voluptatem reiciendis. Cupiditate saepe modi reprehenderit
            sit a necessitatibus aliquid aspernatur culpa maiores assumenda,
            velit qui asperiores earum illum dolor!
          </p>
          <form action="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni
            cumque nam aperiam delectus magnam explicabo tempore doloribus,
            illo, quia, voluptatum autem ea animi nesciunt consequuntur
            necessitatibus quasi adipisci eos?
          </form>
        </div>
      </div>
      <div className={styles.about_us_container}>
        <h1>Neki naslov za zadnju sekciju prije footera</h1>
        <div className={styles.about_us_info}>
          <p className={styles.first_info_item}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat voluptatem reiciendis. Cupiditate saepe modi reprehenderit
            sit a necessitatibus aliquid aspernatur culpa maiores assumenda,
            velit qui asperiores earum illum dolor!
          </p>
          <form action="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni
            cumque nam aperiam delectus magnam explicabo tempore doloribus,
            illo, quia, voluptatum autem ea animi nesciunt consequuntur
            necessitatibus quasi adipisci eos?
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sections;
