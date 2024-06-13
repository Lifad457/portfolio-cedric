import { Header, Logo, Nav, Input, Label } from '../styles/header.css';
import { Moon, Sun } from '../styles/icons.css';
import ScrollToAnchor from './ScrollToAnchor';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeaderComponent({ language, theme, setTheme }) {
	ScrollToAnchor();

	return (
		<Header>
			<Logo>Bison Cédric</Logo>
			<Nav>
				<ul>
					<li>
						<Link to='#home'>
							{language === 'fr' ? 'Accueil' : 'Home'}
						</Link>
					</li>
					<li>
						<Link to='#about'>
							{language === 'fr' ? 'À propos' : 'About'}
						</Link>
					</li>
					<li>
						<Link to='#projects'>
							{language === 'fr' ? 'Projets' : 'Projects'}
						</Link>
					</li>
					<li>
						<Link to='#contact'>Contact</Link>
					</li>
				</ul>
			</Nav>
			<Input type='checkbox' id='darkmode-toggle' />
			<Label
				htmlFor='darkmode-toggle'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				<Sun className='sun' />
				<Moon className='moon' />
			</Label>
		</Header>
	);
}

HeaderComponent.propTypes = {
	language: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};
