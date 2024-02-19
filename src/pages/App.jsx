import { useState } from "react";
import { GlobalStyle } from "../styles/global.css"
import FooterComponent from "../components/Footer"
import HeaderComponent from "../components/Header"
import HomeComponent from "../components/Home"
import AboutComponent from "../components/About";
import ProjectsComponent from "../components/Projects";
import ContactComponent from "../components/Contact";

function App() {
  const[theme, setTheme] = useState("light");
  const[language, setLanguage] = useState("fr");

  return (
    <>
      <GlobalStyle theme={theme} />
      <HeaderComponent language={language} theme={theme} setTheme={setTheme} />
      <HomeComponent language={language} />
      <AboutComponent language={language} />
      <ProjectsComponent language={language} />
      <ContactComponent />
      <FooterComponent setLanguage={setLanguage} />
    </>
  )
}

export default App
