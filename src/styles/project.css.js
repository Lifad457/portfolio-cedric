import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Project = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem 8rem;
`;
export const ProjectSection = styled.section`
	display: block;
	max-width: 1200px;
	margin-top: 2rem;
	margin-left: auto;
	margin-right: auto;

	h1 {
		display: inline-block;
		position: relative;
		font-size: var(--fs-large);
		margin-bottom: 2rem;
		z-index: 1;

		&:before {
			content: '';
			position: absolute;
			top: 55%;
			left: 3%;
			height: 50%;
			width: 100%;
			background-color: var(--color-tertiary);
			transform: skew(-10deg);
			z-index: -1;
		}
	}
`;
export const ProjectCard = styled(Link)`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 1rem;
	margin: 1rem;
	border: 0.2rem solid var(--color-tertiary);
	background-color: var(--color-secondary);
	text-decoration: none;
	color: var(--color-font);

	h2 {
		font-size: var(--fs-medium);
		font-weight: var(--fw-medium);
		margin: 1rem 0;
	}
`;
export const ProjectImage = styled.img`
	display: block;
	max-width: 100%;
	margin: 0 auto;
`;