import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { Suspense } from "react";
import Sections from "./components/home/Sections";
import AboutUs from "./components/about-us-page/AboutUs";
import Contact from "./components/contact-page/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import LanguageContextProvider from "./context/LanguageContext";
import Services from "./components/services-page/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
// import BoxContent from "./components/box-content-page/BoxContent";
import SoftwareSolution from "./components/box-content-page/nested-pages/SoftwareSolution";
import SeoSection from "./components/box-content-page/nested-pages/SeoSection";
import MarketingSection from "./components/box-content-page/nested-pages/MarketingSection";
import CreativitySection from "./components/box-content-page/nested-pages/CreativitySection";
import SupportSection from "./components/box-content-page/nested-pages/SupportSection";
import ConsultingSection from "./components/box-content-page/nested-pages/ConsultingSection";
import ReactPage from "./components/react-page/ReactPage";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const BoxContent = React.lazy(() =>
  import("./components/box-content-page/BoxContent")
);

function App() {
  AOS.init({ duration: 2000, delay: 5000, once: true });
  return (
    <React.Fragment>
      <LanguageContextProvider>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Sections />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services"
            element={
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
                <Services />
              </Suspense>
            }
          />
          <Route path="/application-development" element={<ReactPage />} />
          <Route
            path="/add-ons"
            element={
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
                <BoxContent />
              </Suspense>
            }
          >
            <Route
              path="/add-ons/software-solution"
              element={<SoftwareSolution />}
            />
            <Route path="/add-ons/seo" element={<SeoSection />} />
            <Route path="/add-ons/marketing" element={<MarketingSection />} />
            <Route path="/add-ons/creativity" element={<CreativitySection />} />
            <Route path="/add-ons/support" element={<SupportSection />} />
            <Route path="/add-ons/consulting" element={<ConsultingSection />} />
          </Route>
        </Routes>
        <Footer />
      </LanguageContextProvider>
    </React.Fragment>
  );
}

export default App;
