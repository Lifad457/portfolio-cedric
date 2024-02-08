import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { GoSun, GoMoon  } from "react-icons/go";

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
    font-size: var(--fs-large);

`
export const Sun = styled(GoSun)`
    font-size: var(--fs-large);

`