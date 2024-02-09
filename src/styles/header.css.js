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
    flex-direction: row;
    position: relative;
    cursor: pointer;
    width: 3.5rem;
    height: 1.2rem;
    border-radius: 1000rem;
    box-shadow: 
        -4px -2px 3px 6px var(${props => props.theme === "light" ? "--color-secondary" : "--color-primary"}),
        -4px 2px 80px 6px var(${props => props.theme === "light" ? "--color-secondary" : "--color-primary"}),
        -2px -0.5px 5px 6px var(${props => props.theme === "light" ? "--color-secondary" : "--color-secondary"}),
        inset 0 0 4px 6px var(${props => props.theme === "light" ? "--color-secondary" : "--color-primary"});
`
export const Switch = styled.div`
    display: flex;
    position: absolute;
    top: -5.5px;
    left: -6px;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    transition: transform .3s ease-out;
    transform: translateX(0);
    transform: ${props => props.theme === "light" ? "translateX(0)" : "translateX(2.1rem)"};
    color: var(--color-secondary);
    box-shadow: inset 0 1px 4px 0 var(--color-secondary);
`