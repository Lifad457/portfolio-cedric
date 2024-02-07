import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    align-items: center;
    background-color: var(--color-white);
    position: fixed;
    min-width: 100%;
`
export const Logo = styled.div`
    font-size: var(--fs-medium);
    font-weight: var(--fw-bold);
`
export const Nav = styled.div`
    display: flex;
    font-size: var(--fs-regular);
    font-weight: var(--fw-medium);

    ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
    }
`
export const Main = styled.div`
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

    img {
        width: 100%;
        max-width: 500px;
        border-radius: 1000vh;
        padding: 3rem;
    }
`
export const Footer = styled.div``
