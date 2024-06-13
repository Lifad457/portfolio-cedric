import styled from 'styled-components';

export const Project = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 8rem;
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
