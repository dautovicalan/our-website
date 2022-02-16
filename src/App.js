import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Sections from "./components/home/Sections";
import Services from "./components/services-page/Services";
import AboutUs from "./components/about-us-page/AboutUs";
import Contact from "./components/contact-page/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
