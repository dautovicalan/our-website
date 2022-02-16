import React from "react";
import styles from "./styles-aboutus.module.css";

const AboutUs = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img
          src="https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg"
          alt="Some sample picture"
        />
      </div>
      <div className={styles.text_container}>
        <div>
          <h1>We are ....</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          inventore doloremque fugit temporibus obcaecati labore omnis a quaerat
          minus, rerum eveniet vero debitis! Architecto ea, in atque blanditiis
          impedit deleniti?
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          porro nihil delectus repellendus provident tenetur ducimus nostrum
          impedit a! Maiores blanditiis ut vel fuga fugiat provident culpa
          aperiam. Minima, rerum?
        </p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil
          soluta expedita, unde placeat illo maiores culpa consequuntur magnam
          fugit nulla nostrum magni, deserunt vero. Sed numquam accusamus enim
          sequi!
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
