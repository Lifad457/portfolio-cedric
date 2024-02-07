import styled from "styled-components";
import { SiCss3 } from "react-icons/si";

export const Icon = styled(SiCss3)`
    transition: transform .3s ease-out;
    font-size: var(--fs-extra-large);
    color: var(--color-tertiary);

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`
