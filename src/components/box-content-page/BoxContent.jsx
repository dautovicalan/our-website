import React from "react";
import styles from "./styles-box-content.module.css";
import officePic from "../../assets/office-aboutus.jpg";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";

const BoxContent = () => {
  const navigator = useNavigate();
  return (
    <React.Fragment>
      <h1
        style={{
          paddingTop: "6em",
          paddingBottom: "0.5em",
          textAlign: "center",
        }}
      >
        Smart software and Design
      </h1>
      <div className={styles.main_container}>
        <div className={styles.box_content}>
          <div>
            <h1>Software Solution</h1>
            <Button variant="outlined" style={{ backgroundColor: "pink" }}>
              More Information
            </Button>
          </div>
          <img src={officePic} alt="" />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>Support</h1>
            <Button variant="outlined" style={{ backgroundColor: "pink" }}>
              More Information
            </Button>
          </div>
          <img src={officePic} alt="" />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>SEO</h1>
            <Button
              variant="outlined"
              style={{ backgroundColor: "pink" }}
              onClick={() => navigator("/add-ons/seo")}
            >
              More Information
            </Button>
          </div>
          <img src={officePic} alt="" />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>Marketing</h1>
            <Button
              variant="outlined"
              style={{ backgroundColor: "pink" }}
              onClick={() => navigator("/add-ons/marketing")}
            >
              More Information
            </Button>
          </div>
          <img src={officePic} alt="" />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>Consulting</h1>
            <Button variant="outlined" style={{ backgroundColor: "pink" }}>
              More Information
            </Button>
          </div>
          <img src={officePic} alt="" />
        </div>
        <div className={styles.box_content}>
          <div>
            <h1>Creativity</h1>
            <Button variant="outlined" style={{ backgroundColor: "pink" }}>
              More Information
            </Button>
          </div>
          <img src={officePic} alt="" />
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default BoxContent;
