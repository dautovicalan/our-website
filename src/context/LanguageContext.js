import React, { useState, useMemo } from "react";
import languages from "../assets/languages";

export const LanguageContext = React.createContext({ language: null });

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState(languages.English);

  const providedValue = useMemo(
    () => ({ language: language, setLanguage: setLanguage }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={providedValue}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
