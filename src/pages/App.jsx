import { Footer, Header, Logo, Main, Nav, HomeSection } from "../styles/app.css"
import { GlobalStyle } from "../styles/global.css"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>BISON CÉDRIC</Logo>
        <Nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <HomeSection>
          <h1>Welcome to my portfolio</h1>
        </HomeSection>
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
