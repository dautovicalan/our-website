import React, { useState } from "react";
import languages from "../assets/languages";

export const LanguageContext = React.createContext({ language: null });

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState(languages.English);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
