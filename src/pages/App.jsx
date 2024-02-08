import { useState } from "react";
import { GlobalStyle } from "../styles/global.css"
import FooterComponent from "../components/Footer"
import HeaderComponent from "../components/Header"
import HomeComponent from "../components/Home"

function App() {
  const[theme, setTheme] = useState("light");

  return (
    <>
      <GlobalStyle theme={theme} />
      <HeaderComponent theme={theme} setTheme={setTheme} />
      <HomeComponent />
      <FooterComponent />
    </>
  )
}

export default App
