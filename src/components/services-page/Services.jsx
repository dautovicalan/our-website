import React from "react";
import styles from "./styles-services.module.css";
import laptopPic from "../../assets/first-pic.webp";
import { useSpring, animated } from "react-spring";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { IKImage } from "imagekitio-react";

const language = {
  english: {
    services: {
      pageTitle: `Our services`,
      firstBoxTitle: `Analysis`,
      firstBoxText: `Not satisfied with the current Website?
      Don't worry, WE ARE HERE FOR YOU.
      We analyze all your projects in detail to make your step into the digital world even better.
      
      We fully concentrate on your target groups. An individual and original look is guaranteed.
      
      SEO-Analyze
      
      With programming and designing sites, our business is disappearing.
      We also make sure that your site is a competitor in the market
      
      Google and Co. They have special technical requirements, and technical infrastructure is extremely important.
      
      With us you will always be 2 steps ahead of the competition.
      
      We are developing the best SEO Strategy for you so that your site is always FIRST.
      `,
      secondBoxTitle: `Consulting`,
      secondBoxText: `We are with you from start to finish.
      We develop individual solutions for all your needs.
      After the completion of the project, we remain your main partner for all questions.
      Our support is 24’7. Tu ya vas.
      `,
      thirdBoxTitle: `Concept`,
      thirdBoxText: `With you we develop a strategy and concept to successfully achieve Corporate Goals.
      We get to know your philosophy in detail, and together we define the goals we want to achieve.
      After successfully testing all prototypes, we move on to finalizing the project.
      `,
      fourthBoxTitle: `Design`,
      fourthBoxText: `One of the most important items is just design. With love for detail, we program your site in a modern and compact way.

      Beautiful Design is not forgotten so quickly.
      
      Apart from the fact that the beautiful design is not forgotten, it also wins new hearts.
      Our Design Pages is extremely easy to use for all User groups.
      Our pages are compatible for all formats and device types.
      We attach special importance to mobile devices in this fast-paced world.
      
      Our site goes through detailed testing in all formats to have full functionality no matter which device you use.
      
      Now put the icons on your laptop, tablet and cell phone, but with the effect that they come to this place.
      `,
      fifthBoxTitle: `Content`,
      fifthBoxText: `Another feature that adorns us is the individual creation of Content.
      We make texts, images and videos according to your wishes, and integrate them into the Website.
      
      Our professional team attaches great importance to the theme of Content, because we at WEB Boutique believe that this is the heart and soul of the site.
      `,
      sixthBoxTitle: `Code`,
      sixthBoxText: `Do you not want ready-made Web pages that you cannot create according to your wishes?
      Professional coding of pages is our specialty.
      We create the complete technical infrastructure in the most modern programs, and even after the completion of the project we enrich your site with the latest Feauturs and Updates.
      `,
      seventhBoxTitle: `Project`,
      seventhBoxText: `we pay attention to each of our clients and together with you we create Web Projects.
      All our projects are aimed at fulfilling all your wishes.
      Your successes are also our successes because only together can we change the world
      Each of our projects is accompanied by a presentation with which we present in detail all the functionalities of the site.
      Our Support is 24/7 here for you`,
      eigthBoxTitle: `Launch`,
      eigthBoxText: `Before the Website is launched into the digital world, each item is thoroughly checked and after your Feedback, we post the website on the Internet.
      For all other issues we remain your strong partner.
      `,
    },
  },
  croatian: {
    services: {
      pageTitle: `Naše usluge`,
      firstBoxTitle: `Analiza`,
      firstBoxText: `Niste zadovoljni trenutnom web-stranicom?
      Ne brinite, MI SMO TU ZA VAS.
       Detaljno analiziramo sve vaše projekte kako bismo vaš korak u digitalni svijet učinili još boljim.
      
       U potpunosti se koncentriramo na vaše ciljne skupine. Individualni i originalni izgled je zajamčen.
      
       SEO-analiza
      
       S programiranjem i dizajniranjem stranica naš posao nestaje.
       Također se brinemo da vaša stranica bude konkurent na tržištu
      
       Google and Co. Imaju posebne tehničke zahtjeve, a tehnička infrastruktura je iznimno važna.
      
       S nama ćete uvijek biti 2 koraka ispred konkurencije.
      
       Razvijamo najbolju SEO strategiju za vas kako bi vaša stranica uvijek bila PRVA.
      `,
      secondBoxTitle: `Savjetovanje`,
      secondBoxText: `Uz vas smo od početka do kraja.
      Razvijamo individualna rješenja za sve Vaše potrebe.
      Nakon završetka projekta ostajemo Vaš glavni partner za sva pitanja.
      Naša podrška je 24'7. tu za vas.
      `,
      thirdBoxTitle: `Koncept`,
      thirdBoxText: `S vama razvijamo strategiju i koncept za uspješno postizanje korporativnih ciljeva.
      Detaljno upoznajemo vašu filozofiju, te zajedno definiramo ciljeve koje želimo postići.
      Nakon uspješnog testiranja svih prototipova, prelazimo na finalizaciju projekta.
      `,
      fourthBoxTitle: `Dizajn`,
      fourthBoxText: `Jedna od najvažnijih stvari je upravo dizajn. S ljubavlju prema detaljima, programiramo vašu stranicu na moderan i kompaktan način.

      Prekrasan dizajn se ne zaboravlja tako brzo.
     
      Osim što se lijep dizajn ne zaboravlja, osvaja i nova srca.
      Naše dizajnerske stranice iznimno su jednostavne za korištenje za sve grupe korisnika.
      Naše stranice su kompatibilne za sve formate i vrste uređaja.
      Pridajemo posebnu važnost mobilnim uređajima u ovom brzom svijetu.
     
      Naša stranica prolazi kroz detaljno testiranje u svim formatima kako bi imala punu funkcionalnost bez obzira koji uređaj koristite.
     
      Sada stavite ikone na svoj laptop, tablet i mobitel, ali s učinkom da dolaze na ovo mjesto.
      `,
      fifthBoxTitle: `Sadržaj`,
      fifthBoxText: `Još jedna značajka koja nas krasi je individualna izrada sadržaja.
      Tekstove, slike i video zapise izrađujemo prema vašim željama i integriramo u web stranicu.
     
      Naš stručni tim pridaje veliku važnost temi Sadržaja, jer mi u WEB Boutiqueu vjerujemo da je to srce i duša stranice.
      `,
      sixthBoxTitle: `Code`,
      sixthBoxText: `Ne želite gotove web stranice koje ne možete izraditi prema svojim željama?
      Profesionalno kodiranje stranica naša je specijalnost.
      Izrađujemo kompletnu tehničku infrastrukturu u najsuvremenijim programima, a i nakon završetka projekta obogaćujemo Vašu stranicu najnovijim značajkama i ažuriranjima.
      `,
      seventhBoxTitle: `Projekt`,
      seventhBoxText: `Obraćamo pažnju na svakog našeg klijenta i zajedno s vama izrađujemo web projekte.
      Svi naši projekti usmjereni su na ispunjenje svih Vaših želja.
      Vaši uspjesi su i naši uspjesi jer samo zajedno možemo promijeniti svijet
      Svaki naš projekt popraćen je prezentacijom kojom detaljno prezentiramo sve funkcionalnosti stranice.
      Naša podrška je tu za vas 24/7`,
      eigthBoxTitle: `Lansiranje`,
      eigthBoxText: `Prije nego što web stranica bude lansirana u digitalni svijet, svaka se stavka temeljito provjerava i nakon vaših povratnih informacija, web stranicu objavljujemo na Internetu.
      Za sva ostala pitanja ostajemo Vaš snažan partner.
      `,
    },
  },
};

