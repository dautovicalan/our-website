import { IKImage } from "imagekitio-react";
import React, { useState } from "react";
import style from "./styles-softwaresolutions.module.css";
import { useTransition, animated } from "react-spring";

const SoftwareSolution = () => {
  const [toggle, setToggle] = useState(false);

  const transition = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 1500,
    loop: true,
    onRest: () => setToggle(!toggle),
  });

  return (
    <div
      style={{
        paddingTop: "5em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5em",
      }}
    >
      <h1
        style={{
          fontFamily: '"Comfortaa", cursive',
          color: "var(--blue-color)",
        }}
      >
        Software Solution
      </h1>
      <div className={style.text_container} data-aos="fade-right">
        <div>
          <p>Your page is your mirror</p>
          <p>
            There are many ready-made solutions that at first glance seem quick
            and easy, but in fact they are everything but that.
          </p>
          <p>
            Wrong and bad remarks on the Internet can burn and damage any
            business
          </p>
        </div>
        <div>
          <p>Don't worry we're a team that makes a difference</p>
          <p>We create and create the most complex software solutions</p>
          <p>
            Unique codes that respond to contemporary challenges in the digital
            world
          </p>
        </div>
      </div>
      <div className={style.image_container} data-aos="fade-right">
        {transition(({ opacity }, item) =>
          item ? (
            <animated.h1
              style={{
                opacity: opacity.to({
                  range: [0.0, 1.0],
                  output: [0, 1],
                  fontFamily: '"Comfortaa", cursive',
                }),
              }}
            >
              Think different!
            </animated.h1>
          ) : (
            <animated.h1
              style={{
                opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
              }}
            >
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
                path="Boutique-removebg-preview_2f_1WgCxCHx.png"
                width="250"
              />
            </animated.h1>
          )
        )}

        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="background-g208a3d0a5_640_i-98E4pYY.jpg"
        />
      </div>
    </div>
  );
};

export default SoftwareSolution;
