import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { GoSun, GoMoon  } from "react-icons/go";
import { MdMobileFriendly, MdMailOutline  } from "react-icons/md";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiJavascript, SiFirebase, SiMysql, SiMicrosoftsqlserver, SiAffinity } from "react-icons/si";

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
export const HTMLIcon = styled(FaHtml5)`
    font-size: var(--fs-large);
`
export const CSSIcon = styled(FaCss3Alt)`
    font-size: var(--fs-large);
`
export const JavaScriptIcon = styled(SiJavascript)`
    font-size: var(--fs-large);
`
export const ReactIcon = styled(FaReact)`
    font-size: var(--fs-large);
`
export const NodeIcon = styled(FaNodeJs)`
    font-size: var(--fs-large);
`
export const FirebaseIcon = styled(SiFirebase)`
    font-size: var(--fs-large);
`
export const MySQLIcon = styled(SiMysql)`
    font-size: var(--fs-large);
`
export const MSSQLIcon = styled(SiMicrosoftsqlserver)`
    font-size: var(--fs-large);
`
export const FigmaIcon = styled(FaFigma)`
    font-size: var(--fs-large);
`
export const AffinityIcon = styled(SiAffinity)`
    font-size: var(--fs-large);
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