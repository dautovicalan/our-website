import { IKImage } from "imagekitio-react";
import React from "react";
import style from "./styles-softwaresolutions.module.css";

const SoftwareSolution = () => {
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
          <p>Vasa stranica je vase ogledalo</p>
          <p>
            Postoje mnoga gotova rjesenja koja na prvi pogled se cine kao brza i
            jednostavna, no ustvari oni su sve osim toga.
          </p>
          <p>
            Kriva i losa primidzva na Internetu moze svaki Biznis ugoriziti i
            nanijti mu stetu
          </p>
        </div>
        <div>
          <p>Ne brinite mi smo tim koji cini razliku</p>
          <p>Mi stvaramo i kreiramo najslozenija softverska rjesenja</p>
          <p>
            Jedinstevni kodovi koji odgovarju na suvremene izazove u digaltom
            svijetu
          </p>
        </div>
      </div>
      <div className={style.image_container} data-aos="fade-right">
        <h1>Think different!</h1>
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="background-g208a3d0a5_640_i-98E4pYY.jpg"
          srcset=""
        />
      </div>
    </div>
  );
};

export default SoftwareSolution;
