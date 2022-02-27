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
        <p>One of our tasks is to keep your site at the top</p>
        <p>
          One of our tasks is to keep your site at the top. Fast loading,
          superior infrastructure, Content. These are all predispositions that
          we fulfill so that your page is always FIRST
        </p>
      </div>
      <div className={styles.list_section}>
        <h1>SEO Package</h1>
        <ul>
          <li>Keyword research</li>
          <li>Content</li>
          <li>Tracking setup</li>
          <li>Day manager</li>
          <li>Webmaster</li>
          <li>Search engine</li>
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
