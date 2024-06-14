import {
	Home,
	HomeSection,
	HeroImage,
	HomeDescription,
} from '../styles/home.css';
import { GitHub, LinkedIn, Socials } from '../styles/icons.css';
import photo from '../assets/images/photo.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HomeComponent({ language }) {
	function renderDescription() {
		if (language === 'fr') {
			return (
				<>
					<h1>Développeur</h1>
					<h1>Full-Stack</h1>
					<h1>React</h1>
					<h3>
						Bonjour, moi c&apos;est Cédric, un développeur
						full-stack basé à Vert le Petit, Essonnes.
						<br />
						Je me spécialise dans la construction de sites web et
						d&apos;applications à l&apos;aide de technologies
						modernes comme React.
					</h3>
				</>
			);
		} else {
			return (
				<>
					<h1>Full-Stack</h1>
					<h1>React</h1>
					<h1>Developer</h1>
					<h3>
						Hi, I&apos;m Cédric, a full-stack developer based in
						Vert le Petit, Essonnes (France).
						<br />I specialize in building websites and applications
						using modern technologies like React.
					</h3>
				</>
			);
		}
	}

	return (
		<Home id='home'>
			<HomeSection>
				<HomeDescription>
					{renderDescription()}
					<Socials>
						<Link
							to='https://github.com/Lifad457'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GitHub />
						</Link>
						<Link
							to='https://linkedin.com/in/cédric-bison-a489a287'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkedIn />
						</Link>
					</Socials>
				</HomeDescription>
				<HeroImage src={photo} alt='Cédric Bison' />
			</HomeSection>
		</Home>
	);
}

HomeComponent.propTypes = {
	language: PropTypes.string.isRequired,
};
