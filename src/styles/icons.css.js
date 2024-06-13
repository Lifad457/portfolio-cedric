import styled from 'styled-components';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { GoSun, GoMoon } from 'react-icons/go';
import { MdMobileFriendly, MdMailOutline } from 'react-icons/md';
import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaFigma,
} from 'react-icons/fa6';
import {
	SiJavascript,
	SiFirebase,
	SiMysql,
	SiMicrosoftsqlserver,
	SiAffinity,
	SiCsharp,
} from 'react-icons/si';

// Socials
export const Socials = styled.div`
	display: flex;
	gap: 2rem;
	padding: 3rem 0;
`;
export const GitHub = styled(SiGithub)`
	transition: transform 0.3s ease-out;
	font-size: var(--fs-extra-large);
	color: var(--color-font);

	&:hover {
		cursor: pointer;
		transform: scale(1.3);
	}
`;
export const LinkedIn = styled(SiLinkedin)`
	transition: transform 0.3s ease-out;
	font-size: var(--fs-extra-large);
	color: var(--color-font);

	&:hover {
		cursor: pointer;
		transform: scale(1.3);
	}
`;

// Skills
export const HTMLIcon = styled(FaHtml5)`
	font-size: 7rem;
`;
export const CSSIcon = styled(FaCss3Alt)`
	font-size: 7rem;
`;
export const JavaScriptIcon = styled(SiJavascript)`
	font-size: 7rem;
`;
export const ReactIcon = styled(FaReact)`
	font-size: 7rem;
`;
export const CSharpIcon = styled(SiCsharp)`
	font-size: 7rem;
`;
export const NodeIcon = styled(FaNodeJs)`
	font-size: 7rem;
`;
export const FirebaseIcon = styled(SiFirebase)`
	font-size: 7rem;
`;
export const MySQLIcon = styled(SiMysql)`
	font-size: 7rem;
`;
export const MSSQLIcon = styled(SiMicrosoftsqlserver)`
	font-size: 7rem;
`;
export const FigmaIcon = styled(FaFigma)`
	font-size: 7rem;
`;
export const AffinityIcon = styled(SiAffinity)`
	font-size: 7rem;
`;
export const IconsContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin: 3rem 0;
`;
export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: var(--fs-regular);
	font-weight: var(--fw-medium);
	border-radius: 15%;
	background-color: var(--color-tertiary);
	padding: 0.6rem;
`;

// Contact
export const Phone = styled(MdMobileFriendly)`
	font-size: var(--fs-large);
`;
export const Email = styled(MdMailOutline)`
	font-size: var(--fs-large);
`;
export const Moon = styled(GoMoon)`
	font-size: 1.15rem;
`;
export const Sun = styled(GoSun)`
	font-size: 1.15rem;
`;
