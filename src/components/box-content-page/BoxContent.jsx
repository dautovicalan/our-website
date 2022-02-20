import React from "react";
import styles from "./styles-box-content.module.css";
import officePic from "../../assets/office-aboutus.jpg";
import Button from "@mui/material/Button";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const BoxContent = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.box_content}>
        <div>
          <h1>Neki naslov</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            fugiat repellendus ipsam, quia nam, necessitatibus molestiae sed
            deserunt et aliquid quas molestias harum vel eligendi eum fuga illum
            ab? Cum.
          </p>
          <Button variant="outlined" style={{ backgroundColor: "pink" }}>
            More Information
          </Button>
        </div>
        <img src={officePic} alt="" />
      </div>
      <div>
        Maxime optio blanditiis eos eveniet facilis, quod corrupti veritatis?
        Quas esse, nemo dolore reiciendis possimus laudantium, ea minima
        consectetur harum exercitationem ipsa obcaecati saepe, quidem quibusdam
        commodi rerum cupiditate praesentium!
      </div>
      <div>
        Aspernatur esse, facilis iusto suscipit maiores est minus repellat
        beatae rerum nihil! Dolor, dolorem! Inventore quo adipisci placeat rerum
        optio totam fuga qui quibusdam? Ullam reprehenderit aperiam tempore
        dignissimos cupiditate?
      </div>
      <div>
        Animi eos similique sequi, repudiandae incidunt aspernatur ullam dolores
        debitis qui quibusdam cum architecto? Sit ex saepe exercitationem
        voluptates aliquam, pariatur amet laudantium cupiditate velit tenetur
        rerum et assumenda commodi.
      </div>
      <div>
        Cupiditate ducimus eaque repellendus aut vel veniam at facilis iste
        consectetur consequuntur aliquam, blanditiis fugit aliquid quas! Dolor,
        corrupti obcaecati! Explicabo assumenda blanditiis expedita quasi
        perferendis, nihil sed. Inventore, reiciendis.
      </div>
      <div>
        Doloremque esse aliquid perferendis mollitia minus totam beatae quas
        libero, eius, magnam atque voluptas debitis autem dolorum iure ea
        deleniti, ullam ut accusantium quo optio eligendi temporibus. Harum, ea
        earum.
      </div>
    </div>
  );
};

export default BoxContent;
