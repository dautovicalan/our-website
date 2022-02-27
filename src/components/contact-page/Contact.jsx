import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import styles from "./styles-contact.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import { useSpring, animated } from "react-spring";
import { Form } from "react-bootstrap";

const language = {
  english: {
    contact: {
      header: "Send us a message",
      name: {
        label: "Name",
        placeholder: "Please enter your name",
      },
      surname: {
        label: "Surname",
        placeholder: "Please enter your surname",
      },
      email: {
        label: "Email",
        placeholder: "Please enter your Email",
      },
      message: {
        label: "Message",
        placeholder: "Please enter your message",
      },
      send: "Send",
      findUsHere: "You can visit us here",
    },
  },
  croatian: {
    contact: {
      header: "Pošalji nam poruku",
      name: {
        label: "Ime",
        placeholder: "Unesite svoje ime",
      },
      surname: {
        label: "Prezime",
        placeholder: "Unesite svoje Prezime",
      },
      email: {
        label: "E-Mail",
        placeholder: "Unesite svoj E-Mail",
      },
      message: {
        label: "Poruka",
        placeholder: "Unesite svoju Poruka",
      },
      send: "Pošalji",
      findUsHere: "Naše lokacije",
    },
  },
};

const Contact = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = languageId === 0 && language.english.contact;

  const [formName, setFormName] = useState();
  const [formEmail, setFormEmail] = useState();
  const [formMessage, setFormMessage] = useState();

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <React.Fragment>
      <animated.div style={props} className={styles.contact_container}>
        <h1>{selectedLang.header}</h1>
        <div className={styles.square}></div>
        <form
          data-netlify="true"
          className={styles.form_container}
          method="post"
          onSubmit={handleSubmit}
        >
          <InputLabel htmlFor="name">{selectedLang.name.label}</InputLabel>
          <TextField
            id="name"
            name="name"
            label={selectedLang.name.placeholder}
            variant="outlined"
            required
            autoComplete="off"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <InputLabel htmlFor="email">{selectedLang.email.label}</InputLabel>
          <TextField
            id="email"
            label={selectedLang.email.placeholder}
            variant="outlined"
            type="email"
            name="email"
            required
            autoComplete="off"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
          />
          <InputLabel htmlFor="message">
            {selectedLang.message.label}
          </InputLabel>
          <Form.Group className="mb-3">
            <Form.Control
              style={{ resize: "none" }}
              as="textarea"
              rows={5}
              id="message"
              name="message"
              required
              autoComplete="off"
              placeholder={selectedLang.message.placeholder}
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
            />
          </Form.Group>
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
            {selectedLang.send}
          </Button>
          <input type="hidden" name="form-name" value="contact" />
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
        <h1>{selectedLang.findUsHere}</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170347.25271623838!2d11.40174941657878!3d48.15505469600179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2shr!4v1645311297962!5m2!1sen!2shr"
          width="90%"
          height="450"
          style={{ margin: "auto", border: "1px solid black" }}
          title="Web Boutique Solutions Locations"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Contact;
