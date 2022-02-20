import React from "react";
import styles from "./styles-services.module.css";
import laptopPic from "../../assets/second-pic.jpg";
import rocket from "../../assets/rocket.jpg";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
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
            <AnalyticsIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.secondBoxText}</p>
          <div>
            <BarChartIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.thirdBoxText}</p>
          <div>
            <PersonIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.fourthBoxText}</p>
          <div>{services.fourthBoxTitle}</div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.fifthBoxText}</p>
          <div>
            <DesignServicesIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.sixthBoxText}</p>
          <div>
            <FileCopyIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.seventhBoxText}</p>
          <div>
            <CodeIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.eigthBoxText}</p>
          <div>
            <AccountTreeIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{services.ninthBoxText}</p>
          <div>
            <RocketLaunchIcon />
          </div>
        </div>
      </div>
      <div className={styles.picture_container} data-aos="fade-up">
        <h1>24/7 Support</h1>
        <img src={rocket} alt="" />
      </div>
    </div>
  );
};

export default Services;
