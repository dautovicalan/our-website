import React from "react";
import style from "./styles-reactpage.module.css";
import { IKImage } from "imagekitio-react";
import { useSpring, animated } from "react-spring";

const ReactPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });
  return (
    <animated.div style={props} className={style.main_container}>
      <div className={style.text_container}>
        <p>
          Using ready-made designs and functions often leads to poor publicity
          on the Internet and at the same time to the loss of money. We at
          WebBoutique create and design differently. Each of our software
          solutions is tailored to you and your needs. They are individually
          programmed with the help of the latest development technology. In
          addition to Web solutions, we at Web Botique also develop modern
          Mobile applications. We live in an era where we want to have
          Information and other services anytime, anywhere. We have made sure
          that all our software is adapted to all devices and formats. Our team
          uses the most modern development technology that enables us the best
          results on the market. React is one of our most widely used programs
          for creating complex software solutions. It is used to create
          interactive user interfaces and reduces memory consumption and
          increases software performance. It is also very important for one-way
          data connection, which means increasing the flexibility and efficiency
          of the application.
        </p>
        <div className={style.picture_container}>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
      </div>
    </animated.div>
  );
};

export default ReactPage;
