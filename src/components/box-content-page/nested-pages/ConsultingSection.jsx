import React from "react";
import style from "./styles-consultingsection.module.css";
import { IKImage } from "imagekitio-react";

const ConsultingSection = () => {
  return (
    <div className={style.main_container}>
      <div className={style.pictures_container}>
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="business-ge9afbcfad_640_6VuqfImGndT.png"
        />
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="team-gd905abd7b_640_D8z1nY6Z7_y.png"
        />
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="social-media-g91b96af32_640_wM7C5zpY3_l.png"
        />
      </div>
      <div className={style.circlesbox}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
      </div>
    </div>
  );
};

export default ConsultingSection;
