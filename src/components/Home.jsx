import { Home, HomeSection, HeroImage, HomeDescription } from "../styles/home.css"
import { GitHub, LinkedIn, Socials } from "../styles/icons.css"
import photo from "../assets/images/photo.jpg"
import { Language } from "../styles/footer.css"

export default function HomeComponent({ language }) {
  function renderDescription() {
    if (language === "fr") {
      return (
        <>
          <h1>Développeur</h1>
          <h1>Front-End</h1>
          <h1>React</h1>
          <h3>Salut, moi c'est Cédric, un développeur front-end basé à Vert le Petit, Essonnes.<br/>Je me spécialise dans la construction de sites web et d'applications à l'aide de technologies modernes comme React.</h3>
        </>
      )
    }
    else {
      return (
        <>
          <h1>Front-End</h1>
          <h1>React</h1>
          <h1>Developer</h1>
          <h3>Hi, I'm Cédric, a front-end developer based in Vert le Petit, Essonnes (France).<br/>I specialize in building websites and applications using modern technologies like React.</h3>
        </>
      )
    }
  }

  return (
    <Home id="home">
      <HomeSection>
        <HomeDescription>
          { renderDescription() }
          <Socials>
            <GitHub />
            <LinkedIn />
          </Socials>
        </HomeDescription>
        <HeroImage src={photo} alt="Cédric Bison" /> 
      </HomeSection>
    </Home>
  )
}