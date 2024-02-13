import { About, AboutSection } from "../styles/about.css";

export default function AboutComponent() {
  return (
    <About>
      <AboutSection>
        <h1>About me</h1>
        <h3>
          I am pleased to introduce myself as a Front-End React Developer.
          Following a career change, I completed specialized training 
          to attain a Level 3 professional title in software development, marking a significant 
          milestone in my career transition.
          With a passion for technology and a commitment to continuous learning, I made the 
          decision to pivot into the dynamic field of software development. The comprehensive 
          training I underwent equipped me with a solid foundation in programming languages and 
          software engineering principles.
        </h3>
      </AboutSection>
      <AboutSection>
        <h1>Experience</h1>
        <h3>
          <p>
            Computer developer at CFI Tech in Lisses since 2014, my primary focus has been on designing 
            and developing applications tailored for internal use within the organization. Leveraging 
            the power of C# and WPF, I've had the opportunity to architect and implement robust solutions 
            that streamline our daily operations and enhance productivity. 
          </p>
          <br/>
          <p>
            I'am also be in charge of maquetting and dynamic composition 
            of mailings. Using C# alongside PDF lib for printing, I've developed sophisticated mechanisms 
            for creating personalized and visually appealing communications that resonate with our clients 
            which has not only improved our marketing outreach but has also strengthened customer 
            engagement and loyalty.
          </p>
          <br/>
          <p>
            I'm now looking for a new challengeand transitioning into a career as a front-end React developer. 
            With a deep-rooted passion for technology and a relentless drive for personal and professional growth, 
            I am eager to leverage my skills and embark on this exhilarating journey of transformation.
          </p>
          <br />
          <p>
            My decision to pursue a career in Front-End development stems from a desire to immerse myself in the 
            dynamic world of web development, where creativity and innovation intersect. The prospect of working 
            with React, a cutting-edge JavaScript library, resonates deeply with me as I am drawn to its flexibility, 
            scalability, and ability to deliver seamless user experiences across various platforms.
          </p>
        </h3>
      </AboutSection>
      <AboutSection>
        <h1>Skills</h1>
        <h3>Front-End</h3>
        <h3>Back-End</h3>
        <h3>Database Management</h3>
        <h3>UI/UX Tools</h3>
      </AboutSection>
    </About>
  )
}