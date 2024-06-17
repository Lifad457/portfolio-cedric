import {
	Project,
	ProjectCard,
	ProjectImage,
	ProjectSection,
} from '../styles/project.css';
import PropTypes from 'prop-types';
import dunderMifflin from '../assets/images/dunder-mifflin.png';
import kanban from '../assets/images/kanban.png';
import passGen from '../assets/images/pass-gen.png';

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
					<ProjectCard
						to='https://kanban-methode.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ProjectImage src={kanban} alt='Kanban' />
						<h2>Kanban</h2>
						<p>
							{language === 'fr'
								? 'La méthode Kanban est une technique de gestion visuelle du flux de travail qui aide les équipes à optimiser l\'efficacité et à s\'améliorer continuellement en visualisant les tâches, en limitant le travail en cours et en améliorant le flux.'
								: 'The Kanban method is a visual workflow management technique that helps teams optimize efficiency and improve continuously by visualizing tasks, limiting work-in-progress, and enhancing flow.'}
						</p>
					</ProjectCard>
					<ProjectCard
						to='https://cedric-pass-gen.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ProjectImage
							src={passGen}
							alt='Générateur mot de passe'
						/>
						<h2>Générateur mot de passe</h2>
						<p>
							{language === 'fr'
								? 'Un générateur de mots de passe qui crée des mots de passe aléatoires et sécurisés pour protéger vos comptes en ligne contre les accès non autorisés.'
								: 'A password generator that creates random and secure passwords to protect your online accounts from unauthorized access.'}
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
