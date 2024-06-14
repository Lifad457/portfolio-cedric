import {
	Project,
	ProjectCard,
	ProjectImage,
	ProjectSection,
} from '../styles/project.css';
import PropTypes from 'prop-types';
import dunderMifflin from '../assets/images/dunder-mifflin.png';

export default function ProjectsComponent({ language }) {
	return (
		<Project id='projects'>
			<ProjectSection>
				<ProjectSection>
					<h1>{language === 'fr' ? 'Projets' : 'Projects'}</h1>
				</ProjectSection>
				<ProjectSection>
					<ProjectCard
						to='https://dundermifflin-store.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ProjectImage
							src={dunderMifflin}
							alt='Dunder Mifflin'
						/>
						<h2>Dunder Mifflin</h2>
						<p>
							{language === 'fr'
								? 'Site web de vente de papier.'
								: 'Paper selling website.'}
						</p>
					</ProjectCard>
				</ProjectSection>
			</ProjectSection>
		</Project>
	);
}

ProjectsComponent.propTypes = {
	language: PropTypes.string.isRequired,
};
