import React, { useState } from "react";
import EngMesssages from "../lang/en-US.json";
import EspMesssages from "../lang/es-MX.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

function LangProvider({ children }) {
  const [messages, setMessages] = useState(EngMesssages);
  const [locale, setLocale] = useState("en-US");

  const setLanguage = (lang) => {
    switch (lang) {
      case "es-MX":
        setMessages(EspMesssages);
        setLocale("es-MX");
        break;
      case "en-US":
        setMessages(EngMesssages);
        setLocale("en-US");
        break;
      default:
        setMessages(EngMesssages);
        setLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}
export { LangProvider, langContext };
