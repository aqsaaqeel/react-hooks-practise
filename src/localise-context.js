import { useContext, createContext, useState } from "react";

const LocaliseContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  return (
    <LocaliseContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocaliseContext.Provider>
  );
};

const useLanguage = () => useContext(LocaliseContext);

export { LocalisationProvider, useLanguage };
