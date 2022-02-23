import React from "react";
import styles from "./styles-box-content.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { IKImage } from "imagekitio-react";

const BoxContent = () => {
  const navigator = useNavigate();
  const handleClick = (path) => navigator(`/add-ons/${path}`);
  return (
    <React.Fragment>
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
            <h1>Software Solution</h1>
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
            <h1>Support</h1>
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
            <h1>SEO</h1>
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
            <h1>Marketing</h1>
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
            <h1>Consulting</h1>
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
            <h1>Creativity</h1>
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
    </React.Fragment>
  );
};

export default BoxContent;
