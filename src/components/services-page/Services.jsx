import React from "react";
import styles from "./styles-services.module.css";
import laptopPic from "../../assets/laptop.jpg";
import rocket from "../../assets/rocket.jpg";

const Services = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.picture_container}>
        <h1>Neki naslov</h1>
        <img src={laptopPic} alt="lap pic" />
      </div>
      <div className={styles.services_container}>
        <div className={styles.single_service}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque quam dolore? Ut architecto expedita labore quos neque
            tenetur aspernatur dolorem, dolore eos placeat dolores quo fugiat a
            possimus reiciendis.
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            Nisi rerum eius quo harum eligendi quae obcaecati reprehenderit amet
            minus labore et perspiciatis fugit dolorem maiores inventore
            architecto impedit exercitationem a, adipisci, quas sequi
            accusantium voluptas aspernatur facere. Natus.
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            Perspiciatis dicta odit id similique autem unde voluptate quia
            officiis cupiditate numquam, necessitatibus fuga omnis, iste
            sapiente, veniam eaque ab error iusto. Ut alias deserunt, eveniet
            voluptas aliquid nam eum?
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            Commodi rerum odio temporibus distinctio minus accusamus quo autem
            obcaecati. Animi, alias pariatur facere laboriosam unde vero odio
            cum at, voluptates sint ipsum voluptas esse vitae perferendis neque
            sed ad?
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            Officiis ipsum necessitatibus eos recusandae consectetur amet vitae
            natus quis nesciunt? Aliquam veritatis enim voluptate rem libero
            modi? Magni cupiditate odit sapiente quod id tenetur ex dolorum,
            aspernatur tempore quibusdam?
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            Rem saepe ipsam temporibus est fugit voluptatibus voluptas sit ipsum
            exercitationem, facilis doloremque soluta, cupiditate accusantium
            numquam aspernatur ad? Deserunt architecto, repudiandae mollitia
            optio aspernatur ut minus! Tempore, numquam veniam!
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            At quisquam quas et sed necessitatibus nobis quo maiores molestias
            dicta odio incidunt, debitis fugiat vel officiis ea quia laudantium
            voluptates, mollitia, facere aliquam error sit! Fugit velit deleniti
            adipisci.
          </p>
          <div>Ikonica</div>
        </div>
        <div className={styles.single_service}>
          <p>
            Illum eligendi magni magnam quibusdam provident quod optio delectus
            voluptatibus vel, autem est rerum cupiditate voluptate hic eum ipsum
            maxime perspiciatis maiores veritatis ipsa. Debitis accusantium
            necessitatibus amet neque veritatis?
          </p>
          <div>Ikonica</div>
        </div>
      </div>
      <div className={styles.picture_container}>
        <h1>24/7 Support</h1>
        <img src={rocket} alt="" />
      </div>
    </div>
  );
};

export default Services;
