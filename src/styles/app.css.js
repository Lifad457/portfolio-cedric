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
    position: relative;
    z-index: -1;
`
export const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    min-height: 100dvh;
    min-width: 100%;
    margin: 0 auto;
    font-size: var(--fs-large);

`
export const Footer = styled.div``
