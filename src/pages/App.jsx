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

  return (
    <>
      <GlobalStyle theme={theme} />
      <HeaderComponent theme={theme} setTheme={setTheme} />
      <HomeComponent />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  )
}

export default App
