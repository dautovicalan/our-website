import React from "react";
import styles from "./styles-aboutus.module.css";
import laptopPic from "../../assets/first-pic.jpg";
import reactLogo from "./assets/react-logo.png";
import reactSpringLogo from "./assets/react-spring.png";
import jsLogo from "./assets/js-logo.png";
import twLogo from "./assets/tailwind-logo.png";
import muiLogo from "./assets/mui-logo.png";
import { useSpring, animated } from "react-spring";

const AboutUs = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <div className={styles.main_container}>
      <div className={styles.text_picture_container}>
        <animated.h2 style={props}>About Us</animated.h2>
        <div className={styles.picture_container}>
          <img src={laptopPic} alt="About Us picture" />
        </div>
      </div>
      <div className={styles.text_container_first}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          inventore veritatis dolorem saepe tempora esse consequatur molestiae
          quasi asperiores sint vero quam magni, dolores et culpa totam
          exercitationem quidem odio!
        </p>
        <p>
          Beatae, quo labore. Nobis, deleniti! Aliquid ratione aperiam fugit
          veritatis maxime unde harum omnis natus, quis quam officiis nostrum
          reiciendis soluta commodi dolorum pariatur praesentium atque odio
          adipisci voluptatum iste!
        </p>
      </div>
      <div className={styles.text_container_second}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad hic iste,
          consequuntur quis, laboriosam, tempora magnam magni nam neque error
          unde. Officiis accusantium recusandae error? Incidunt quia veniam
          eaque repellendus.
        </p>
        <div className={styles.list_icons}>
          <div>
            <img src={reactLogo} alt="React Logo" />
          </div>
          <div>
            <img src={reactSpringLogo} alt="React Logo" />
          </div>
          <div>
            <img src={jsLogo} alt="React Logo" />
          </div>
          <div>
            <img src={twLogo} alt="React Logo" />
          </div>
          <div>
            <img src={muiLogo} alt="React Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
