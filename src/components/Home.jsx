import { Home, HomeSection, HeroImage, HomeDescription, Socials } from "../styles/home.css"
import { GitHub, LinkedIn } from "../styles/icons.css"
import photo from "../assets/images/photo.jpg"

export default function HomeComponent() {
  return (
    <Home>
      <HomeSection>
        <HomeDescription>
          <h1>Front-End React Developer</h1>
          <h3>Hi, I&apos;m Cédric, a front-end developer based in Paris, France.
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