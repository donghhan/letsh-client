import { createGlobalStyle } from "styled-components";

export const MyGlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    button {
        background: transparent;
    }
`;
