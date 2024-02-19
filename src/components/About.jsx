import { About, AboutSection } from "../styles/about.css";
import { AffinityIcon, CSSIcon, CSharpIcon, FigmaIcon, FirebaseIcon, HTMLIcon, IconWrapper, IconsContainer, JavaScriptIcon, MSSQLIcon, MySQLIcon, NodeIcon, ReactIcon } from "../styles/icons.css";

export default function AboutComponent({ language }) {
  function renderAbout() {
    if (language === "fr") { 
      return (
        <>
          <AboutSection>
            <h1>À propos</h1>
            <p>
              J’ai le plaisir de me présenter en tant que développeur Front-End React.
              Suite à un changement de carrière, j’ai suivi une formation afin d’obtenir 
              un titre professionnel de niveau II en développement de logiciels, marquant ainsi une 
              étape importante dans ma reconversion professionnelle.
              Passionné par les nouvelles technologies et déterminé à me former, j’ai pris la 
              décision de me tourner vers le domaine dynamique du développement de logiciels. 
              La formation complète que j’ai suivie m’a permis d’acquérir des bases solides en langages 
              de programmation et principes de l’ingénierie logicielle.
            </p>
          </AboutSection>
          <AboutSection>
            <h1>Expérience</h1>
            <p>
              Développeur informatique chez CFI Tech à Lisses depuis 2014, je me concentre principalement 
              sur la conception et le développement d’applications adaptées à un usage interne au sein de l'entreprise. 
              En tirant parti de la puissance de C# et de WPF, j’ai eu l’occasion de concevoir et de mettre en œuvre 
              des solutions robustes qui rationalisent nos opérations quotidiennes et améliorent la productivité.
            </p>
            <p>
              Je suis également en charge de la mise en place et de la composition dynamique des mailings. En utilisant 
              C# et PDF lib pour l’impression, j’ai développé du code sophistiqué pour créer des communications 
              personnalisées et visuellement attrayantes qui trouvent un écho auprès de nos clients, ce qui a non 
              seulement amélioré notre portée marketing, mais a également renforcé l’engagement et la fidélité des clients.
            </p>
            <p>
              Je suis maintenant à la recherche d’un nouveau défi et d’une transition vers une carrière en tant que 
              développeur front-end React. Avec une passion profondément enracinée pour la technologie et une volonté 
              incessante de croissance personnelle et professionnelle, j’ai hâte de mettre à profit mes compétences 
              et de me lancer dans ce voyage exaltant.
            </p>
            <p>
              Ma décision de poursuivre une carrière dans le développement Front-End découle d’un désir de m’immerger dans le 
              monde dynamique du développement web, où la créativité et l’innovation se croisent. La perspective de travailler 
              avec React, une bibliothèque JavaScript de pointe, résonne profondément en moi car je suis attiré par sa flexibilité, 
              son évolutivité et sa capacité à offrir des expériences utilisateur transparentes sur diverses plateformes.
            </p>
          </AboutSection>
        </>
      )
    }
    else {
      return (
        <>
          <AboutSection>
            <h1>About me</h1>
            <p>
              I am pleased to introduce myself as a Front-End React Developer.
              Following a career change, I completed specialized training 
              to attain a Level II professional title in software development, marking a significant 
              milestone in my career transition.
              With a passion for technology and a commitment to continuous learning, I made the 
              decision to pivot into the dynamic field of software development. The comprehensive 
              training I underwent equipped me with a solid foundation in programming languages and 
              software engineering principles.
            </p>
          </AboutSection>
          <AboutSection>
            <h1>Experience</h1>
            <p>
              Computer developer at CFI Tech in Lisses since 2014, my primary focus has been on designing 
              and developing applications tailored for internal use within the organization. Leveraging 
              the power of C# and WPF, I've had the opportunity to architect and implement robust solutions 
              that streamline our daily operations and enhance productivity. 
            </p>
            <p>
              I'am also be in charge of maquetting and dynamic composition 
              of mailings. Using C# alongside PDF lib for printing, I've developed sophisticated code 
              for creating personalized and visually appealing communications that resonate with our clients 
              which has not only improved our marketing outreach but has also strengthened customer 
              engagement and loyalty.
            </p>
            <p>
              I'm now looking for a new challenge and transitioning into a career as a front-end React developer. 
              With a deep-rooted passion for technology and a relentless drive for personal and professional growth, 
              I am eager to leverage my skills and embark on this exhilarating journey.
            </p>
            <p>
              My decision to pursue a career in Front-End development stems from a desire to immerse myself in the 
              dynamic world of web development, where creativity and innovation intersect. The prospect of working 
              with React, a cutting-edge JavaScript library, resonates deeply with me as I am drawn to its flexibility, 
              scalability, and ability to deliver seamless user experiences across various platforms.
            </p>
          </AboutSection>
        </>
      )
    }
  }

  return (
    <About id="about">
      <AboutSection>
        { renderAbout() } 
        <AboutSection>
          <h1>{language === "fr" ? "Compétences" : "Skills"}</h1>
          <h2>Front-End</h2>
          <IconsContainer>
            <IconWrapper>
              <HTMLIcon />
              HTML
            </IconWrapper>
            <IconWrapper>
              <CSSIcon />
              CSS
            </IconWrapper>
            <IconWrapper>
              <JavaScriptIcon />
              JavaScript
            </IconWrapper>
            <IconWrapper>
              <ReactIcon />
              React
            </IconWrapper>
          </IconsContainer>
          <h2>Back-End</h2>
          <IconsContainer>
            <IconWrapper>
              <CSharpIcon />
              C#
            </IconWrapper>
            <IconWrapper>
              <NodeIcon />
              Node.js
            </IconWrapper>
            <IconWrapper>
              <FirebaseIcon />
              Firebase
            </IconWrapper>          
          </IconsContainer>
          <h2>Database Management</h2>
          <IconsContainer>
            <IconWrapper>
              <MySQLIcon />
              MySQL
            </IconWrapper>
            <IconWrapper>
              <MSSQLIcon />
              MSSQL
            </IconWrapper>
          </IconsContainer>
          <h2>UI/UX Tools</h2>
          <IconsContainer>
            <IconWrapper>
              <FigmaIcon />
              Figma
            </IconWrapper>
            <IconWrapper>
              <AffinityIcon />
              Affinity
            </IconWrapper>
          </IconsContainer>
        </AboutSection>
      </AboutSection>
    </About>
  )
}