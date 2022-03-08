import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./functions/ScrollToTop";
import LanguageContextProvider from "./context/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
