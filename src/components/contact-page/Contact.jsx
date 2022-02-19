import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import styles from "./styles-contact.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useSpring, animated } from "react-spring";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { contact } = language;

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
  });

  return (
    <animated.div style={props} className={styles.contact_container}>
      <h1>{contact.header}</h1>
      <div className={styles.square}></div>
      <form
        action="mailto:dautovic2000@gmail.com"
        className={styles.form_container}
        method="get"
      >
        <InputLabel htmlFor="name">{contact.name.label}</InputLabel>

        <TextField
          id="name"
          label={contact.name.placeholder}
          variant="outlined"
          required
          autoComplete="off"
        />
        <InputLabel htmlFor="surname">{contact.surname.label}</InputLabel>
        <TextField
          id="surname"
          label={contact.surname.placeholder}
          variant="outlined"
          required
          autoComplete="off"
        />
        <InputLabel htmlFor="email">{contact.email.label}</InputLabel>
        <TextField
          id="email"
          label={contact.email.placeholder}
          variant="outlined"
          type="email"
          required
          autoComplete="off"
        />
        <InputLabel htmlFor="message">{contact.message.label}</InputLabel>
        <TextField
          id="message"
          label={contact.message.placeholder}
          variant="outlined"
          type="text"
          required
          autoComplete="off"
          size="medium"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          style={{
            backgroundColor: "rgb(237,30,121)",
            width: "80%",
            margin: "auto",
            marginTop: "1.3em",
          }}
        >
          {contact.send}
        </Button>
      </form>
    </animated.div>
  );
};

export default Contact;
