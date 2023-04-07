import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: whitesmoke;
        font-family:'Roboto';
    }
`;
