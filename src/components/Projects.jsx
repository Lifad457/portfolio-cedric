import { Project, ProjectSection } from "../styles/project.css";

export default function ProjectsComponent({ language }) {
  return (
    <Project id="projects">
      <ProjectSection>
        <ProjectSection>
          <h1>{language === "fr" ? "Projets" : "Projects"}</h1>
        </ProjectSection>
        <ProjectSection>
          <h2>Work in progress ...</h2>
        </ProjectSection>
      </ProjectSection>
    </Project>
  )
}