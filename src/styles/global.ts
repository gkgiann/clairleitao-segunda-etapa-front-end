import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, h1 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        /* --background:rgb(2, 23, 53);
        --text:rgb(238, 246, 250); */
        --text:rgb(2, 23, 53);
        --background:rgb(238, 246, 250);
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        background-color: var(--background);
        color: var(--text); 
    }
    body, input, textarea, button {
        font: 400 1.6rem Roboto, sans-serif;
    } 

    @media (max-width: 700px) {
        html {
            font-size: 46.875%;
        }
    }
`;
