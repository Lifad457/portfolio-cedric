import styled from "styled-components";

export const About = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6rem 8rem;
    background-color: var(--color-secondary);
`
export const AboutSection = styled.section`
    display: block;
    margin: 2em 0;

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
    
    p {
        font-size: var(--fs-regular);
        font-weight: var(--fw-medium);
    }

    h2 {
        font-size: var(--fs-medium);
        font-weight: var(--fw-medium);
        text-decoration: underline;
        text-decoration-color: var(--color-tertiary);
        text-decoration-thickness: 0.2rem;
        text-underline-offset: 0.4rem;
    }
`