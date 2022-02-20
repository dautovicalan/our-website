import React from "react";
import styles from "./styles-services.module.css";
import laptopPic from "../../assets/second-pic.jpg";
import rocket from "../../assets/rocket.jpg";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CodeIcon from "@mui/icons-material/Code";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Services = () => {
  const props = useSpring({
    from: { x: -2000 },
    to: { x: 0 },
    delay: 200,
  });

  const { language } = useContext(LanguageContext);
  const { services } = language;
  return (
    <div className={styles.main_container}>
      <animated.div style={props} className={styles.picture_container}>
        <img src={laptopPic} alt="lap pic" />
      </animated.div>
      <div className={styles.services_container}>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.firstBoxText}</p>
          <div>
            <DataSaverOnIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.secondBoxText}</p>
          <div>
            <LightbulbIcon style={{ color: "var(--pink-color)" }} />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.thirdBoxText}</p>
          <div>
            <ConnectWithoutContactIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.fourthBoxText}</p>
          <div>
            <DesignServicesIcon style={{ color: "var(--pink-color)" }} />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.fifthBoxText}</p>
          <div>
            <TextSnippetIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.seventhBoxText}</p>
          <div>
            <FileCopyIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.sixthBoxText}</p>
          <div>
            <CodeIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.eigthBoxText}</p>
          <div>
            <RocketLaunchIcon />
          </div>
        </div>
      </div>
      <div className={styles.picture_container} data-aos="fade-up-right">
        <h1>24/7 Support</h1>
      </div>
      {/* // TODO Napravi raketu za animaciju rakete na donjem dijelu stranice */}
    </div>
  );
};

export default Services;
