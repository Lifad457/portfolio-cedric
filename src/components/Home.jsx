import { Home, HomeSection, HeroImage, HomeDescription } from "../styles/home.css"
import { GitHub, LinkedIn, Socials } from "../styles/icons.css"
import photo from "../assets/images/photo.jpg"

export default function HomeComponent() {
  return (
    <Home id="home">
      <HomeSection>
        <HomeDescription>
          <h1>Front-End </h1>
          <h1>React</h1>
          <h1>Developer</h1>
          <h3>Hi, I&apos;m Cédric, a front-end developer based in Vert le Petit, Essonnes (France).
             <br/>I specialize in building websites and applications using modern technologies like React.
          </h3>
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