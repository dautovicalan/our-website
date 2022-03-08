import React, { useMemo, useState, useEffect } from "react";

export const LanguageContext = React.createContext({ language: null });

const LanguageContextProvider = (props) => {
  const [languageId, setLanguageId] = useState();

  const providedValue = useMemo(
    () => ({ languageId, setLanguageId }),
    [languageId, setLanguageId]
  );

  useEffect(() => {
    const checkStorage = () => {
      if (localStorage.getItem("languageId")) {
        setLanguageId(localStorage.getItem("languageId"));
        console.log("Bok iz uspjenog getanja");
      }
    };
    checkStorage();
  }, []);

  return (
    <LanguageContext.Provider value={providedValue}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default React.memo(LanguageContextProvider);
