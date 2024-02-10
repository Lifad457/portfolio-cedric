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
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    cursor: pointer;
    width: 4.2rem;
    height: 2rem;
    border-radius: 1000rem;
    border: ${props => props.theme === "light" ? "2px solid rgba(0, 0, 0, 0.2)" : "2px solid rgba(255, 255, 255, 0.2)"};
    box-shadow: 
        inset 0 0 4px 0 var(${props => props.theme === "light" ? "--color-primary" : "--color-secondary"}),
        inset 0 0 4px 0 var(${props => props.theme === "light" ? "--color-secondary" : "--color-primary"}),
        0 -0 3px 0 var(${props => props.theme === "light" ? "--color-secondary" : "--color-primary"}),
        0 -0 3px 0 var(${props => props.theme === "light" ? "--color-primary" : "--color-secondary"});
`
export const Switch = styled.div`
    display: flex;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transition: transform .3s ease-out;
    transform: translateX(0);
    transform: ${props => props.theme === "light" ? "translateX(0)" : "translateX(2rem)"};
    box-shadow:
        0 0 3px 0 var(${props => props.theme === "light" ? "--color-primary" : "--color-secondary"}),
        inset 0 0 2px 0 var(${props => props.theme === "light" ? "--color-primary" : "--color-secondary"}),
        inset 0 0 2px 0 var(${props => props.theme === "light" ? "--color-secondary" : "--color-primary"});
`