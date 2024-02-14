import styled, { css } from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { GoSun, GoMoon  } from "react-icons/go";
import { MdMobileFriendly, MdMailOutline  } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiJavascript, SiFirebase, SiMysql, SiMicrosoftsqlserver, SiAffinity, SiCsharp } from "react-icons/si";

// Socials
export const Socials = styled.div`
    display: flex;
    gap: 2rem;
    padding: 3rem 0;
`
export const GitHub = styled(SiGithub)`
    transition: transform .3s ease-out;
    font-size: var(--fs-large);

    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }
`
export const LinkedIn = styled(SiLinkedin)`
    transition: transform .3s ease-out;
    font-size: var(--fs-large);

    &:hover {
        cursor: pointer;
        transform: scale(1.3);
    }
`

// Skills
const skill = css`
    font-size: 7rem;
    border-radius: 15%;
    padding: .6rem;
    background-color: var(--color-tertiary);
`
export const HTMLIcon = styled(FaHtml5)`
    ${skill}
`;
export const CSSIcon = styled(FaCss3Alt)`
    ${skill}
`
export const JavaScriptIcon = styled(SiJavascript)`
    ${skill}
`
export const ReactIcon = styled(FaReact)`
    ${skill}
`
export const CSharpIcon = styled(SiCsharp)`
    ${skill}
`
export const NodeIcon = styled(FaNodeJs)`
    ${skill}
`
export const FirebaseIcon = styled(SiFirebase)`
    ${skill}
`
export const MySQLIcon = styled(SiMysql)`
    ${skill}
`
export const MSSQLIcon = styled(SiMicrosoftsqlserver)`
    ${skill}
`
export const FigmaIcon = styled(FaFigma)`
    ${skill}
`
export const AffinityIcon = styled(SiAffinity)`
    ${skill}
`
export const IconsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin: 3rem 0;
`

// Contact
export const Phone = styled(MdMobileFriendly)`
    font-size: var(--fs-large);
`
export const Email = styled(MdMailOutline)`
    font-size: var(--fs-large);
`
export const Moon = styled(GoMoon)`
    font-size: 1.15rem;
`
export const Sun = styled(GoSun)`
    font-size: 1.15rem;
`