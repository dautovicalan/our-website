import React from "react";
import style from "./styles-reactpage.module.css";
import { IKImage } from "imagekitio-react";
import { useSpring, animated } from "react-spring";

const ReactPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });
  return (
    <animated.div style={props} className={style.main_container}>
      <div className={style.text_container}>
        <p>
          Korištenjem gotovih designova i funkcija često dovodi do loše
          promidžbe na internetu te ujedno i do gubitka novca. Mi u WebBoutique
          stvaramo i kreiramo drugacije. Svako naše softversko rješenje je
          prilagođeno vama i vašim potrebama. Ona su individualno programirana
          uz pomoć najnovije development tehnologije. Osim Web rjesenja , mi u
          Web Botique razvijamo i suvremene MObilne aplikacije. Živimo u jednoj
          eri u kojoj Informacije i ostale usluge želimo imati u svakom trenutku
          i bilo gdje. Mi smo se pobrinuli da svi nasi softveri budu prilagođeni
          svim uređajima i formatima. Nas se tim koristi najsuvremenijom
          development tehnologijom koja nam omogucava najbolje rezultate na
          tržištu. React je jedan od naših najviše korištenih programa za izradu
          kompleksnih sofwarskih rjesenja. On nam sluzi za izradu interaktivnih
          korisničkih sučelja te smanjuje trošenje memorije i povećava
          performanse software. Ujedno vrlo je bitan i za jednosmjerno
          povezivanje podataka sto znaci povećanje fleksibilnosti i
          učinkovitosti aplikacije.
        </p>
        <div className={style.picture_container}>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="third-pic_9UfloUQsK.jpg"
            width="400"
          />
        </div>
      </div>
    </animated.div>
  );
};

export default ReactPage;
