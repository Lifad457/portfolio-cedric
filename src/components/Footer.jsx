import { Flag, Footer, FooterSection, Language } from "../styles/footer.css"
import { GitHub, LinkedIn, Socials } from "../styles/icons.css"
import uk from "../assets/icons/united-kingdom.png"
import france from "../assets/icons/france.png"
import { Link } from "react-router-dom"

export default function FooterComponent({ setLanguage }) {
  return (
    <Footer>
      <FooterSection>
        <h4>Designed & developed by Cédric Bison</h4>
        <Language>
          <Flag src={france} alt="france" onClick={() => setLanguage("fr")}/>
          <Flag src={uk} alt="uk" onClick={() => setLanguage("en")} />
        </Language>
        <Socials>
        <Link to="https://github.com/Lifad457" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </Link>
        <Link to="https://linkedin.com/in/cédric-bison-a489a287" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </Link>
        </Socials>
      </FooterSection>
    </Footer>
  )
}