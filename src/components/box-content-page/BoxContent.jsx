import React from "react";
import styles from "./styles-box-content.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import selectLanguage from "../../functions/SelectLanguage";

const language = {
  english: {
    titleOne: "Software Solution",
    titleTwo: "Support",
    titleThree: "SEO",
    titleFour: "Marketing",
    titleFive: "Consulting",
    titleSix: "Creativity",
  },
  croatian: {
    titleOne: "Softverska rješenja",
    titleTwo: "Podrška",
    titleThree: "SEO",
    titleFour: "Marketing",
    titleFive: "Savjetovanje",
    titleSix: "Kreativnost",
  },
};

const BoxContent = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  const navigator = useNavigate();
  const handleClick = (path) => navigator(`/expertise/${path}`);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });
  return (
    <animated.div style={props}>
      <h1
        style={{
          paddingTop: "6em",
          paddingBottom: "0.5em",
          textAlign: "center",
          color: "var(--blue-color)",
          textTransform: "uppercase",
        }}
      >
        Expertise
      </h1>
      <div className={styles.main_container}>
        <div className={styles.box_content}>
          <div>
            <h1>{selectedLang.titleOne}</h1>
            <a
              href="#outlet_container"
              onClick={() => handleClick("software-solution")}
            >
              Show information
            </a>
          </div>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>{selectedLang.titleTwo}</h1>
            <a href="#outlet_container" onClick={() => handleClick("support")}>
              Show information
            </a>
          </div>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>{selectedLang.titleThree}</h1>
            <a href="#outlet_container" onClick={() => handleClick("seo")}>
              Show information
            </a>
          </div>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>{selectedLang.titleFour}</h1>
            <a
              href="#outlet_container"
              onClick={() => handleClick("marketing")}
            >
              Show information
            </a>
          </div>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>{selectedLang.titleFive}</h1>
            <a
              href="#outlet_container"
              onClick={() => handleClick("consulting")}
            >
              Show information
            </a>
          </div>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>{selectedLang.titleSix}</h1>
            <a
              href="#outlet_container"
              onClick={() => handleClick("creativity")}
            >
              Show information
            </a>
          </div>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
      </div>
      <div id="outlet_container">
        <Outlet />
      </div>
    </animated.div>
  );
};

export default BoxContent;
