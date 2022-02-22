import React, { useMemo, useState } from "react";

export const LanguageContext = React.createContext({ language: null });

const LanguageContextProvider = (props) => {
  const [languageId, setLanguageId] = useState(0);

  const providedValue = useMemo(
    () => ({ languageId, setLanguageId }),
    [languageId, setLanguageId]
  );

  return (
    <LanguageContext.Provider value={providedValue}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default React.memo(LanguageContextProvider);
