import React from "react";
import style from "./styles-marketing.module.css";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import { useSpring, animated } from "react-spring";

const MarketingSection = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });
  return (
    <animated.div className={style.main_container} style={props}>
      <h1>Marketing</h1>
      <div className={style.main_container_item}>
        <div>
          <DataSaverOnIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore
          possimus quasi ullam architecto neque, laborum cumque. Nulla
          laudantium voluptates soluta dolorum nihil ipsa fugit harum
          repellendus, omnis, necessitatibus hic.
        </p>
      </div>
      <div className={style.main_container_item}>
        <div>
          <DataSaverOnIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore
          possimus quasi ullam architecto neque, laborum cumque. Nulla
          laudantium voluptates soluta dolorum nihil ipsa fugit harum
          repellendus, omnis, necessitatibus hic.
        </p>
      </div>
      <div className={style.main_container_item}>
        <div>
          <DataSaverOnIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore
          possimus quasi ullam architecto neque, laborum cumque. Nulla
          laudantium voluptates soluta dolorum nihil ipsa fugit harum
          repellendus, omnis, necessitatibus hic.
        </p>
      </div>
    </animated.div>
  );
};

export default MarketingSection;
