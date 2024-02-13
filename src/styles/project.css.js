import styled from "styled-components";

export const Project = styled.div`
    display: block;
    padding: 0 8rem;
    z-index: 1;

    h1 {
        display: inline-block;
        position: relative;
        font-size: var(--fs-large);
        margin-bottom: 2rem;

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
`
export const ProjectSection = styled.section`
    display: flex;


`