import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { GoSun, GoMoon  } from "react-icons/go";

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
export const Moon = styled(GoMoon)`
    font-size: 1.15rem;
`
export const Sun = styled(GoSun)`
    font-size: 1.15rem;
`