const Services = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = languageId === 0 && language.english.services;

  return (
    <div className={styles.main_container}>
      <div className={styles.picture_container}>
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
          path="first-pic_HuAv2cqi2.webp"
          width="400"
        />
      </div>
      <div className={styles.services_container}>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.firstBoxText}</p>
          <div>
            <DataSaverOnIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.secondBoxText}</p>
          <div>
            <LightbulbIcon style={{ color: "var(--pink-color)" }} />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.thirdBoxText}</p>
          <div>
            <ConnectWithoutContactIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.fourthBoxText}</p>
          <div>
            <DesignServicesIcon style={{ color: "var(--pink-color)" }} />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.fifthBoxText}</p>
          <div>
            <TextSnippetIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.seventhBoxText}</p>
          <div>
            <FileCopyIcon style={{ color: "var(--pink-color)" }} />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.sixthBoxText}</p>
          <div>
            <CodeIcon />
          </div>
        </div>
        <div className={styles.single_service} data-aos="fade-right">
          <p>{selectedLang.eigthBoxText}</p>
          <div>
            <RocketLaunchIcon style={{ color: "var(--pink-color)" }} />
          </div>
        </div>
      </div>
      <div className={styles.picture_container} data-aos="fade-up-right">
        <h1>24/7 Support</h1>
      </div>
    </div>
  );
};

export default Services;
