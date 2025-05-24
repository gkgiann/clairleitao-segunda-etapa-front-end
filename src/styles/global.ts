import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, h1 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
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

    .button-default {
        padding: 0.8rem 1.2rem;
        border: 0;
        border-radius: 4px;
        font-size: 2rem;
        background: var(--text);
        color: var(--background);

        transition: 0.2s;

        &:hover {
        opacity: 0.8;
        
        }
    }

    @media (max-width: 700px) {
        html {
            font-size: 46.875%;
        }
    }
`;
