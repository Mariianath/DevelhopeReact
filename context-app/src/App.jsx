import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

function Hello() {
  const language = useContext(LanguageContext);

  const messages = {
    it: "Ciao, Mondo!",
    en: "Hello, World!",
    es: "¡Hola, Mundo!",
    fr: "Bonjour, le monde!"
  };

  return <h2>{messages[language]}</h2>;
}

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>

        <Hello />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
