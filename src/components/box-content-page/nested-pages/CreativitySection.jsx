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
import { LanguageContext } from "../../../context/LanguageContext";
import { useContext } from "react";
import selectLanguage from "../../../functions/SelectLanguage";

const language = {
  english: {
    header: "Think different",
    textOne: "State-of-the-art technology",
    textTwo: "Ideas",
    textThree: "Teamwork",
    textFour: "Dedication",
    textFive: "Individual approach",
    textSix: "Web development",
    textSeven: "Best results",
    question: "HOW WE CAN HELP YOU?",
    buttonText: "Send Us A Message",
  },
  croatian: {
    header: "Misli drugačije",
    textOne: "Najnovija tehnologija",
    textTwo: "Ideje",
    textThree: "Timski rad",
    textFour: "Posveta",
    textFive: "Individualni pristup",
    textSix: "Web razvoj",
    textSeven: "Najbolji rezultati",
    question: "KAKO VAM MOŽEMO POMOĆI?",
    buttonText: "Pošaljite nam poruku",
  },
};

const CreativitySection = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);
  const navigator = useNavigate();
  const handleClick = () => navigator("/services");

  return (
    <div className={style.main_container}>
      <h1>{selectedLang.header}</h1>
      <div>
        <div className={style.list_section}>
          <p>{selectedLang.textOne}</p>
          <p>{selectedLang.textTwo}</p>
          <p>{selectedLang.textThree}</p>
          <p>{selectedLang.textFour}</p>
          <p>{selectedLang.textFive}</p>
          <p>{selectedLang.textSix}</p>
          <p>{selectedLang.textSeven}</p>
        </div>
      </div>
      <h1>{selectedLang.question}</h1>
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
        <span className={style.text}>{selectedLang.buttonText}</span>
      </Link>
    </div>
  );
};

export default CreativitySection;
