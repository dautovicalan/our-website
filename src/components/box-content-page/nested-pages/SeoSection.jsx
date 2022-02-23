import React from "react";
import styles from "./styles-seosection.module.css";
import { IKImage } from "imagekitio-react";

const SeoSection = () => {
  return (
    <div className={styles.main_container}>
      <IKImage
        urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
        path="network-g060846f23_640_N5lBHd98v.png"
      />
      <div>
        <p>Jedna od nasih zadaca je da vasa stranica uvijek bude u vrhu</p>
        <p>
          Brzo ucitavanje, vrhunska infrastruktura, Content. Sve su to
          predispozicije koje mi ispunjavamo kako bi vasa stranica uvijek bila
          PRVA
        </p>
      </div>
      <div className={styles.list_section}>
        <h1>Seo Paket</h1>
        <ul>
          <li>Kezwordrecherce</li>
          <li>Content</li>
          <li>Tracking setup</li>
          <li>Tagmanager</li>
          <li>Webmaster</li>
          <li>Suchmaschinene</li>
          <li>Updated</li>
          <li>Tracking, Monitoring</li>
          <li>Reporting</li>
          <li>Web Updateds</li>
          <li>Dashboards</li>
        </ul>
      </div>
    </div>
  );
};

export default SeoSection;
