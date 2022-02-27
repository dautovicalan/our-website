import React, { useState } from "react";
import style from "./styles-supportsection.module.css";
import { Collapse } from "react-bootstrap";

const SupportSection = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  return (
    <div>
      <div className={style.column_container}>
        <div>
          <h1>Hosting</h1>
          <ul>
            <li>Fast loading time</li>
            <li>SEO advantages</li>
            <li>Protection</li>
          </ul>
        </div>
        <div>
          <h1>Support</h1>
          <ul>
            <li>Control</li>
            <li>Updates</li>
            <li>Support 24/7</li>
          </ul>
        </div>
      </div>
      <div className={style.expand_container}>
        <div>
          <h2 onClick={() => setOpenOne((prevVal) => !prevVal)}>
            What does 24/7 support mean?
          </h2>
          <Collapse in={openOne}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenTwo((prevVal) => !prevVal)}>
            What after the end?
          </h2>
          <Collapse in={openTwo}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenThree((prevVal) => !prevVal)}>
            Do we use ready-made design?
          </h2>
          <Collapse in={openThree}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenFour((prevVal) => !prevVal)}>
            I want my site to be among the first on google, but how?
          </h2>
          <Collapse in={openFour}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenFive((prevVal) => !prevVal)}>
            What is react?
          </h2>
          <Collapse in={openFive}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
