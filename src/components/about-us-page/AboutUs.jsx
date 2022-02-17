import React from "react";
import styles from "./styles-aboutus.module.css";
import laptopPic from "../../assets/laptop.jpg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigator = useNavigate();

  const handleClick = () => navigator("/contact");
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet
          minus obcaecati repudiandae qui. Sed illum quasi explicabo autem,
          nesciunt magnam repudiandae cum ut cumque id animi consequuntur alias
          voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga eveniet minus obcaecati repudiandae qui. Sed illum quasi
          explicabo autem, nesciunt magnam repudiandae cum ut cumque id animi
          consequuntur alias voluptatem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga eveniet minus obcaecati repudiandae qui. Sed
          illum quasi explicabo autem, nesciunt magnam repudiandae cum ut cumque
          id animi consequuntur alias voluptatem?
        </p>
        <div>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleClick}
            style={{
              backgroundColor: "rgb(237,30,121)",
              marginTop: "1.3em",
            }}
          >
            Send Us a message
          </Button>
        </div>
      </div>
      <div className={styles.picture_container}>
        <img src={laptopPic} alt="About Us picture" />
      </div>
    </div>
  );
};

export default AboutUs;
