import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 3rem;
	align-items: center;
	background-color: var(--color-secondary);
	position: fixed;
	min-width: 100%;
	z-index: 999;
`;
export const Logo = styled.div`
	font-size: var(--fs-medium);
	font-weight: var(--fw-bold);
	cursor: pointer;
`;
export const Nav = styled.div`
	display: flex;
	font-size: var(--fs-regular);
	font-weight: var(--fw-medium);
	cursor: pointer;

	ul {
		display: flex;
		list-style: none;
		gap: 1.5rem;
	}

	a {
		text-decoration: none;
		color: var(--color-font);
	}
`;
export const Input = styled.input`
	display: none;
	&:checked + label {
		&:after {
			left: 0;
			transform: translateX(calc(100% + 0.3rem));
			background: linear-gradient(180deg, #777, #3a3a3a);
		}
		svg {
			&.sun {
				fill: var(--color-black);
			}
			&.moon {
				fill: var(--color-white);
			}
		}
	}
`;
export const Label = styled.label`
	display: block;
	position: relative;
	width: 3.5rem;
	height: 1.6rem;
	border-radius: 1000rem;
	background: var(--color-white);
	box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
		inset 0px -5px 15px rgba(255, 255, 255, 0.4);
	cursor: pointer;
	transition: 0.3s;
	&:after {
		content: '';
		width: 1.6rem;
		height: 1.6rem;
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(180deg, #777, #969696);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}
	svg {
		position: absolute;
		width: 1.5rem;
		top: 0.2rem;
		left: 0.05rem;
		z-index: 100;
		&.sun {
			fill: var(--color-white);
			transition: 0.3s;
		}
		&.moon {
			left: 1.95rem;
			fill: var(--color-black);
			transition: 0.3s;
		}
	}
`;
