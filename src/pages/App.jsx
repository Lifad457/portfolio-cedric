import { Footer, Header, Logo, Main, Nav, HomeSection } from "../styles/app.css"
import { Icon } from "../styles/icons.css"
import { GlobalStyle } from "../styles/global.css"
import photo from "../assets/images/photo.jpg"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>Bison Cédric</Logo>
        <Nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Nav>
        <Logo>THEME</Logo>
      </Header>
      <Main>
        <HomeSection>
          <div>
            <h1>Front-End React Developer</h1>
            <h3>Hi, I&apos;m Cédric Bison, a front-end developer based in Paris, France.
               <br/>I specialize in building websites and applications using modern technologies like React.
            </h3>
          </div>
          <img src={photo} alt="Cédric Bison" /> 
          <Icon />
        </HomeSection>
      </Main>
      <Footer>
        test
      </Footer>
    </>
  )
}

export default App
