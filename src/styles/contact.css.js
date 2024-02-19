import styled from "styled-components";

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
    background-color: var(--color-secondary);
    align-items: center;
    font-size: var(--fs-regular);

    h1 {
        display: inline-block;
        position: relative;
        font-size: var(--fs-large);
        margin: 2rem 0 4rem;
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
`
export const ContactSection = styled.section`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 3rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
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