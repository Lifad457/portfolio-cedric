import styled from "styled-components";

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
    background-color: var(--color-secondary);
    align-items: center;
    font-size: var(--fs-regular);

    h1 {
        font-size: var(--fs-large);
        padding-block: 2rem;
    }
`
export const ContactSection = styled.section`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 3rem;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: end;
    gap: 1rem;

    span {
        font-size: var(--fs-medium);
        font-weight: var(--fw-medium);
    }
`