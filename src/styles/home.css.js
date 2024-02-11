import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    z-index: -1;
`
export const HomeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 7rem 3rem;
    min-height: 100vh;
    min-height: 100dvh;

`
export const HomeDescription = styled.div`
    h1 {
        font-size: var(--fs-extra-large);
        line-height: 1.2;
        padding-block: 3rem;
        max-width: 800px;
    }

    h3 {
        font-size: var(--fs-regular);
        font-weight: var(--fw-medium);
        max-width: 700px;
    }
`
export const Socials = styled.div`
    display: flex;
    gap: 2rem;
    padding: 3rem 0;
`
export const HeroImage = styled.img`
    display: block;
    max-width: 500px;
    padding: 3rem;
`