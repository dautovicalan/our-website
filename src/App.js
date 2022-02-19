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

function App() {
  return (
    <React.Fragment>
      <LanguageContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sections />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </LanguageContextProvider>
    </React.Fragment>
  );
}

export default App;
