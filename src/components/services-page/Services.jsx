import React from "react";
import styles from "./styles-services.module.css";
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
import selectLanguage from "../../functions/SelectLanguage";
import LazyLoad from "react-lazyload";

const language = {
  english: {
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
  croatian: {
    pageTitle: `Naše usluge`,
    firstBoxTitle: `Analiza`,
    firstBoxText: `Niste zadovoljni trenutnom web-stranicom?
      Ne brinite, MI SMO TU ZA VAS.
       Detaljno analiziramo sve Vaše projekte kako bismo Vaš korak u digitalni svijet učinili još boljim.
      
       U potpunosti se koncentriramo na Vaše ciljne skupine. Individualni i originalni izgled je zajamčen.
      
       SEO-analiza
      
       S programiranjem i dizajniranjem stranica naš posao nestaje.
       Također se brinemo da Vaša stranica bude konkurent na tržištu
      
       Google and Co. Imaju posebne tehničke zahtjeve, a tehnička infrastruktura je iznimno važna.
      
       S nama ćete uvijek biti 2 koraka ispred konkurencije.
      
       Razvijamo najbolju SEO strategiju za vas kako bi Vaša stranica uvijek bila PRVA.
      `,
    secondBoxTitle: `Savjetovanje`,
    secondBoxText: `Uz Vas smo od početka do kraja.
      Razvijamo individualna rješenja za sve Vaše potrebe.
      Nakon završetka projekta ostajemo Vaš glavni partner za sva pitanja.
      Naša podrška je 24'7. tu za vas.
      `,
    thirdBoxTitle: `Koncept`,
    thirdBoxText: `S Vama razvijamo strategiju i koncept za uspješno postizanje korporativnih ciljeva.
      Detaljno upoznajemo Vašu filozofiju, te zajedno definiramo ciljeve koje želimo postići.
      Nakon uspješnog testiranja svih prototipova, prelazimo na finalizaciju projekta.
      `,
    fourthBoxTitle: `Dizajn`,
    fourthBoxText: `Jedna od najvažnijih stvari je upravo dizajn. S ljubavlju prema detaljima, programiramo Vašu stranicu na moderan i kompaktan način.

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
      Tekstove, slike i video zapise izrađujemo prema Vašim željama i integriramo u web stranicu.
     
      Naš stručni tim pridaje veliku važnost temi sadržaja, jer mi u Web Boutiqueu vjerujemo da je to srce i duša stranice.
      `,
    sixthBoxTitle: `Code`,
    sixthBoxText: `Ne želite gotove web stranice koje ne možete izraditi prema svojim željama?
      Profesionalno kodiranje stranica naša je specijalnost.
      Izrađujemo kompletnu tehničku infrastrukturu u najsuvremenijim programima, a i nakon završetka projekta obogaćujemo Vašu stranicu najnovijim značajkama i ažuriranjima.
      `,
    seventhBoxTitle: `Projekt`,
    seventhBoxText: `Obraćamo pažnju na svakog našeg klijenta i zajedno s Vama izrađujemo web projekte.
      Svi naši projekti usmjereni su na ispunjenje svih Vaših želja.
      Vaši uspjesi su i naši uspjesi jer samo zajedno možemo promijeniti svijet
      Svaki naš projekt popraćen je prezentacijom kojom detaljno prezentiramo sve funkcionalnosti stranice.
      Naša podrška je tu za vas 24/7`,
    eigthBoxTitle: `Lansiranje`,
    eigthBoxText: `Prije nego što web stranica bude lansirana u digitalni svijet, svaka se stavka temeljito provjerava i nakon Vaših povratnih informacija, web stranicu objavljujemo na Internetu.
      Za sva ostala pitanja ostajemo Vaš snažan partner.
      `,
  },
  german: {
    pageTitle: `Unsere Dienstleistungen`,
    firstBoxTitle: `Analyse`,
    firstBoxText: `Unzufrieden mit der aktuellen Website? Keine Sorge, WIR SIND FÜR SIE DA. Wir analysieren all Ihre Projekte im Detail, um Ihren Schritt in die digitale Welt noch besser zu machen. Wir konzentrieren uns voll und ganz auf Ihre Zielgruppen. Ein individueller und origineller Look ist garantiert. SEO-Analyse Mit dem Programmieren und Gestalten von Websites verschwindet unser Geschäft. Wir sorgen auch dafür, dass Ihre Seite auf dem Markt von Google und Co. konkurrenzfähig ist. Sie haben besondere technische Voraussetzungen, und die technische Infrastruktur ist enorm wichtig. Mit uns sind Sie der Konkurrenz immer 2 Schritte voraus. Wir entwickeln die beste SEO-Strategie für Sie, damit Ihre Website immer ERSTE ist.
      `,
    secondBoxTitle: `Beratung`,
    secondBoxText: `Wir sind von Anfang bis Ende bei Ihnen. Wir entwickeln individuelle Lösungen für alle Ihre Anforderungen. Auch nach Abschluss des Projektes bleiben wir Ihr zentraler Ansprechpartner für alle Fragen. Unser Support ist 24’7. Tu ja vas.
      `,
    thirdBoxTitle: `Konzept`,
    thirdBoxText: `Gemeinsam mit Ihnen entwickeln wir eine Strategie und ein Konzept zur erfolgreichen Erreichung der Unternehmensziele. Wir lernen Ihre Philosophie im Detail kennen und definieren gemeinsam die Ziele, die wir erreichen wollen. Nachdem wir alle Prototypen erfolgreich getestet haben, fahren wir mit dem Abschluss des Projekts fort.
      `,
    fourthBoxTitle: `Design`,
    fourthBoxText: `Eines der wichtigsten Elemente ist einfach das Design. Mit Liebe zum Detail programmieren wir Ihre Seite modern und kompakt. Schönes Design gerät so schnell nicht in Vergessenheit. Abgesehen davon, dass das schöne Design nicht in Vergessenheit gerät, gewinnt es auch neue Herzen. Unsere Designseiten sind für alle Benutzergruppen extrem einfach zu bedienen. Unsere Seiten sind für alle Formate und Gerätetypen kompatibel. In dieser schnelllebigen Welt legen wir besonderen Wert auf mobile Endgeräte. Unsere Website durchläuft detaillierte Tests in allen Formaten, um die volle Funktionalität zu haben, egal welches Gerät Sie verwenden. Legen Sie nun die Icons auf Ihren Laptop, Ihr Tablet und Ihr Handy, aber mit dem Effekt, dass sie an diesen Ort kommen.`,
    fifthBoxTitle: `Inhalt`,
    fifthBoxText: `Ein weiteres Merkmal, das uns ziert, ist die individuelle Erstellung von Inhalten. Wir erstellen Texte, Bilder und Videos nach Ihren Wünschen und binden diese in die Website ein. Unser professionelles Team legt großen Wert auf das Thema Content, denn wir von WEB Boutique glauben, dass dies das Herz und die Seele der Website ist.`,
    sixthBoxTitle: `Code`,
    sixthBoxText: `Sie möchten keine vorgefertigten Webseiten, die Sie nicht nach Ihren Wünschen erstellen können? Professionelles Kodieren von Seiten ist unsere Spezialität. Wir erstellen die komplette technische Infrastruktur in modernsten Programmen und reichern Ihre Seite auch nach Abschluss des Projekts mit den neusten Feauturen und Updates an.`,
    seventhBoxTitle: `Projekt`,
    seventhBoxText: `Wir achten auf jeden unserer Kunden und erstellen gemeinsam mit Ihnen Webprojekte. Alle unsere Projekte sind darauf ausgerichtet, alle Ihre Wünsche zu erfüllen. Ihre Erfolge sind auch unsere Erfolge, denn nur gemeinsam können wir die Welt verändern Jedes unserer Projekte wird von einer Präsentation begleitet, mit der wir alle Funktionalitäten der Seite ausführlich vorstellen. Unser Support ist 24/7 für Sie da`,
    eigthBoxTitle: `Launch`,
    eigthBoxText: `Bevor die Website in die digitale Welt geht, wird jeder Artikel gründlich geprüft und nach Ihrem Feedback stellen wir die Website ins Internet. Für alle anderen Themen bleiben wir Ihr starker Partner.
      `,
  },
};

const Services = () => {
  const { languageId } = useContext(LanguageContext);
  let selectedLang = selectLanguage(languageId, language);

  return (
    <div className={styles.main_container}>
      <div className={styles.picture_container}>
        <LazyLoad>
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/gmlbvtkzbzzf/our-website"}
            path="ezgif-5-4a8b62b3cb-min_LYTf4EYXT.jpg"
            width="400"
          />
        </LazyLoad>
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
    </div>
  );
};

export default Services;
