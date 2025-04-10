import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', Helvetica, sans-serif;
    background: #EEE;
    word-break: break-word;
  }
`;
