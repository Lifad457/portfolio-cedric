import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8rem;
    z-index: -1;
`
export const HomeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
`
export const HomeDescription = styled.div`
    max-width: 700px;

    h1 {
        font-size: var(--fs-extra-large);
        line-height: 1.2;
        padding-block: 3rem;
    }

    h3 {
        font-size: var(--fs-regular);
        font-weight: var(--fw-medium);
    }
`
export const HeroImage = styled.img`
    display: block;
    max-width: 500px;
    padding: 3rem;
`