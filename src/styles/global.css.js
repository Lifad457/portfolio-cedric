import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --color-primary: ${props => props.theme === "light" ? "#f8f8f8" : "#3a3a3a"};
        --color-secondary: ${props => props.theme === "light" ? "#f0f0f0" : "#303030"};
        --color-tertiary: ${props => props.theme === "light" ? "#fcf800" : "#fc2600"};
        --color-black: #000;
        --color-white: #fff;
        --color-font: ${props => props.theme === "light" ? "var(--color-black)" : "var(--color-white)"};

        --font-primary: 'Poppins', sans-serif;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
        --fw-black: 900;
        
        --fs-extra-large: clamp(2.33rem, 1.77rem + 2.81vw, 3.95rem);
        --fs-large: clamp(1.94rem, 1.59rem + 1.77vw, 2.96rem);
        --fs-medium: clamp(1.35rem, 1.24rem + 0.55vw, 1.67rem);
        --fs-regular: clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem);
        --fs-small: clamp(0.94rem, 0.94rem, 0.94rem);
        --fs-extra-small: clamp(0.70rem, 0.81rem + -0.13vw, 0.78rem);
    }

    body {
        min-height: 100vh;
        min-height: 100dvh;

        display: grid;
        grid-template-rows: auto 1fr auto;

        font-family: var(--font-primary);
        line-height: 1.6;

        color: var(--color-font);
        background-color: var(--color-primary);
    }
`