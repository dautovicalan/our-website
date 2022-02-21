import React from "react";
import style from "./styles-softwaresolutions.module.css";

const SoftwareSolution = () => {
  return (
    <div
      style={{
        paddingTop: "11em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Vasa stranica je vase ogledalo</p>
      <p>
        Postoje mnoga gotova rjesenja koja na prvi pogled se cine kao brza i
        jednostavna, no ustvari oni su sve osim toga. Kriva i losa primidzva na
        Internetu moze svaki Biznis ugoriziti i nanijti mu stetu
      </p>
      <p>Ne brinite mi smo tim koji cini razliku</p>
      <p>Mi stvaramo i kreiramo najslozenija softverska rjesenja</p>
      <p>
        Jedinstevni kodovi koji odgovarju na suvremene izazove u digaltom
        svijetu
      </p>
      <div className={style.icons_container}>
        <div className={style.screen_shape}>
          <p>
            Nigdje ne mogu anci pouzadnog partnera koji ce mi nparaviti unikatnu
            web stranicu
          </p>
        </div>
        <div className={style.screen_shape}>
          <p>
            Mozda da probas sa gotovim toolsima na internetu to je rbzo i
            jednostavno
          </p>
        </div>
        <div className={style.screen_shape}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, dolorem debitis numquam iste cum dolorum necessitatibus
            perferendis provident doloremque minus temporibus ex, placeat natus
            reprehenderit eveniet dolores alias! Quidem, incidunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolution;
