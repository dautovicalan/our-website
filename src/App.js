import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { Suspense, useContext } from "react";
import AboutUs from "./components/about-us-page/AboutUs";
import Contact from "./components/contact-page/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
import SoftwareSolution from "./components/box-content-page/nested-pages/SoftwareSolution";
import SeoSection from "./components/box-content-page/nested-pages/SeoSection";
import MarketingSection from "./components/box-content-page/nested-pages/MarketingSection";
import CreativitySection from "./components/box-content-page/nested-pages/CreativitySection";
import SupportSection from "./components/box-content-page/nested-pages/SupportSection";
import ConsultingSection from "./components/box-content-page/nested-pages/ConsultingSection";
import ReactPage from "./components/react-page/ReactPage";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import ImpressumPage from "./components/impressum/ImpressumPage";
import { LanguageContext } from "./context/LanguageContext";
import InitLanguageDialog from "./components/select-language/InitLanguageDialog";

const BoxContent = React.lazy(() =>
  import("./components/box-content-page/BoxContent")
);

const Sections = React.lazy(() => import("./components/home/Sections"));
const Services = React.lazy(() =>
  import("./components/services-page/Services")
);

function App() {
  const { languageId } = useContext(LanguageContext);
  AOS.init({ duration: 2000, delay: 5000, once: true });

  if (languageId === undefined) {
    return <InitLanguageDialog />;
  }

  return (
    <React.Fragment>
      <Navbar />
      <Suspense
        fallback={
          <div style={{ paddingTop: "11em" }}>
            <Box sx={{ width: "100% " }}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Box>
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Sections />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/application-development" element={<ReactPage />} />
          <Route path="/expertise" element={<BoxContent />}>
            <Route
              path="/expertise/software-solution"
              element={<SoftwareSolution />}
            />
            <Route path="/expertise/seo" element={<SeoSection />} />
            <Route path="/expertise/marketing" element={<MarketingSection />} />
            <Route
              path="/expertise/creativity"
              element={<CreativitySection />}
            />
            <Route path="/expertise/support" element={<SupportSection />} />
            <Route
              path="/expertise/consulting"
              element={<ConsultingSection />}
            />
          </Route>
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
