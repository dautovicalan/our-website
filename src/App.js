import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React from "react";
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
          <Route path="/services" element={<Services />} />
          {/* <Route path="/add-ons" element={<BoxContent />} />
          <Route path="/add-ons/test" element={<AboutUs />} />
          <Route path="/add-ons/cool" element={<p>Mars</p>} /> */}
        </Routes>
        <Footer />
      </LanguageContextProvider>
    </React.Fragment>
  );
}

export default App;
