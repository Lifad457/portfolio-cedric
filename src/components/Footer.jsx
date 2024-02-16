import { Flag, Footer, Language } from "../styles/footer.css"
import { GitHub, LinkedIn, Socials } from "../styles/icons.css"
import uk from "../assets/icons/united-kingdom.png"
import france from "../assets/icons/france.png"

export default function FooterComponent({ setLanguage }) {
  return (
    <Footer>
      <h4>Designed & developed by Cédric Bison</h4>
      <Language>
        <Flag src={france} alt="france" onClick={() => setLanguage("fr")}/>
        <Flag src={uk} alt="uk" onClick={() => setLanguage("en")} />
      </Language>
      <Socials>
        <GitHub />
        <LinkedIn />
      </Socials>
    </Footer>
  )
}