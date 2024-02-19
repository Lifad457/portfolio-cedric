import styled from "styled-components";

export const About = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
    background-color: var(--color-secondary);
`
export const AboutSection = styled.section`
    display: block;
    max-width: 1200px;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    
    h1 {
        display: inline-block;
        position: relative;
        font-size: var(--fs-large);
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
        margin: 2rem 0;
    }

    h2 {
        margin-top: 4rem;
        font-size: var(--fs-medium);
        font-weight: var(--fw-medium);
        text-decoration: underline;
        text-decoration-color: var(--color-tertiary);
        text-decoration-thickness: 0.2rem;
        text-underline-offset: 0.4rem;
    }
`