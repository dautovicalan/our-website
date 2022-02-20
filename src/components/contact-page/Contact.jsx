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
    delay: 300,
  });

  return (
    <React.Fragment>
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
      <div
        style={{
          marginTop: "5em",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "1.5em",
          fontFamily: '"Roboto Serif", sans-serif',
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        <h1>{contact.findUsHere}</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170347.25271623838!2d11.40174941657878!3d48.15505469600179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2shr!4v1645311297962!5m2!1sen!2shr"
          width="90%"
          height="450"
          loading="lazy"
          style={{ margin: "auto", border: "1px solid black" }}
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Contact;
