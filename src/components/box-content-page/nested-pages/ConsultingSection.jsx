import React from "react";
import style from "./styles-consultingsection.module.css";

const ConsultingSection = () => {
  return (
    <div className={style.main_container}>
      <h1>Consulting</h1>
      {/* <div className={style.pictures_container}>
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
      </div> */}
      <div className={style.circlesbox}>
        <div className={style.circle} data-aos="fade-right">
          <h1>IMPLEMENTATION</h1>
          <p>Individual software solutions</p>
        </div>
        <div className={style.line}></div>
        <div className={style.circle} data-aos="fade-right">
          <h1>Plan</h1>
          <p>A strategy for more successful business</p>
        </div>
        <div className={style.line}></div>
        <div className={style.circle} data-aos="fade-right">
          <h1>Launch</h1>
          <p>Launching first place on the internet</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultingSection;
