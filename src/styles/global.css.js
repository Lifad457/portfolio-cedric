import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --color-primary: #f9f9f9;
        --color-secondary: #FFD700;
        --color-tertiary: #FFD700;
        --color-black: #000;
        --color-white: #fff;

        --font-primary: 'Poppins', sans-serif;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
        --fw-black: 900;
    
    }

    body {
        min-height: 100vh;
        min-height: 100dvh;

        display: grid;
        grid-template-rows: auto 1fr auto;

        font-family: var(--font-primary);
        background-color: var(--color-primary);
    }

`