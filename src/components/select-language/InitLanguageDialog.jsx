import React from "react";
import styles from "./initlang-styles.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { IKImage } from "imagekitio-react";

const InitLanguageDialog = () => {
  const { setLanguageId } = useContext(LanguageContext);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    let langId;
    setAge(event.target.value);
    switch (event.target.value) {
      case "EN":
        setLanguageId("EN");
        langId = "EN";
        break;
      case "HR":
        setLanguageId("HR");
        langId = "HR";
        break;
      case "DE":
        setLanguageId("DE");
        langId = "DE";
        break;
      default:
        break;
    }
    localStorage.setItem("languageId", langId);
  };
  return (
    <div className={styles.main_container}>
      <IKImage
        urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
        path="Boutique-removebg-preview_2f_1WgCxCHx.png"
        width="400"
      />
      <h1>Welcome to Web Boutique Solutions</h1>
      <p>
        Select your language for this Website to show. It will be saved. For
        changing the language you can find the option in footer of the page
      </p>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Language"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={"EN"}>EN</MenuItem>
          <MenuItem value={"HR"}>HR</MenuItem>
          <MenuItem value={"DE"}>DE</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default InitLanguageDialog;
