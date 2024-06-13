import styled from 'styled-components';

export const Footer = styled.div`
	padding: 0 8rem;
	background-color: var(--color-secondary);
`;
export const Language = styled.section`
	display: flex;
	gap: 1rem;
	cursor: pointer;
`;
export const Flag = styled.img`
	width: 1.8rem;
	height: 1.8rem;
	transition: transform 0.3s ease-out;

	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
`;
export const FooterSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`;
