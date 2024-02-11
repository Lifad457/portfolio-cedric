import { Footer } from "../styles/footer.css"
import { GitHub, LinkedIn, Socials } from "../styles/icons.css"

export default function FooterComponent() {
  return (
    <Footer>
      <h4>Designed & developed by Cédric Bison</h4>
      <Socials>
        <GitHub />
        <LinkedIn />
      </Socials>
    </Footer>
  )
}