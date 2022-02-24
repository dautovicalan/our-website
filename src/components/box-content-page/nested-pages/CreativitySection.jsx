import React from "react";
import style from "./styles-creativity.module.css";
import CodeIcon from "@mui/icons-material/Code";
import CameraIcon from "@mui/icons-material/Camera";
import BrushIcon from "@mui/icons-material/Brush";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GroupsIcon from "@mui/icons-material/Groups";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreativitySection = () => {
  const navigator = useNavigate();

  const handleClick = () => navigator("/services");

  return (
    <div className={style.main_container}>
      <h1>Think different</h1>
      <div>
        <div className={style.list_section}>
          <p>Najmodernija tehnologija</p>
          <p>ideje</p>
          <p>Teamwork</p>
          <p>Posvecenost</p>
          <p>Individualna pristup</p>
          <p>Web development</p>
          <p>Najbolji rezultati</p>
        </div>
      </div>
      <h1>Kako vam mozemo pomoci</h1>
      <div className={style.circle_container}>
        <div onClick={handleClick}>
          <CodeIcon />
        </div>
        <div onClick={handleClick}>
          <CameraIcon />
        </div>
        <div onClick={handleClick}>
          <BrushIcon />
        </div>
        <div onClick={handleClick}>
          <SupportAgentIcon />
        </div>
        <div onClick={handleClick}>
          <GroupsIcon />
        </div>
        <div onClick={handleClick}>
          <FilePresentIcon />
        </div>
      </div>
      <Link to="/contact" className={style["button-64"]} role="button">
        <span className={style.text}>Send Us A Message</span>
      </Link>
    </div>
  );
};

export default CreativitySection;
