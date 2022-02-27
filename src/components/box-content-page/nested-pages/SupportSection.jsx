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
              With us, 24’7 Support means that we are a name for you every day.
              Our control of the System allows us to eliminate all technical
              difficulties in a timely manner.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenTwo((prevVal) => !prevVal)}>
            What after the end?
          </h2>
          <Collapse in={openTwo}>
            <div id="example-collapse-text">
              We are still here for you. We continue to maintain your site and
              constantly enrich it with new Updates and Features.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenThree((prevVal) => !prevVal)}>
            Do we use ready-made design?
          </h2>
          <Collapse in={openThree}>
            <div id="example-collapse-text">
              NO. We program all our Web pages and Web solutions according to
              your wishes. Each of our Projects has a unique Code.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenFour((prevVal) => !prevVal)}>
            I want my site to be among the first on google, but how?
          </h2>
          <Collapse in={openFour}>
            <div id="example-collapse-text">
              Do not worry. SEO is just one of our specialties. For the first
              place on Google, certain predispositions are needed, which we
              integrate during the project and later launch into the digital
              world.
            </div>
          </Collapse>
        </div>
        <div>
          <h2 onClick={() => setOpenFive((prevVal) => !prevVal)}>
            What is react?
          </h2>
          <Collapse in={openFive}>
            <div id="example-collapse-text">
              React is one of the programs we use to create complex software
              solutions. We use it to build interactive user interfaces and
              enable one-way data connection. Most complex Web sites like
              Facebook use React.
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
