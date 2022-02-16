import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import styles from "./styles-contact.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <h1>Send Us a Message</h1>
      <div className={styles.square}></div>
      <form
        action="mailto:dautovic2000@gmail.com"
        className={styles.form_container}
        enctype="text/plain"
        method="get"
      >
        <InputLabel htmlFor="name">Name</InputLabel>

        <TextField
          id="name"
          label="Please enter your name..."
          variant="outlined"
          required
          autoComplete="off"
        />
        <InputLabel htmlFor="surname">Surname</InputLabel>
        <TextField
          id="surname"
          label="Please enter your surname..."
          variant="outlined"
          required
          autoComplete="off"
        />
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          id="email"
          label="Please enter your email..."
          variant="outlined"
          type="email"
          required
          autoComplete="off"
        />
        <InputLabel htmlFor="message">Message</InputLabel>
        <TextField
          id="message"
          label="Please enter your message..."
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
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
