import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    position: fixed;
    min-width: 100%;
`
export const Logo = styled.div`
    font-size: var(--fs-medium);
    font-weight: var(--fw-bold);
    cursor: pointer;
`
export const Nav = styled.div`
    display: flex;
    font-size: var(--fs-regular);
    font-weight: var(--fw-medium);
    cursor: pointer;

    ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
    }
`
export const ThemeToggler = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    width: 3.5rem;
    height: 1.8rem;
    border-radius: 1000rem;
    background-color: lime;
`
export const Switch = styled.div`
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: ${props => props.theme === "light" ? "#000" : "#fff"};
    transition: transform .3s ease-out;
    transform: translateX(0);
    transform: ${props => props.theme === "light" ? "translateX(0)" : "translateX(2.1rem)"};
`