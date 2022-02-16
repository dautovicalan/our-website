import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Sections from "./components/home/Sections";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sections />
    </React.Fragment>
  );
}

export default App;
